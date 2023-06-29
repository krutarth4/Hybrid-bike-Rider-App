package com.dfki.socialwear.nearbyconnections;

import android.Manifest;
import android.content.Context;
import android.content.pm.PackageManager;
import android.media.AudioManager;
import android.os.Bundle;
import androidx.annotation.CallSuper;
import androidx.annotation.ColorInt;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.annotation.UiThread;
import androidx.annotation.WorkerThread;
import androidx.core.content.ContextCompat;
import androidx.appcompat.app.AppCompatActivity;
import android.util.Log;
import android.widget.Toast;

import com.google.android.gms.common.api.Status;
import com.google.android.gms.nearby.Nearby;
import com.google.android.gms.nearby.connection.AdvertisingOptions;
import com.google.android.gms.nearby.connection.ConnectionInfo;
import com.google.android.gms.nearby.connection.ConnectionLifecycleCallback;
import com.google.android.gms.nearby.connection.ConnectionResolution;
import com.google.android.gms.nearby.connection.ConnectionsClient;
import com.google.android.gms.nearby.connection.ConnectionsStatusCodes;
import com.google.android.gms.nearby.connection.DiscoveredEndpointInfo;
import com.google.android.gms.nearby.connection.DiscoveryOptions;
import com.google.android.gms.nearby.connection.EndpointDiscoveryCallback;
import com.google.android.gms.nearby.connection.Payload;
import com.google.android.gms.nearby.connection.PayloadCallback;
import com.google.android.gms.nearby.connection.PayloadTransferUpdate;
import com.google.android.gms.nearby.connection.Strategy;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Locale;
import java.util.Map;
import java.util.Random;
import java.util.Set;
import java.util.Timer;
import java.util.TimerTask;

import org.apache.commons.lang3.SerializationUtils;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.LOG;
import org.apache.cordova.PluginResult;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class NearbyConnections extends CordovaPlugin {

  private static final String TAG = "NearbyConnections";

  private CallbackContext startServiceCallbackContext;
  private CallbackContext stopServiceCallbackContext;
  private CallbackContext connectionCallbackContext;
  private CallbackContext flushMessageCallbackContext;


  /**
   * These permissions are required before connecting to Nearby Connections. Only {@link
   * Manifest.permission#ACCESS_COARSE_LOCATION} is considered dangerous, so the others should be
   * granted just by having them in our AndroidManfiest.xml
   */
  private static final String[] REQUIRED_PERMISSIONS =
    new String[] {
      Manifest.permission.BLUETOOTH,
      Manifest.permission.BLUETOOTH_ADMIN,
      Manifest.permission.ACCESS_WIFI_STATE,
      Manifest.permission.CHANGE_WIFI_STATE,
      Manifest.permission.ACCESS_COARSE_LOCATION,
      Manifest.permission.ACCESS_FINE_LOCATION
    };

  private static final int REQUEST_CODE_REQUIRED_PERMISSIONS = 1;

  private static final String PERMISSION_DENIED_ERROR = "Cannot start without required permissions";

  /**
   * The connection strategy we'll use for Nearby Connections. In this case, we've decided on
   * P2P_CLUSTER, which is a combination of Bluetooth Classic and WiFi Hotspots.
   */
  private static final Strategy STRATEGY = Strategy.P2P_CLUSTER;

  /**
   * /**
   * A set of background colors. We'll hash the authentication token we get from connecting to a
   * device to pick a color randomly from this list. Devices with the same background color are
   * talking to each other securely (with 1/COLORS.length chance of collision with another pair of
   * devices).
   */
  @ColorInt
  private static final int[] COLORS =
    new int[]{
      0xFF4CAF50 /* red */,
      0xFF4CAF50 /* deep purple */,
      0xFF4CAF50 /* teal */,
      0xFF4CAF50 /* green */,
      0xFF4CAF50 /* amber */,
      0xFF4CAF50 /* orange */,
      0xFF4CAF50 /* brown */
    };


  /**
   * This service id lets us find other nearby devices that are interested in the same thing. Our
   * sample does exactly one thing, so we hardcode the ID.
   */
  private static final String SERVICE_ID =
    "com.dfki.socialwear.cordova.plugin.nearbyconnections.SERVICE_ID";

  /**
   * The maximum connections that each node is allowed to accept.
   * If the numbers of connection reach to this number, the node should stop advertising and discovering.
   */
  private static final int MAX_CONNECTION = 3;

  /**
   * A cache for back up the endpoints in the mesh network in order to compare the changes of the network.
   */
  private Map<String, Endpoint> cacheMeshEndpoints = new HashMap<>();

  /**
   * The state of the app. As the app changes states, the UI will update and advertising/discovery
   * will start/stop.
   */
  private State mState = State.UNKNOWN;

  /**
   * this device's endpoint name.
   */
  private String mEndpointName;


  /** Our handler to Nearby Connections. */
  private ConnectionsClient mConnectionsClient;

  /** The devices we've discovered near us. */
  private final Map<String, Endpoint> mDiscoveredEndpoints = new HashMap<>();

  /**
   * The devices we have pending connections to. They will stay pending until we call {@link
   * #acceptConnection(Endpoint)} or {@link #rejectConnection(Endpoint)}.
   */
  protected final Map<String, Endpoint> mPendingConnections = new HashMap<>();

  /**
   * The devices we are currently connected to. For advertisers, this may be large. For discoverers,
   * there will only be one entry in this map. Map<Endpoint.id, Endpoint>
   */
  protected final Map<String, Endpoint> mEstablishedConnections = new HashMap<>();

  /**
   * All the endpoints that are connected within the mesh network. Map<Endpoint.name, Endpoint>
   */
  protected final Map<String, Endpoint> mCurrentMeshEndpoints = new HashMap<>();

  /**
   * True if we are asking a discovered device to connect to us. While we ask, we cannot ask another
   * device.
   */
  private boolean mIsConnecting = false;

  /** True if we are discovering. */
  private boolean mIsDiscovering = false;

  /** True if we are advertising. */
  private boolean mIsAdvertising = false;


  /** Callbacks for connections to other devices. */
  private final ConnectionLifecycleCallback mConnectionLifecycleCallback =
    new ConnectionLifecycleCallback() {
      @Override
      public void onConnectionInitiated(String endpointId, ConnectionInfo connectionInfo) {
        logD(
          String.format(
            "onConnectionInitiated(endpointId=%s, endpointName=%s)",
            endpointId, connectionInfo.getEndpointName()));
        Endpoint endpoint = new Endpoint(endpointId, connectionInfo.getEndpointName());
        mPendingConnections.put(endpointId, endpoint);
        NearbyConnections.this.onConnectionInitiated(endpoint, connectionInfo);
      }

      @Override
      public void onConnectionResult(String endpointId, ConnectionResolution result) {
        logD(String.format("onConnectionResponse(endpointId=%s, result=%s)", endpointId, result));

        // We're no longer connecting
        mIsConnecting = false;

        if (!result.getStatus().isSuccess()) {
          logW(
            String.format(
              "Connection failed. Received status %s.",
              NearbyConnections.toString(result.getStatus())));
          onConnectionFailed(mPendingConnections.remove(endpointId));
          return;
        }
        connectedToEndpoint(mPendingConnections.remove(endpointId));
      }

      @Override
      public void onDisconnected(String endpointId) {
        if (!mEstablishedConnections.containsKey(endpointId)) {
          logW("Unexpected disconnection from endpoint " + endpointId);
          return;
        }
        disconnectedFromEndpoint(mEstablishedConnections.get(endpointId));
      }
    };

  /** Callbacks for payloads (bytes of data) sent from another device to us. */
  private final PayloadCallback mPayloadCallback =
    new PayloadCallback() {
      @Override
      public void onPayloadReceived(String endpointId, Payload payload) {
        logD(String.format("onPayloadReceived(endpointId=%s, payload=%s)", endpointId, payload));
        onReceive(mEstablishedConnections.get(endpointId), payload);
      }

      @Override
      public void onPayloadTransferUpdate(String endpointId, PayloadTransferUpdate update) {
         /* logD(
              String.format(
                  "onPayloadTransferUpdate(endpointId=%s, update=%s)", endpointId, update));
      */  }
    };


  @Override
  public void initialize(CordovaInterface cordova, CordovaWebView webView) {
    super.initialize(cordova, webView);
    mConnectionsClient = Nearby.getConnectionsClient(cordova.getActivity().getApplicationContext());
    this.startServiceCallbackContext = null;
    this.stopServiceCallbackContext = null;
    connectionCallbackContext = null;
    this.flushMessageCallbackContext = null;
  }

  /**
   * Executes the request and returns PluginResult.
   *
   * @param action            The action to execute.
   * @param args              JSONArry of arguments for the plugin.
   * @param callbackContext   The callback id used when calling back into JavaScript.
   * @return                  True if the action was valid, false otherwise.
   */
  @Override
  public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
    if (action.equals("startService")) {
      startServiceCallbackContext = callbackContext;
      String endpointName = args.getString(0);
      setmEndpointName(endpointName);
      startService();

      PluginResult pluginResult = new PluginResult(PluginResult.Status.NO_RESULT);
      pluginResult.setKeepCallback(true);
      startServiceCallbackContext.sendPluginResult(pluginResult);
      return true;
    }
    if (action.equals("stopService")) {
      stopServiceCallbackContext = callbackContext;
      setState(State.UNKNOWN);

      PluginResult pluginResult = new PluginResult(PluginResult.Status.OK);
      stopServiceCallbackContext.sendPluginResult(pluginResult);
      return true;
    }
    if (action.equals("listenConnections")) {
      connectionCallbackContext = callbackContext;
      PluginResult pluginResult = new PluginResult(PluginResult.Status.NO_RESULT);
      pluginResult.setKeepCallback(true);
      connectionCallbackContext.sendPluginResult(pluginResult);
      return true;
    }
    if (action.equals("flushMessage")) {
      flushMessageCallbackContext = callbackContext;
      String payloadString = args.getString(0);
      Map<String, Endpoint> sendListofEndpoints = new HashMap<>();
      sendListofEndpoints.putAll(mCurrentMeshEndpoints);
      flushMessage(payloadString, sendListofEndpoints);

      PluginResult pluginResult = new PluginResult(PluginResult.Status.NO_RESULT);
      pluginResult.setKeepCallback(true);
      flushMessageCallbackContext.sendPluginResult(pluginResult);
      return true;
    }
    return false;
  }

  private void sendconnectionCallbackPluginResult(EventType eventType) {
    if (connectionCallbackContext == null) {
      return;
    }
    try {
      JSONObject o = new JSONObject();
      JSONArray arr = new JSONArray(mCurrentMeshEndpoints.keySet());
      o.put("event_type", eventType);
      o.put("endpoint_list", arr);
      logI("Send connection callback plugin result.");
      logD("connection callback plugin result: " + o.toString());
      PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, o);
      pluginResult.setKeepCallback(true);
      connectionCallbackContext.sendPluginResult(pluginResult);
    } catch (JSONException e) {
      logE("Error: " + e.getMessage());
    }

  }

  /** This is only called for the eventType MESSAGE_RECEIVED  */
  private void sendconnectionCallbackPluginResultForMessagereceived(String dataString) {
    if (connectionCallbackContext == null) {
      return;
    }
    try {
      JSONObject o = new JSONObject();
      o.put("event_type", EventType.MESSAGE_RECEIVED);
      o.put("data_string", dataString);
      logI("Send connection callback plugin result.");
      logD("connection callback plugin result: " + o.toString());
      PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, o);
      pluginResult.setKeepCallback(true);
      connectionCallbackContext.sendPluginResult(pluginResult);
    } catch (JSONException e) {
      logE("Error: " + e.getMessage());
    }

  }

  protected void getPermissions(int requestCode, String[] permissions) {
    cordova.requestPermissions(this, requestCode, permissions);
  }

  /** Called when the user has accepted (or denied) our permission request. */
  @CallSuper
  @Override
  public void onRequestPermissionResult(
    int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) throws JSONException {
    if (requestCode == REQUEST_CODE_REQUIRED_PERMISSIONS) {
      for (int grantResult : grantResults) {
        if (grantResult == PackageManager.PERMISSION_DENIED) {

          this.startServiceCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, PERMISSION_DENIED_ERROR));
          return;
        }
      }
      this.startService();
    }

  }

  @Override
  public void onStop() {

    // After our Activity stops, we disconnect from Nearby Connections.
    //setState(State.UNKNOWN);

    super.onStop();
  }
  /** Called when our Activity has been made visible to the user. */

  protected void startService() {
    for (String permission : REQUIRED_PERMISSIONS) {
      if (!cordova.hasPermission(permission)) {
        getPermissions(REQUEST_CODE_REQUIRED_PERMISSIONS, REQUIRED_PERMISSIONS);
      }
    }

    setState(State.SEARCHING);
  }


  /**
   * Sets the device to advertising mode. It will broadcast to other devices in discovery mode.
   * Either {@link #onAdvertisingStarted()} or {@link #onAdvertisingFailed()} will be called once
   * we've found out if we successfully entered this mode.
   */
  protected void startAdvertising() {
    mIsAdvertising = true;
    final String localEndpointName = getmEndpointName();
    AdvertisingOptions.Builder builder=new AdvertisingOptions.Builder().setStrategy(getStrategy());

    mConnectionsClient
      .startAdvertising(
        localEndpointName,
        getServiceId(),
        mConnectionLifecycleCallback,
        builder.build())
      .addOnSuccessListener(
        new OnSuccessListener<Void>() {
          @Override
          public void onSuccess(Void unusedResult) {
            logV("Now advertising endpoint " + localEndpointName);
            onAdvertisingStarted();
          }
        })
      .addOnFailureListener(
        new OnFailureListener() {
          @Override
          public void onFailure(@NonNull Exception e) {
            mIsAdvertising = false;
            logW("startAdvertising() failed.", e);
            onAdvertisingFailed();
          }
        });
  }

  /** Stops advertising. */
  protected void stopAdvertising() {
    logD("Stop advertising.");
    mIsAdvertising = false;
    mConnectionsClient.stopAdvertising();
  }

  /** Returns {@code true} if currently advertising. */
  protected boolean isAdvertising() {
    return mIsAdvertising;
  }

  /** Called when advertising successfully starts. Override this method to act on the event. */
  protected void onAdvertisingStarted() {
    logD("Send back plugin result: Success start service.");
    PluginResult pluginResult = new PluginResult(PluginResult.Status.OK);
    pluginResult.setKeepCallback(false);
    startServiceCallbackContext.sendPluginResult(pluginResult);
  }

  /** Called when advertising fails to start. Override this method to act on the event. */
  protected void onAdvertisingFailed() {
    PluginResult pluginResult = new PluginResult(PluginResult.Status.ERROR, "Advertising failed.");
    pluginResult.setKeepCallback(false);
    startServiceCallbackContext.sendPluginResult(pluginResult);
  }



  /**
   * Sets the device to discovery mode. It will now listen for devices in advertising mode. Either
   * {@link #onDiscoveryStarted()} or {@link #onDiscoveryFailed()} will be called once we've found
   * out if we successfully entered this mode.
   */
  protected void startDiscovering() {
    mIsDiscovering = true;

    mConnectionsClient
      .startDiscovery(
        getServiceId(),
        new EndpointDiscoveryCallback() {
          @Override
          public void onEndpointFound(String endpointId, DiscoveredEndpointInfo info) {
            logD(
              String.format(
                "onEndpointFound(endpointId=%s, serviceId=%s, endpointName=%s)",
                endpointId, info.getServiceId(), info.getEndpointName()));

            if (getServiceId().equals(info.getServiceId())) {
              Endpoint endpoint = new Endpoint(endpointId, info.getEndpointName());
              mDiscoveredEndpoints.put(endpointId, endpoint);
              onEndpointDiscovered(endpoint);
            }
          }

          @Override
          public void onEndpointLost(String endpointId) {
            logD(String.format("onEndpointLost(endpointId=%s)", endpointId));
          }
        },
        new DiscoveryOptions(getStrategy()))
      .addOnSuccessListener(
        new OnSuccessListener<Void>() {
          @Override
          public void onSuccess(Void unusedResult) {
            onDiscoveryStarted();
          }
        })
      .addOnFailureListener(
        new OnFailureListener() {
          @Override
          public void onFailure(@NonNull Exception e) {
            mIsDiscovering = false;
            logW("startDiscovering() failed.", e);
            onDiscoveryFailed();
          }
        });
  }

  /** Stops discovery. */
  protected void stopDiscovering() {
    logD("Stop discovering.");
    mIsDiscovering = false;
    mConnectionsClient.stopDiscovery();
  }

  /** Returns {@code true} if currently discovering. */
  protected boolean isDiscovering() {
    return mIsDiscovering;
  }

  /** Called when discovery successfully starts. Override this method to act on the event. */
  protected void onDiscoveryStarted() {}

  /** Called when discovery fails to start. Override this method to act on the event. */
  protected void onDiscoveryFailed() {}

  /**
   * This is where a new advertiser was found and to initialize a connection to the new advertiser.
   * Here we need to implement our mesh connecting algorithm to control the connecting capacity
   * @param endpoint
   */
  protected void onEndpointDiscovered(Endpoint endpoint) {
    Set<String> connectedEndPoints = mEstablishedConnections.keySet();
    for (String node : connectedEndPoints) {
      if (endpoint.getName().equals(mEstablishedConnections.get(node).getName())) {
        return;
      }
    }

    Set<String> currentMeshendpointNames = mCurrentMeshEndpoints.keySet();
    for (String name: currentMeshendpointNames) {
      if (endpoint.getName().equals(name)) {
        logV("Found endpoint " + endpoint.getName() + " in the current network endpoint list, no need to send connection requrest");
        return;
      }
    }

    if (mEstablishedConnections.get(endpoint.getId()) != null) {
      return;
    }
    startAction(Action.CONNECTING, endpoint, 0);
  }

  protected void onConnectionInitiated(Endpoint endpoint, ConnectionInfo connectionInfo) {
    // A connection to another device has been initiated! We'll use the auth token, which is the
    // same on both devices, to pick a color to use when we're connected. This way, users can
    // visually see which device they connected with.
    //mConnectedColor = COLORS[connectionInfo.getAuthenticationToken().hashCode() % COLORS.length];
    acceptConnection(endpoint);
  }


  /** Accepts a connection request. */
  protected void acceptConnection(final Endpoint endpoint) {
    mConnectionsClient
      .acceptConnection(endpoint.getId(), mPayloadCallback)
      .addOnFailureListener(
        new OnFailureListener() {
          @Override
          public void onFailure(@NonNull Exception e) {
            logW("acceptConnection() failed.", e);
          }
        });
  }

  /** Rejects a connection request. */
  protected void rejectConnection(Endpoint endpoint) {
    mConnectionsClient
      .rejectConnection(endpoint.getId())
      .addOnFailureListener(
        new OnFailureListener() {
          @Override
          public void onFailure(@NonNull Exception e) {
            logW("rejectConnection() failed.", e);
          }
        });
  }

  protected void onEndpointConnected(Endpoint endpoint) {
    setState(State.CONNECTED);
    mCurrentMeshEndpoints.put(endpoint.getName(), endpoint);
    sendconnectionCallbackPluginResult(EventType.JOIN_NETWORK);
    synchronizeConnectedEndpoints();
  }

  protected void onEndpointDisconnected(Endpoint endpoint) {
    if (mEstablishedConnections.isEmpty()) {
        setState(State.DIS_CONNECTED);
    }
    mCurrentMeshEndpoints.remove(endpoint.getName());

    if (mEstablishedConnections.isEmpty()) {
      logV("No established connections, clear the mesh endpoint list.");
      mCurrentMeshEndpoints.clear();
      cacheMeshEndpoints.clear();
      sendconnectionCallbackPluginResult(EventType.LEAVE_NETWORK);
    } else {
      resetNetworkList(mEstablishedConnections.keySet());
    }

    //reconnect to disconnected eindpoint
    long delay = 2000;
    logD("Try reconnecting to the disconnected endpoint: " + endpoint.getName() + "with delay " + delay);
    startAction(Action.CONNECTING, endpoint, delay);

  }


  /**
   * Sends a connection request to the endpoint. Either {@link #onConnectionInitiated(Endpoint,
   * ConnectionInfo)} or {@link #onConnectionFailed(Endpoint)} will be called once we've found out
   * if we successfully reached the device.
   */
  protected void connectToEndpoint(final Endpoint endpoint) {
    logV("Sending a connection request to endpoint " + endpoint);
    // Mark ourselves as connecting so we don't connect multiple times
    mIsConnecting = true;

    // Ask to connect
    mConnectionsClient
      .requestConnection(getmEndpointName(), endpoint.getId(), mConnectionLifecycleCallback)
      .addOnFailureListener(
        new OnFailureListener() {
          @Override
          public void onFailure(@NonNull Exception e) {
            logW("requestConnection() to endpoint " + endpoint.getName() + " failed.", e);
            mIsConnecting = false;
            onConnectionFailed(endpoint);
          }
        });
  }

  /** Returns {@code true} if we're currently attempting to connect to another device. */
  protected final boolean isConnecting() {
    return mIsConnecting;
  }

  private void connectedToEndpoint(Endpoint endpoint) {
    logD(String.format("connectedToEndpoint(endpoint=%s)", endpoint));
    mEstablishedConnections.put(endpoint.getId(), endpoint);
    mDiscoveredEndpoints.remove(endpoint.getId());
    onEndpointConnected(endpoint);
  }

  private void disconnectedFromEndpoint(Endpoint endpoint) {
    logD(String.format("disconnectedFromEndpoint(endpoint=%s)", endpoint));
    mEstablishedConnections.remove(endpoint.getId());
    onEndpointDisconnected(endpoint);
  }


  protected void onConnectionFailed(Endpoint endpoint) {
    // Let's try someone else.
    stopDiscovering();
    stopAdvertising();

    startAction(Action.DISCOVERY);
    startAction(Action.ADVERTISING);
  }



  /** Disconnects from the given endpoint. */
  protected void disconnect(Endpoint endpoint) {
    mConnectionsClient.disconnectFromEndpoint(endpoint.getId());
    mEstablishedConnections.remove(endpoint.getId());
  }

  /** Disconnects from all currently connected endpoints. */
  protected void disconnectFromAllEndpoints() {
    for (Endpoint endpoint : mEstablishedConnections.values()) {
      mConnectionsClient.disconnectFromEndpoint(endpoint.getId());
    }
    mEstablishedConnections.clear();
  }

  /** Resets and clears all state in Nearby Connections. */
  protected void stopAllEndpoints() {
    mConnectionsClient.stopAllEndpoints();
    mIsAdvertising = false;
    mIsDiscovering = false;
    mIsConnecting = false;
    mDiscoveredEndpoints.clear();
    mPendingConnections.clear();
    mEstablishedConnections.clear();
    mCurrentMeshEndpoints.clear();
  }

  /**
   * The state has changed. I wonder what we'll be doing now.
   *
   * @param state The new state.
   */
  private void setState(State state) {
    if (mState == state) {
      logW("State set to " + state + " but already in that state");
      return;
    }

    logD("State set to " + state);
    State oldState = mState;
    mState = state;
    onStateChanged(oldState, state);
  }

  /**
   * @return The current state.
   */
  private State getState() {
    return mState;
  }

  /**
   * State has changed.
   *
   * @param oldState The previous state we were in. Clean up anything related to this state.
   * @param newState The new state we're now in. Prepare the UI for this state.
   */
  private void onStateChanged(State oldState, State newState) {
    // Update Nearby Connections to the new state.
    switch (newState) {
      case SEARCHING:
        disconnectFromAllEndpoints();
        stopDiscovering();
        stopAdvertising();

        startAction(Action.DISCOVERY);
        startAction(Action.ADVERTISING);
        break;
      case CONNECTED:
        if (mEstablishedConnections.size() >= MAX_CONNECTION ) {
          logD("Established connections reach the limit " + MAX_CONNECTION);
          stopDiscovering();
          stopAdvertising();
        }
        break;
      case DIS_CONNECTED:
        stopDiscovering();
        stopAdvertising();

        startAction(Action.DISCOVERY);
        startAction(Action.ADVERTISING);
        break;
      case UNKNOWN:
        stopAllEndpoints();
        break;
      default:
        // no-op
        break;
    }
  }

  private void startAction(final Action action) {
    startAction(action, null, 0);
  }

  private void startAction(final Action action,final Endpoint endpoint) {
    startAction(action, endpoint, 0);
  }

  private void startAction(final Action action,final Endpoint endpoint, long extraDelay) {
    Random random = new Random();
    long delay = random.nextInt(500);
    if(action==Action.CONNECTING){
      delay=delay+1000;
    }

    delay = delay+extraDelay;
    logD("Started Action : "+action+" with delay : " + delay);
    Timer timer = new Timer();
    TimerTask task = new TimerTask() {
      @Override
      public void run() {

        switch (action) {
          case DISCOVERY:
            startDiscovering();
            break;
          case ADVERTISING:
            startAdvertising();
            break;
          case CONNECTING:
            connectToEndpoint(endpoint);
            break;
          case SYNCHRONIZATION:
            synchronizeConnectedEndpoints();
            break;
          case RESETNETWORK:
            resetNetworkList(mEstablishedConnections.keySet());
            break;
        }


      }
    };
    timer.schedule(task, delay);
  }

  /**
   * synchronize the connected endpoints list over the mesh network
   */
  private void synchronizeConnectedEndpoints() {

    logD("Synchronization: synchronize the connected peer list: " + mCurrentMeshEndpoints.toString());
    MessagePayload messagePayload = new MessagePayload(MessageType.SYNCHRONIZE, mCurrentMeshEndpoints);
    send(messagePayload);
  }

  /**
   * synchronize the connected endpoints list over the mesh network
   */
  private void synchronizeConnectedEndpoints(Set<String> endpointIds) {

    logD("Synchronization: synchronize the connected peer list: " + mCurrentMeshEndpoints.toString());
    MessagePayload messagePayload = new MessagePayload(MessageType.SYNCHRONIZE, mCurrentMeshEndpoints);
    send(messagePayload, endpointIds);
  }

  /**
   * Reset the network list on each endpoint. It is a pre process comparing to synchronization. The reset process happens when sending out the command.
   */
  private void resetNetworkList(Set<String> endpointIds) {
    if (!mCurrentMeshEndpoints.isEmpty()) {
      mCurrentMeshEndpoints.clear();
    }
    if (!mEstablishedConnections.isEmpty()) {
      mEstablishedConnections.forEach((endpointId, endpoint) -> {
        mCurrentMeshEndpoints.put(endpoint.getName(), endpoint);
      });
    }
    logD("Reset network list with established connections: " + mCurrentMeshEndpoints.keySet().toString());

    if (endpointIds.size() > 0) {
      logD("Retransmitt reset command to endpoints: " + endpointIds.toString());
      MessagePayload messagePayload = new MessagePayload(MessageType.RESET, null);
      send(messagePayload, endpointIds);
    } else {
      logD("Reach the edge endpoint of network. Stop reset command.");
      logD("Start re-synchronize the network endpoint list.");
      startAction(Action.SYNCHRONIZATION);
    }
  }


  protected void onReceive(Endpoint endpoint, Payload payload) {
    if (payload.getType() == Payload.Type.BYTES) {
      byte[] data = payload.asBytes();
      MessagePayload messagePayload = MessagePayload.fromByte(data);
      MessageType messageType = messagePayload.getMessageType();
      switch (messageType) {
        case SYNCHRONIZE:
          resolveSynchronizePayload(endpoint, messagePayload);
          break;
        case MESSAGE:
          resolveMessagePayload(endpoint, messagePayload);
          break;
        case RESET:
          resolveResetPayload(endpoint, messagePayload);
          break;
        default:
          break;
      }
    }
  }

  private void resolveSynchronizePayload(Endpoint sourceEndpoint, MessagePayload messagePayload) {
    if (cacheMeshEndpoints.size() > 0) {
      cacheMeshEndpoints.clear();
    }
    Map<String, Endpoint> receivedConnectedPeers = (Map<String, Endpoint>) messagePayload.getData();
    logD("Resolve synchronize message: " + "source endpoint: " + sourceEndpoint.getName() + "; peer list: " + receivedConnectedPeers.keySet().toString());

    cacheMeshEndpoints.putAll(mCurrentMeshEndpoints);

    receivedConnectedPeers.forEach(
      (key, value) -> mCurrentMeshEndpoints.merge(key, value, (v1, v2) -> v2)
    );
    logV("Merge the current endpoint list: " + mCurrentMeshEndpoints.keySet().toString());

    if (mCurrentMeshEndpoints.size() > receivedConnectedPeers.size()) {
      logV("Current mesh endpoint list is increased, broadcast synchronization message.");
      synchronizeConnectedEndpoints();
      return;
    }
    if (cacheMeshEndpoints.size() > 0 && mCurrentMeshEndpoints.size() > 0 && cacheMeshEndpoints.size() == mCurrentMeshEndpoints.size()) {
      logV("Synchronization: no changes made to current network endpoint list. stop retransmission.");
      sendconnectionCallbackPluginResult(EventType.NETWORK_CHANGE);
      return;
    }
    Set<String> endPointIds = new HashSet<>();
    endPointIds.addAll(mEstablishedConnections.keySet());
    String sourceEndpointId = sourceEndpoint.getId();
    endPointIds.remove(sourceEndpointId);
    if (endPointIds.size() > 0) {
      logV("Retransmitt synchronization message to endpoints: " + endPointIds.toString());
      synchronizeConnectedEndpoints(endPointIds);
    } else {
      logV("Reach the edge endpoint of network. Stop synchronization.");


    }

  }

  private void resolveResetPayload(Endpoint sourceEndpoint, MessagePayload messagePayload) {
    Set<String> endPointIds = new HashSet<>();
    endPointIds.addAll(mEstablishedConnections.keySet());
    String sourceEndpointId = sourceEndpoint.getId();
    endPointIds.remove(sourceEndpointId);
    resetNetworkList(endPointIds);
  }

  private void resolveMessagePayload(Endpoint sourceEndpoint, MessagePayload messagePayload) {
    String dataString = (String) messagePayload.getData();
    Map<String, Endpoint> sendListofEndpoints = messagePayload.getSendListofEndpoints();
    sendconnectionCallbackPluginResultForMessagereceived(dataString);
    if (sendListofEndpoints.size() == 0) {
      logI("Reach the edge endpoint of the network, stop flush the message.");
      return;
    }
    flushMessage(dataString, sendListofEndpoints);

    // send plugin result with message
    // resend the data to the rest list of endpoints
  }

  /**
   * The old implementation for resolving message.
   * @param sourceEndpoint
   * @param messagePayload
   */
/*   private void resolveMessagePayload(Endpoint sourceEndpoint, MessagePayload messagePayload) {
    int mySourceId = getmEndpointName();

    byte[] data = (byte[]) messagePayload.getData();
    int sourceId = data[0];
    int destId = data[1];
    int hope = data[2];

    byte[] dataArray = new byte[data.length - 3];

    System.arraycopy(data, 3, dataArray, 0, dataArray.length);
    if (destId == mySourceId) {
      logD("Message received to the correct node with hope = " + hope);
      logI("Message : " + new String(dataArray));
    } else {
      if (sourceId != mySourceId) {
        logD("Hope received : " + hope);
        hope--;
        if (hope > 0) {
          logD("Retransmitting data : From=> " + sourceId + " : To=>" + destId);
          sendMessage(dataArray, destId, sourceId, hope);
        } else {
          logE("Message Discarding since  hope ended : " + hope);

        }
      } else {
        logW("My message received by retransmission....");
      }
    }

  } */

  /**
   *
   * @param dataArray data in Byte[]
   * @param destId destination endpoint id
   * @param sourceId source endpoint id
   * @param hope the maximum hope limit
   */
  private void sendMessage(byte[] dataArray, int destId, int sourceId, int hope) {

    byte[] data = new byte[dataArray.length + 3];
    data[0] = (byte) sourceId;
    data[1] = (byte) destId;
    data[2] = (byte) hope;
    System.arraycopy(dataArray, 0, data, 3, dataArray.length);
    MessagePayload messagePayload = new MessagePayload(MessageType.MESSAGE, data);
    send(messagePayload);
  }

  /**
   * flush message in the mesh network
   * @param dataString data in String
   * @param sendListofEndpoints Map<Endpoint.name, Endpoint> received the send list of endpoints, to be checked with the current connected endpoints.
   */
  private void flushMessage(String dataString, Map<String, Endpoint> sendListofEndpoints) {
    if (mEstablishedConnections.isEmpty() || sendListofEndpoints.isEmpty()) {
      logW("Current endpoint is not connected.");
      return;
    }
    logI("Flush message in the mesh network.");
    logD("endpoints list: " + sendListofEndpoints.keySet().toString());
    // the endpoint list to be sent with the message
    sendListofEndpoints.remove(getmEndpointName());
    mEstablishedConnections.forEach((endpointId, endpoint) -> {
      sendListofEndpoints.remove(endpoint.getName());
    });

    logV("After sort of send list, current mesh endpoints: " + mCurrentMeshEndpoints.keySet().toString());
    MessagePayload messagePayload = new MessagePayload(MessageType.MESSAGE, dataString, sendListofEndpoints);
    send(messagePayload);
  }


  /**
   * Sends a {@link MessagePayload} to all currently connected endpoints.
   *
   * @param messagePayload The data you want to send.
   */
  protected void send(MessagePayload messagePayload) {
    send(messagePayload, mEstablishedConnections.keySet());
  }

  protected void send(MessagePayload messagePayload, Set<String> endpoints) {
    Payload payload = Payload.fromBytes(messagePayload.toByte());
    mConnectionsClient
      .sendPayload(new ArrayList<>(endpoints), payload)
      .addOnSuccessListener(
        new OnSuccessListener<Void>() {
          @Override
          public void onSuccess(Void unusedResult) {
            onSendPayloadSuccessed(messagePayload);
          }
        }
      )
      .addOnFailureListener(
        new OnFailureListener() {
          @Override
          public void onFailure(@NonNull Exception e) {
            logE("sendPayload() failed.", e);
            onSendPayloadFailed(messagePayload);
          }
        });
  }

  protected void onSendPayloadSuccessed(MessagePayload payload) {
    logI("Send payload successful!");
    if (payload.getMessageType() == MessageType.MESSAGE) {
      PluginResult pluginResult = new PluginResult(PluginResult.Status.OK);
      pluginResult.setKeepCallback(false);
      this.flushMessageCallbackContext.sendPluginResult(pluginResult);
    }
  }

  protected void onSendPayloadFailed(MessagePayload payload) {
    PluginResult pluginResult = new PluginResult(PluginResult.Status.ERROR, "Sending Message failed.");
    pluginResult.setKeepCallback(false);
    this.flushMessageCallbackContext.sendPluginResult(pluginResult);
  }

  private String getmEndpointName() {
    return this.mEndpointName;
  }

  private void setmEndpointName (String name) {
    this.mEndpointName = name;
  }

  public String getServiceId() {
    return SERVICE_ID;
  }

  public Strategy getStrategy() {
    return STRATEGY;
  }


  /**
   * Transforms a {@link Status} into a English-readable message for logging.
   *
   * @param status The current status
   * @return A readable String. eg. [404]File not found.
   */
  private static String toString(Status status) {
    return String.format(
      Locale.US,
      "[%d]%s",
      status.getStatusCode(),
      status.getStatusMessage() != null
        ? status.getStatusMessage()
        : ConnectionsStatusCodes.getStatusCodeString(status.getStatusCode()));
  }

  @CallSuper
  protected void logV(String msg) {
    Log.v(TAG, msg);
  }
  @CallSuper
  protected void logI(String msg) {
    Log.i(TAG, msg);
  }
  @CallSuper
  protected void logD(String msg) {
    Log.d(TAG, msg);
  }

  @CallSuper
  protected void logW(String msg) {
    Log.w(TAG, msg);
  }

  @CallSuper
  protected void logW(String msg, Throwable e) {
    Log.w(TAG, msg, e);
  }

  @CallSuper
  protected void logE(String msg, Throwable e) {
    Log.e(TAG, msg, e);
  }
  @CallSuper
  protected void logE(String msg) {
    Log.e(TAG, msg);
  }
  /** Represents a device we can talk to. */
  protected static class Endpoint implements Serializable {
    /** Endpoint id created used by nearby connection api    */
    @NonNull private final String id;
    /** Endpoint name that is used as the peer name */
    @NonNull private final String name;
    private boolean isLeader = false;

    private Endpoint(@NonNull String id, @NonNull String name) {
      this.id = id;
      this.name = name;
    }

    @NonNull
    public String getId() {
      return id;
    }

    @NonNull
    public String getName() {
      return name;
    }

    public boolean isLeader() {
      return isLeader;
    }

    public void setLeader(boolean isLeader) {
      this.isLeader = isLeader;
    }

    @Override
    public boolean equals(Object obj) {
      if (obj != null && obj instanceof Endpoint) {
        Endpoint other = (Endpoint) obj;
        return id.equals(other.id);
      }
      return false;
    }

    @Override
    public int hashCode() {
      return id.hashCode();
    }

    @Override
    public String toString() {
      return String.format("Endpoint{id=%s, name=%s}", id, name);
    }
  }


  /**
   * States that the UI goes through.
   */
  public enum State {
    UNKNOWN,
    SEARCHING,
    CONNECTED,
    DIS_CONNECTED
  }

  public enum Action {
    ADVERTISING,
    CONNECTING,
    DISCOVERY,
    SYNCHRONIZATION,
    RESETNETWORK
  }

  public enum EventType {
    JOIN_NETWORK,
    NETWORK_CHANGE,
    LEAVE_NETWORK,
    MESSAGE_RECEIVED
  }

  /**
   * SYNCHRONIZE - broadcast mesh network endpoint list synchronization message.
   * MESSAGE - broadcast a message
   * RESET - command that reset currentMeshEndpoints, currently used as pre step before a new synchronization. e.g. if some node connection is broken, we need to update the mesh network endpoints list.
   */
  public enum MessageType {
    SYNCHRONIZE,
    MESSAGE,
    RESET
  }

  protected static class MessagePayload implements Serializable {
    private MessageType messageType;
    private Object data;
    /** The list of Endpoints that to be sent, this is the list of the nodes in the whole mesh network, not only the connected nodes. */
    private Map<String, Endpoint> sendListofEndpoints = new HashMap<>();

    private MessagePayload(MessageType messageType, Object data) {
      this.messageType = messageType;
      this.data = data;
    }

    private MessagePayload(MessageType messageType, Object data, Map<String, Endpoint> sendListofEndpoints) {
      this.messageType = messageType;
      this.data = data;
      this.sendListofEndpoints = sendListofEndpoints;
    }

    public Map<String, Endpoint> getSendListofEndpoints() {
      return sendListofEndpoints;
    }

    public void setSendListofEndpoints(Map<String, Endpoint> sendListofEndpoints) {
      this.sendListofEndpoints = sendListofEndpoints;
    }

    public MessageType getMessageType() {
      return messageType;
    }

    public void setMessageType(MessageType messageType) {
      this.messageType = messageType;
    }

    public Object getData() {
      return data;
    }

    public void setData(Object data) {
      this.data = data;
    }

    public byte[] toByte() {
      return SerializationUtils.serialize(this);
    }

    public static MessagePayload fromByte(byte[] payloadByte) {
      return (MessagePayload) SerializationUtils.deserialize(payloadByte);
    }
  }
}
