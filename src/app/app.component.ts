import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
//import { AndroidPermissionResponse, AndroidPermissionsOriginal } from '@awesome-cordova-plugins/android-permissions';
import { Geolocation } from "@awesome-cordova-plugins/geolocation/ngx";

import { SplashScreen } from "@awesome-cordova-plugins/splash-screen/ngx";
import {
  AlertController,
  Platform,
  ToastController,
  NavController,
} from "@ionic/angular";
import { AppConfig } from "./services/app-config";
import { Events } from "./services/events/events.service";
import { RestApiService } from "./services/rest-api/rest-api.service";
import { Network } from "@awesome-cordova-plugins/network/ngx";
import { OpenNativeSettings } from "@awesome-cordova-plugins/open-native-settings/ngx";
import { StatusBar } from "@awesome-cordova-plugins/status-bar/ngx";
import { AndroidPermissions } from "@ionic-native/android-permissions";
import * as uuid from "uuid";
import { File } from "@awesome-cordova-plugins/file/ngx";
import { Geofence } from "@ionic-native/geofence";
import { BluetoothLEService } from "./services/bluetoothLE/bluetooth-le.service";
// import { BluetoothSerialService } from "./services/bluetoothSerial/bluetooth-serial.service";
import { AppCenterAnalytics } from "@awesome-cordova-plugins/app-center-analytics/ngx";
import { AppCenterCrashes } from "@ionic-native/app-center-crashes";
import { CodePush } from "@awesome-cordova-plugins/code-push/ngx";
import { StorageService } from "./services/storage/storage.service";
import { TransferService } from "./services/transferdata/transfer.service";
import { Diagnostic } from "@awesome-cordova-plugins/diagnostic/ngx";
import { Router } from "@angular/router";
import { FCM } from "plugins/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM";
import { resolve } from "dns";
import { PostUserResponse } from "./interface/post-user-response";
import { BehaviorSubject } from "rxjs";
import { Logger } from "@obsidize/rx-console";
import { LoggingService } from "./services/logging/logging.service";


declare var NativeLogs: any;
declare var GooglePlayServicesChecker: any;

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {

  public appPages = [
    { title: "Home", url: "/home", icon: "home" },

  ];

  rootPage: any = "HomePage";
  public logg: any;

  pages: Array<{ title: string; component: any }>;
  dir = "file:///storage/emulated/0";
  filename = new Date().toISOString().substring(0, 19) + ".log";
  fileEvent = new Date().toISOString().substring(0, 19) + ".event";
  filelog = new Date().toISOString().substring(0, 19) + ".fullog";
  mmir;
  logText;
  disconnectSubscription;
  connectSubscription;
  check = "1";
  alert;
  toasts = [];
  id: string = uuid();
  userID;


  public fcm_message_broker = new BehaviorSubject<any>('undefined');
  _fcm_observer = this.fcm_message_broker.asObservable();

// to get the app offline or disconnected to the server 
// used for local feature testing with local stored values
  offline: boolean = false;

  // app center analytics
  success2 = function (result) {
    console.log("analytics " + result ? "enabled" : "disabled");
  };

  error2 = function (error) {
    console.error(error);
  };

  success = function () {
    console.log("APP_CENTER Event tracked");
  };

  error = function (error) {
    console.error("App center", error);
  };

  // FCM related variables 

  hasPermission: boolean;
  token: string;
  // pushPayload: import("/Users/dfki_krutarth/opensourcelabmobilityapp/plugins/cordova-plugin-fcm-with-dependecy-updated/typings/INotificationPayload").INotificationPayload;

 private  logger = new Logger('Main app component')

  constructor(
    public navCtrl: NavController,
    public geolocation: Geolocation,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public events: Events,
    public appConfig: AppConfig,
    private androidPermissions: AndroidPermissions,
    private file: File,
    private network: Network,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public restProvider: RestApiService,
    private openNativeSettings: OpenNativeSettings,
    private bluetooth: BluetoothLEService,
    public appCenterAnalytics: AppCenterAnalytics,
    public AppCenterCrashes: AppCenterCrashes,
    private codePush: CodePush,
    private transfer: TransferService,
    private storage: StorageService,
    private diagnostic: Diagnostic,
    private fcm: FCM,
    private logging : LoggingService
  ) {

    // ---------------
    console.log("----------------------APP---main----------------");

    
    
    console.log("in app constructor");
    

    this.logText =
      new Date().toISOString().substring(11, 19) + " Event Log Started \r\n";
    console.log("this.filename", this.filename)
    this.filelog = this.filelog.replace(/[:]/gi, "-");
    this.filename = this.filename.replace(/[:]/gi, "-");
    console.log("this.fileneame", this.filename)
    this.fileEvent = this.fileEvent.replace(/[:]/gi, "-");

    this.pages = [{ title: "Home", component: "HomePage" }];
    if (this.platform.is("android")) {
      this.platform.ready().then(() => {
        
        var success = function (installedAndUpdated) {
          console.log(installedAndUpdated);
          if (installedAndUpdated.status) {
            console.log("Google Play Services is installed and updated");
          } else {
            console.log("Showing user native update window");
            this.generateToast(
              "Please update your google play services for geofence to work properly"
            );
          }
        };
        var failure = function (reason) {
          console.error("error: " + reason);
        };
        GooglePlayServicesChecker.check(success, failure);

        this.AppCenterCrashes.isEnabled().then(
          (success) => {
            console.log("crash reporting is enable: ", success);
            this.AppCenterCrashes.hasCrashedInLastSession().then(
              (val) => {
                console.log("App crash reported in last session", val);
                if (val) {
                  this.AppCenterCrashes.lastSessionCrashReport().then(
                    (report) => {
                      console.log("Crash report from last session", report);
                    }
                  );
                }
              },
              (err) => {
                console.log("crash reporting is not enabled");
                console.log("error getting last crash report", err);
              }
            );
          },
          (err) => {
            console.log("problem setting crash report service", err);
          }
        );

        // this.runLogging();
        // for app analytics
        this.appCenterAnalytics
          .trackEvent("Video clicked", {
            Category: "Music",
            FileName: "favorite.avi",
          })
          .then(this.success, this.error);
        this.appCenterAnalytics.isEnabled().then(this.success2, this.error2);

        console.log("deviceID", this.id);
        // as the app starts, initiating the file creation for the javalog
        this.writeLogs();
        console.log("app component file", this.file.externalApplicationStorageDirectory, this.filelog)

        this.platform.backButton.subscribeWithPriority(
          10,
          (processNextHandler) => {
            console.log("backbutton reported from appmodue ts");

            processNextHandler();
          }
        );
        //create the log files
        this.file
          .writeFile(
            this.file.externalApplicationStorageDirectory,
            this.filelog,
            "",
            { replace: true }
          )
          .then(
            (succ) => {},
            (error) => {
              console.log("error writing file ", error);
            }
          );
        this.file
          .writeFile(
            this.file.externalApplicationStorageDirectory,
            this.filename,
            this.logText,
            { replace: true }
          )
          .then(
            (succ) => {},
            (error) => {
              console.log("error writing file ", error);
            }
          );
        this.file
          .writeFile(
            this.file.externalApplicationStorageDirectory,
            this.fileEvent,
            "",
            { replace: true }
          )
          .then(
            (succ) => {},
            (error) => {
              console.log("error writing file ", error);
            }
          );
      
      });
    }
  }


  private async runLogging() {
    console.log("runing login service manager");
    await this.platform.ready();
    this.logger.debug("runtimelogging")
    await this.logging.initialize()
    
  }

  ngOnInit() {
    this.initializeApp();
  }
  

  ngOnDestroy() {
    console.log("destroy called for app componet page ");
  }

  checkCodePush() {
    console.log("initializing code push check ");
    this.codePush
      .sync()
      .subscribe((syncStatus) => console.log("code push sync", syncStatus));

    const downloadProgress = (progress) => {
      console.log(
        `Downloaded ${progress.receivedBytes} of ${progress.totalBytes}`
      );
    };
    this.codePush
      .sync({}, downloadProgress)
      .subscribe((syncStatus) =>
        console.log("check for new packages available ", syncStatus)
      );
  }
  async checkLocationAccuracy() {
    console.log("check location accuracy");
    this.diagnostic.isGpsLocationAvailable().then((res) => {
      console.log("gpsenables or not ", res);
    });

    await this.diagnostic.isGpsLocationEnabled().then(async (succ) => {
      console.log("---------------is gps enabled ", succ);
      if (!succ) {
        this.diagnostic.registerLocationStateChangeHandler((res) => {
          console.log(" change in state of location ", res);
          // window.location.reload()
        });

        let alert = this.alertCtrl.create({
          header: "Require Permission",
          message: "Please enable Location services",
          buttons: [
            {
              text: "Settings",
              handler: async () => {
                await this.diagnostic.switchToLocationSettings();
              },
            },
          ],
        });
        (await alert).present();
        console.log("location settings open from checklocation accuracy");
      }
    });
    await this.diagnostic.getLocationAuthorizationStatus().then(async (suc) => {
      if (suc == "GRANTED") {
        console.log("getLocationAuthorizationStatuses() ", suc);
        this.generateToast("GPS check and accuracy done ");
      } else {
        console.log("getLocationAuthorizationStatuses() ", suc);
        let alert = this.alertCtrl.create({
          header: "Require Permission",
          message: "Please allow use location permission 'allow all time' ",
          buttons: [
            {
              text: "Settings",
              handler: async () => {
                await this.diagnostic
                  .requestLocationAuthorization("when_in_use")
                  .then(async (suc) => {
                    console.log("requestLocationAuthorization()", suc);
                    setTimeout(async () => {
                      await this.diagnostic
                        .requestLocationAuthorization("always")
                        .then((succ2) => {
                          console.log("requestLocationAuthorization", succ2);
                          window.location.reload();
                        });
                    }, 1000);
                  });
              },
            },
          ],
        });
        (await alert).present();
      }
    });
  }
  private async setupFCM() {
    console.log("__________FCM settings_________");

    
    await this.platform.ready();
    console.log('FCM setup started');
    if (!this.platform.is('cordova')) {
      return;
    }

    console.log('Subscribing to token updates');
    

    this.token = await this.fcm.getToken();

    console.log('getToken result: ', this.token);

    let notification = await this.fcm.onNotification().subscribe((data) => {
      console.log("FCM data", data)
      this.fcm_message_broker.next(data);
    })

    // resolve(this.token)
    return Promise.resolve(this.token)
  }

  generateToast(msg, color?, duration?) {
    const toast = {
      message: msg,
      color: color || "dark",
      duration: duration || 1000,
    };
    this.toasts.push(toast);
    const timeout = (this.toasts.length - 1) * toast.duration;
    this.show(timeout);
  }
  show(timeout) {
    setTimeout(
      async () => {
        const toast = await this.toastCtrl.create(this.toasts[0]);
        await toast.present();
        this.toasts.splice(0, 1);
      },
      timeout > 0 ? timeout + 800 : 0
    );
  }

  //function to write log
  writeLogs() {
    let __this: AppComponent = this;
    NativeLogs.getLog(1000, true, function (_logs) {
      __this.logg = _logs;
    });

    setTimeout(() => {
      this.file
        .writeFile(
          this.file.externalApplicationStorageDirectory,
          this.filelog,
          this.logg,
          { append: true }
        )
        .then(
          (suc) => {},
          (err) => {}
        );

      // this.file.writeFile(this.dir, this.filename,
      //   this.logg, {replace: true}).catch((error) => {
      //     console.log(error)
      //   })
    });
  }



  initializeApp() {
    console.log("initializing app");
    if (this.platform.is("android")) {
      this.platform
        .ready()
        .then(async () => {
         
          this.statusBar.backgroundColorByName("orange");
          this.splashScreen.hide();
          /* await this.checkInternet().then(async () => {
            if (this.network.type !== "none") {
            }
          }); */
       
        })
        .catch((error) => {
          console.log("platform not ready to be used", error);
          this.logText =
            this.logText +
            new Date().toISOString().substring(11, 19) +
            " " +
            error +
            "\r\n";
          this.generateToast("ERROR!", error);
        });
    }
    // to generate a userId
    
    if (!this.offline) {
      console.log("device is :" ,this.id);
      this.setupFCM().then((value) => {
        if (!value) {
          console.error("FCM token does not exist")
        }
        // for web app to run 
        /* if (!this.platform.is("android")) {
          this.token = "c3a5NJkQTJSaC4OeNRA_cX:APA91bHW2ooM5yOivEN8YW_x-DML5rQEro6wVv0fxeM5q6oJaPoQe_E_9d3gpByC6_-GRJb_Lt7GQu5SfYAv659_1MIaW4a9tXYVgPVdMXPxVD-aFKCldEq0nPDASsgewaijbt71MV2b"
        } */
        this.restProvider
      .getUserIdentifier(this.id, this.token)
          .then(async (value: PostUserResponse) => {
            this.userID = value["user_id"];
            console.log("userID:",this.userID)
        await this.userID;
      })
      .catch((error) => {
        console.log("server cannot process API request",error);
        this.generateToast("Sorry!, The server is down. ", "black", 30000);
      });

      }, (error) => {
        console.error("FCM error", error)
      })
      

  
}
    
  }
  connection: "offline" | "online";
  checkInternet(): Promise<void> {
    return new Promise(async (resolve) => {
      console.log("network type", this.network.type);
      let connect1sub;
      let disconnect1sub;

      //  initiating checknetwork plugin
      if (this.network.type == "none") {
        this.connection= "offline"
        // this.alertConnection("connection lost");
        connect1sub = await this.network.onConnect().subscribe((succ) => {
          console.log("network connected!", succ);
          console.log("network type", this.network.type);
          // We just got a connection but we need to wait briefly
          // before we determine the connection type. Might need to wait.
          // prior to doing any api requests as well.
          setTimeout(() => {
            // window.location.reload();
            if (this.network.type !== "none") {
              console.log("we got a connection, woohoo!");
              this.alertConnection("connected");
              // window.location.reload();
              this.connection = "online";
              this.generateToast("You are online");
            }
          }, 1000);
        });
      } else {
        this.generateToast("you are online");
        this.connection="online"
        console.error("Error type ", this.network.type)
        
        disconnect1sub = this.network.onDisconnect().subscribe(() => {
          console.log("network was disconnected :-(");
          this.alertConnection("connection lost");
          this.connection= "offline"
        });
      }
      await resolve();
    });
  }

  //Check if application having GPS access permission
  /**
   * @deprecated
   */
  checkGPSPermission() {
    this.androidPermissions
      .checkPermission("android.permission.ACCESS_BACKGROUND_LOCATION")
      .then(
        (result) => {
          console.log("Permission result ", result);

        },
        (err) => {
          this.checkLocationAccuracy();
          alert(err);
          // log error in file in case of error
          this.logText =
            this.logText +
            new Date().toISOString().substring(11, 19) +
            " CheckGPS Plugin: " +
            err +
            "\r\n";
        }
      );
  }

  requestGPSPermission() {
    //Show 'GPS Permission Request' dialogue
    console.log("request gps permission ");
    this.androidPermissions
      .requestPermissions([
        this.androidPermissions.PERMISSION.READ_PHONE_STATE,
        this.androidPermissions.PERMISSION.ACCESS_BACKGROUND_LOCATION,
        this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION,
        this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION,
        this.androidPermissions.PERMISSION.ACTIVITY_RECOGNITION,
        this.androidPermissions.PERMISSION.FOREGROUND_SERVICE,
        this.androidPermissions.PERMISSION.LOCATION_HARDWARE,
      ])
      .then(
        (success) => {
          console.log("success", success);
          // call method to turn on GPS
          // this.askToTurnOnGPS();
        },
        (error) => {
          this.splashScreen.show();
          window.location.reload();
          //Show alert if user click on 'No Thanks'
          //   alert('requestPermission Error requesting location permissions ' + error)
          console.log(
            "requestPermission Error requesting location permissions " + error
          );
          this.logText =
            this.logText +
            new Date().toISOString().substring(11, 19) +
            " Request location permissions " +
            error +
            "\r\n";
        }
      );
  }

  reload() {
    this.splashScreen.hide();
    window.location.reload();
  }

  // alert triggered when connection interupted
  async alertConnection(note) {
    let connection_alert;

    if (note == "connection lost") {
      console.log("No internet connection available");

      connection_alert = this.alertCtrl.create({
        header: "Internet warning !!",
        subHeader: "Please check your internet connection and try again",
        buttons: [
          {
            text: "Go to settings",
            handler: () => {
              this.openNativeSettings.open("wireless");
            },
          },
          {
            text: "Exit app",
            handler: () => {
              navigator["app"].exitApp();
            },
          },
        ],
      });
      (await connection_alert).present();
      setTimeout(async () => {
        // connection_alert.dismiss()
      }, 5000);
    } else if (note == "connected") {
      if (connection_alert) {
        console.log("alert id", connection_alert);
        console.log("alert found -------now dismissing");
        connection_alert.dismiss();
      }
     
    }
  }
  // toast when back online
  async toastConnect() {
    console.log("toast contrller back online");
    let toast = await this.toastCtrl.create({
      message: "Connected",
      duration: 3000,
      animated: true,
    });
    await toast.present();
    const { role } = await toast.onDidDismiss();
    console.log("app componnet toast on did dismiss", role);
  }
}
