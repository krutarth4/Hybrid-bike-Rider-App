import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { DeviceOrientation } from "@awesome-cordova-plugins/device-orientation/ngx";
import { File } from "@awesome-cordova-plugins/file/ngx";
import {
  Geolocation,
  Geoposition,
  PositionError,
} from "@awesome-cordova-plugins/geolocation/ngx";
import {
  NativeGeocoder,
  NativeGeocoderOptions,
} from "@awesome-cordova-plugins/native-geocoder/ngx";
import { Geofence } from "@ionic-native/geofence";
import {
  AlertController,
  NavController,
  NavParams,
  Platform,
} from "@ionic/angular";
import { AppComponent } from "src/app/app.component";
import { Events } from "src/app/services/events/events.service";
import { RestApiService } from "src/app/services/rest-api/rest-api.service";
import { SignalingService } from "src/app/services/signaling/signaling.service";
import "leaflet.awesome-markers/dist/leaflet.awesome-markers";
import findNearest from "geolib/es/findNearest";
import getPathLength from "geolib/es/getPathLength";
import { TransferService } from "src/app/services/transferdata/transfer.service";
import { StorageService } from "src/app/services/storage/storage.service";
import { AppCenterAnalytics } from "@awesome-cordova-plugins/app-center-analytics/ngx";
import { GlobalConstants as GConst } from "src/app/common/global-constants";
import { MathematicalModel } from "src/app/class/MathematicalModel/mathematical-model";
import { Users } from "src/app/interface/users";
import { OutputControllerService } from "src/app/services/outputController/output-controller.service";
import { Global } from "src/app/class/Globalfunction/Global";
import { BehaviorSubject } from "rxjs";
import { NgxGauge } from "ngx-gauge";
import "leaflet.smooth_marker_bouncing";
import { GetTripIntersecionsResponse } from "src/app/interface/get-trip-intersecions-response";
import { User } from "src/app/interface/user";
import { GetTripsResponse } from "src/app/interface/get-trips-response";

declare var NativeLogs: any;
declare var L: any;
declare var NearbyConnections: any;

@Component({
  selector: "app-trips",
  templateUrl: "./trips.page.html",
  styleUrls: ["./trips.page.scss"],
})

//TODO: check fo the new user and users position update and how the UI is reacting to the new location input
// TODO: check where to update swarmArray information and the data foemat
export class TripsPage implements OnInit {
  @ViewChild("map") mapElement: ElementRef;
  @ViewChild("appAlert") appAlert: ElementRef;
  map: any;
  marker;
  trip_id;
  meetlat;
  meetlng;
  startpoint;

  startMarkerIcon = L.icon({
    iconUrl: "../assets/content/images/start_marker.png",
    iconSize: [40, 40], // size of the icon
  });
  endpoint;
  current_position: any = {};
  /**
   * @deprecated
   */
  users_positions: any;
  trip_polyline;
  decodedPolyline;
  deviceorientation: any;
  exist: boolean = false;
  distance: any = null;
  popup: boolean = false;
  overlay = "";
  otherUserPosition = L.icon({
    iconUrl: "../assets/content/images/swarm1.png",
    iconSize: [32, 32], // size of the icon
  });
  myPositionIcon = L.icon({
    iconUrl: "../assets/content/images/bike.png",
    iconSize: [32, 32], // size of the icon
  });
  destinationIcon = L.icon({
    iconUrl: "../assets/content/images/destination.png",
    iconSize: [32, 32], // size of the icon
  });

  meetingPointIconDefault = L.icon({
    iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23ec7b19&icon=users&iconType=awesome&scaleFactor=2&apiKey=c7ff719c2709426abb5c162d7361a78b`,
    iconSize: [30, 40], // size of the icon
  });

  meetingPointIconActive = L.icon({
    iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23ec7b19&icon=users&iconType=awesome&scaleFactor=2&apiKey=c7ff719c2709426abb5c162d7361a78b`,
    iconSize: [35, 50], // size of the icon
  });
  leavingPointIconActive = L.icon({
    iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23ec7b19&icon=users-slash&iconType=awesome&scaleFactor=2&apiKey=c7ff719c2709426abb5c162d7361a78b`,
    iconSize: [35, 50], // size of the icon
  });
  leavingPointIcondeactive = L.icon({
    iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23ec7b19&icon=users-slash&iconType=awesome&scaleFactor=2&apiKey=c7ff719c2709426abb5c162d7361a78b`,
    iconSize: [30, 40], // size of the icon
  });

  swarmId = null;
  user = null;
  Seconduser = null;
  overlapse;
  geofenceDebug: Boolean = false; // use to see information of created geofences in the UI
  /**
   * @deprecated
   * not in use anymore
   */
  userList: any;
  checkList: any;
  // interval for circle check, user position update and distance calculation
  interval1;
  interval2;
  // ! not in use anymore
  variable_names = {};
  filterUser: any;
  c = new L.circle();
  accuracyMarker = new L.circle();
  cercle;
  cercleFlag: boolean = false;
  logText;
  userIDs = "";
  position: any = "";
  event = "";
  table = [];
  eventType = "";
  // event logging variable
  coordonate = {
    position_timestamp: new Date().toISOString().substring(11, 19),
    userID: this.userIDs,
    Position: this.position,
    EventType: this.eventType,
    Event: this.event,
  };
  object;
  time;
  prev;
  public logg: any;
  overlapsePolyline;
  meetptss = { lat: 0, lng: 0 };
  leavelat: any;
  leavelng: any;
  leaveptss: { lat: any; lng: any };
  closest;
  //card number is associated to the distance and duration text display
  card = "1";
  meetingStreet;
  leavingStreet;
  finalDistance;
  cameraTracker: boolean = true;
  static trip_id2: any;
  static user_position: any;
  lastPointRoute;
  marker2;
  geoInterval;
  marker3;
  onlocation = {};
  navigationMessage = "Have a nice ride";
  navigationCalculation = undefined;
  directionalIcon = "../assets/content/images/bike.png";
  steps;
  endTripStreet;
  geofenceCount = 0;
  geocountInterval;
  currentSpeed: number = 0;
  expectedSwarmsArray: Users[];
  choosenMeetingPoint; // this is the choosen checkpoint for which suggested speed will be calculated
  checkPointMarkerArray = [];
  dynamicPolyline;
  showCurrentSpeed: number = 0;
  i = 0;
  showCurrentSpeedColor: string = "orange";
  yourETA;
  accuracyMarkerFlag: boolean = false;
  // gauge information
  // gauge condition to show
  showSpeedometer: boolean = true;
  gaugeType = "semi";
  gaugeValue = 30; //this.currentSpeed; // this is the current speed m/sec // to convert the unit to km/hr mulitply by 3.6
  gaugeLabel = "Current Speed";
  gaugeAppendText = "m/sec"; // units fro speed measurement

  thresholdConfig = {
    0: {
      color: "orange",
      bgOpacity: 0.9,
    },
    20: {
      color: "green",
      bgOpacity: 0.9,
    },
    40: {
      color: "red",
      bgOpacity: 0.9,
    },
  };
  suggestedSpeed = undefined;
  distance_to_meet_checkpoint;
  /**
   * @not_in_use as we have custom design properties according to the speed which is a dynamic property
   */
  markerConfig = {
    0: { color: "#555", size: 4, label: "0", type: "line" },
    15: { color: "#555", size: 2, type: "line" },
    30: { color: "#555", size: 4, label: "30", type: "line" },
    40: { color: "#555", size: 2, type: "line" },
    50: { color: "#555", size: 4, label: "50", type: "line" },
    [this.suggestedSpeed]: {
      color: "#555",
      size: 4,
      label: "s",
      type: "triangle",
    },
  };
  foregroundcolor = "'black'";
  backgroundcolor = "black";
  reachable: boolean;
  // not in use
  footerColor = "orange";
  // not in use
  showsecondline: boolean = false;

  showFooter: boolean = false;

  swarmMessage;
  swarmMessageSubscription;
  checkpointMessage;
  checkpointMessageSubscription;

  showSwarmInformation: boolean = false; // flag to show swarm in UI or not
  border_color = "white"; // default color
  numberOfMembersInSwarm = 0;

  // critical information for the overlap and swarm formation
  /**
   * this array will help to compare locally saved expectedSwarmArray to know about users left, new users and much more
   */
  userData: any[] = [];
  // ------------------
  constructor(
    public events: Events,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public rest: RestApiService,
    public geolocation: Geolocation,
    public platform: Platform,
    private geofence: Geofence,
    public signal: SignalingService,
    private ref: ChangeDetectorRef,
    private file: File,
    public app: AppComponent,
    private nativeGeocoder: NativeGeocoder,
    private transfer: TransferService,
    private storage: StorageService,
    public mathModel: MathematicalModel,
    private outputCtrl: OutputControllerService,
    private global: Global,
    private gauge: NgxGauge
  ) {
    console.log("trip page constructor");
    console.log("Welcome to trips page");
    var userID = this.rest.userId;
    console.log("user ID", userID);

    this.loadInformation();
    //this code is only used when on mobile device since it does not function on browser
    try {
      if (this.platform.is("android")) {
        platform.ready().then(() => {
          // check nearbyconnections plugin first
          if (NearbyConnections) {
            console.log("nearbyconnections is now defined");
            this.logText =
              this.logText +
              new Date().toISOString().substring(11, 19) +
              " Nearbyconnections is now defined \r\n";
            this.file.writeFile(
              this.file.externalApplicationStorageDirectory,
              this.app.filename,
              this.logText,
              { append: true }
            );
          }
          //start the plugin
          console.log("startservice");
          NearbyConnections.startService(
            function () {},
            function () {},
            this.rest.deviceId
          );
          console.log("listen service");
          NearbyConnections.listenConnections(
            function (success) {
              console.log("Nearbyconnection success variable is : ", success);

              if (success["event_type"] == "MESSAGE_RECEIVED") {
                events.groupDBController(success);
              } else {
                events.initialize(success);
              }
            },
            function (err) {
              console.log("ERROR in nearby :", err);
            }
          );
        });

        this.deviceorientation = new DeviceOrientation();
      }
    } catch (e) {
      console.log("error nearby connection listen event", e);
    } finally {
      console.log("constructor has finished");
    }
  }
  /**
   * @returns it initializes the critical values needed for trips page
   */
  loadInformation() {
    console.log("loadinformation from transfer service");


    if (!this.rest.offline) {
      try {
        this.steps = this.transfer._getNavSteps();
        this.distance = this.transfer._getTripDistance();

        this.startpoint = this.transfer._getStartPosition();
        this.endpoint = this.transfer._getDestinationPosition();
        this.trip_id = this.transfer._getRouteID();
        this.trip_polyline = this.transfer._getRouteGeometry();
        this.meetingStreet = this.transfer._getMeetingStreet();
        this.leavingStreet = this.transfer._getleavingStreet();
        this.meetlat = this.transfer._getMeetingPoint().lat;
        this.meetlng = this.transfer._getMeetingPoint().lng;
        this.meetptss = { lat: this.meetlat, lng: this.meetlng };
        this.leavelat = this.transfer._getLeavingPoint().lat;
        this.leavelng = this.transfer._getLeavingPoint().lng;
        this.leaveptss = { lat: this.leavelat, lng: this.leavelng };
        this.overlapse = this.transfer._getOverlapse();
        this.logText = this.transfer._getLogText();
        this.endTripStreet = this.transfer._getEndTripStreet();
        this.lastPointRoute = this.transfer._getLastPointRoute();
        this.expectedSwarmsArray = this.transfer._getExpectedSwarmArray();
        if (this.expectedSwarmsArray.length != 0) {
          // default checkpoint for the calculation
          this.choosenMeetingPoint = this.expectedSwarmsArray[0];
          console.log("choosen checkpoint default ", this.choosenMeetingPoint);
          this.overlapse = this.decode(
            this.choosenMeetingPoint.intersection_geometry
          );
        }
        this.userData = [];
        this.userData = this.transfer._getUserList();
        console.log("Userdata", this.userData);
      } catch (error) {
        console.log("error initilaizing", error);
        this.goHome("aborted");
        console.log("Going Home....");
        window.location.reload();
      }
    }
  }

  ngOnInit() {
    this.ref.detectChanges();
    if (this.platform.is("android")) {
      this.platform.ready().then(() => {
        this.addDestinationGeofence();
        setTimeout(() => {
          // create geofence for turns
          this.geofenceTurns();
        }, 1500);
        setTimeout(() => {
          this.addpoint();
        }, 3000);
      });

      this.file
        .writeFile(
          this.file.externalApplicationStorageDirectory,
          this.app.filename,
          this.logText,
          { append: true }
        )
        .then(
          (suc) => {},
          (err) => {}
        );
    }
    this.checkpointMessageSubscription = this.outputCtrl._cast_checkpoint_alert
      .pipe()
      .subscribe(
        (message) => {
          this.checkpointMessage = message;
        },
        (error) => {
          console.error("Subscription error", error);
        }
      );
    this.swarmMessageSubscription = this.outputCtrl._cast_swarm_alert
      .pipe()
      .subscribe(
        (message) => {
          this.swarmMessage = message;
        },
        (error) => {
          console.error("Subscription error", error);
        }
      );
    console.log("ngonint finished");
    this.fcmSubscriber();
  }
  /**
   *
   * @param data from the backend for the user position update and check for any new users
   *
   * here all the operations will take place
   * Generating checkpoint marker and deleting already left marker
   * User position updates~ this data will be used by mathematical model further
   *
   */
  updateSwarmArrayInformation(data: any) {
    let old_array = this.expectedSwarmsArray;
    let new_array = data;

    console.warn("new array update swarm", new_array);
    console.warn("Old_array updateswarm", old_array);
    if (new_array.length > old_array.length) {
      // if someone else joins the swarm
      console.warn("new member joining");
      for (let i = 0; i < new_array.length; i++) {
        try {
          let item = new_array[i].users[0].device_id;
          let element = new_array[i];
          let found = old_array.findIndex(function (datanew: Users) {
            return datanew.device_id == item;
          });
          console.warn("found", found);
          if (found < 0) {
            // create a new object and push in
            console.warn("new device found");
            console.warn(element);
            let obj: Users = {
              trip_id: this.trip_id,
              trip_id_geometry: this.trip_polyline,
              device_id: element.users[0].device_id,
              foreign_trip_id: element.users[0].foreign_trip_id,
              swarm_id: element.users[0].swarm_id,
              intersection_distance: element.users[0].distance
                .toString()
                .trim()
                .split(".")[0],
              intersection_geometry: element.users[0].intersections[0],
              position: element.users[0].position,
              speed: element.users[0].speed,
              color: this.global.generateColor(),
            };
            // get their trip geometry
            this.rest
              .getTrips(obj.foreign_trip_id)
              .then((tripData: any) => {
                console.log(
                  "🚀 ~ file: trips.page.ts:529 ~ TripsPage ~ .then ~ tripData:",
                  tripData
                );

                obj.foreign_trip_id_geometry = tripData.geometry;
                return obj;
              })
              .catch((error) => {
                console.error("error getting trips data ", error);
              })
              .then(() => {
                // console.log("Object", obj)
                this.expectedSwarmsArray.push(obj);

                console.log("all the expected swarm build up ");
                // console.table(this.expectedSwarmsArray);
              })
              .catch((error) => {
                console.error(
                  "ERROR geting trip data ",
                  error,
                  "forDevice Id : ",
                  element.element.users[0].device_id
                );
              });
            // add marker checkpoint for the new point of intersection
            setTimeout(() => {
              this.createCheckpoint(obj);
            }, 1000);
          } else if (found >= 0) {
            // update the user position and speed
            let updatingUser = old_array[found];
            console.warn("found positoin ", element.users[0].position);
            updatingUser.position = element.users[0].position;
            updatingUser.speed = element.users[0].speed;
          }
        } catch (error) {
          console.error("new memeber update swarm error ", error);
        }
      }
    } else if (new_array.length < old_array.length) {
      // someone left the from the trip intersection
      console.log("Someone left");
      for (let i = 0; i < old_array.length; i++) {
        let item = old_array[i].device_id;

        let found = new_array.findIndex(function (datanew) {
          return datanew.users[0].device_id == item;
        });
        if (found < 0) {
          try {
            this.deleteCheckpoint(old_array[i]);
          } catch (error) {
            console.error("error in deleting");
          }
        } else if (found >= 0) {
          // update the array position and speed
          let updatingUser = old_array[i];
          let element = new_array[found];
          updatingUser.position = element.users[0].position;
          updatingUser.speed = element.users[0].speed;
        }
      }
    } else if (new_array.length == old_array.length) {
      console.log("same users intersections ");
      // update the swarmExpected array
      for (let i = 0; i < old_array.length; i++) {
        let item = old_array[i].device_id;

        let found = new_array.findIndex(function (datanew) {
          return datanew.users[0].device_id == item;
        });
        console.warn("Founded in swarm Array", found);
        if (found < 0) {
          // console.error("Inconsitent data. Try again....")
        } else if (found >= 0) {
          console.log("user found and updating position");
          // update the array position and speed
          let updatingUser = old_array[i];
          let element = new_array[found];
          console.warn("element founded", element);
          updatingUser.position = element.users[0].position;
          updatingUser.speed = element.users[0].speed;
        }
      }
    }

    try {
      new_array.forEach((element) => {
        let new_device_id = element.users[0].device_id;
        old_array.forEach((element2) => {
          if (element2.device_id == new_device_id) {
            // update the position
            element2.position = element.users[0].position;
            element2.speed = element.users[0].speed;
          } else {
            // update the swarm Array
          }
        });
      });
    } catch (error) {
      console.error("Error generated updating swarm array position", error);
    }
  }
  /**
   * The method helps to generate markers for meeting and leaving point of the new user
   * Additionaly, it also creates a new geofences for the similar
   * @param element A new user with user object
   */
  createCheckpoint(element: Users) {
    // here only one-one checkpoint will be added

    let marker = new L.Marker();

    marker.setIcon(this.meetingPointIconDefault);
    console.log("create checkpoint ", element);
    console.log("marker should be available here ");
    let a = this.decode(element.intersection_geometry)[0];

    marker.setLatLng([a.latitude, a.longitude]);
    marker.bindPopup("Loading...", {
      closeButton: false,
      className: "checkpointPopUp",
    });
    marker.addTo(this.map);
    element.checkpointMarker = marker;

    // leaving point marker
    let decode = this.decode(element.intersection_geometry);
    let b = decode[decode.length - 1];
    let leaveMarker = new L.Marker();
    leaveMarker.setIcon(this.leavingPointIcondeactive);
    leaveMarker.setLatLng([b.latitude, b.longitude]);
    leaveMarker.addTo(this.map);
    element.leavingMarker = leaveMarker;
    let overlap = this.decode(element.intersection_geometry);
    var coordinates = overlap.map(
      (waypoint) => new L.LatLng(waypoint.latitude, waypoint.longitude)
    );
    element.intersection_polyline_LatLngs = coordinates;

    // user position marker
    try {
      let userPositionMarker = new L.Marker();
      userPositionMarker.setIcon(this.otherUserPosition);
      userPositionMarker.setLatLng({
        lat: element.position.lat,
        lng: element.position.lng,
      });
      userPositionMarker.addTo(this.map);
      element.marker = userPositionMarker;

      this.checkPointMarkerArray.push({
        checkpointmarker: marker,
        userMarker: userPositionMarker,
        leavingMarker: leaveMarker,
      });
    } catch (error) {
      console.error("Other icon generator ", error);
    }

    // case, when only one meeting point present
    if (this.choosenMeetingPoint == undefined) {
      // console.log("new user creating checkpoint :", this.choosenMeetingPoint)
      this.choosenMeetingPoint = element;
      element.checkpointMarker.setIcon(this.meetingPointIconActive);
      element.leavingMarker.setIcon(this.leavingPointIconActive);
      this.dynamicPolyline.setLatLngs(element.intersection_polyline_LatLngs);
    }

    // marker are click-able
    marker.on(
      "click",
      async function () {
        this.undoSelection(this.choosenMeetingPoint);
        console.log("marker clicked", marker);
        console.log(element);
        this.choosenMeetingPoint = element;
        await this.choosenMeetingPoint;
        this.suggestedSpeed = element.suggestedSpeed * 3.6;
        this.suggestedSpeed = Math.round(this.suggestedSpeed * 10) / 10;
        this.distance_to_meet_checkpoint = element.user_distanceToCover;
        await this.suggestedSpeed;
        marker.setIcon(this.swarmPointIconBig);
        console.log(this.suggestedSpeed);

        console.log("switching polyline");
        // this code snippet helps to dynamically change the polyline for the user for the choosen checkpoint
        this.dynamicPolyline.setLatLngs(element.intersection_polyline_LatLngs);
      },
      this
    );

    // add geofence for the new checkpoint
    setTimeout(() => {
      this.createGeofence(element);
    }, 2000);
  }
  currentLeg; // details for the approaching leg
  currentLegIndex = 0; // current leg index in the steps array
  NavigationalInterval;
  /**
   * it helps with the UI of navigational information
   * @param steps coordinates for leg
   */
  manualNavigation(steps) {
    this.decodedPolyline = this.decode(this.trip_polyline);
    console.log("steps provided", steps);
    if (
      this.current_position.lat == undefined ||
      this.current_position.lng == undefined
    ) {
    } else {
      this.currentLeg = steps[this.currentLegIndex];
      this.navigationMessage = this.signal.checkNavigationInformation({
        type: this.currentLeg.maneuver.type,
        name: this.currentLeg.maneuver.name,
        modifier: this.currentLeg.maneuver.modifier,
      });
      this.NavigationalInterval = setInterval(() => {
        this.mathModel.getDistanceWithBreakpoint(
          this.decodedPolyline,
          {
            latitude: this.current_position.lat,
            longitude: this.current_position.lng,
          },
          {
            latitude: this.currentLeg.location[1],
            longitude: this.currentLeg.location[0],
          }
        );
      }, 2000);

      let legDistance = this.mathModel.getDistanceWithBreakpoint(
        this.decodedPolyline,
        {
          latitude: this.current_position.lat,
          longitude: this.current_position.lng,
        },
        {
          latitude: this.currentLeg.location[1],
          longitude: this.currentLeg.location[0],
        }
      );
      if (legDistance >= 0) {
        // send all the information

        this.navigationCalculation = Math.ceil(legDistance / 10) * 10;
      } else {
        // switch to next leg
        this.navigationCalculation = 0;
        this.currentLegIndex++;
        this.currentLeg = steps[this.currentLegIndex];
        // to stop last leg distance calculation
        clearInterval(this.NavigationalInterval);
        if (this.currentLegIndex < this.steps.length) {
          this.manualNavigation(this.steps);
        } else {
          // stop the all execution
          // at the end of the route
        }
      }
    }
  }
  createGeofence(element: Users) {
    let fences = [];
    let arr = this.expectedSwarmsArray;
    let index = arr.findIndex(function (elem: Users) {
      return element.device_id == elem.device_id;
    });
    if (index < 0) {
      console.error("for new geofence id not found");
    } else {
      console.log("index found successfully :");
    }
    let meetlat = element.intersection_polyline_LatLngs[0].latitude;
    let meetlng = element.intersection_polyline_LatLngs[0].longitude;
    let leavelng =
      element.intersection_polyline_LatLngs[
        element.intersection_polyline_LatLngs.length - 1
      ].longitude;
    let leavelat =
      element.intersection_polyline_LatLngs[
        element.intersection_polyline_LatLngs.length - 1
      ].latitude;

    let meetfence_outside = {
      id: GConst.meeting_checkppoint_id_outside + "." + element.foreign_trip_id,
      latitude: meetlat,
      longitude: meetlng,
      radius: GConst.meeting_checkppoint_radius_outside,
      transitionType: 1,
      notification: {
        id: 333,
        title: "",
        text: "",
        openAppOnClick: false,
      },
    };
    fences.push(meetfence_outside);
    let meetfence_inside = {
      id: GConst.meeting_checkppoint_id_inner + "." + index,
      latitude: meetlat,
      longitude: meetlng,
      radius: GConst.checkpoint_radius_inner,
      transitionType: 1,
      notification: {
        id: index,
        title: "",
        text: "",
        openAppOnClick: false,
      },
    };
    fences.push(meetfence_inside);
    let leavefence_outside = {
      id: GConst.leaving_checkppoint_id_outside + "." + index,
      latitude: leavelat,
      longitude: leavelng,
      radius: GConst.leaving_checkppoint_radius_outside,
      transitionType: 1,
      notification: {
        id: index,
        title: "",
        text: "",
        openAppOnClick: false,
      },
    };
    fences.push(leavefence_outside);
    let leavefence_inside = {
      id: GConst.leaving_checkppoint_id_inner + "." + index,
      latitude: leavelat,
      longitude: leavelng,
      radius: GConst.checkpoint_radius_inner,
      transitionType: 1,
      notification: {
        id: index,
        title: "",
        text: "",
        openAppOnClick: false,
      },
    };
    fences.push(leavefence_inside);
    if (this.platform.is("android")) {
      this.platform.ready().then((succ) => {
        try {
          this.geofence.addOrUpdate(fences).then(
            (success) => {
              console.log("fences added", fences);
            },
            (error) => {
              console.log("error creating geofences ", error);
            }
          );
        } catch (error) {
          console.log("error creating geofences", error);
        }
      });
    }
  }
  /**
   * FCm message subscriber
   */
  fcmSubscriber() {
    this.app._fcm_observer.subscribe(
      (data_fcm) => {
        console.log("[fcm] new user trip intersection id ", data_fcm);
        // create new user
        if (
          data_fcm.trip_intersection_id &&
          data_fcm.trip_intersection_id != "undefined"
        ) {
          const updatedKey = "foreign_trip_id";
          const distanceKey = "distance";
          const intersectionKey = "intersections";

          this.rest
            .getTripintersection(data_fcm.trip_intersection_id, true)
            .then((data: GetTripIntersecionsResponse) => {
              console.warn("trip intersection ", data);
              data.users.forEach((user) => {
                let modifiedObject = {
                  ...user,
                  [updatedKey]: user.active_trip_id,
                  [distanceKey]: data.trip_intersection.distance,
                  [intersectionKey]: data.trip_intersection.intersections,
                };
                let found = this.userData.findIndex(function (datanew: any) {
                  return datanew.users[0].device_id == user.device_id;
                });
                console.warn("FCM user found ", found);
                if (found < 0) {
                  console.log("new user found ");
                  this.userData.push(modifiedObject);
                } else {
                  console.log("User already present");
                }
              });

              // update information for the swarm Array
              try {
                this.updateSwarmArrayInformation(this.userData);
              } catch (error) {
                console.log("ERROR from update list FCM", error);
              }
            });
        }
      },
      (error) => {
        console.error("FCM subscriber error", error);
      }
    );
  }
  /**
   * This functions helps to check the trip status of the users and update the user position
   * After which it calls updateswarm array and refresh user position
   */
  newUser() {
    //check other user trip status and update their location
    Promise.all(
      this.userData.map((user, index) => {
        // check if trip active
        console.log("user data", user);
        this.rest.getTrips(user[0].foreign_trip_id).then(
          (data: GetTripsResponse) => {
            if (data.status == "active") {
              // update the position
              // error handling !dont need it anymore

              if (
                user[0].foreign_trip_id == undefined ||
                user[0].device_id == undefined
              ) {
                console.error("undefined users found for user ", user);
                console.error("userData is ", this.userData);
                return;
              }

              return this.rest
                .getUserlocation(user[0].foreign_trip_id, user[0].device_id)
                .then(
                  (userPosition: any) => {
                    console.log("REST get/userlocation", userPosition);
                    user.position = userPosition.position;
                    user.position_timestamp = userPosition.position_timestamp;
                    console.log("UserPosition", userPosition.position);
                    return user;
                  },
                  (error) => {
                    console.error("new user get location error ", error);
                  }
                );
            } else {
              // delete user from userData array
              let a = this.userData[index].splice(index, 1);
              console.log("deleted usewr ", a);
              console.log("deleted user~ new array ", this.userData);
            }
          },
          (error) => {
            console.log("Error geting trip status", error);
          }
        );
      })
    ).then((array) => {
      console.log("newUsers~ map format", array);
      this.updateSwarmArrayInformation(this.userData);
      setTimeout(() => {
        this.refresh_users_positions();
      }, 500);
    });
  }
  /**
   * this function helps to check in an interval for the new user and calculates distance, time for the checkpoint
   */
  Newusers() {
    // this function is an interval that constantly checks for new users/ and refresh existing users positions
    try {
      this.interval2 = setInterval(() => {
        this.newUser(); // checks for any new user , old user , position and speed update
        this.dynamicSuggestedSpeedModel(); // updates the dynamic model information for the user for all the checkpoints
      }, 5000);
      this.interval2;
    } catch (error) {
      alert("interval error for new User  " + error);
    }
  }

  ionViewDidEnter() {
    this.app.fcm_message_broker.subscribe();
    console.log(
      "check before geofence count :",
      this.geofenceCount,
      "steps ",
      this.steps.length
    );

    if (this.platform.is("android")) {
      this.platform.ready().then(() => {
        try {
          this.geofence
            .onTransitionReceived()
            .pipe()
            .subscribe(
              (resp) => {
                console.log(
                  "----------------------geofence on transition received",
                  resp
                );
                resp.forEach((element) => {
                  console.log("trips get elemet for geofencing", element);
                  if (element["id"] == GConst.meeting_checkppoint_id_outside) {
                    // this is all logging texts
                    // the signals and alerts are triggered in the signaling service
                    this.logText =
                      this.logText +
                      new Date().toISOString().substring(11, 19) +
                      " Approaching a Swarm in 100 meters" +
                      "\r\n";
                    this.file
                      .writeFile(
                        this.file.externalApplicationStorageDirectory,
                        this.app.filename,
                        this.logText,
                        { append: true }
                      )
                      .then(
                        (suc) => {},
                        (err) => {}
                      );
                    this.writeLogEvents(
                      "Approaching a Swarm in 100 meters",
                      "SwarmEvents"
                    );
                    this.object = Object.assign({}, this.table);
                    this.file
                      .writeFile(
                        this.file.externalApplicationStorageDirectory,
                        this.app.fileEvent,
                        this.object,
                        { append: true }
                      )
                      .then(
                        (suc) => {},
                        (err) => {}
                      );
                  }
                  if (element["id"] == GConst.leaving_checkppoint_id_outside) {
                    this.logText =
                      this.logText +
                      new Date().toISOString().substring(11, 19) +
                      " Leaving the Swarm in 100 meters" +
                      "\r\n";
                    this.file
                      .writeFile(
                        this.file.externalApplicationStorageDirectory,
                        this.app.filename,
                        this.logText,
                        { append: true }
                      )
                      .then(
                        (suc) => {},
                        (err) => {}
                      );
                    this.writeLogEvents(
                      "Leaving the Swarm in 100 meters",
                      "SwarmEvents"
                    );
                    this.object = Object.assign({}, this.table);
                    this.file
                      .writeFile(
                        this.file.externalApplicationStorageDirectory,
                        this.app.fileEvent,
                        this.object,
                        { append: true }
                      )
                      .then(
                        (suc) => {},
                        (err) => {}
                      );
                  }
                  if (element["id"] == GConst.destination_id) {
                    this.logText =
                      this.logText +
                      new Date().toISOString().substring(11, 19) +
                      " You just reached your Destination" +
                      "\r\n";
                    this.file
                      .writeFile(
                        this.file.externalApplicationStorageDirectory,
                        this.app.filename,
                        this.logText,
                        { append: true }
                      )
                      .then(
                        (suc) => {},
                        (err) => {}
                      );
                    this.writeLogEvents(
                      "You just reached your Destination",
                      "TripEvents"
                    );
                    this.object = Object.assign({}, this.table);
                    this.file
                      .writeFile(
                        this.file.externalApplicationStorageDirectory,
                        this.app.fileEvent,
                        this.object,
                        { append: true }
                      )
                      .then(
                        (suc) => {},
                        (err) => {}
                      );
                    setTimeout(() => {
                      console.log("element[id] == 300 go home calles");
                      this.goHome("completed");
                    }, 6000);
                  }
                  if (
                    element["radius"] ==
                    GConst.leaving_checkppoint_radius_outside
                  ) {
                    this.logText =
                      this.logText +
                      new Date().toISOString().substring(11, 19) +
                      " " +
                      resp[0].notification.title +
                      " " +
                      resp[0]["notification"]["text"] +
                      "\r\n";
                    this.file
                      .writeFile(
                        this.file.externalApplicationStorageDirectory,
                        this.app.filename,
                        this.logText,
                        { append: true }
                      )
                      .then(
                        (suc) => {},
                        (err) => {}
                      );
                    this.writeLogEvents(
                      element.notification.title +
                        " " +
                        resp[0]["notification"]["text"],
                      "TurnbyTurnNavigation"
                    );
                    console.log("radius 99 ", resp[0]["notification"]["text"]);
                    //

                    //
                    this.object = Object.assign({}, this.table);
                    this.file
                      .writeFile(
                        this.file.externalApplicationStorageDirectory,
                        this.app.fileEvent,
                        this.object,
                        { append: true }
                      )
                      .then(
                        (suc) => {},
                        (err) => {}
                      );
                  }
                  if (element["id"] == GConst.meeting_checkppoint_id_inner) {
                    this.card = "3";
                    this.logText =
                      this.logText +
                      new Date().toISOString().substring(11, 19) +
                      " Just reached Checkpoint" +
                      "\r\n";
                    this.file
                      .writeFile(
                        this.file.externalApplicationStorageDirectory,
                        this.app.filename,
                        this.logText,
                        { append: true }
                      )
                      .then(
                        (suc) => {},
                        (err) => {}
                      );
                    this.writeLogEvents(
                      "Just reached Checkpoint",
                      "SwarmEvents"
                    );
                    this.object = Object.assign({}, this.table);
                    this.file
                      .writeFile(
                        this.file.externalApplicationStorageDirectory,
                        this.app.fileEvent,
                        this.object,
                        { append: true }
                      )
                      .then(
                        (suc) => {},
                        (err) => {}
                      );
                  }
                  if (element["id"] == GConst.leaving_checkppoint_id_inner) {
                    this.card = "1";
                    this.logText =
                      this.logText +
                      new Date().toISOString().substring(11, 19) +
                      " Just reached Breakoff point" +
                      "\r\n";
                    this.file
                      .writeFile(
                        this.file.externalApplicationStorageDirectory,
                        this.app.filename,
                        this.logText,
                        { append: true }
                      )
                      .then(
                        (suc) => {},
                        (err) => {}
                      );
                    this.writeLogEvents(
                      "Just reached Breakoff point",
                      "SwarmEvents"
                    );
                    this.object = Object.assign({}, this.table);
                    this.file
                      .writeFile(
                        this.file.externalApplicationStorageDirectory,
                        this.app.fileEvent,
                        this.object,
                        { append: true }
                      )
                      .then(
                        (suc) => {},
                        (err) => {}
                      );
                  }
                });
                //send the response to the signal service
                try {
                  this.signal.signaling(
                    resp,
                    this.finalDistance,
                    this.time,
                    this.choosenMeetingPoint
                  );
                  setTimeout(() => {
                    this.signal.getNavigationalInformation().then((data) => {
                      console.log("directional message :", data);
                      this.navigationMessage = data;
                      if (this.legInProcess) {
                        clearInterval(this.legInterval);
                        this.legInProcess = false;
                      }
                      console.log("response from geofencing listener", resp);

                      this.calculateLegdistance(resp);

                      console.log(
                        "Navigation information is : ",
                        this.navigationMessage
                      );
                    });
                    // for navigational signs for UI
                    this.signal.getNavigationalSigns().then((data) => {
                      this.directionalIcon = data;
                      console.log(
                        "---------directionalIcon",
                        this.directionalIcon
                      );
                    });
                  }, 500);
                } catch (error) {
                  console.log("Error recieving signaling information ", error);
                }
              },
              (error) => {
                console.log(
                  "error in listening to geofence subscription",
                  error
                );
              }
            );
        } catch (error) {
          console.log("ion view did enter geofence transition recieved", error);
        }
      });
    }

    this.expectedSwarmsArray;

    try {
      console.log("Loading map .....");

      this.loadmap();
    } catch (error) {
      console.error("Error loading map", error);
    }

    setTimeout(() => {
      this.interval1 = setInterval(() => {
        console.log("............... INTERVAL   1......................");
        try {
          this.createCircle();
        } catch (error) {
          console.error("createcircle error");
        }
        try {
          this.distanceCalculator();
        } catch (error) {
          console.error("Distance calc error", error);
        }
        try {
          this.updateUserPosition();
        } catch (error) {
          console.error("UpdateUserPosition error");
        }
      }, 3000);

      this.interval1;
      // initiate the userlist
      // this.userList = this.users_positions;
      try {
        this.Newusers();
      } catch (error) {
        console.error("error newUser" + error);
      }
    }, 3000);
  }
  // here only the updated swarm array list should be passed
  dynamicSuggestedSpeedModel() {
    try {
      let chossed_route_id = this.trip_id;
      let array = this.expectedSwarmsArray;
      console.log("array", array);
      array.forEach(async (element: Users) => {
        // this is the calculation check for static model
        // calculate distance for the expexcted swarm
        console.log("element", element);

        console.log(this.current_position);
        if (
          this.current_position.lat == undefined ||
          this.current_position.lng == undefined
        ) {
          console.log(this.current_position);
          return;
        }

        var distanceToCover_forSwarm = this.mathModel.getDistanceWithBreakpoint(
          this.decode(element.foreign_trip_id_geometry),
          { latitude: element.position.lat, longitude: element.position.lng },
          this.decode(element.intersection_geometry)[0]
        );
        // calculate distance for the user
        var distanceToCover_forUser = this.mathModel.getDistanceWithBreakpoint(
          this.decode(element.trip_id_geometry),
          {
            latitude: this.current_position.lat,
            longitude: this.current_position.lng,
          }, // ! here we need to have current location of the rider
          this.decode(element.intersection_geometry)[0]
        );
        element.user_distanceToCover = distanceToCover_forUser;
        console.log(
          "distave for swarm ",
          distanceToCover_forSwarm,
          "distance for user ",
          distanceToCover_forUser
        );
        // calculate Time required to reach swarm
        var ETA_forExpectedSwarm = this.mathModel.calculateETADynamic(
          distanceToCover_forSwarm,
          element.speed
        );
        element.ETA_swarm = ETA_forExpectedSwarm;
        var ETA_forUser = this.mathModel.calculateETADynamic(
          distanceToCover_forUser,
          this.currentSpeed
        );
        element.ETA_user = ETA_forUser;
        element.isAbleToMakeSwarm = this.mathModel.trips_criteria(
          ETA_forUser,
          ETA_forExpectedSwarm
        );

        let suggestedspeed = this.mathModel.calculateSuggestedSpeed(
          distanceToCover_forUser,
          ETA_forExpectedSwarm
        );
        var length = this.decode(element.intersection_geometry).length;
        let leavingpoint_distance = this.mathModel.getDistanceWithBreakpoint(
          this.decode(element.trip_id_geometry),
          {
            latitude: this.current_position.lat,
            longitude: this.current_position.lng,
          }, // ! here we need to have current location of the rider
          this.decode(element.intersection_geometry)[length - 1]
        );
        element.user_distance_to_leaving_point = leavingpoint_distance;
        var ETA_toLeavingPoint = this.mathModel.calculateETADynamic(
          leavingpoint_distance,
          this.currentSpeed
        );
        element.user_ETA_to_leaving_point = ETA_toLeavingPoint;
        element.suggestedSpeed = suggestedspeed;
        await element.suggestedSpeed;

        if (this.choosenMeetingPoint !== undefined) {
          console.log("choosen device id ", this.choosenMeetingPoint.device_id);
          if (this.choosenMeetingPoint.device_id == element.device_id) {
            this.suggestedSpeed = suggestedspeed * 3.6;
            this.suggestedSpeed = Math.round(this.suggestedSpeed * 10) / 10;

            console.log("for the choosen checkpoint ", this.suggestedSpeed);
          }
        }

        console.log("suggested speed ", element.suggestedSpeed);
      });
      this.refreshMarkerPopup();

      // here the suggested speed will be calculated
    } catch (error) {
      alert("dynamic error in function " + error);
    }
  }
  ionViewWillLeave() {
    console.log("ionviewwill leave trips");

    document.getElementById("map_trips").outerHTML = "";
    //clear intervals, stop map locating before leaving the page
    console.log("clearing interval trips");
    clearInterval(this.interval1);
    clearInterval(this.interval2);
    clearInterval(this.geoInterval);
    clearInterval(this.legInterval);
    this.events.event_stop();
    // this.swarmMessageSubscription.unsubscibe();
    // this.checkpointMessageSubscription.unsubscibe();
    // this.events.set_cercle(2);
    this.map.stopLocate();
    if (this.platform.is("android")) {
      console.log("stoping nearbyservices");
      NearbyConnections.stopService(
        function () {
          console.log("[NEARBYCONNECTION] Stopped successful");
        },
        function () {
          console.error("[NEARBYCONNECTION] failed to stop");
        },
        this.rest.deviceId
      );
    }
  }
  ionViewDidLeave() {
    console.log("ionviewDid leave trips page");
    clearInterval(this.interval1);
    clearInterval(this.interval2);
    clearInterval(this.geoInterval);
    clearInterval(this.legInterval);
    this.app.fcm_message_broker.unsubscribe();
    if (this.platform.is("android")) {
      this.geofence.removeAll().then(() => console.log("geofence removed"));
    }
  }
  // it helps to create new checkpoint and geofence for the new user or meeting point and laso draw polyline
  DrawNewPolyline(Overlapsegeometry) {
    //draw new polyline when a second user with overlapse joins
    console.log("DrawNewPolyline");
    var newMeetlat;
    var newMeetlng;
    var newLeavelat;
    var newLeavelng;

    this.overlapse = this.decode(Overlapsegeometry);
    var coordinates = this.overlapse.map(
      (waypoint) => new L.LatLng(waypoint.latitude, waypoint.longitude)
    );

    this.overlapsePolyline = L.polyline(coordinates, {
      color: "green",
      weight: 8,
      opacity: 0.9,
      lineJoin: "round",
    });

    this.overlapsePolyline.on("click", (e) => {});
    this.overlapsePolyline.addTo(this.map);
    //get the new meeting point coords
    newMeetlat = this.overlapse[0].latitude;
    newMeetlng = this.overlapse[0].longitude;
    this.meetptss = {
      lat: this.overlapse[0].latitude,
      lng: this.overlapse[0].longitude,
    };
    console.log("Meeting point:", this.meetptss);
    newLeavelat = this.overlapse[this.overlapse.length - 1].latitude; //gets the last latitude of the intersection
    newLeavelng = this.overlapse[this.overlapse.length - 1].longitude; //gets the last langtitude of the intersection
    this.leaveptss = { lat: newLeavelat, lng: newLeavelng };
    console.log("Leaving point", this.leaveptss);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 2,
      defaultLocale: "de_DE",
    };
    if (this.platform.is("android")) {
      //street names
      this.nativeGeocoder.reverseGeocode(newMeetlat, newMeetlng, options).then(
        (result) => {
          if (result[0].thoroughfare == "") {
            this.meetingStreet = result[1].thoroughfare;
          } else {
            this.meetingStreet = result[0].thoroughfare;
          }
        },
        (error) => {
          console.error("Error geting street name", error);
        }
      );
      this.nativeGeocoder
        .reverseGeocode(newLeavelat, newLeavelng, options)
        .then(
          (result) => {
            if (result[0].thoroughfare == "") {
              this.leavingStreet = result[1].thoroughfare;
            } else {
              this.leavingStreet = result[0].thoroughfare;
            }
          },
          (error) => {
            console.error("Error getting street name", error);
          }
        )
        .then(() => {
          //new geofences
          this.addTurnNavigation(
            GConst.meeting_checkppoint_id_outside,
            100,
            newMeetlat,
            newMeetlng,
            this.meetingStreet,
            "",
            "",
            GConst.meeting_checkppoint_radius_outside
          );
          this.addTurnNavigation(
            GConst.leaving_checkppoint_id_outside,
            400,
            newLeavelat,
            newLeavelng,
            this.leavingStreet,
            "",
            "",
            GConst.leaving_checkppoint_radius_outside
          );
          this.addTurnNavigation(
            GConst.meeting_checkppoint_id_inner,
            125,
            newMeetlat,
            newMeetlng,
            this.meetingStreet,
            "",
            "",
            GConst.checkpoint_radius_inner
          );
          this.addTurnNavigation(
            GConst.leaving_checkppoint_id_inner,
            425,
            newLeavelat,
            newLeavelng,
            this.leavingStreet,
            "",
            "",
            GConst.checkpoint_radius_inner
          );
        });
    }
  }
  //function create geofences
  addTurnNavigation(id, idx, lat, lng, modifier, type, str, radius) {
    if (this.platform.is("android")) {
      let fencess = [
        {
          id: id,
          latitude: lat,
          longitude: lng,
          radius: radius,
          transitionType: 1,
          notification: {
            id: idx,
            title: type + " " + modifier,
            text: str,
            openAppOnClick: false,
          },
        },
      ];
      console.log("geofence in addTurn Navigation in trips");
      this.platform.ready().then(() => {
        this.geofence.addOrUpdate(fencess).then(
          () => console.log(fencess, "NavigationGeofence added in trip"),
          (err) => {
            console.log("Turn Geofences failed to add in trip err");
            this.logText =
              this.logText +
              new Date().toISOString().substring(11, 19) +
              " Turn Geofences failed to add" +
              err +
              "\r\n";
          }
        );
      });
    }
  }
  /**
   * TO remopve the polyline
   */
  deleteDraw() {
    console.log("DEleteDraw");
    this.map.removeLayer(this.overlapsePolyline);
  }

  /**
   * loads map on trip page with rote information and markers
   */
  loadmap() {
    console.log("in loadmap function ");

    this.map = L.map("map_trips");
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {}).addTo(this.map);

    this.decodedPolyline = this.decode(this.trip_polyline);

    var coordinates = this.decodedPolyline.map(
      (waypoint) => new L.LatLng(waypoint.latitude, waypoint.longitude)
    );

    let polyline = L.polyline(coordinates, {
      color: "grey",
      weight: 8,
      opacity: 0.9,
      lineJoin: "round",
    });

    this.dynamicPolyline = L.polyline([], {
      color: "green",
      weight: 8,
      opacity: 0.9,
      lineJoin: "round",
    });

    polyline.on("click", (e) => {});
    this.dynamicPolyline.on("click", (e) => {});
    polyline.addTo(this.map);
    this.dynamicPolyline.addTo(this.map);

    this.map.fitBounds(polyline.getBounds());
    L.marker([this.endpoint.lat, this.endpoint.lng], {
      icon: this.destinationIcon,
    }).addTo(this.map);
    L.marker([this.startpoint.lat, this.startpoint.lng], {
      icon: this.startMarkerIcon,
    }).addTo(this.map);

    this.marker = new L.Marker();
    this.marker2 = new L.Marker();

    //watch user
    this.map
      .locate({
        setView: true,
        enableHighAccuracy: true,
        watch: true,
        timeout: 10000,
        maximumAge: 5000,
      })
      .on(
        "locationfound",
        function (e) {
          var radius = e.accuracy;
          // e speed vector unit in m/sec
          console.log("speed", e.speed);
          console.log("Loadmap position", e);

          this.currentSpeed = e.speed; //  the unit fom m/sec
          console.log("Location user", e.latlng);
          this.marker.setLatLng(e.latlng);
          this.marker.bindPopup(
            "Leaflet locationfound" + this.marker.getLatLng()
          );
          this.marker.setIcon(this.myPositionIcon);
          this.current_position.lat = e.latlng.lat;
          this.current_position.lng = e.latlng.lng;

          this.marker.addTo(this.map);
          try {
            if (
              this.choosenMeetingPoint != "undefined" &&
              this.choosenMeetingPoint != undefined
            ) {
              // when there is a checkpoint available and selected
              if (
                this.choosenMeetingPoint.suggestedSpeed >= 0 &&
                !Number.isNaN(this.choosenMeetingPoint.suggestedSpeed)
              ) {
                let sSpeed = this.choosenMeetingPoint.suggestedSpeed;
                let SpeedDeviationFactor = 6;
                let lowerLimit = sSpeed - SpeedDeviationFactor;
                let upperLimit = sSpeed + SpeedDeviationFactor;

                if (this.showCurrentSpeed < lowerLimit) {
                  this.showCurrentSpeedColor = "orange";
                } else if (
                  this.showCurrentSpeed >= lowerLimit &&
                  this.showCurrentSpeed < upperLimit
                ) {
                  this.showCurrentSpeedColor = "green";
                } else {
                  this.showCurrentSpeedColor = "red";
                }
              } else {
                // whne the meeting checkpoint has already been crossed
                this.showCurrentSpeedColor = "black";
              }
            } else {
              // when no checkpoint is give or selected
              this.showCurrentSpeedColor = "black";
            }
          } catch (error) {
            console.error("Speed UI error : ", error);
          }
          if (
            Number.isNaN(this.currentSpeed) ||
            this.currentSpeed == undefined ||
            this.currentSpeed == null
          ) {
            this.gaugeValue = 0;
            this.currentSpeed = 0;
            this.showCurrentSpeed = this.currentSpeed;
          } else {
            this.showCurrentSpeed = this.currentSpeed * 3.6; // convert in kph
            this.showCurrentSpeed = Math.round(this.showCurrentSpeed * 10) / 10;
          }

          if (this.cercleFlag) {
            this.c.setLatLng(e.latlng);
          }
          if (radius > 150) {
            this.accuracyMarkerFlag = true;
            this.marker.bindPopup("Low accuracy").openPopup();
          } else {
            if (this.accuracyMarkerFlag) {
              // this.accuracyMarker.remove()
              this.marker.closePopup();
            }
            this.accuracyMarkerFlag = !this.accuracyMarkerFlag;
          }
        },
        this
      );
    this.map.on(
      "locationerror",
      function (e) {
        this.onLocationError();
        this.geolocation
          .getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 10000,
          })
          .then((resp) => {
            this.current_position.lat = resp.coords.latitude;
            this.current_position.lng = resp.coords.longitude;
            // update the marker
            if (this.marker) {
              this.marker.setLatLng({
                lat: this.current_position.lat,
                lng: this.current_position.lng,
              });
            }
          })
          .catch((error) => {
            console.error("Error with geolocation");
          });
      },
      this
    );
    // --------------------

    // stop following the icon when clicked on map
    const click = this.map.on("drag", (e) => {
      //console.log("following icon has been turned off")

      //console.log("event is ", e)
      this.map.locate({ setView: false });
      this.cameraTracker = false;
      // console.log("cameraTracker", this.cameraTracker);
    });

    // Add all the meeting points
    try {
      this.createCheckpoints();
    } catch (error) {
      console.log("error creating checkpoints", error);
    }
  }
  legInterval;
  legInProcess: boolean = false;
  /**
   * this function helps to calculate leg distance untill the next leg is listened from the geofence
   * @param resp data of geofence for turns geocoordinates
   */

  calculateLegdistance(resp) {
    try {
      this.legInProcess = true; // flag for the distance calculation
      let path = this.decode(this.trip_polyline);
      this.legInterval = setInterval(() => {
        let distance_of_leg = this.mathModel.getDistanceWithBreakpoint(
          path,
          {
            latitude: this.current_position.lat,
            longitude: this.current_position.lng,
          },
          { latitude: resp[0].latitude, longitude: resp[0].longitude }
        );
        if (distance_of_leg >= 0) {
          this.navigationCalculation = Math.ceil(distance_of_leg / 10) * 10;
        } else {
          this.navigationCalculation = 0;
        }
      }, 2000);
    } catch (error) {
      console.error("error calculating leg distance", error);
    }
  }
  // creates all checkpoints geofence and related marker and UI
  createCheckpoints() {
    console.log("creatingcheckpoints");

    let arr = this.expectedSwarmsArray;
    arr.forEach((element: Users) => {
      let marker;
      marker = new L.Marker();

      marker.setIcon(this.meetingPointIconDefault);
      let a = this.decode(element.intersection_geometry)[0];
      marker.setLatLng([a.latitude, a.longitude]);
      // ! might need better infotmation on the popup
      marker.bindPopup("Loading...", {
        closeButton: false,
        className: "checkpointPopUp",
      });
      marker.addTo(this.map);
      element.checkpointMarker = marker;
      // leaving point marker
      let decode = this.decode(element.intersection_geometry);
      let b = decode[decode.length - 1];
      let leaveMarker = new L.Marker();
      leaveMarker.setIcon(this.leavingPointIcondeactive);
      leaveMarker.setLatLng([b.latitude, b.longitude]);
      leaveMarker.addTo(this.map);
      element.leavingMarker = leaveMarker;

      let overlap = this.decode(element.intersection_geometry);
      var coordinates = overlap.map(
        (waypoint) => new L.LatLng(waypoint.latitude, waypoint.longitude)
      );
      element.intersection_polyline_LatLngs = coordinates;
      // condition when default selection happens when transiting from tripproposals page to trips page
      if (this.choosenMeetingPoint.device_id == element.device_id) {
        this.suggestedSpeed = this.choosenMeetingPoint.suggestedSpeed * 3.6;
        this.suggestedSpeed = Math.round(this.suggestedSpeed * 10) / 10;
        this.distance_to_meet_checkpoint = element.user_distanceToCover;
        this.dynamicPolyline.setLatLngs(element.intersection_polyline_LatLngs);
        marker.setIcon(this.meetingPointIconActive);
        leaveMarker.setIcon(this.leavingPointIconActive);
      }
      // user position marker
      try {
        let userPositionMarker = new L.Marker();
        let a = L.icon({
          iconUrl: "../assets/content/images/swarm1.png",
          iconSize: [32, 32], // size of the icon
        });
        userPositionMarker.setIcon(this.otherUserPosition);
        console.log();
        console.log("other user position ", element);
        userPositionMarker.setLatLng({
          lat: element.position.lat,
          lng: element.position.lng,
        });
        console.log();

        userPositionMarker.addTo(this.map);
        element.marker = userPositionMarker;
        // contains information about the user and its checkpoint
        this.checkPointMarkerArray.push({
          checkpointmarker: marker,
          userMarker: userPositionMarker,
          leavingMarker: leaveMarker,
        });
      } catch (error) {
        console.error("errior generating user marker ", error);
      }

      // marker are clickable
      marker.on(
        "click",
        async function () {
          // ! undo selected marker
          this.undoSelection(this.choosenMeetingPoint);
          console.log("marker clicked", marker);
          console.log(element);
          this.choosenMeetingPoint = element;
          this.choosenMeetingPoint;
          this.suggestedSpeed = element.suggestedSpeed * 3.6;
          this.suggestedSpeed = Math.round(this.suggestedSpeed * 10) / 10;
          this.distance_to_meet_checkpoint = element.user_distanceToCover;
          marker.setIcon(this.meetingPointIconActive);
          element.leavingMarker.setIcon(this.leavingPointIconActive);
          console.log("selected meeting point ", element);

          console.log("switching polyline");
          // this code snippet helps to dynamically change the polyline for the user for the choosen checkpoint

          this.dynamicPolyline.setLatLngs(
            element.intersection_polyline_LatLngs
          );
        },
        this
      );
      console.log("from checkpoint", element);
    });
  }
  // this function helps to undo the selected marker by updating the unselected checkpoint icon
  undoSelection(meetingpoint) {
    if (
      meetingpoint &&
      meetingpoint != null &&
      meetingpoint != undefined &&
      meetingpoint != "undefined"
    ) {
      let selected = meetingpoint.checkpointMarker;
      selected.setIcon(this.meetingPointIconDefault);
      let leaveSelected = meetingpoint.leavingMarker;
      leaveSelected.setIcon(this.leavingPointIcondeactive);

      // animation stop can be done here
    }
  }

  /**
   *
   * @param element User element from the expectedswarm array which needs to be deleted
   *
   * @returns void
   *
   * It helps to remove checkpoint from the map and accordinly update the other checkpoint
   * arrays
   */
  deleteCheckpoint(element: Users) {
    // remove checkpoint marker
    let marker = element.checkpointMarker;
    // delete from the global marker array
    let index = this.checkPointMarkerArray.findIndex(function (data) {
      return marker._leaflet_id == data.checkpointmarker._leaflet_id;
    });
    this.checkPointMarkerArray.splice(index, 1);
    // remove from the marker array
    element.checkpointMarker.remove();
    element.leavingMarker.remove();
    this.map.removeLayer(element.marker);
    this.map.removeLayer(element.leavingMarker);
    // element.marker.remove()
    // remove from the array of expected swarms
    let i = this.expectedSwarmsArray.findIndex(function (data) {
      return data.device_id == element.device_id;
    });

    this.expectedSwarmsArray.splice(i, 1);
    console.log("Updated swarm array ", this.expectedSwarmsArray);
    // if the deleted swarm is the choosen one
    console.log(
      "deleting for element",
      element,
      "checkpoint at this point ",
      this.choosenMeetingPoint
    );
    if (
      this.expectedSwarmsArray.length !== 0 &&
      this.choosenMeetingPoint != undefined
    ) {
      if (this.choosenMeetingPoint.device_id == element.device_id) {
        this.dynamicPolyline.setLatLngs([]);
        this.suggestedSpeed = undefined;
        this.distance_to_meet_checkpoint = 0;
        if (this.expectedSwarmsArray.length !== 0) {
          this.choosenMeetingPoint = this.expectedSwarmsArray[0];
          this.choosenMeetingPoint.checkpointMarker.setIcon(
            this.meetingPointIconActive
          );
          this.choosenMeetingPoint.leavingMarker.setIcon(
            this.leavingPointIconActive
          );
          this.dynamicPolyline.setLatLngs(
            this.choosenMeetingPoint.intersection_polyline_LatLngs
          );
        } else {
          this.choosenMeetingPoint = undefined;
        }
      }
    } else {
      console.log("length", this.expectedSwarmsArray.length);
      console.log(this.choosenMeetingPoint);
      this.choosenMeetingPoint = undefined;
      this.dynamicPolyline.setLatLngs([]);
      this.suggestedSpeed = undefined;
      this.distance_to_meet_checkpoint = 0;
    }
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  /**
   * @return void - it updates users own position and speed
   */
  updateUserPosition(): void {
    let pos = {
      lat: this.current_position.lat,
      lng: this.current_position.lng,
    };
    console.log("update own position");
    console.warn("Position is ", pos);
    if (pos.lat !== undefined && pos.lng !== undefined) {
      if (
        this.currentSpeed == null ||
        this.currentSpeed == undefined ||
        this.currentSpeed < 0 ||
        Number.isNaN(this.currentSpeed)
      ) {
        // ! take a look
        this.currentSpeed = 0;
      }

      this.rest
        .postUserlocation(
          this.trip_id,
          this.rest.userId,
          pos,
          this.currentSpeed
        )
        .then(
          (data) => {
            console.log("user position updated", data);
          },
          (error) => {
            console.error("Error updarting user position:", error);
          }
        );
    } else {
      console.error("Users Postion undefined");
    }
  }
  createCircle() {
    // here all the circle action hapens to show if the user is in swarm
    try {
      if (this.events.getUpdated_cercle() == 1) {
        this.cercleFlag = true;
        this.showSwarmInformation = true;
        this.border_color = "orange";
        this.numberOfMembersInSwarm = this.events.getSwarmLength();

        this.c.setLatLng({
          lat: this.current_position.lat,
          lng: this.current_position.lng,
        });
        this.c.setRadius(50);
        this.c.addTo(this.map);
        this.c.setStyle({ color: "yellow" });
        this.suggestedSpeed = undefined;
      } else if (this.events.getUpdated_cercle() == 2) {
        // Case : not in swarm
        // console.log("NO circle present");
        this.border_color = "white";
        this.showSwarmInformation = false;
        this.numberOfMembersInSwarm = 0;
        this.cercleFlag = false;
        this.c.remove();
      }
    } catch (error) {
      alert("Error generated while creating a circle error : " + error);
    }
  }
  /**
   * returns an error when geolocation can not fetch user location
   */
  async onLocationError() {
    console.error("error geting map location ");
    /* let toast = await this.toastController.create({
      message: "ERROR getting geolocation",
      position: "middle",
      duration: 4000,
    }); */
    //  await toast.present();
  }
  /**
   * It again brings the screen of the user to current user's location ~ Go to current GPS location
   * @param $event map click event or gps relocation button event
   */
  switchoncamera($event) {
    this.cameraTracker = true;
    this.map.setView({
      lat: this.current_position.lat,
      lng: this.current_position.lng,
    });
    this.map.locate({ setView: true });
  }

  load_positions(positions) {
    console.log("user positions are ", positions);
  }

  goHome(tripstatus) {
    //stop services and mark trip and user as done
    console.log("clicked on go home ");
    if (this.platform.is("android")) {
      NearbyConnections.stopService(
        function () {},
        function () {},
        this.rest.deviceId
      );
    }

    // ! dont need anymore
    if (
      this.currentSpeed == null ||
      this.currentSpeed == undefined ||
      this.currentSpeed < 0 ||
      Number.isNaN(this.currentSpeed)
    ) {
      // ! take a look
      this.currentSpeed = 0;
    }

    this.rest
      .putTrips(this.trip_id, tripstatus)
      .then(
        (data) => console.log("Quiting trip", data),
        (error) => {
          console.error("Error ", tripstatus, "trip");
        }
      )
      .catch((error) => {
        this.logText =
          this.logText +
          new Date().toISOString().substring(11, 19) +
          " Error: " +
          error +
          "\r\n";
        this.file.writeFile(
          this.file.externalApplicationStorageDirectory,
          this.app.filename,
          this.logText,
          { append: true }
        );
      });
    this.transfer.last_trip_deleted_successfully = true;
    this.storage.set("last_trip_deleted_successfully", true);
    this.map.off();
    this.map.remove();
    console.log("navigating started");
    this.navCtrl.navigateRoot("/home").catch((error) => {
      this.logText =
        this.logText +
        new Date().toISOString().substring(11, 19) +
        " Error: " +
        error +
        "\r\n";
      this.file
        .writeFile(
          this.file.externalApplicationStorageDirectory,
          this.app.filename,
          this.logText,
          { append: true }
        )
        .then(
          (suc) => {},
          (err) => {}
        );
    });
  }

  // function to decode trip geometr into waypoints
  decode(encoded) {
    // array that holds the points

    var points = [];
    var index = 0,
      len = encoded.length;
    var lat = 0,
      lng = 0;
    while (index < len) {
      var b,
        shift = 0,
        result = 0;
      do {
        b = encoded.charAt(index++).charCodeAt(0) - 63; //finds ascii                                                                                    //and substract it by 63
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);

      var dlat = (result & 1) != 0 ? ~(result >> 1) : result >> 1;
      lat += dlat;
      shift = 0;
      result = 0;
      do {
        b = encoded.charAt(index++).charCodeAt(0) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      var dlng = (result & 1) != 0 ? ~(result >> 1) : result >> 1;
      lng += dlng;

      points.push({ latitude: lat / 1e5, longitude: lng / 1e5 });
    }
    return points;
  }
  // this function calculate the distance between the current position of the user and his arrival point
  distanceCalculator() {
    try {
      if (this.choosenMeetingPoint) {
        this.reachable = this.choosenMeetingPoint.isAbleToMakeSwarm;
        this.numberCheck(this.choosenMeetingPoint.suggestedSpeed);
        if (this.reachable) {
          this.footerColor = "green";
        } else {
          this.footerColor = "red";
        }
      }
    } catch (e) {
      console.error("Distance calc error", e);
    }

    if (
      this.current_position.lat == this.endpoint.lat &&
      this.current_position.lng == this.endpoint.lng
    ) {
      this.distance = 0;
      return 0;
    } else {
      if (!this.decodedPolyline) {
        console.warn(
          "Decoded polyline has not been initialized, initializing...."
        );
        this.decodedPolyline = this.decode(this.trip_polyline);
      }
      //find the nearest point to you in the polyline based from your waypoints
      this.closest = findNearest(this.current_position, this.decodedPolyline);
      var i = this.decodedPolyline.indexOf(this.closest);
      console.warn(":distance calculator", this.decodedPolyline);

      // calculating distance to the checkpoint
      let currP;
      try {
        let currentPolyline = this.decodedPolyline.slice(i);
        currP = currentPolyline;
        var d = getPathLength(currentPolyline);
        let length = this.decodedPolyline.length;
        // console.log("total path length ", d);
        this.distance = this.mathModel.getDistanceWithBreakpoint(
          this.decodedPolyline,
          {
            latitude: this.current_position.lat,
            longitude: this.current_position.lng,
          },
          this.decodedPolyline[length - 1]
        );

        let ETA = this.mathModel.calculateETADynamic(
          this.distance,
          this.currentSpeed
        );
        this.yourETA = ETA;

        var dista = d;

        console.log("yourETA", this.yourETA, "distance", this.distance);
      } catch (error) {
        console.error("Distance calc error ", error);
      }
    }
  }
  /**
   * updates other user position on the map
   */
  refresh_users_positions() {
    try {
      let array: Users[] = this.expectedSwarmsArray;

      for (var i = 0; i <= array.length - 1; i++) {
        try {
          if (array[i].marker == undefined) {
            array[i].marker = new L.marker();
            if (array[i].position != undefined) {
              array[i].marker
                .setIcon(this.otherUserPosition)
                .array[i].marker.setLatLng({
                  lat: array[i].position.lat,
                  lng: array[i].position.lng,
                });
              array[i].marker.addTo(this.map);
            }
          }
        } catch (error2) {
          console.error("error updating user position~intialization", error2);
        }
        if (array[i].position != undefined) {
          array[i].marker.setLatLng({
            lat: array[i].position.lat,
            lng: array[i].position.lng,
          });
        }
      }
    } catch (error) {
      // alert("refresh error generated "+ error)
      console.error("error for updating user position", error);
    }
  }
  /**
   * refreshing marker popup information dynamically
   */
  refreshMarkerPopup() {
    let array = this.expectedSwarmsArray;
    array.forEach((element) => {
      let marker = element.checkpointMarker;
      if (marker) {
        let a = marker.getPopup().getContent();
        let reachable = "";
        if (element.isAbleToMakeSwarm) {
          reachable = "Yes";
        } else {
          reachable = "No";
        }
        let recommended_speed = this.mathModel.calculateSuggestedSpeed(
          element.user_distanceToCover,
          element.ETA_swarm
        );
        recommended_speed *= 3.6;

        let popupContent =
          "<div background-color ='black'>Reachable :" +
          reachable +
          "<br/>" +
          "Distance to checkpoint: " +
          element.user_distanceToCover +
          " m" +
          "</br>" +
          "ETA :" +
          element.ETA_user +
          " sec" +
          "<br/>" +
          "Recommended Speed " +
          Math.round(recommended_speed * 10) / 10 +
          " km/hr" +
          "</div>";
        marker.getPopup().setContent(popupContent);
        marker.getPopup().update();
      }
    });
  }
  /**
   * @not_in_use no notification to show for user
   */
  async NewUserAlert() {
    console.log("newuseralert trip");
    let alert = await this.alertCtrl.create({
      subHeader: "A new Biker is joining your Trip !",
      buttons: ["Ok"],
    });
    alert.present();
    setTimeout(() => {
      alert.dismiss();
    }, 3000);
  }
  /**
   * an alert which prompts teh suer to select if user wants to quit the trip
   */
  async presentAlert() {
    console.log(" [alert]  present ");
    //this.events.publish('log');
    let alert = await this.alertCtrl.create({
      header: "Leave the trip",
      subHeader: "Do you want to leave the trip ?",
      buttons: [
        "Dismiss",
        {
          text: "Yes",
          handler: () => {
            if (this.platform.is("android")) {
              this.writeLogs();
            }
            this.goHome("aborted");
          },
        },
      ],
    });
    alert.present();
  }

  /**
   * @return {void}
   * it generates geofence for route navigation information on UI level of application
   */
  geofenceTurns() {
    console.log("initializing geofence for all turns in steps");
    console.log("steps in trips are ", this.steps);
    let fences = [];

    this.steps.forEach((element, index) => {
      console.log("geofence steps plugin", element);
      if (this.geofenceDebug) {
        let c = new L.circle();
        c.setLatLng({
          lat: element.maneuver.location[1],
          lng: element.maneuver.location[0],
        });
        c.setRadius(GConst.navigational_radius);
        c.addTo(this.map);
        c.setStyle({ color: "blue" });
        c.bindPopup(
          "element" + element.maneuver.type + " " + element.maneuver.modifier
        );
      }
      if (
        element.maneuver.type == "new name" ||
        element.maneuver.type == "notification"
      ) {
        element.maneuver.type = "continue";
      }
      let icon = "../assets/content/images/route.png";
      if (
        element.maneuver.type == "turn" &&
        element.maneuver.modifier == "right"
      ) {
        icon = "../assets/content/images/turnRight.png";
      }
      if (
        element.maneuver.type == "turn" &&
        element.maneuver.modifier == "left"
      ) {
        icon = "../assets/content/images/turnLeft.png";
      }
      if (this.platform.is("android")) {
        let fence = {
          id: index + 1,
          latitude: element.maneuver.location[1],
          longitude: element.maneuver.location[0],
          radius: GConst.navigational_radius,
          transitionType: 1, // transition value for entering geofence radius
          notification: {
            id: index + 1,
            title: element.maneuver.type + " " + element.maneuver.modifier,
            text: element.name,
            openAppOnClick: false,
            icon: icon,
            data: {
              type: element.maneuver.type,
              modifier: element.maneuver.modifier,
              name: element.name,
            },
          },
        };
        fences.push(fence);
        // for the next step transition - used for data to be shown as soon as the last transition is finished
        // and user doesn't have to wait for next transition to show the data for the next step.
        if (index + 1 <= this.steps.length - 1) {
          let leg = this.steps[index + 1];
          let element2 = leg;
          if (this.geofenceDebug) {
            let c = new L.circle();
            c.setLatLng({
              lat: element2.maneuver.location[1],
              lng: element2.maneuver.location[0],
            });
            c.setRadius(GConst.navigational_leave_radius);
            c.addTo(this.map);
            c.setStyle({ color: "red" });
            c.bindPopup(
              "element" +
                element2.maneuver.type +
                " modifier" +
                element2.maneuver.modifier +
                " name" +
                element.name
            );
          }
          if (
            element2.maneuver.type == "new name" ||
            element2.maneuver.type == "notification"
          ) {
            element2.maneuver.type = "continue";
          }
          let icon = "../assets/content/images/route.png";
          if (
            element2.maneuver.type == "turn" &&
            element2.maneuver.modifier == "right"
          ) {
            icon = "../assets/content/images/turnRight.png";
          }
          if (
            element2.maneuver.type == "turn" &&
            element2.maneuver.modifier == "left"
          ) {
            icon = "../assets/content/images/turnLeft.png";
          }

          let fence_leave_next_leg = {
            id: index + 100,
            latitude: element2.maneuver.location[1],
            longitude: element2.maneuver.location[0],
            radius: GConst.navigational_leave_radius,
            transitionType: 2, // transition value while exiting geofence - used for listening
            notification: {
              id: index + 100,
              title: element2.maneuver.type + " " + element2.maneuver.modifier,
              text: element2.name,
              openAppOnClick: false,
              icon: icon,
              data: {
                type: element2.maneuver.type,
                modifier: element2.maneuver.modifier,
                name: element2.name,
              },
            },
          };
          fences.push(fence_leave_next_leg);
        }

        if (
          element.maneuver.type.includes("undefined") &&
          element.maneuver.type == "" &&
          element.maneuver.modifier.includes("undefined") &&
          element.maneuver.modifier == ""
        ) {
          console.error("undefined geofence notification alert ", element);
        }
      }
    });

    console.log("fences are ", fences);
    if (this.platform.is("android")) {
      this.platform.ready().then((succ) => {
        try {
          this.geofence.addOrUpdate(fences).then(
            (success) => {
              console.log("fences added", fences);
            },
            (error) => {
              console.log("error creating geofences ", error);
            }
          );
        } catch (error) {
          console.log("error creating geofences", error);
        }
      });
    }
    console.log("done initializing the geofence");
  }

  // function to add geofences from tripproposal
  async addpoint() {
    //geofence for all the checkpoint or point of intersection

    if (this.platform.is("android")) {
      let array = this.expectedSwarmsArray;
      let fences = [];
      array.forEach((element, index) => {
        let meetlat = element.intersection_polyline_LatLngs[0].lat;
        let meetlng = element.intersection_polyline_LatLngs[0].lng;
        let leavelng =
          element.intersection_polyline_LatLngs[
            element.intersection_polyline_LatLngs.length - 1
          ].lng;
        let leavelat =
          element.intersection_polyline_LatLngs[
            element.intersection_polyline_LatLngs.length - 1
          ].lat;

        let meetfence_outside = {
          id:
            GConst.meeting_checkppoint_id_outside +
            "." +
            element.foreign_trip_id,
          latitude: meetlat,
          longitude: meetlng,
          radius: GConst.meeting_checkppoint_radius_outside,
          transitionType: 1,
          notification: {
            id: index,
            title: "",
            text: "",
            openAppOnClick: false,
          },
        };
        fences.push(meetfence_outside);
        let meetfence_inside = {
          id:
            GConst.meeting_checkppoint_id_inner + "." + element.foreign_trip_id,
          latitude: meetlat,
          longitude: meetlng,
          radius: GConst.checkpoint_radius_inner,
          transitionType: 1,
          notification: {
            id: index,
            title: "",
            text: "",
            openAppOnClick: false,
          },
        };
        fences.push(meetfence_inside);
        let leavefence_outside = {
          id:
            GConst.leaving_checkppoint_id_outside +
            "." +
            element.foreign_trip_id,
          latitude: leavelat,
          longitude: leavelng,
          radius: GConst.leaving_checkppoint_radius_outside,
          transitionType: 1,
          notification: {
            id: index,
            title: "",
            text: "",
            openAppOnClick: false,
          },
        };
        fences.push(leavefence_outside);
        let leavefence_inside = {
          id:
            GConst.leaving_checkppoint_id_inner + "." + element.foreign_trip_id,
          latitude: leavelat,
          longitude: leavelng,
          radius: GConst.checkpoint_radius_inner,
          transitionType: 1,
          notification: {
            id: index,
            title: "",
            text: "",
            openAppOnClick: false,
          },
        };
        fences.push(leavefence_inside);
      });

      // TODO : add geofence in database - *done*
      try {
        this.geofence.addOrUpdate(fences).then(
          (success) => {
            console.log("fences added", fences);
          },
          (error) => {
            console.log("error creating geofences ", error);
          }
        );
      } catch (error) {
        console.log("error creating geofences", error);
      }
    }
  }
  /**
   * add destination geofence
   */
  addDestinationGeofence() {
    // geofence for destination reached
    this.addTurnNavigation(
      GConst.destination_id,
      300,
      this.lastPointRoute.latitude,
      this.lastPointRoute.longitude,
      this.endTripStreet,
      "",
      "",
      GConst.destination_radius
    );
  }

  //writelog
  writeLogEvents(event, eventtype) {
    this.coordonate = {
      position_timestamp: new Date().toISOString(),
      userID: this.rest.userId,
      Position: this.current_position,
      Event: event,
      EventType: eventtype,
    };
    this.table.push(this.coordonate);
    // console.log(this.coordonate);
    // console.log(this.table);
  }
  //write logs
  writeLogs() {
    let prevLog = this.prev;
    let __this: TripsPage = this;
    NativeLogs.getLog(10000, true, function (_logs) {
      __this.logg = prevLog + _logs;
    });
    setTimeout(() => {
      this.file
        .writeFile(
          this.file.externalApplicationStorageDirectory,
          this.app.filelog,
          this.logg,
          { append: true }
        )
        .then(
          (suc) => {},
          (err) => {}
        );
      this.prev = this.logg;
    });
  }
  /**
   * checks if the input is a not a number
   */
  numberCheck(s) {
    this.showsecondline = Number.isNaN(s);
  }

  // TODO : a subscriber function for all the properties shown in UI
  // TODO : showSpeed, suggestedSpeed // later on distance and time for units change
  // not implemented in teh code
  showCurrentSpeedSubscription = new BehaviorSubject<any>(this.currentSpeed);
  ui_showCurrentSpeed = this.showCurrentSpeedSubscription.asObservable();
  uiShowSubscriptions() {
    // current speed subscription
    this.ui_showCurrentSpeed.pipe().subscribe((speed) => {
      // speed= this.
    });

    if (!this.choosenMeetingPoint) {
      // suggested speed and everything else
    }
  }
}
