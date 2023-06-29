(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



const routes = [
    {
        path: "",
        redirectTo: "landing",
        pathMatch: "full",
    },
    {
        path: "home",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_leaflet_smooth_marker_bouncing_dist_bundle_js"), __webpack_require__.e("src_app_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 7994)).then((m) => m.HomePageModule),
    },
    {
        path: "trip",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_leaflet_smooth_marker_bouncing_dist_bundle_js"), __webpack_require__.e("default-src_app_class_Globalfunction_Global_ts-src_app_class_MathematicalModel_mathematical-m-e07184"), __webpack_require__.e("src_app_pages_trips_trips_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/trips/trips.module */ 4629)).then((m) => m.TripsPageModule),
    },
    {
        path: "tripproposals",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_leaflet_smooth_marker_bouncing_dist_bundle_js"), __webpack_require__.e("default-src_app_class_Globalfunction_Global_ts-src_app_class_MathematicalModel_mathematical-m-e07184"), __webpack_require__.e("src_app_pages_tripproposals_tripproposals_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tripproposals/tripproposals.module */ 6652)).then((m) => m.TripproposalsPageModule),
    },
    {
        path: 'landing',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_landing-page_landing-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/landing-page/landing-page.module */ 3567)).then(m => m.LandingPagePageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 6457);
/* harmony import */ var _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/splash-screen/ngx */ 4883);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/app-config */ 3331);
/* harmony import */ var _services_events_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/events/events.service */ 1716);
/* harmony import */ var _services_rest_api_rest_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/rest-api/rest-api.service */ 9566);
/* harmony import */ var _awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/network/ngx */ 9940);
/* harmony import */ var _awesome_cordova_plugins_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/open-native-settings/ngx */ 8809);
/* harmony import */ var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/status-bar/ngx */ 1550);
/* harmony import */ var _ionic_native_android_permissions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/android-permissions */ 4107);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! uuid */ 9485);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 5453);
/* harmony import */ var _services_bluetoothLE_bluetooth_le_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/bluetoothLE/bluetooth-le.service */ 9002);
/* harmony import */ var _awesome_cordova_plugins_app_center_analytics_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @awesome-cordova-plugins/app-center-analytics/ngx */ 2542);
/* harmony import */ var _ionic_native_app_center_crashes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/app-center-crashes */ 5282);
/* harmony import */ var _awesome_cordova_plugins_code_push_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @awesome-cordova-plugins/code-push/ngx */ 5662);
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/storage/storage.service */ 6578);
/* harmony import */ var _services_transferdata_transfer_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/transferdata/transfer.service */ 907);
/* harmony import */ var _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @awesome-cordova-plugins/diagnostic/ngx */ 7666);
/* harmony import */ var plugins_cordova_plugin_fcm_with_dependecy_updated_ionic_ngx_FCM__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! plugins/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM */ 6557);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _obsidize_rx_console__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @obsidize/rx-console */ 7548);
/* harmony import */ var _services_logging_logging_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/logging/logging.service */ 4191);




 //import { AndroidPermissionResponse, AndroidPermissionsOriginal } from '@awesome-cordova-plugins/android-permissions';













 // import { BluetoothSerialService } from "./services/bluetoothSerial/bluetooth-serial.service";











let AppComponent = class AppComponent {
  constructor(navCtrl, geolocation, platform, statusBar, splashScreen, events, appConfig, androidPermissions, file, network, alertCtrl, toastCtrl, restProvider, openNativeSettings, bluetooth, appCenterAnalytics, AppCenterCrashes, codePush, transfer, storage, diagnostic, fcm, logging) {
    this.navCtrl = navCtrl;
    this.geolocation = geolocation;
    this.platform = platform;
    this.statusBar = statusBar;
    this.splashScreen = splashScreen;
    this.events = events;
    this.appConfig = appConfig;
    this.androidPermissions = androidPermissions;
    this.file = file;
    this.network = network;
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.restProvider = restProvider;
    this.openNativeSettings = openNativeSettings;
    this.bluetooth = bluetooth;
    this.appCenterAnalytics = appCenterAnalytics;
    this.AppCenterCrashes = AppCenterCrashes;
    this.codePush = codePush;
    this.transfer = transfer;
    this.storage = storage;
    this.diagnostic = diagnostic;
    this.fcm = fcm;
    this.logging = logging;
    this.appPages = [{
      title: "Home",
      url: "/home",
      icon: "home"
    }];
    this.rootPage = "HomePage";
    this.dir = "file:///storage/emulated/0";
    this.filename = new Date().toISOString().substring(0, 19) + ".log";
    this.fileEvent = new Date().toISOString().substring(0, 19) + ".event";
    this.filelog = new Date().toISOString().substring(0, 19) + ".fullog";
    this.check = "1";
    this.toasts = [];
    this.id = uuid__WEBPACK_IMPORTED_MODULE_12__();
    this.fcm_message_broker = new rxjs__WEBPACK_IMPORTED_MODULE_24__.BehaviorSubject('undefined');
    this._fcm_observer = this.fcm_message_broker.asObservable(); // to get the app offline or disconnected to the server 
    // used for local feature testing with local stored values

    this.offline = false; // app center analytics

    this.success2 = function (result) {
      console.log("analytics " + result ? "enabled" : 0);
    };

    this.error2 = function (error) {
      console.error(error);
    };

    this.success = function () {
      console.log("APP_CENTER Event tracked");
    };

    this.error = function (error) {
      console.error("App center", error);
    }; // pushPayload: import("/Users/dfki_krutarth/opensourcelabmobilityapp/plugins/cordova-plugin-fcm-with-dependecy-updated/typings/INotificationPayload").INotificationPayload;


    this.logger = new _obsidize_rx_console__WEBPACK_IMPORTED_MODULE_22__.Logger('Main app component'); // ---------------

    console.log("----------------------APP---main----------------");
    console.log("in app constructor");
    this.logText = new Date().toISOString().substring(11, 19) + " Event Log Started \r\n";
    console.log("this.filename", this.filename);
    this.filelog = this.filelog.replace(/[:]/gi, "-");
    this.filename = this.filename.replace(/[:]/gi, "-");
    console.log("this.fileneame", this.filename);
    this.fileEvent = this.fileEvent.replace(/[:]/gi, "-");
    this.pages = [{
      title: "Home",
      component: "HomePage"
    }];

    if (this.platform.is("android")) {
      this.platform.ready().then(() => {
        var success = function (installedAndUpdated) {
          console.log(installedAndUpdated);

          if (installedAndUpdated.status) {
            console.log("Google Play Services is installed and updated");
          } else {
            console.log("Showing user native update window");
            this.generateToast("Please update your google play services for geofence to work properly");
          }
        };

        var failure = function (reason) {
          console.error("error: " + reason);
        };

        GooglePlayServicesChecker.check(success, failure);
        this.AppCenterCrashes.isEnabled().then(success => {
          console.log("crash reporting is enable: ", success);
          this.AppCenterCrashes.hasCrashedInLastSession().then(val => {
            console.log("App crash reported in last session", val);

            if (val) {
              this.AppCenterCrashes.lastSessionCrashReport().then(report => {
                console.log("Crash report from last session", report);
              });
            }
          }, err => {
            console.log("crash reporting is not enabled");
            console.log("error getting last crash report", err);
          });
        }, err => {
          console.log("problem setting crash report service", err);
        }); // this.runLogging();
        // for app analytics

        this.appCenterAnalytics.trackEvent("Video clicked", {
          Category: "Music",
          FileName: "favorite.avi"
        }).then(this.success, this.error);
        this.appCenterAnalytics.isEnabled().then(this.success2, this.error2);
        console.log("deviceID", this.id); // as the app starts, initiating the file creation for the javalog

        this.writeLogs();
        console.log("app component file", this.file.externalApplicationStorageDirectory, this.filelog);
        this.platform.backButton.subscribeWithPriority(10, processNextHandler => {
          console.log("backbutton reported from appmodue ts");
          processNextHandler();
        }); //create the log files

        this.file.writeFile(this.file.externalApplicationStorageDirectory, this.filelog, "", {
          replace: true
        }).then(succ => {}, error => {
          console.log("error writing file ", error);
        });
        this.file.writeFile(this.file.externalApplicationStorageDirectory, this.filename, this.logText, {
          replace: true
        }).then(succ => {}, error => {
          console.log("error writing file ", error);
        });
        this.file.writeFile(this.file.externalApplicationStorageDirectory, this.fileEvent, "", {
          replace: true
        }).then(succ => {}, error => {
          console.log("error writing file ", error);
        });
      });
    }
  }

  runLogging() {
    var _this = this;

    return (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("runing login service manager");
      yield _this.platform.ready();

      _this.logger.debug("runtimelogging");

      yield _this.logging.initialize();
    })();
  }

  ngOnInit() {
    this.initializeApp();
  }

  ngOnDestroy() {
    console.log("destroy called for app componet page ");
  }

  checkCodePush() {
    console.log("initializing code push check ");
    this.codePush.sync().subscribe(syncStatus => console.log("code push sync", syncStatus));

    const downloadProgress = progress => {
      console.log(`Downloaded ${progress.receivedBytes} of ${progress.totalBytes}`);
    };

    this.codePush.sync({}, downloadProgress).subscribe(syncStatus => console.log("check for new packages available ", syncStatus));
  }

  checkLocationAccuracy() {
    var _this2 = this;

    return (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("check location accuracy");

      _this2.diagnostic.isGpsLocationAvailable().then(res => {
        console.log("gpsenables or not ", res);
      });

      yield _this2.diagnostic.isGpsLocationEnabled().then( /*#__PURE__*/function () {
        var _ref = (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (succ) {
          console.log("---------------is gps enabled ", succ);

          if (!succ) {
            _this2.diagnostic.registerLocationStateChangeHandler(res => {
              console.log(" change in state of location ", res); // window.location.reload()
            });

            let alert = _this2.alertCtrl.create({
              header: "Require Permission",
              message: "Please enable Location services",
              buttons: [{
                text: "Settings",
                handler: function () {
                  var _ref2 = (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                    yield _this2.diagnostic.switchToLocationSettings();
                  });

                  return function handler() {
                    return _ref2.apply(this, arguments);
                  };
                }()
              }]
            });

            (yield alert).present();
            console.log("location settings open from checklocation accuracy");
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      yield _this2.diagnostic.getLocationAuthorizationStatus().then( /*#__PURE__*/function () {
        var _ref3 = (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (suc) {
          if (suc == "GRANTED") {
            console.log("getLocationAuthorizationStatuses() ", suc);

            _this2.generateToast("GPS check and accuracy done ");
          } else {
            console.log("getLocationAuthorizationStatuses() ", suc);

            let alert = _this2.alertCtrl.create({
              header: "Require Permission",
              message: "Please allow use location permission 'allow all time' ",
              buttons: [{
                text: "Settings",
                handler: function () {
                  var _ref4 = (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                    yield _this2.diagnostic.requestLocationAuthorization("when_in_use").then( /*#__PURE__*/function () {
                      var _ref5 = (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (suc) {
                        console.log("requestLocationAuthorization()", suc);
                        setTimeout( /*#__PURE__*/(0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                          yield _this2.diagnostic.requestLocationAuthorization("always").then(succ2 => {
                            console.log("requestLocationAuthorization", succ2);
                            window.location.reload();
                          });
                        }), 1000);
                      });

                      return function (_x3) {
                        return _ref5.apply(this, arguments);
                      };
                    }());
                  });

                  return function handler() {
                    return _ref4.apply(this, arguments);
                  };
                }()
              }]
            });

            (yield alert).present();
          }
        });

        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }

  setupFCM() {
    var _this3 = this;

    return (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("__________FCM settings_________");
      yield _this3.platform.ready();
      console.log('FCM setup started');

      if (!_this3.platform.is('cordova')) {
        return;
      }

      console.log('Subscribing to token updates');
      _this3.token = yield _this3.fcm.getToken();
      console.log('getToken result: ', _this3.token);
      let notification = yield _this3.fcm.onNotification().subscribe(data => {
        console.log("FCM data", data);

        _this3.fcm_message_broker.next(data);
      }); // resolve(this.token)

      return Promise.resolve(_this3.token);
    })();
  }

  generateToast(msg, color, duration) {
    const toast = {
      message: msg,
      color: color || "dark",
      duration: duration || 1000
    };
    this.toasts.push(toast);
    const timeout = (this.toasts.length - 1) * toast.duration;
    this.show(timeout);
  }

  show(timeout) {
    var _this4 = this;

    setTimeout( /*#__PURE__*/(0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this4.toastCtrl.create(_this4.toasts[0]);
      yield toast.present();

      _this4.toasts.splice(0, 1);
    }), timeout > 0 ? timeout + 800 : 0);
  } //function to write log


  writeLogs() {
    let __this = this;

    NativeLogs.getLog(1000, true, function (_logs) {
      __this.logg = _logs;
    });
    setTimeout(() => {
      this.file.writeFile(this.file.externalApplicationStorageDirectory, this.filelog, this.logg, {
        append: true
      }).then(suc => {}, err => {}); // this.file.writeFile(this.dir, this.filename,
      //   this.logg, {replace: true}).catch((error) => {
      //     console.log(error)
      //   })
    });
  }

  initializeApp() {
    var _this5 = this;

    console.log("initializing app");

    if (this.platform.is("android")) {
      this.platform.ready().then( /*#__PURE__*/(0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this5.statusBar.backgroundColorByName("orange");

        _this5.splashScreen.hide();
        /* await this.checkInternet().then(async () => {
          if (this.network.type !== "none") {
          }
        }); */

      })).catch(error => {
        console.log("platform not ready to be used", error);
        this.logText = this.logText + new Date().toISOString().substring(11, 19) + " " + error + "\r\n";
        this.generateToast("ERROR!", error);
      });
    } // to generate a userId


    if (!this.offline) {
      console.log("device is :", this.id);
      this.setupFCM().then(value => {
        if (!value) {
          console.error("FCM token does not exist");
        } // for web app to run 

        /* if (!this.platform.is("android")) {
          this.token = "c3a5NJkQTJSaC4OeNRA_cX:APA91bHW2ooM5yOivEN8YW_x-DML5rQEro6wVv0fxeM5q6oJaPoQe_E_9d3gpByC6_-GRJb_Lt7GQu5SfYAv659_1MIaW4a9tXYVgPVdMXPxVD-aFKCldEq0nPDASsgewaijbt71MV2b"
        } */


        this.restProvider.getUserIdentifier(this.id, this.token).then( /*#__PURE__*/function () {
          var _ref9 = (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (value) {
            _this5.userID = value["user_id"];
            console.log("userID:", _this5.userID);
            yield _this5.userID;
          });

          return function (_x4) {
            return _ref9.apply(this, arguments);
          };
        }()).catch(error => {
          console.log("server cannot process API request", error);
          this.generateToast("Sorry!, The server is down. ", "black", 30000);
        });
      }, error => {
        console.error("FCM error", error);
      });
    }
  }

  checkInternet() {
    var _this6 = this;

    return new Promise( /*#__PURE__*/function () {
      var _ref10 = (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
        console.log("network type", _this6.network.type);
        let connect1sub;
        let disconnect1sub; //  initiating checknetwork plugin

        if (_this6.network.type == "none") {
          _this6.connection = "offline"; // this.alertConnection("connection lost");

          connect1sub = yield _this6.network.onConnect().subscribe(succ => {
            console.log("network connected!", succ);
            console.log("network type", _this6.network.type); // We just got a connection but we need to wait briefly
            // before we determine the connection type. Might need to wait.
            // prior to doing any api requests as well.

            setTimeout(() => {
              // window.location.reload();
              if (_this6.network.type !== "none") {
                console.log("we got a connection, woohoo!");

                _this6.alertConnection("connected"); // window.location.reload();


                _this6.connection = "online";

                _this6.generateToast("You are online");
              }
            }, 1000);
          });
        } else {
          _this6.generateToast("you are online");

          _this6.connection = "online";
          console.error("Error type ", _this6.network.type);
          disconnect1sub = _this6.network.onDisconnect().subscribe(() => {
            console.log("network was disconnected :-(");

            _this6.alertConnection("connection lost");

            _this6.connection = "offline";
          });
        }

        yield resolve();
      });

      return function (_x5) {
        return _ref10.apply(this, arguments);
      };
    }());
  } //Check if application having GPS access permission

  /**
   * @deprecated
   */


  checkGPSPermission() {
    this.androidPermissions.checkPermission("android.permission.ACCESS_BACKGROUND_LOCATION").then(result => {
      console.log("Permission result ", result);
    }, err => {
      this.checkLocationAccuracy();
      alert(err); // log error in file in case of error

      this.logText = this.logText + new Date().toISOString().substring(11, 19) + " CheckGPS Plugin: " + err + "\r\n";
    });
  }

  requestGPSPermission() {
    //Show 'GPS Permission Request' dialogue
    console.log("request gps permission ");
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_PHONE_STATE, this.androidPermissions.PERMISSION.ACCESS_BACKGROUND_LOCATION, this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION, this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION, this.androidPermissions.PERMISSION.ACTIVITY_RECOGNITION, this.androidPermissions.PERMISSION.FOREGROUND_SERVICE, this.androidPermissions.PERMISSION.LOCATION_HARDWARE]).then(success => {
      console.log("success", success); // call method to turn on GPS
      // this.askToTurnOnGPS();
    }, error => {
      this.splashScreen.show();
      window.location.reload(); //Show alert if user click on 'No Thanks'
      //   alert('requestPermission Error requesting location permissions ' + error)

      console.log("requestPermission Error requesting location permissions " + error);
      this.logText = this.logText + new Date().toISOString().substring(11, 19) + " Request location permissions " + error + "\r\n";
    });
  }

  reload() {
    this.splashScreen.hide();
    window.location.reload();
  } // alert triggered when connection interupted


  alertConnection(note) {
    var _this7 = this;

    return (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let connection_alert;

      if (note == "connection lost") {
        console.log("No internet connection available");
        connection_alert = _this7.alertCtrl.create({
          header: "Internet warning !!",
          subHeader: "Please check your internet connection and try again",
          buttons: [{
            text: "Go to settings",
            handler: () => {
              _this7.openNativeSettings.open("wireless");
            }
          }, {
            text: "Exit app",
            handler: () => {
              navigator["app"].exitApp();
            }
          }]
        });
        (yield connection_alert).present();
        setTimeout( /*#__PURE__*/(0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {// connection_alert.dismiss()
        }), 5000);
      } else if (note == "connected") {
        if (connection_alert) {
          console.log("alert id", connection_alert);
          console.log("alert found -------now dismissing");
          connection_alert.dismiss();
        }
      }
    })();
  } // toast when back online


  toastConnect() {
    var _this8 = this;

    return (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("toast contrller back online");
      let toast = yield _this8.toastCtrl.create({
        message: "Connected",
        duration: 3000,
        animated: true
      });
      yield toast.present();
      const {
        role
      } = yield toast.onDidDismiss();
      console.log("app componnet toast on did dismiss", role);
    })();
  }

};

AppComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_25__.NavController
}, {
  type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_25__.Platform
}, {
  type: _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__.StatusBar
}, {
  type: _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__.SplashScreen
}, {
  type: _services_events_events_service__WEBPACK_IMPORTED_MODULE_6__.Events
}, {
  type: _services_app_config__WEBPACK_IMPORTED_MODULE_5__.AppConfig
}, {
  type: _ionic_native_android_permissions__WEBPACK_IMPORTED_MODULE_11__.AndroidPermissions
}, {
  type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_13__.File
}, {
  type: _awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_8__.Network
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_25__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_25__.ToastController
}, {
  type: _services_rest_api_rest_api_service__WEBPACK_IMPORTED_MODULE_7__.RestApiService
}, {
  type: _awesome_cordova_plugins_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_9__.OpenNativeSettings
}, {
  type: _services_bluetoothLE_bluetooth_le_service__WEBPACK_IMPORTED_MODULE_14__.BluetoothLEService
}, {
  type: _awesome_cordova_plugins_app_center_analytics_ngx__WEBPACK_IMPORTED_MODULE_15__.AppCenterAnalytics
}, {
  type: _ionic_native_app_center_crashes__WEBPACK_IMPORTED_MODULE_16__.AppCenterCrashes
}, {
  type: _awesome_cordova_plugins_code_push_ngx__WEBPACK_IMPORTED_MODULE_17__.CodePush
}, {
  type: _services_transferdata_transfer_service__WEBPACK_IMPORTED_MODULE_19__.TransferService
}, {
  type: _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_18__.StorageService
}, {
  type: _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_20__.Diagnostic
}, {
  type: plugins_cordova_plugin_fcm_with_dependecy_updated_ionic_ngx_FCM__WEBPACK_IMPORTED_MODULE_21__.FCM
}, {
  type: _services_logging_logging_service__WEBPACK_IMPORTED_MODULE_23__.LoggingService
}];

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_27__.Component)({
  selector: "app-root",
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/splash-screen/ngx */ 4883);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_rest_api_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/rest-api/rest-api.service */ 9566);
/* harmony import */ var _services_signaling_signaling_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/signaling/signaling.service */ 8334);
/* harmony import */ var _awesome_cordova_plugins_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/device-orientation/ngx */ 326);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 6457);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 5453);
/* harmony import */ var _ionic_native_geofence__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geofence */ 2739);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_events_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/events/events.service */ 1716);
/* harmony import */ var _awesome_cordova_plugins_vibration_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/vibration/ngx */ 5951);
/* harmony import */ var _ionic_native_android_permissions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/android-permissions */ 4107);
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ 1952);
/* harmony import */ var _awesome_cordova_plugins_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @awesome-cordova-plugins/open-native-settings/ngx */ 8809);
/* harmony import */ var _awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @awesome-cordova-plugins/network/ngx */ 9940);
/* harmony import */ var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @awesome-cordova-plugins/status-bar/ngx */ 1550);
/* harmony import */ var _services_app_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/app-config */ 3331);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @awesome-cordova-plugins/native-geocoder/ngx */ 9683);
/* harmony import */ var _awesome_cordova_plugins_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @awesome-cordova-plugins/speech-recognition/ngx */ 3898);
/* harmony import */ var _ionic_native_text_to_speech__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/text-to-speech */ 298);
/* harmony import */ var _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @awesome-cordova-plugins/diagnostic/ngx */ 7666);
/* harmony import */ var _services_transferdata_transfer_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/transferdata/transfer.service */ 907);
/* harmony import */ var _awesome_cordova_plugins_ble_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @awesome-cordova-plugins/ble/ngx */ 4880);
/* harmony import */ var _services_bluetoothLE_bluetooth_le_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/bluetoothLE/bluetooth-le.service */ 9002);
/* harmony import */ var _class_ServerErrorInterceptor_server_error_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./class/ServerErrorInterceptor/server-error-interceptor */ 5895);
/* harmony import */ var _class_global_error_handler__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./class/-global-error-handler */ 5630);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/overlay */ 1638);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _awesome_cordova_plugins_app_center_analytics_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @awesome-cordova-plugins/app-center-analytics/ngx */ 2542);
/* harmony import */ var _ionic_native_app_center_crashes__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ionic-native/app-center-crashes */ 5282);
/* harmony import */ var _awesome_cordova_plugins_code_push_ngx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @awesome-cordova-plugins/code-push/ngx */ 5662);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @ionic/storage-angular */ 7566);
/* harmony import */ var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/storage/storage.service */ 6578);
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ngx-gauge */ 3398);
/* harmony import */ var _services_alertControl_alert_control_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/alertControl/alert-control.service */ 2417);
/* harmony import */ var _services_outputController_output_controller_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/outputController/output-controller.service */ 5233);
/* harmony import */ var _modules_sharedModule_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./modules/sharedModule/shared-module/shared-module.module */ 1699);
/* harmony import */ var plugins_cordova_plugin_fcm_with_dependecy_updated_ionic_ngx_FCM__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! plugins/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM */ 6557);





//import {Statusbar} from '@ionic-native/status-bar';

//import { AppComponent } from './app.component';




//import { HomePage } from './pages/home/home.page';












//import { TripPage } from './pages/trip/trip.page';




//import { MmirProvider, VoiceUIProvider } from './mmir/ng-provider';





















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_35__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_36__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__.AppComponent],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_38__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_39__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_40__.FormsModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_41__.OverlayModule,
            ngx_gauge__WEBPACK_IMPORTED_MODULE_42__.NgxGaugeModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_43__.BrowserAnimationsModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_44__.IonicStorageModule.forRoot(),
            _modules_sharedModule_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_33__.SharedModuleModule
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_45__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_38__.IonicRouteStrategy },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_36__.ErrorHandler, useClass: _class_global_error_handler__WEBPACK_IMPORTED_MODULE_26__.GlobalErrorHandler },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_39__.HTTP_INTERCEPTORS,
                useClass: _class_ServerErrorInterceptor_server_error_interceptor__WEBPACK_IMPORTED_MODULE_25__.ServerErrorInterceptor,
                multi: true,
            },
            _ionic_native_geofence__WEBPACK_IMPORTED_MODULE_7__.Geofence,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_46__.MatSnackBar,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_39__.HttpClient,
            _services_rest_api_rest_api_service__WEBPACK_IMPORTED_MODULE_2__.RestApiService,
            _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_18__.NativeGeocoder,
            _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation,
            _services_signaling_signaling_service__WEBPACK_IMPORTED_MODULE_3__.SignalingService,
            _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen,
            _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_38__.NavController,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_38__.NavParams,
            _awesome_cordova_plugins_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__.DeviceOrientation,
            _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_6__.File,
            _services_events_events_service__WEBPACK_IMPORTED_MODULE_8__.Events,
            _awesome_cordova_plugins_vibration_ngx__WEBPACK_IMPORTED_MODULE_9__.Vibration,
            _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__.SocialSharing,
            _awesome_cordova_plugins_open_native_settings_ngx__WEBPACK_IMPORTED_MODULE_12__.OpenNativeSettings,
            _awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_13__.Network,
            _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__.StatusBar,
            _ionic_native_android_permissions__WEBPACK_IMPORTED_MODULE_10__.AndroidPermissions,
            _services_app_config__WEBPACK_IMPORTED_MODULE_15__.AppConfig,
            _ionic_storage__WEBPACK_IMPORTED_MODULE_16__.Storage,
            _awesome_cordova_plugins_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_19__.SpeechRecognition,
            _ionic_native_text_to_speech__WEBPACK_IMPORTED_MODULE_20__.TextToSpeech,
            _awesome_cordova_plugins_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_21__.Diagnostic,
            _services_transferdata_transfer_service__WEBPACK_IMPORTED_MODULE_22__.TransferService,
            _awesome_cordova_plugins_ble_ngx__WEBPACK_IMPORTED_MODULE_23__.BLE,
            _services_bluetoothLE_bluetooth_le_service__WEBPACK_IMPORTED_MODULE_24__.BluetoothLEService,
            _awesome_cordova_plugins_app_center_analytics_ngx__WEBPACK_IMPORTED_MODULE_27__.AppCenterAnalytics,
            _ionic_native_app_center_crashes__WEBPACK_IMPORTED_MODULE_28__.AppCenterCrashes,
            _awesome_cordova_plugins_code_push_ngx__WEBPACK_IMPORTED_MODULE_29__.CodePush,
            _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_30__.StorageService,
            _services_alertControl_alert_control_service__WEBPACK_IMPORTED_MODULE_31__.AlertControlService,
            _services_outputController_output_controller_service__WEBPACK_IMPORTED_MODULE_32__.OutputControllerService,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_38__.ActionSheetController,
            ngx_gauge__WEBPACK_IMPORTED_MODULE_42__.NgxGauge,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_38__.AnimationController,
            Animation,
            plugins_cordova_plugin_fcm_with_dependecy_updated_ionic_ngx_FCM__WEBPACK_IMPORTED_MODULE_34__.FCM
        ],
        entryComponents: [_app_component__WEBPACK_IMPORTED_MODULE_17__.AppComponent],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 5630:
/*!************************************************!*\
  !*** ./src/app/class/-global-error-handler.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalErrorHandler": () => (/* binding */ GlobalErrorHandler)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_ErrorLogging_errorlogging_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/ErrorLogging/errorlogging.service */ 2962);
/* harmony import */ var _services_errorService_error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/errorService/error.service */ 2613);
/* harmony import */ var _services_NotificationService_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/NotificationService/notification.service */ 4098);






let GlobalErrorHandler = class GlobalErrorHandler {
    constructor(injector) {
        this.injector = injector;
    }
    handleError(error) {
        const errorService = this.injector.get(_services_errorService_error_service__WEBPACK_IMPORTED_MODULE_1__.ErrorService);
        const logger = this.injector.get(_services_ErrorLogging_errorlogging_service__WEBPACK_IMPORTED_MODULE_0__.ErrorloggingService);
        const notifier = this.injector.get(_services_NotificationService_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService);
        let message;
        let stackTrace;
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpErrorResponse) {
            // Server Error
            message = errorService.getServerMessage(error);
            stackTrace = errorService.getServerStack(error);
            notifier.showError(message);
        }
        else {
            // Client Error
            message = errorService.getClientMessage(error);
            stackTrace = errorService.getClientStack(error);
            notifier.showError(message);
        }
        // Always log errors
        logger.logError(message, stackTrace);
        console.error(error);
    }
};
GlobalErrorHandler.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector }
];
GlobalErrorHandler = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], GlobalErrorHandler);



/***/ }),

/***/ 5895:
/*!**************************************************************************!*\
  !*** ./src/app/class/ServerErrorInterceptor/server-error-interceptor.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerErrorInterceptor": () => (/* binding */ ServerErrorInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 8919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 7418);




let ServerErrorInterceptor = class ServerErrorInterceptor {
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            if (error.status === 401) {
                // refresh token
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
            }
        }));
    }
};
ServerErrorInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], ServerErrorInterceptor);



/***/ }),

/***/ 1359:
/*!********************************************!*\
  !*** ./src/app/common/global-constants.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalConstants": () => (/* binding */ GlobalConstants)
/* harmony export */ });
class GlobalConstants {
}
/**
 * GLOBAL VARIBALES
 */
/**
 * @{Geofence}
 */
GlobalConstants.checkpoint_radius_inner = 10;
// global varibale for meeting checkpoint radius and id
//  50 meter geofence
GlobalConstants.meeting_checkppoint_radius_outside = 50;
GlobalConstants.meeting_checkppoint_id_outside = "500";
// 10 meter geofence
GlobalConstants.meeting_checkppoint_id_inner = "505";
// global varibale for leaving checkpoint radius and id
// 50 meters geofence
GlobalConstants.leaving_checkppoint_radius_outside = 51;
GlobalConstants.leaving_checkppoint_id_outside = "400";
// 10 meters geofence
GlobalConstants.leaving_checkppoint_id_inner = "405";
// global variable for destination radius and id
GlobalConstants.destination_radius = 12;
GlobalConstants.destination_id = "300";
// Normal navigational geofence
GlobalConstants.navigational_radius = 60;
GlobalConstants.navigational_leave_radius = 15;
// -----------------------------------------------------------//
/**
 * custom markers for the app using AwesomeMarker library
 *
 */
// start location marker on the map
GlobalConstants.startMarker = {};
// destination location marker
GlobalConstants.destinationMarker = {};
// meeting point marker
GlobalConstants.meetingPointMarkerIcon = {};
// leaving point marker
GlobalConstants.leavingPointMarkerIcon = {};


/***/ }),

/***/ 1699:
/*!****************************************************************************!*\
  !*** ./src/app/modules/sharedModule/shared-module/shared-module.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModuleModule": () => (/* binding */ SharedModuleModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_pipes_distancePipe_distance_pipe_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pipes/distancePipe/distance-pipe.pipe */ 1714);
/* harmony import */ var src_app_pipes_timepipe_time_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pipes/timepipe/time.pipe */ 7291);





let SharedModuleModule = class SharedModuleModule {
};
SharedModuleModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [src_app_pipes_distancePipe_distance_pipe_pipe__WEBPACK_IMPORTED_MODULE_0__.DistancePipePipe, src_app_pipes_timepipe_time_pipe__WEBPACK_IMPORTED_MODULE_1__.TimePipe],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule
        ],
        exports: [src_app_pipes_distancePipe_distance_pipe_pipe__WEBPACK_IMPORTED_MODULE_0__.DistancePipePipe, src_app_pipes_timepipe_time_pipe__WEBPACK_IMPORTED_MODULE_1__.TimePipe]
    })
], SharedModuleModule);



/***/ }),

/***/ 1714:
/*!**********************************************************!*\
  !*** ./src/app/pipes/distancePipe/distance-pipe.pipe.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DistancePipePipe": () => (/* binding */ DistancePipePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let DistancePipePipe = class DistancePipePipe {
    transform(value) {
        let a;
        if (value < 1000 && value >= 0) {
            a = value + ' m';
        }
        else if (value < 0) {
            a = 0 + ' m';
        }
        else if (value > 1000) {
            let b = value / 1000;
            let c = parseFloat(b.toFixed(1));
            a = c + " km";
        }
        return a;
    }
};
DistancePipePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'distancePipe'
    })
], DistancePipePipe);



/***/ }),

/***/ 7291:
/*!*********************************************!*\
  !*** ./src/app/pipes/timepipe/time.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimePipe": () => (/* binding */ TimePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let TimePipe = class TimePipe {
    transform(seconds) {
        let result;
        if (seconds < 60 && seconds >= 0) {
            result = seconds + " s";
        }
        else if (seconds < 0) {
            result = 0 + " s";
        }
        else if (seconds >= 60) {
            let minutes = Math.floor(seconds / 60);
            let secs = seconds % 60;
            result = minutes + ":" + secs + " min";
        }
        return result;
    }
};
TimePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'time'
    })
], TimePipe);



/***/ }),

/***/ 2962:
/*!***************************************************************!*\
  !*** ./src/app/services/ErrorLogging/errorlogging.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorloggingService": () => (/* binding */ ErrorloggingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let ErrorloggingService = class ErrorloggingService {
    constructor() { }
    logError(message, stack) {
        // Send errors to be saved here
        // The console.log is only for testing this example.
        console.log('LoggingService: ' + message);
    }
};
ErrorloggingService.ctorParameters = () => [];
ErrorloggingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
    // ! future implementation use slack for real time monitoring: -> https://medium.com/dailyjs/how-to-send-errors-into-slack-dc552e30506f
], ErrorloggingService);



/***/ }),

/***/ 4098:
/*!**********************************************************************!*\
  !*** ./src/app/services/NotificationService/notification.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);



/*

this will only generate Notification fo the global error handling --> server + client side error handling


 */
let NotificationService = class NotificationService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    showSuccess(message) {
        // this.snackBar.open(message);
        console.log("errorNotifcation success", message);
    }
    showError(message) {
        // The second parameter is the text in the button. 
        // In the third, we send in the css class for the snack bar.
        // this.snackBar.open(message, 'X', {panelClass: ['error']});
        console.trace("error trace ");
        console.log("ERROR", message);
    }
};
NotificationService.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBar }
];
NotificationService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], NotificationService);



/***/ }),

/***/ 2417:
/*!****************************************************************!*\
  !*** ./src/app/services/alertControl/alert-control.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertControlService": () => (/* binding */ AlertControlService)
/* harmony export */ });
/* harmony import */ var _Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);




let AlertControlService = class AlertControlService {
  constructor(alertcontrol) {
    this.alertcontrol = alertcontrol;
    /*
             ! main aim of this service is to provode a centralised alert controls for the whole app
      ! all the alert control must be called through this service in future
          
          */

    this.tripspageAlerts = []; // contains alert object with the time of dimissal

    this.timeInterval = 0;
    this.timeOutArray = [];
    this.overlayDelay = 1000;
  } // get the current alert from the screen 


  getAlert() {
    return new Promise(resolve => {
      this.alertcontrol.getTop().then(data => {
        console.log("TOP alert is ", data);
        resolve(data);
      });
    });
  }

  alertDismiss() {
    return new Promise(resolve => {
      this.alertcontrol.dismiss().then(data => {
        console.log(data);

        if (data) {
          // empty the array for alerts 
          this.tripspageAlerts = [];
        }

        resolve(data);
      });
    });
  }

  generateAlert(header, message, button, DimissDuration, id) {
    const alert = {
      header: header,
      message: message,
      buttons: [{
        text: button,
        role: "confirm",
        handler: () => {}
      }],
      cssClass: "home-back-alert",
      id: id
    };
    let alertObj = {
      alert: alert,
      DismissDuration: DimissDuration
    };
    this.tripspageAlerts.push(alertObj);
    let timeout = 0;
    let sum = 0; // console.log("Array",JSON.stringify(this.tripspageAlerts));

    if (this.tripspageAlerts.length - 1 == 0) {
      timeout = 0;
      this.timeOutArray = [];
    } else {
      sum = 0;
      this.tripspageAlerts.forEach(element => {
        // console.log(JSON.stringify(element));
        sum += element.DismissDuration;
      });
      timeout = sum; // check if the lasttimeout array has the same timeout for execution or not if yes delay the next alert

      if (this.timeOutArray.length != 0) {
        let lastTimeout = this.timeOutArray[this.timeOutArray.length - 1].timeout;

        if (timeout == lastTimeout) {
          timeout += this.overlayDelay;
        }
      } // console.log("timeinterval", this.timeInterval);
      // timeout = timeout - (this.timeInterval + 1) * 1000;

    }

    this.show(timeout);
  }

  show(timeout) {
    var _this = this;

    console.log("timeout", timeout);
    const t = setTimeout( /*#__PURE__*/(0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // create alert here and show alert here
      const alert = yield _this.alertcontrol.create(_this.tripspageAlerts[0].alert);
      alert.present().then(() => {// console.log("dismiss duration", this.tripspageAlerts[0].DismissDuration);
        // this.startTimer();
      }); // ! 

      setTimeout( /*#__PURE__*/(0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        // this.stopTimer();
        _this.tripspageAlerts.splice(0, 1);

        _this.timeOutArray.splice(0, 1);

        yield alert.dismiss();
      }), _this.tripspageAlerts[0].DismissDuration);
    }), timeout > 0 ? timeout + this.overlayDelay : 0);
    this.timeOutArray.push({
      timeoutindex: t,
      Dismiss: this.tripspageAlerts[0].DismissDuration,
      timeout: timeout
    }); // console.log("timeoutarray", this.timeOutArray);
  }

};

AlertControlService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController
}];

AlertControlService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: "root"
})], AlertControlService);


/***/ }),

/***/ 3331:
/*!****************************************!*\
  !*** ./src/app/services/app-config.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConfig": () => (/* binding */ AppConfig)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/map */ 9464);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ 190);


// import { Http } from '@angular/http';

//import { map } from 'rxjs/operators';


/*
 * HELPER for making config-changes (ionic-angular's Config) persistent
 */
let AppConfig = class AppConfig {
    constructor(storage, config) {
        this.storage = storage;
        this.config = config;
    }
    /**
     * Get the value assocated with the given key.
     * @return Promise that resolves with the value
     */
    get(key) {
        return this.storage.get(key).then(value => {
            //if no value in storage: use default from config
            if (typeof value === 'undefined' || value === null) {
                return this.config.get(key);
            }
            return value;
        });
    }
    /**
     * Set the value for the given key.
     * @param key the key to identify this value
     * @param value the value for this key
     * @return Promise that resolves when the value is set
     */
    set(key, value) {
        return this.storage.set(key, value);
    }
    /**
     * Remove any value associated with this key.
     * @param key the key to identify this value
     * @return Promise that resolves when the value is removed
     */
    remove(key) {
        return this.storage.remove(key);
    }
    /**
     * Clear the entire key value store. WARNING: HOT!
     * @return Promise that resolves when the kv store is cleared
     */
    clear() {
        return this.storage.clear();
    }
    /**
     * @return the number of keys stored.
     */
    length() {
        return this.storage.length;
    }
    /**
     * @return the keys in the store.
     */
    keys() {
        return this.storage.keys();
    }
    /**
     * Iterate through each key,value pair.
     * @param iteratorCallback a callback of the form (value, key, iterationNumber)
     */
    forEach(iteratorCallback) {
        return this.storage.forEach(iteratorCallback);
    }
};
AppConfig.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Config }
];
AppConfig = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], AppConfig);



/***/ }),

/***/ 9002:
/*!**************************************************************!*\
  !*** ./src/app/services/bluetoothLE/bluetooth-le.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BluetoothLEService": () => (/* binding */ BluetoothLEService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _awesome_cordova_plugins_ble_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/ble/ngx */ 4880);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 7418);





let BluetoothLEService = class BluetoothLEService {
    constructor(ble) {
        this.ble = ble;
        this.scanTimer = 6; // the value of timer is in seconds
        this.bluetoothSettingsopen = false;
        this.BLE_uuid = "d619e693-26eb-4241-95c6-304608fa5b5f";
        this.wearableID = "3C:61:05:2F:FA:C6";
        this.wearable_characterstics = "d619e693-26eb-4241-95c6-304608fa5b5f";
        this.wearable_service = "63bbf1f7-a049-483a-ad01-af803a1929ae";
        /*
        tech specs of the wearable for connection required to connect with the app
      
      
        * address: "3C:61:05:2F:FA:C6";
        * class: 7936;
        * id: "3C:61:05:2F:FA:C6";
        * name: "SmartWearable";
        * characterstics: "d619e693-26eb-4241-95c6-304608fa5b5f"
        * service = "63bbf1f7-a049-483a-ad01-af803a1929ae"
        
         */
        this.availableDevices = [];
        this.intervalStarted = false;
        this.isBtEnableVariable = false;
    }
    // check function also required
    /*
     TODO: check bluetooth enable or not ==> // ? done
     TODO: if not open settings = // ? done
     TODO: if yes, ask for connection with bluetooth wearable device == // ? done
     
    */
    startIntervalCheck() {
        this.intervalStarted = true;
        console.log("BT interval started");
        this.Bt_Interval = setInterval(() => {
            console.log("calling Bt check again");
            this.bluetoothCheck();
        }, 3000);
    }
    bluetoothCheck() {
        return new Promise((resolve) => {
            this.isBtEnable().then((value) => {
                console.log("value is ", value);
                this.isBtEnableVariable = value;
                if (value) {
                    this.bluetoothSettingsopen = false;
                    if (this.intervalStarted) {
                        clearInterval(this.Bt_Interval);
                        this.intervalStarted = false;
                    }
                    // this.scanDevices();
                    // add a toast controller for bluetooth
                }
                else {
                    if (this.bluetoothSettingsopen) {
                        console.log("BT settings still open");
                    }
                    else {
                        console.log("bleutoothsettings closed", this.bluetoothSettingsopen);
                        this.openBTSettings();
                        this.startIntervalCheck();
                    }
                }
                resolve(true);
            }, (error) => {
                console.error("couldnt check btenable ", error);
                resolve(false);
            });
        });
    }
    scanDevices() {
        this.ble.scan(this.availableDevices, this.scanTimer).subscribe((device) => {
            console.log("scaned", device);
        });
    }
    ConnectWearable() {
        this.ble
            .connect(this.wearableID)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((err) => {
            console.error("connection threw error ", err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)("error while connecting" + err);
        }))
            .subscribe((callback) => {
            console.log("connection with wearable was succesfull", callback);
            // ! send data here for automatic connection.
        });
    }
    /*
  
    function is modified to send data to a device and the format of data to be sent is uint8array
  
   */
    sendData(data, id, service, characterstic) {
        var packet = new Uint8Array(1);
        packet[0] = data; // 0x01;
        this.ble.write(id, service, characterstic, packet.buffer).then((success) => {
            console.log("data succesfully sent", success);
        }, (error) => {
            console.error("unsucessful data send", error);
        });
    }
    // disconnects a particular device connection with specified device id
    disconnect(id) {
        this.ble.disconnect(id).then((success) => {
            console.log("Succesfully disconnected", success);
        }, (error) => {
            console.log("Unsucessful disconnection", error);
        });
    }
    /*
  
   it returns the data that is transmited via bluetooth , with the device characterstics stated as
   both read and write
  
      @ param takes device id , service and characterstic uuid of the device
  
   */
    recieveData(id, service, characterstic) {
        this.ble.read(id, service, characterstic).then((success) => {
            console.log("reading back", success, " type of recieved data :", typeof success);
            console.log("type of recieved data");
        }, (error) => {
            console.log("error reading value back ", error);
        });
    }
    // for opening bluetooth settings
    openBTSettings() {
        var check;
        this.ble.showBluetoothSettings().then((success) => {
            console.log("bluetooth settings opened", success);
            check = true;
            this.bluetoothSettingsopen = true;
            console.log("check in success ", check);
        }, (error) => {
            console.log("error opening bluetooth settings : ", error);
            check = false;
        });
    }
    // for enabling bluetooth on the device
    enableBluetooth() {
        this.ble.enable().then((success) => {
            console.log("bluetooth succesfully enabled");
        }, (error) => {
            console.error("unable to enable bluetooth services on device");
        });
    }
    // check if bluetooth is enable or not
    isBtEnable() {
        return new Promise((resolve) => {
            console.log("check bt enabled");
            this.ble.isEnabled().then((success) => {
                console.log("bluetooth is enabled", success);
                this.isBtEnableVariable = true;
                resolve(true);
            }, (fail) => {
                console.error(fail);
                resolve(false);
            });
        });
    }
    isBtConnected(id) {
        this.ble.isConnected(id).then((success) => {
            console.log("device connected");
            return true;
        }, (eror) => {
            console.error("device disconnected");
            return false;
        });
    }
};
BluetoothLEService.ctorParameters = () => [
    { type: _awesome_cordova_plugins_ble_ngx__WEBPACK_IMPORTED_MODULE_0__.BLE }
];
BluetoothLEService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: "root",
    })
], BluetoothLEService);



/***/ }),

/***/ 2613:
/*!********************************************************!*\
  !*** ./src/app/services/errorService/error.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorService": () => (/* binding */ ErrorService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let ErrorService = class ErrorService {
    constructor() { }
    getClientMessage(error) {
        if (!navigator.onLine) {
            return 'No Internet Connection';
        }
        return error.message ? error.message : error.toString();
    }
    getClientStack(error) {
        return error.stack;
    }
    getServerMessage(error) {
        return error.message;
    }
    getServerStack(error) {
        // handle stack trace
        return 'stack';
    }
};
ErrorService.ctorParameters = () => [];
ErrorService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], ErrorService);



/***/ }),

/***/ 1716:
/*!***************************************************!*\
  !*** ./src/app/services/events/events.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Events": () => (/* binding */ Events),
/* harmony export */   "swarmEvent": () => (/* binding */ swarmEvent)
/* harmony export */ });
/* harmony import */ var _Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _awesome_cordova_plugins_vibration_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/vibration/ngx */ 5951);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ 9485);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _outputController_output_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../outputController/output-controller.service */ 5233);
/* harmony import */ var _rest_api_rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest-api/rest-api.service */ 9566);








var swarmEvent;

(function (swarmEvent) {
  swarmEvent[swarmEvent["none"] = 0] = "none";
  swarmEvent[swarmEvent["split"] = 1] = "split";
  swarmEvent[swarmEvent["merge"] = 2] = "merge";
})(swarmEvent || (swarmEvent = {}));

let Events = class Events {
  constructor(rest, toastCtrl, vibration, platform, outputConntroller) {
    this.rest = rest;
    this.toastCtrl = toastCtrl;
    this.vibration = vibration;
    this.platform = platform;
    this.outputConntroller = outputConntroller;
    this.cercle = 2;
    this.timeoutflag = true;
    this.toasts = [];
    this.swarmCreated = false; // changes for Mesh network synchronization

    this.dataPacket = {
      messageType: "",
      device_id: this.rest.deviceId,
      leader: null,
      swarm_id: null,
      previous_endpoints: [],
      tripintersection_geometry: null,
      current_endpoints: []
    };
    this.meshNetworkDB = [];
    this.meshLeader = null; // make event manager do the work , for all the events --> joining, create, leave {}

    /**
     * time in ms to check the connection endpoints
     */

    this.delay_time = 5000;
    this.previous_list = [];
    this.user_meshId = this.rest.deviceId;
    this.first_initalize = true;
    this.swarmIntervalTime = 5000;
    /**
     * leader array provides us an overview of the current swarm leader
     * and help to determine which event should be triggered
     *
     * For example : swarmEvent.none => means an individual user have joined a group or another individual
     *              swarmEvent.split => a group has splitted in different users
     *               swarmEvent.merge => two groups have merged together
     */
    //! todo: check the status of the leader from the swarm as duplicates can still get in
    // done

    this.leaderArray = [];
    /**
     * function helps to check and assign a leader
     */

    this.are_you_leader = false;
    /**
     * TODO :
     *  connection is done and we send the data to the local mesh network
     *
     * 1) connection happened
     * 2)
     *
     * you are in connection
     * send the data to the local network for them to know whats happening // ? should be done during the timeout or already before that
     *
     * once the db has been initialized
     *
     * timeout comes -> there we decide if a person is in swarm, or not
     *
     * if yes -> show a circle around his marker
     *
     * if not -> do nothing
     *
     * ------------------------------- for its own user UI we are done -------------------------
     *
     * ---------------------  now comes the client backend part ---------------------
     *
     * DB needs to be to its updated list
     *
     * *Important task*: where to send the data to the local network and which previous and current lists should be sent
     *
     *
     * check in filtered_db if any leader present
     *
     * if yes -> get its swarm id assign leader and start updating
     *    if more than one leader present -> get all swarm ids and get ready for merge
     *
     * if not -> check if in previous list if they were in same list or not
     *
     * now in mesh_list check if there is any leader present
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     * // we can check if there was any update in the same swarm id -> if yes then there is still a swarm present but if not then no swarm available
     * // it takes the same amount of copmputing resources as that of sending the message to the local network
     *
     * ! check if the previous leader is there or not -> if yes -> then flush message previous messages
     */
  } // ! better of the service is changes to new service with promise as a type


  initialize(obs) {
    console.log("------------------------------new ---------------", "device id", this.rest.deviceId, "USer id ", this.rest.userId);
    console.log("[events]initializing", obs);
    console.log("------------------------------[event]---------------");
    console.log("[events]initializing", JSON.stringify(obs));
    console.log("check before: prev -", this.previous_object, "temp:", this.temp_object); // todo : send first message for mesh network DB

    /**
     *
     * [
     *  "event_type": MESSAGE_RECEIVED,
     *   "data_string": "datastring"
     *  ]
     */
    // TODO : differentitate the flush message from other events
    // from trips page initialize new function to controll DB

    /* if (obs["event_type"] == "MESSAGE_RECEIVED") {
      console.log("Message recieved", obs);
      // ? function which interprets the message recieved
           this.groupDBController(obs);
           return;
    } */

    this.current_object = obs; // this.sendMessageToMeshNetwork("first"); // ! could be implemented after timeout

    if (this.previous_list.length == 0) {
      console.log("11111");
      this.temp_object = this.current_object;
      this.previous_object = this.temp_object;
      this.previous_list = this.previous_object["endpoint_list"];
      this.first_initalize = false;
      this.cercle = 2;
      console.log("firsrt initialize", JSON.stringify(this.previous_list));
    } else {
      console.log("present in a swarm"); // console.log("timeoutflag", this.timeoutflag)

      if (this.timeoutflag) {
        this.timeoutflag = false;
        setTimeout(() => {
          console.log("-------------------timeout------------");
          let curr_obj = this.current_object;
          console.log("[events- subscribed in timeout to ]", JSON.stringify(this.current_object)); //TODO: check here if leader present or not

          this.temp_object = curr_obj;
          console.log(" prev -", this.previous_object, "temp:", this.temp_object); //console.log("-------------conditional-------");

          this.temp_list = this.temp_object["endpoint_list"];
          console.log("comparing variables are : ");
          console.log("temp", JSON.stringify(this.temp_list)); //this.previous_list=this.previous_object["endpoint_list"];

          console.log("prev", JSON.stringify(this.previous_list)); // compare if temp and prev lists here

          const array1Sorted = this.previous_list.slice().sort();
          this.temp_list.slice().sort().every(function (value, index) {
            console.log(value === array1Sorted[index]);
            return value === array1Sorted[index];
          });
          const array2Sorted = this.previous_list.slice().sort();

          if (this.temp_list.length == this.previous_list.length) {
            if (this.temp_list.slice().sort().every(function (value, index) {
              return value === array2Sorted[index];
            })) {
              // the value of cercle remains same
              // this.cercle= this.cercle
              // ! reconnected to swarm
              console.log("reconnneted to swarm "); // this.generateToast("reconnected to swarm ");
            } else {
              // ! user is replaced by someone else
              console.log("New user joined the network and one other user left");
            }
          }
          /**
           * create new swarm & new users joining
           * *create new swarm and add more users in swarm*
           */


          if (this.temp_list.length > this.previous_list.length) {
            const joined_users = this.temp_list.length - this.previous_list.length;

            if (this.previous_list.length < 2) {
              // ! swarm created
              this.cercle = 1;
              /* // TODO : make sure the database is updated
                             this.swarmGroupController(
                this.temp_list,
                this.previous_list,
                swarmEvent.none
              );
              */
              // swarm created

              /* this.generateToast("You joined the swarm");
              this.vibration.vibrate([2000, 1000, 2000]); */

              this.outputConntroller.genereateOutput("joinSwarm");
            } else {
              // {joined users} users joined the swarm
              //swarm joined
              // ! someone else joined the swarm
              this.cercle = 1;
              /* this.generateToast("Someone joined swarm");
                           this.vibration.vibrate([1000]); */

              /*   //todo: assign leader
              this.swarmGroupController(
                this.temp_list,
                this.previous_list,
                swarmEvent.none
              ); */

              this.outputConntroller.genereateOutput("userJoinedSwarm");
            }
          }
          /**
           *
           */


          if (this.temp_list.length < this.previous_list.length) {
            const left_users = this.previous_list.length - this.temp_list.length;

            if (this.temp_list.length == 0) {
              // ! you left the swarm
              this.cercle = 2; // reset all the information for meshNetwork and leader

              /* if (this.meshLeader == this.user_meshId) {
                // todo : delete swarm
                // todo reset all the information for meshNetwork and leader
              } else {
                //todo : only reset the meshNetwork
              }
              this.resetLocalClient(); */

              this.outputConntroller.genereateOutput("leaveSwarm");
            } else {
              // swarm left
              // {left_users} left the swarm

              /* this.generateToast("Someone left the swarm ");
              this.vibration.vibrate([4000]); */
              // ! someone left the swarm
              //! SPLIT COULD HAPPEN HERE
              // todo : only need to update the meshNetwork
              this.outputConntroller.genereateOutput("userLeftSwarm");
            }
          } // flush message only when you are the leader
          // ! commented out 

          /*  if (this.are_you_leader) {
             this.sendMessageToMeshNetwork(
               "first",
               this.previous_list,
               this.temp_list
             );
           } */


          let prev = this.previous_list;
          this.previous_object = this.temp_object;
          this.previous_list = this.temp_object["endpoint_list"]; // * implementation for new split /merge feature
          // ! commented out 
          // this.swarmGroupController(this.temp_list, prev, swarmEvent.none);
          // using the help of local DB we see the current list and check all the inforamtion about all other user

          this.timeoutflag = true;
        }, this.delay_time);
      } else {}
    }
  }

  swarmGroupController(currentList, previousList, event) {
    console.log("swarmGroupController");
    let mesh_list = currentList;
    let prev_list = previousList; // filterred db contains the list of current object devices with swarmid and leader information

    let filtered_db = this.meshNetworkDB.filter(obj => {
      mesh_list.includes(obj.device_id);
    });
    console.log("🚀 ~ file: events.service.ts:353 ~ Events ~ letfiltered_db=this.meshNetworkDB.filter ~ filtered_db:", filtered_db);

    if (mesh_list.length == 0) {
      // there are no member present
      this.resetLocalClient(); // TODO: delete swarm somewhere 

      return;
    }

    if (filtered_db.length == 0) {
      if (this.swarmId) {
        // we were in swarm group , a swarm split have happened
        // leader is not present in the mesh endpoint list, but a endpoint from that leader is present
        // generate new Split swarm Id
        let old_swarm_id = this.swarmId;
        let new_swarm_id = old_swarm_id + "/001/" + (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)() + "/";
        let id = this.assignLeader(mesh_list);
        this.swarmId = new_swarm_id;

        if (id == this.user_meshId) {
          // create new Split swarm
          this.createSwarm(mesh_list, swarmEvent.split);
        } else {// do nothing as you are not the leader
        }
      } else {
        // no swarm Id present -> hence individual user
        // create new swarm
        // for creating new swarm from individual user
        // there are still some user who don't have a mesh leader
        // thus are considered individual users
        let id = this.assignLeader(mesh_list);

        if (this.user_meshId == id) {
          //create swarm
          this.generateSwarmID(null, swarmEvent.none);
          this.createSwarm(mesh_list, swarmEvent.none);
          this.generateToast("creating a new swarm");
          console.log("creating new swarm swarmId :", this.swarmId);
        }
      }

      return;
    }

    let groupedArray = filtered_db.reduce((acc, obj) => {
      const key = obj.leader;

      if (!key) {// do nothing
      } else {
        if (!acc[key]) {
          acc[key] = [];
        }

        acc[key].push(obj);
        return acc;
      }
    }, {});
    console.log("groupedArray", groupedArray);

    if (Object.keys(groupedArray).length == 1) {
      console.log("one group present ");
      let key = Object.keys(groupedArray)[0];

      if (mesh_list.includes(key)) {
        // leader is present in the mesh endpoint list
        const result = this.meshNetworkDB.find(obj => obj.device_id == key);
        let id = this.assignLeader(mesh_list);
        this.swarmId = result.swarm_id;

        if (id == this.user_meshId) {
          // update the swarm as you are the leader
          this.updateUsersInSwarm(mesh_list);
        } else {// do nothing as you are not the leader
        }
      } else {
        /* // leader is not present in the mesh endpoint list, but a endpoint from that leader is present
        let key = Object.keys(groupedArray)[0];
        const result = this.meshNetworkDB.find((obj) => obj.device_id == key);
        // generate new Split swarm Id
        let old_swarm_id = result.swarm_id;
        let new_swarm_id = old_swarm_id + "/001/" + uuidv4() + "/";
        let id = this.assignLeader(mesh_list);
        this.swarmId = new_swarm_id;
        if (id == this.user_meshId) {
          // create new Split swarm
          this.createSwarm(mesh_list, swarmEvent.split);
        } else {
          // do nothing as you are not the leader
        }
        */
        // this.generateSwarmID(old_swarm_id,swarmEvent.split);
      }
    } else if (Object.keys(groupedArray).length >= 2) {
      // if you are the leader delete old swarm
      if (Object.keys(groupedArray).includes(this.user_meshId)) {
        this.rest.deleteSwarm(this.swarmId);
      } // get information about all the previous leader


      const filteredArray = this.meshNetworkDB.filter(obj => Object.keys(groupedArray).includes(obj.leader)); // assign new leader

      let id = this.assignLeader(mesh_list);

      if (this.user_meshId == id) {
        // you are the leader
        const concated_swarm_id = filteredArray.map(obj => obj.swarm_id).join("+");
        this.swarmId = concated_swarm_id;
        this.generateSwarmID(concated_swarm_id, swarmEvent.merge);
        this.createSwarm(mesh_list, swarmEvent.merge);
      } else {// do  nothing as you are not the leader
      }
    } else {
      console.log("no leader");

      if (filtered_db.length !== 0) {
        console.log("🚀 ~ file: events.service.ts:427 ~ Events ~ swarmGroupController ~ filtered_db:", filtered_db); // reset everything as it has left all mesh network

        if (this.meshLeader == this.user_meshId) {
          // delete the swarm
          console.log("delete the swarm", this.swarmId);
          this.generateToast("deleting  a new swarm");
          this.rest.deleteSwarm(this.swarmId);
        } else {
          console.log("you were not for deleting swarm");
        }
      } else {
        /*  // for creating new swarm from individual user
                 // there are still some user who don't have a mesh leader
        // thus are considered individual users
        let id = this.assignLeader(mesh_list);
        if (this.user_meshId == id) {
          //create swarm
                   this.generateSwarmID(null, swarmEvent.none);
          this.createSwarm(mesh_list, swarmEvent.none);
          this.generateToast("creating a new swarm");
          console.log("creating new swarm swarmId :", this.swarmId);
        } */
      }
    } // if leader then send sync message


    if (this.meshLeader == this.user_meshId) {
      this.sendMessageToMeshNetwork("Leader", this.previous_list, this.temp_list);
    }
  }
  /**
   * rest the data packet
   * i.e
   * Messagetype  -> ""
   * Swarm Id -> null
   * current_endpoint ->[]
   * previous_endpoint -> []
   * leader -> null
   */


  resetDataPacket() {
    this.dataPacket.current_endpoints = this.dataPacket.previous_endpoints = [];
    this.dataPacket.leader = this.dataPacket.swarm_id = null;
    this.dataPacket.messageType = "";
  }
  /**
   *   main objective is to store all the flush messages and reset after the whole process is complete
   * @param obj object recieved from the mesh network
   * @currently_not_in_use as If another method is used and we want consistent data this could be used
   */


  groupDBController(obj) {
    try {
      if (!this.meshNetworkDB) {
        this.meshNetworkDB = [];
      } // save your information in DB if you are the leader


      if (this.are_you_leader) {
        if (!this.user_meshId || !this.dataPacket.device_id) {
          this.user_meshId = this.rest.deviceId;
          this.dataPacket.device_id = this.user_meshId;
          console.log("mesh user id undefined");
        }

        let ref_self = this.meshNetworkDB.findIndex(user => {
          return user.device_id == this.user_meshId;
        });

        if (ref_self != -1) {
          // object found in local database  -> update message
          this.meshNetworkDB[ref_self] = this.dataPacket;
        } else {
          // initialize new object instance in local database
          console.log("self object", this.dataPacket);
          this.meshNetworkDB.push(this.dataPacket);
        }
      }

      let userMessage = JSON.parse(obj["data_string"]);
      console.log("🚀 ~ file: events.service.ts:541 ~ Events ~ groupDBController ~ userMessage:", userMessage);

      if (userMessage.messageType == "Leader") {
        // this is a sync message by the leader
        this.swarmId = userMessage.swarm_id;

        if (this.meshLeader != userMessage.leader) {
          console.error("error assigning leader", this.meshLeader, "sync message by leader", userMessage.leader);
        } // reset the database as we don't need it anymore


        this.meshNetworkDB = [];
        return;
      }

      let ref = this.meshNetworkDB.findIndex(user => {
        return user.device_id == userMessage.device_id;
      }); // TODO : check if already present; yes -> update DB ; no -> push //?done

      if (ref != -1) {
        // object found in local database  -> update message
        this.meshNetworkDB[ref] = userMessage;
      } else {
        // initialize new object instance in local database
        this.meshNetworkDB.push(userMessage);
      }
    } catch (error) {
      console.error("error updating netwrok DB", error);
    }
  }
  /**
   *   main objective is to maintain the mesh network database and store all the necessary information needed
   * @param obj object recieved from the mesh network
   * @currently_not_in_use as If another method is used and we want consistent data this could be used
   */


  groupDBController_advance(obj) {
    console.log("🚀 ~ file: events.service.ts:519 ~ Events ~ groupDBController ~ obj:", obj);
    console.log("self user id ", this.rest.deviceId);

    try {
      if (!this.user_meshId || !this.dataPacket.device_id) {
        this.user_meshId = this.rest.deviceId;
        this.dataPacket.device_id = this.user_meshId;
        console.log("mesh user id undefined");
      } // put yourself in the database


      if (!this.meshNetworkDB) {
        this.meshNetworkDB = [];
      }

      console.log("Mesh network before adding object", this.meshNetworkDB);
      let ref_self = this.meshNetworkDB.findIndex(user => {
        return user.device_id == this.user_meshId;
      });

      if (ref_self != -1) {
        // object found in local database  -> update message
        this.meshNetworkDB[ref_self] = this.dataPacket;
      } else {
        // initialize new object instance in local database
        console.log("self object", this.dataPacket);
        this.meshNetworkDB.push(this.dataPacket);
      }

      let userMessage = JSON.parse(obj["data_string"]);
      console.log("🚀 ~ file: events.service.ts:541 ~ Events ~ groupDBController ~ userMessage:", userMessage);

      if (userMessage.messageType == "Leader") {
        // this is a sync message by the leader
        this.swarmId = userMessage.swarm_id;

        if (this.meshLeader != userMessage.leader) {
          console.error("error assigning leader", this.meshLeader, "sync message by leader", userMessage.leader);
        } // todo : check of the list provided by the leader has same number of users in the group
        // todo : send new sync message in the group
        // to sync swarm_id in the mesh network
        // ! no need as leader will send the message in swarm network
        // this.sendMessageToMeshNetwork("sync");
        // todo : delete leaderArray and update with the new leader


        return;
      }

      let ref = this.meshNetworkDB.findIndex(user => {
        return user.device_id == userMessage.device_id;
      }); // TODO : check if already present; yes -> update DB ; no -> push //?done

      if (ref != -1) {
        // object found in local database  -> update message
        this.meshNetworkDB[ref] = userMessage;
      } else {
        // initialize new object instance in local database
        this.meshNetworkDB.push(userMessage);
      } // TODO : check what are the present leader and sync the in


      if (userMessage.leader) {
        console.log("Leader found ", userMessage.leader);
        let ref2 = this.leaderArray.findIndex(user => {
          return user.device_id == userMessage.device_id;
        }); // TODO : check if already present; yes -> update DB ; no -> push //?done

        if (ref2 != -1) {
          // object found in local database  -> update message
          this.leaderArray.push(userMessage.leader);
        } else {
          console.log("user with id :", userMessage.leader, "already exist");
        }
      } else {
        console.log("No Leader present");
      }
    } catch (error) {
      console.error("error updating netwrok DB", error);
    }
  }
  /**
   * this function resets the local service inputs
   * @return{void}
   */


  resetLocalClient() {
    this.resetDataPacket();
    this.swarmId = null;
    this.meshNetworkDB = [];
    this.meshLeader = null;
    this.leaderArray = [];
    this.previous_list = this.current_list = [];
    this.previous_object = this.current_object = null;
  }

  sendMessageToMeshNetwork(messageType, previousList, currentList) {
    // update data packet to send the mesh network
    console.log("dataPacket", this.dataPacket);
    this.dataPacket.messageType = messageType;
    this.dataPacket.swarm_id = this.swarmId;
    this.dataPacket.device_id = this.user_meshId;
    this.dataPacket.current_endpoints = currentList ? this.current_object["endpoint_list"] : [];
    this.dataPacket.previous_endpoints = previousList ? this.previous_object["endpoint_list"] : [];
    this.dataPacket.leader = this.meshLeader; //todo : get trip intersection to share with the whole mesh network
    // !this.dataPacket.tripintersection_geometry

    if (this.platform.is("android")) {
      this.platform.ready().then(() => {
        if (NearbyConnections) {
          NearbyConnections.flushMessage(function (success) {
            // successful message sent
            console.log("message sent in the mesh network");
          }, function (error) {
            // error sending message
            console.error("[fatal] Message not sent");
            setTimeout(() => {
              console.log("sending message again");
              this.sendMessageToMeshNetwork(messageType, previousList, currentList);
            }, 3000);
          }, JSON.stringify(this.dataPacket));
        }
      });
    }
  }
  /**
   * this function returns a user ID : string
   * which is the smallest user Id of all
   *
   * @returns {void} the min user Id from the list
   */


  getMinUser(list) {
    console.log("min user called ", JSON.stringify(list));
    let minUser;
    minUser = list.slice().sort()[0];
    console.log("min user", minUser);
    return minUser;
  }
  /**
   * generates a swarm in the backend
   * @param list list of the active user in the group
   */


  createSwarm(list, event) {
    let list_array = [];
    list.forEach(element => {
      list_array.push({
        device_id: element
      });
    }); // TODO : generate swarm id

    let id = this.generateSwarmID(event);
    console.log("array to be given list array ", list_array);
    this.generateToast("Leader of the group");
    this.rest.postSwarm(list_array, this.swarmId).then(success => {
      console.log("postswarm", JSON.stringify(success));
      this.swarmCreated = true;
    }, error => {
      console.error("[ERROR] creating swarm id :", id, " ", error);
    });
  }
  /**
   * This helps to generate a new Swarm Id for the group
   * Usefull in the merge and split events
   *
   */
  // TODO : ! remove optional param


  generateSwarmID(oldSwarmId, event) {
    let id;

    if (!oldSwarmId) {
      id = (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)();
    } else {
      if (event == swarmEvent.split) {
        id = oldSwarmId + "/_001";
      }

      if (event == swarmEvent.merge) {
        id = oldSwarmId;
      }
    }

    this.swarmId = id;
    console.log("generate new swarmId", id);
    return this.swarmId;
  }

  assignLeader(list) {
    let leader = this.getMinUser(list); // check if the leader has a swarm id

    this.meshLeader = leader;

    if (this.meshLeader == this.user_meshId) {
      this.are_you_leader = true;
    } else {
      this.are_you_leader = false;
    }

    console.log("leader", leader, "are you leader ", this.are_you_leader);
    return leader;
  }
  /**
   * REST API call for updating members in swarm
   * @param list list of all members in swarm
   */


  updateUsersInSwarm(list) {
    console.log("updateUsersInSwarm called ", JSON.stringify(list));
    let list_array = [];
    list.forEach(element => {
      list_array.push({
        device_id: element
      });
    });
    this.rest.updateSwarm(list_array, this.swarmId).then(suc => {
      console.log("upadte swarm :", suc);
    }, error => {
      console.error("Error updating swarm members :", error);
    });
  }
  /**
   * @deprecated
   */


  event_stop() {
    this.previous_object = this.temp_object = {};
    this.previous_list = this.temp_list = [];
    this.cercle = 2; // event re-initialized no circle present
  }

  generateToast(msg, color, duration) {
    console.log("from toast", msg);
    const toast = {
      message: msg,
      color: color || "dark",
      duration: duration || 5000
    };
    this.toasts.push(toast);
    const timeout = (this.toasts.length - 1) * toast.duration;
    this.show(timeout);
  }

  show(timeout) {
    var _this = this;

    setTimeout( /*#__PURE__*/(0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastCtrl.create(_this.toasts[0]);
      yield toast.present();

      _this.toasts.splice(0, 1);
    }), timeout > 0 ? timeout + 800 : 0);
  }

  getUpdated_cercle() {
    // console.log("cercle is :", this.cercle);
    // console.log("swarm participants", this.previous_list.length);
    return this.cercle;
  }

  set_cercle(x) {
    this.cercle = x;
  }

  initializeFunction0(obj) {
    console.log("object recieved to the service : ", obj);
  }

  getUpdated_card() {
    return "4";
  }

  getSwarmLength() {
    return this.previous_list.length;
  }
  /**
   * @deprecated
   * @param list
   */


  updateInfoSwarm(list) {
    this.swarmInterval = setInterval(() => {
      this.rest.updateSwarm(list, this.rest.swarmId);
    }, this.swarmIntervalTime);
  }
  /**
   * @deprecated
   */


  stopUpdatinginfo() {
    clearInterval(this.swarmInterval);
  }

};

Events.ctorParameters = () => [{
  type: _rest_api_rest_api_service__WEBPACK_IMPORTED_MODULE_4__.RestApiService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}, {
  type: _awesome_cordova_plugins_vibration_ngx__WEBPACK_IMPORTED_MODULE_1__.Vibration
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform
}, {
  type: _outputController_output_controller_service__WEBPACK_IMPORTED_MODULE_3__.OutputControllerService
}];

Events = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: "root"
})], Events);


/***/ }),

/***/ 4191:
/*!*****************************************************!*\
  !*** ./src/app/services/logging/logging.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggingService": () => (/* binding */ LoggingService)
/* harmony export */ });
/* harmony import */ var _Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _obsidize_rx_console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @obsidize/rx-console */ 7548);
/* harmony import */ var _obsidize_rotating_file_stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @obsidize/rotating-file-stream */ 5804);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 5453);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3791);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1133);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7270);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3491);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);










const targetLogLevel = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production ? _obsidize_rx_console__WEBPACK_IMPORTED_MODULE_1__.LogLevel.DEBUG : _obsidize_rx_console__WEBPACK_IMPORTED_MODULE_1__.LogLevel.VERBOSE;
(0,_obsidize_rx_console__WEBPACK_IMPORTED_MODULE_1__.getPrimaryLoggerTransport)().setFilter(ev => ev.level >= targetLogLevel).setDefaultBroadcastEnabled(!src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production);

function compareLastModifiedTime(a, b) {
  return a.getLastModificationTime() - b.getLastModificationTime();
}

let LoggingService = class LoggingService {
  constructor(platform, // private readonly socialSharing: SocialSharing,
  cdvFile) {
    /*  try {
       console.log("---------------------------------------------")
        this.platform.ready().then(() => {
         // this.cdvFile.ready
         
         console.log("directory", this.cdvFile.applicationStorageDirectory);
         this.start();
         this.cdvFile.writeFile(this.cdvFile.externalApplicationStorageDirectory,
           "debuga.log", "", { replace: true })
           .then((data) => {
             console.log("successfuldebuga", data)
           }, (error) => {
             console.error("saving file cordova", error)
           })
         this.cdvFile.writeFile(this.cdvFile.externalApplicationStorageDirectory,
           "debugb.log", "", { replace: true })
           .then((data) => {
             console.log("successfuldebugb", data)
           }, (error) => {
             console.error("saving file cordova", error)
           })
       })
       
     } catch (error) {
       console.error("dir",this.cdvFile.applicationStorageDirectory)
     } */
    this.platform = platform;
    this.cdvFile = cdvFile;
    this.fileStream = new _obsidize_rotating_file_stream__WEBPACK_IMPORTED_MODULE_2__.RotatingFileStream({
      maxFileSize: 2e6,
      files: _obsidize_rotating_file_stream__WEBPACK_IMPORTED_MODULE_2__.CordovaFileEntryApi.createCacheRotationFiles(this.cdvFile, "log", ['debuga.log', 'debugb.log'])
    });
  }

  start() {
    this.logger = new _obsidize_rx_console__WEBPACK_IMPORTED_MODULE_1__.Logger('LogManagerService');
    this.fileStream = new _obsidize_rotating_file_stream__WEBPACK_IMPORTED_MODULE_2__.RotatingFileStream({
      maxFileSize: 2e6,
      files: _obsidize_rotating_file_stream__WEBPACK_IMPORTED_MODULE_2__.CordovaFileEntryApi.createCacheRotationFiles(this.cdvFile, this.cdvFile.externalApplicationStorageDirectory, ['debug-a.log', 'debug-b.log'])
    });
    this.cdvFile.writeFile(this.cdvFile.externalApplicationStorageDirectory, "logmanager.log", "", {
      replace: true
    }).then(data => {
      console.log("successful", data);
    }, error => {
      console.error("saving file cordova", error);
    });
  }

  ngOnDestroy() {
    this.clearFileStreamSub();
  }

  clearFileStreamSub() {
    // We don't really care if this doesn't work, since the only two ways this will explode are:
    // 1. there is no assigned subscription instance
    // 2. the subscription instance is already unsubscribed
    try {
      this.mFileStreamSub?.unsubscribe();
    } catch {}
  } // Example for sharing log files via the share plugin

  /* public async shareLogsViaEmail(): Promise<void> {
       this.logger.debug('shareLogsViaEmail()');
    const files = await this.fileStream.refreshAllEntries();
    const logFilePaths = files.map(file => file.toURL());
    this.logger.debug('opening email with file attachments: ', logFilePaths);
       await this.socialSharing.share(
      'New App Logs Attached',
      '[' + environment.appId + '] App Logs',
      logFilePaths
    );
  } */
  // Example for smashing log files together to be uploaded somewhere


  combineLogs() {
    var _this = this;

    return (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.logger.debug('combineLogs()');

      const files = (yield _this.fileStream.refreshAllEntries()).sort(compareLastModifiedTime);
      let result = '';

      for (const file of files) {
        const buffer = yield file.read();
        const text = new TextDecoder().decode(buffer);
        result += `\n__FILE_BREAK__---------- ${file.getFileName()} ----------__FILE_BREAK__\n`;
        result += text;
      }

      return result;
    })();
  }

  initialize() {
    var _this2 = this;

    return (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.platform.ready().then(() => {
        _this2.logger.debug('initialize()');

        if (!_this2.platform.is('cordova')) {
          return;
        }

        _this2.clearFileStreamSub();

        _this2.mFileStreamSub = (0,_obsidize_rx_console__WEBPACK_IMPORTED_MODULE_1__.getPrimaryLoggerTransport)().events().asObservable(rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEventPattern).pipe( // Accumulate log events for 5 seconds
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.buffer)((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.interval)(5000)), // NOTE: typically we would do event handling in the subscribe block,
        // but we can only write to files one-at-a-time, so we put the actual subscribe logic in concatMap() instead.
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.concatMap)(events => _this2.saveLogEvents(events).catch(e => {
          _this2.logger.fatal('log file write FATAL: ', e);
        })) // Activate this subscription to start recieving events.
        ).subscribe();
      });
    })();
  }

  saveLogEvents(events) {
    var _this3 = this;

    return (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.logger.verbose("savingfile" + _this3.cdvFile); // Don't do anything if there are no new events


      if (!events || events.length <= 0) {
        return;
      } // Combine the buffered events to a string payload
      // (need to tack on a newline at the end since join doesn't do that)


      const outputText = `${events.map(_obsidize_rx_console__WEBPACK_IMPORTED_MODULE_1__.stringifyLogEvent).join('\n')}\n`; // Encode the string as an ArrayBuffer

      const outputBuffer = new TextEncoder().encode(outputText).buffer; // Write the encoded content to the RotatingFileStream instance.
      // NOTE: the stream will handle file swapping in the background, so we don't have to handle that part directly.

      yield _this3.fileStream.write(outputBuffer).then(res => {
        console.warn("filewritten", res);
      }, error => {
        console.error("saving filestream", error);
      });
      /*   this.cdvFile.writeFile(this.cdvFile.externalApplicationStorageDirectory,
          "logmanager.log", outputBuffer, { append: true })
          .then((data) => {
            console.log("successful", data)
          }, (error) => {
            console.error("saving file cordova", error)
          }) */
      // await this.fileStream.rea
    })();
  }

};

LoggingService.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform
}, {
  type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File
}];

LoggingService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
  providedIn: 'root'
})
/**
 * This is for logging information ! TODO:
 */
], LoggingService);


/***/ }),

/***/ 5233:
/*!************************************************************************!*\
  !*** ./src/app/services/outputController/output-controller.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutputControllerService": () => (/* binding */ OutputControllerService)
/* harmony export */ });
/* harmony import */ var _Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _awesome_cordova_plugins_vibration_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/vibration/ngx */ 5951);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _alertControl_alert_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../alertControl/alert-control.service */ 2417);







let OutputControllerService = class OutputControllerService {
  constructor(alertService, vibration, toastCtrl) {
    this.alertService = alertService;
    this.vibration = vibration;
    this.toastCtrl = toastCtrl;
    this.checkpointalert = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('undefined');
    this._cast_checkpoint_alert = this.checkpointalert.asObservable();
    this.swarmalert = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('undefined');
    this._cast_swarm_alert = this.swarmalert.asObservable();
    /**
     * This service will provide hard coded outhandler for all the outputs for example : join swarm , create swarm , left swarm , and for the alerts for checkpoint
     */
    // TODO : set priority of the alerts as in destination reached priority 1, swarm information priority 2 , navigation information priority 3

    this.toasts = [];
    this.alerts = [];
  }
  /**
   * ! swarm events -> bottom part swarm information as toast
   * category 3
   * Join swarm :
   * Leave swarm :
   * someone joined swarm :
   * someone left the swarm :
   *
   * ! checkpoint alerts -> screen middle to show the information for alerts
   * meetcheckpointAlert :  category 1
   * leavecheckpointAlert: category 1
   * innercheckpointAlert: category 2
   * destinationReached : category 3
   *
   * ! Navigation information -> top bar reserved to show navigational information
   * category 1
   * navigationalInformation: category 1
   */

  /**
   *  main goal of the function is to manage the multiple alerts happening within the occurence of one
   * @depreceated As alerts and toast control has been removed ferom the app
   * @param header header for the alert message
   * @param message message to show
   * @param button buttons availabel
   * @param duration duration for which the alert should be shown
   */


  alertManager(header, message, button, duration, category) {
    // add alert in the stack
    let alertObj = {
      header: header,
      message: message,
      button: button,
      duration: duration,
      id: category
    };
    this.alerts.push(alertObj); // sort the array on their priority

    this.alerts.sort((data, data2) => {
      if (data.id > data2.id) {
        return 1;
      } else if (data.id < data2.id) {
        return -1;
      } else {
        return 0;
      }
    });
    setTimeout(() => {
      this.alertService.getAlert().then(data => {
        let obj = this.alerts.pop(); // no alert present

        if (data == undefined) {
          console.log("No current alert present");
          this.alertService.generateAlert(obj.header, obj.message, obj.button, obj.duration, obj.id);
        } else if (data.id > obj.id) {
          //  lower priority alerts 
          // then dont show the alert 
          console.log("NO NEED TO DIMISS OR SHOW THE INFO");
        } else if (data.id < obj.id) {
          // High priority alert
          // dismiss the alert
          this.alertService.alertDismiss().then(result => {
            if (result) {
              // empty the alert list 
              this.alerts = []; // create new alert 

              this.alertService.generateAlert(obj.header, obj.message, obj.button, obj.duration, obj.id);
            } else {
              console.error("NOT able to delet the top overlay");
            }
          }, error => {
            console.error("Unable to call Dismiss on alert ");
          }); // create the new alert 
        } else if (data.id == obj.id) {
          // same priority alerts
          // show the updated alert or the newest one
          // dismiss the old alert
          this.alertService.alertDismiss().then(result => {
            if (result) {
              // empty the alert list 
              this.alerts = []; // create the new alert

              this.alertService.generateAlert(obj.header, obj.message, obj.button, obj.duration, obj.id);
            } else {
              console.log("NOT able to delete the top overlay");
            }
          }, error => {
            console.error("Unable to call Dismiss on alert ", error);
          });
        }
      });
    }, 200); // this.alertService.getAlert()
  }
  /**
   *
   * @param e it is a kind of event which occured
   * @param alertMessage it is a custom message for user to be shown on the screen
   */


  genereateOutput(e, alertMessage) {
    switch (e) {
      // events joining swarm
      // for creating swarm from events
      case "joinSwarm":
        {
          this.alertManager_swarm("You joined the swarm", 5000);
          this.vibration.vibrate([2000, 1000, 2000]);
          break;
        }
      // Someone joined the swarm

      case "userJoinedSwarm":
        {
          this.alertManager_swarm("Someone joined swarm", 5000);
          this.vibration.vibrate([1000]);
          break;
        }
      // events leave swarm

      case "leaveSwarm":
        {
          this.alertManager_swarm("You left the swarm", 5000);
          this.vibration.vibrate([4000]);
          break;
        }

      case "userLeftSwarm":
        {
          this.alertManager_swarm("Someone left the swarm ", 5000);
          this.vibration.vibrate([4000]);
          break;
        }
      // checkpoint alert or all the navigational alerts cases will be specified here

      case "meetcheckpointAlert":
        {
          /* this.alertManager(
            "Checkpoint alert",
            alertMessage,
            "OK",
            5000,
            1
          ); */
          this.alertManager_checkpoint(alertMessage, 5000);
          break;
        }

      case "leavecheckpointAlert":
        {
          /* this.alertManager(
            "Checkpoint alert",
            alertMessage,
            "OK",
            5000,
            1
          ); */
          this.alertManager_checkpoint(alertMessage, 5000);
          break;
        }
      // destination alert

      case "destinationReached":
        {
          /* this.alertManager(
            "Destination Alert",
            alertMessage,
            "OK",
            5000,
            3
          ); */
          this.alertManager_checkpoint(alertMessage, 5000);
          break;
        }
      // inner geofence reached for both leave and meet checkpoint

      case "innercheckpointAlert":
        {
          /* this.alertManager(
            "Checkpoint Alert",
            alertMessage,
            "OK",
            5000,
            2
          ); */
          this.alertManager_checkpoint(alertMessage, 5000);
          this.vibration.vibrate([3000]);
          break;
        }

      case "navigationalInformation":
        {
          // here the navigational information will be added
          break;
        }

      default:
        {
          //statements;
          console.error("No specified output found for the string ", e);
          break;
        }
    }
  }

  alertManager_checkpoint(alertmessage, timeToDisplay) {
    this.checkpointalert.next(alertmessage);
    setTimeout(() => {
      this.checkpointalert.next("undefined");
    }, timeToDisplay);
  }

  alertManager_swarm(alertmessage, timeToDisplay) {
    this.swarmalert.next(alertmessage);
    setTimeout(() => {
      this.swarmalert.next("undefined");
    }, timeToDisplay);
  }
  /**
   *
   *
   * @param msg message to be shown
   * @param color color of the toast
   * @param duration display time
   */


  generateToast(msg, color, duration) {
    console.log("from toast", msg);
    const toast = {
      message: msg,
      color: color || "dark",
      duration: duration || 5000
    };
    this.toasts.push(toast);
    const timeout = (this.toasts.length - 1) * toast.duration;
    this.show(timeout);
  }

  show(timeout) {
    var _this = this;

    setTimeout( /*#__PURE__*/(0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastCtrl.create(_this.toasts[0]);
      yield toast.present();

      _this.toasts.splice(0, 1);
    }), timeout > 0 ? timeout + 800 : 0);
  }

};

OutputControllerService.ctorParameters = () => [{
  type: _alertControl_alert_control_service__WEBPACK_IMPORTED_MODULE_2__.AlertControlService
}, {
  type: _awesome_cordova_plugins_vibration_ngx__WEBPACK_IMPORTED_MODULE_1__.Vibration
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
}];

OutputControllerService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: "root"
})], OutputControllerService);


/***/ }),

/***/ 9566:
/*!*******************************************************!*\
  !*** ./src/app/services/rest-api/rest-api.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestApiService": () => (/* binding */ RestApiService)
/* harmony export */ });
/* harmony import */ var _Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/splash-screen/ngx */ 4883);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);







let RestApiService = class RestApiService {
  /*******************************
   * CLASS CONSTRUCTOR
   */
  constructor(http, alerts, splashScreen, router) {
    this.http = http;
    this.alerts = alerts;
    this.splashScreen = splashScreen;
    this.router = router;
    /*******************************
     * Configuration Settings
     */
    // the backend API base address

    this.apiUrl = "https://smartmobility.dfki.de/bikerider"; // the Google API key

    this.mykey = "AIzaSyD6DzItwWYKNk_8dPP4CAt6yzz5gi8A-EU"; //google map autocomplete URL

    this.url = "https://maps.googleapis.com/maps/api/place/autocomplete/json"; // the geocoding URL

    this.urlGeocode = "https://maps.googleapis.com/maps/api/geocode/json";
    this.swarmUrl = "https://virtserver.swaggerhub.com/dfki_smartmobility/Open_Source_Mobility_Backend/1.1.0";
    this.osrmUrl = "http://router.project-osrm.org/route/v1/bike/";
    this.test = []; // generating swarmId for the user to be used

    this.swarmId = null; // to get the app offline with certain data feed
    // ! offline

    this.offline = false;
  }
  /******************************
   * API FUNCTIONS
   */
  //-------------------------------------user API start-----------------------------------------------

  /**
   * `POST /users`
   * generate a backend user ID for the given device ID
   * and FCM token for the given user ID
   * @returns {BackendUserID}
   */
  //


  getUserIdentifier(deviceId, fcmToken) {
    var _this = this;

    console.log(deviceId, fcmToken);
    this.deviceId = deviceId;
    this.fcmToken = fcmToken;
    return new Promise(resolve => {
      const options = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders()
      };
      var requestBody = {
        device_id: this.deviceId,
        fcm_token: fcmToken
      };
      console.log("users device ID:", this.deviceId);
      this.http.post(this.apiUrl + "/users", requestBody, options).subscribe(data => {
        this.userId = data["user_id"];
        console.log("[REST] getUserIdentifier :", data["user_id"]);
        resolve(data);
      }, /*#__PURE__*/function () {
        var _ref = (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
          console.error("Server not responding");
          console.error("post/users Error generating user ID");
          yield _this.handleError(err);
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    });
  }
  /**
   * @param tripid if specified returns all the users with the same tripintersection
   *
   * if tripid not specified , all active users will be returned
   *
   */

  /**
   * @deprecated
   * @param tripid
   * @returns
   */


  getUsersPositions(tripid) {
    return new Promise(resolve => {
      const options = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("APP-USER-ID", this.userId),
        params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("intersecting_trip_id", tripid)
      };
      console.log("[rest-api] getuserposition");
      this.http.get(this.apiUrl + "/users", options).subscribe(data => {
        resolve(data);
        console.log("getusersPosition data called from rest api ", data);
      }, err => console.log("[rest-api] no users found", err));
    });
  } // ---------------------------------------------user API end-------------------------------------------------------
  // ---------------------------------------------Swarm API start-------------------------------------------------------

  /**
   * `Get /swarm`
   *
   * Create a new temporary Swarm Id for the user
   *
   * @param deviceId the (secret) device ID of the user's device, used as a kind of identifier in the app
   */


  getSwarmData(swarmid) {
    return new Promise(resolve => {
      const options = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("APP-USER-ID", this.userId)
      };
      this.http.get(`${this.apiUrl}/swarms/${swarmid}`, options).subscribe(data => {
        resolve(data);
        console.log("[rest-api] gettSwarmData", data);
      });
    });
  }

  postSwarm(devicelist_array, swarmID) {
    return new Promise(resolve => {
      const options = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("APP-USER-ID", this.userId)
      };
      var requestBody = {
        swarm_id: swarmID,
        active_members: devicelist_array
      };
      console.log("users device ID:", this.deviceId, "request body ", requestBody);
      this.http.post(this.apiUrl + "/swarms", requestBody, options).subscribe(data => {
        console.log("[REST] POST/swarm data for created swarm  :", data);
        resolve(data);
      }, err => {
        console.error("error POST/Swarm ", err);
      });
    });
  }
  /**
   *
   * @param DeviceID_array
   * @returns {void} as it updates the swarm information
   */


  updateSwarm(DeviceID_array, swarmId) {
    return new Promise(resolve => {
      const options = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("APP_USER_ID", this.userId) // params: new HttpParams().set("swarm_id", this.swarmId),

      };
      var requestBody = {
        active_members: DeviceID_array
      };
      console.log(requestBody);
      this.http.put(`${this.apiUrl}/swarms/${swarmId}`, requestBody, options).subscribe(data => {
        resolve(data);
        console.log("[rest-api]update swarm in rest", data);
      });
    });
  }

  deleteSwarm(swarmid) {
    return new Promise(resolve => {
      const options = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("APP_USER_ID", this.userId)
      };
      this.http.delete(`${this.apiUrl}/swarms/${swarmid}`, options).subscribe(data => {
        resolve(data);
        console.log("[rest-api] deleteswarm in rest", data);
      });
    });
  }
  /**
   * @deprecated not in use anymore with new implementation API 1.1.1
   * @alternative put/TRIPs
   * `PUT /users/{device_id}`
   *
   * @param currentPosition the user's current position expressed as geo coordinate (latitude, longitude)
   * @param destinationReachedFlag indicates whether the user reached the destination
   * @param abortedFlag indicates whether the user actively cancelled the trip
   * @param speed speed of the user using GPS coordinates
   */


  updateUser(currentPosition, activeTripId, destinationReachedFlag, abortedFlag, speed) {
    return new Promise(resolve => {
      resolve("succesful");

      if (speed == null || speed == undefined || speed < 0 || Number.isNaN(speed)) {
        speed = 0;
      }

      const options = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("APP-USER-ID", this.userId),
        params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("device_id", this.deviceId)
      };
      var requestBody = {
        position: currentPosition,
        position_timestamp: new Date().toISOString(),
        active_trip_id: activeTripId,
        speed: speed,
        destination_reached: destinationReachedFlag,
        aborted: abortedFlag
      };
      this.http.put(`${this.apiUrl}/users/${this.deviceId}`, requestBody, options).subscribe(data => {
        // console.log("[rest-api] update user called", data);
        resolve(data);
      }, error => {
        console.log("[rest-api] updateUser error:", error);
      });
    });
  }
  /**
   *
   * @param current_position current position of the user
   * @param trip_id trip id for the current trip
   * @param destination_reached if destination reached or nopt
   * @param aborted if aborted the trip in between
   * @param page at which page the call has been provided
   * @debug option for the page call
   * @param speed speed of the user at which the user is riding
   * @returns
   */


  Swarmupdate_trip(current_position, trip_id, destination_reached, aborted, speed, page) {
    return new Promise(resolve => {
      const options = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("APP-USER-ID", this.userId)
      };
      const requestBody = {
        position: {
          lng: current_position.lng,
          lat: current_position.lat
        },
        position_timestamp: new Date().toISOString(),
        active_trip_id: trip_id,
        speed: speed,
        destination_reached: destination_reached,
        aborted: aborted
      };
      console.log("[rest-api] update-trip called for request to update the trip from page :", page);
      this.http.put(`${this.apiUrl}/users/${this.deviceId}`, requestBody, options).subscribe(data => {
        resolve("deleteXX");
      }, error => {
        console.log("[rest-api] update_trip error:", error);
      });
    });
  }
  /**
   * `PUT /users/{device_id}`
   *
   * Update the status of an user, this includes
   * -
   *  user's position and the corresponding position timestamp,
   * - a user's ongoing trip indicated by the active_trip_id,
   * - a flag destination_reached that indicates whether the user reached its destination,
   * - a flag aborted that indicates whether the user (actively) cancelled a trip.
   *@deprecated with new API 1.1.1
   * @param currentPosition the user's current position expressed as geo coordinate (latitude, longitude)
   * @param destinationReachedFlag indicates whether the user reached the destination
   * @param abortedFlag indicates whether the user actively cancelled the trip
   */

  /*   updateUser(
    currentPosition: any,
    activeTripId,
    destinationReachedFlag: boolean,
    abortedFlag: boolean
  ) {
    // TODO: test this method as it has not been tested yet!
    return new Promise((resolve) => {
      const options = {
        headers: new HttpHeaders().set("APP-USER-ID", this.userId),
        params: new HttpParams().set("device_id", this.deviceId),
      };
      var requestBody = {
        position: currentPosition,
        position_timestamp: new Date().toISOString(),
        active_trip_id: activeTripId,
        destination_reached: destinationReachedFlag,
        aborted: abortedFlag,
      };
      this.http
        .put(`${this.apiUrl}/users/${this.deviceId}`, requestBody, options)
        .subscribe(
          (data) => {
            // console.log("[rest-api] update user called", data);
            resolve(data);
          },
          (error) => {
            console.log("[rest-api] updateUser error:", error);
          }
        );
    });
  }
  */

  /**
   * `POST /trip_proposals`
   * Returns a trip proposal, including its intersections with all active trips.
   *
   * @param fromPosition the start position of the user's trip
   * @param toPosition the end position of the user's trip
   * @param intersections a flag describing whether the API should return route intersections with other users
   */
  // -----------------------------------------Tripproposals API start----------------------------------


  getTripProposal(fromPosition, toPosition, intersections = true) {
    console.log("[rest-api] get trip proposal request started :with intersection turned :", intersections);
    return new Promise(resolve => {
      const options = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("APP-USER-ID", this.userId),
        params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("intersections", intersections.toString())
      };
      var requestBody = {
        start_point: {
          lng: fromPosition.lng,
          lat: fromPosition.lat
        },
        end_point: {
          lng: toPosition.lng,
          lat: toPosition.lat
        }
      };
      this.http.post(`${this.apiUrl}/trip_proposals`, requestBody, options).subscribe(data => {
        resolve(data);
        console.log("REST_provider get trip proposal data ", data);
        console.log("REST_provider get trip proposal data ", JSON.stringify(data));
      }, err => {
        console.log("ERROR in gettripproposal rest-api", err);
        this.handleError(err);
        this.router.navigateByUrl("/home").then(suc => {
          console.log(suc);
        }, error => {
          console.error(error);
        });
        this.splashScreen.show();
        window.location.reload();
      });
    });
  }
  /**
   * `GET /trips`
   *
   * Returns a trip's detailed route for a trip of an given user, identified by its user ID.
   *
   * @param foreignTripId the user ID of the user whose trip data should be returned
   */
  // ---------------------Trips API calls -------------------------------

  /**
   * ! GET/ trips
   * @param foreignTripId
   * @param user
   * @returns
   */


  getTrips(foreignTripId) {
    console.log("REST gettrips");
    return new Promise(resolve => {
      const options = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("APP-USER-ID", this.userId),
        params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("trip_id", foreignTripId)
      };
      this.http.get(`${this.apiUrl}/trips`, options).subscribe(data => {
        resolve(data);
        console.log("REST get trips ", data);
      }, err => {
        console.error("REST Get/Trips", err);
      });
    });
  }

  putTrips(foreignTripId, status) {
    if (this.offline) {
      return new Promise(resolve => {
        let result = {
          status: "inactive"
        };
        resolve(result);
      });
    } else {
      return new Promise(resolve => {
        const options = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("APP-USER-ID", this.userId)
        };
        let validStatus = ["active", "inactive", "null", "aborted", "completed"];
        var requestBody = {
          status: status
        }; // checking if the parameter is passed correctly

        if (!validStatus.includes(status)) {
          console.error("ERROR invalid status value");
        } // resolve("trip updated")


        this.http.put(`${this.apiUrl}/trips/${foreignTripId}`, requestBody, options).subscribe(data => {
          console.log("[rest-api] put trips", data);
          resolve(data);
        }, error => {
          console.log("[rest-api] Put trips:", error);
        });
      });
    }
  } // -------------------------------------Trips end-------------------------------------------
  // ------------------------------------- User locations API start-------------------------------------------
  // POST/userlocations


  postUserlocation(tripid, userdeviceID, currentPosition, speed) {
    return new Promise(resolve => {
      if (speed == null || speed == undefined || speed < 0 || Number.isNaN(speed)) {
        speed = 0;
      }

      const options = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("APP-USER-ID", this.userId) // params: new HttpParams().set("device_id", userdeviceID).set("trip_id", tripid),

      };
      var requestBody = {
        device_id: this.deviceId,
        trip_id: tripid,
        position: currentPosition,
        position_timestamp: new Date().toISOString(),
        speed: speed
      };
      console.log("[rest-api] getuserposition");
      this.http.post(this.apiUrl + "/userlocations", requestBody, options).subscribe(data => {
        resolve(data);
        console.log("[rest-api] update user data ", data);
      }, err => console.log("[rest-api] error post/userlocation", err));
    });
  } //GET/Userlocations


  getUserlocation(tripId, deviceId) {
    if (this.offline) {
      return new Promise(resolve => {
        resolve("updated");
      });
    } else {
      return new Promise(resolve => {
        const options = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("APP-USER-ID", this.userId),
          params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("device_id", deviceId).set("trip_id", tripId)
        };
        this.http.get(`${this.apiUrl}/userlocations/`, options).subscribe(data => {
          // console.log("[rest-api] update user called", data);
          resolve(data);
        }, error => {
          console.log("[rest-api] userlocation error:", error);
        });
      });
    }
  } // -------------------------------------user locations end-------------------------------------------
  // -------------------------------------Trip intersections API start-------------------------------------------


  getTripintersection(trip_intersection_id, eager) {
    return new Promise(resolve => {
      console.log("inside trip intersection trip id", trip_intersection_id);
      const options = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("APP-USER-ID", this.userId),
        params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("eager", eager.toString())
      };
      this.http.get(`${this.apiUrl}/tripintersections/${trip_intersection_id}`, options).subscribe(data => {
        console.log("[rest-api] GET/tripIntersection", data);
        resolve(data);
      }, error => {
        console.log("[rest-api] tripintersection error:", error);
      });
    });
  } // -------------------------------------Trip intersections end-------------------------------------------


  getAdresses(input) {
    return new Promise(resolve => {
      const options = {
        params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("input", input).set("key", this.mykey) // .set("types","geocode")
        .set("components", "country:de").set("strictbounds", "").set("location", "52.49161311310171,13.330621719360353").set("radius", "50000")
      };
      this.http.get(this.url, options).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => this.handleError(err));
    });
  }

  getadressgeocode(input) {
    return new Promise(resolve => {
      const options = {
        params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("address", input).set("key", this.mykey)
      };
      this.http.get(this.urlGeocode, options).subscribe(data => {
        resolve(data);
      }, err => this.handleError(err));
    });
  }
  /**
   * ! changes have been made according to the new API 1.1.1
   * TODO: not tested
   *
   * @param user
   * @param device
   * @param currentPosition
   * @param activeTripId
   * @param destinationReachedFlag
   * @param abortedFlag
   * @param speed
   * @returns
   */


  updateUser_ghostUser(user, device, currentPosition, activeTripId, destinationReachedFlag, abortedFlag, speed) {
    // TODO: test this method as it has not been tested yet!
    return new Promise(resolve => {
      const options = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set("APP-USER-ID", user),
        params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("device_id", device)
      };

      if (speed == null || speed == undefined || speed < 0 || Number.isNaN(speed)) {
        console.error("speed", speed);
        speed = 0;
      }

      var requestBody = {
        position: currentPosition,
        position_timestamp: new Date().toISOString(),
        active_trip_id: activeTripId,
        speed: speed,
        destination_reached: destinationReachedFlag,
        aborted: abortedFlag
      };
      this.putTrips(activeTripId, "aborted").then(() => {
        console.log("Successfully deleted ");
      });
    });
  } // ---------------------------------OSRM API start-------------------------------------------------

  /**
   *
   * @param toStart
   * @param toPosition
   * @returns route steps
   */


  osrm(toStart, toPosition) {
    return new Promise(resolve => {
      const options = {
        params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set("overview", "false").set("steps", "true")
      };
      this.http.get(this.osrmUrl + toStart.lng + "," + toStart.lat + ";" + toPosition.lng + "," + toPosition.lat, options).subscribe(data => {
        resolve(data);
        console.log("osrm", data);
      });
    });
  }
  /******************************
   * UTILITY FUNCTIONS
   */

  /**
   * Method for handling errors within the REST API
   *
   * @param err
   */


  handleError(err) {
    var _this2 = this;

    return (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("error handler activated");
      let serverError = "Unfortunately, the server is not online. Please try again later.<hr>" + "<br> We are currently working on it. Sorry for any inconvenience : <br>";
      let internetError = "";

      let alert = _this2.alerts.create({
        header: "An Error Has Occurred",
        message: "Unfortunately, the server is not online. Please try again later.<hr>" + "<br> We are currently working on it. Sorry for any inconvenience : <br>",
        buttons: [
        /*         {
          text: "Restart",
          handler: () => {
            this.splashScreen.show();
            this.router.navigateByUrl("/home");
            console.log("Error handler [rest]");
            window.location.reload();
          },
        }, */
        {
          text: "Exit app",
          handler: () => {
            navigator["app"].exitApp();
          }
        }]
      });

      (yield alert).present();
      setTimeout( /*#__PURE__*/(0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        (yield alert).dismiss();
      }), 5000);
      console.error(`[REST-API] ${err.message}`);
      console.error(err);
    })();
  }

};

RestApiService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController]
  }]
}, {
  type: _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_1__.SplashScreen,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
    args: [_awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_1__.SplashScreen]
  }]
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}];

RestApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: "root"
})], RestApiService);


/***/ }),

/***/ 8334:
/*!*********************************************************!*\
  !*** ./src/app/services/signaling/signaling.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignalingService": () => (/* binding */ SignalingService)
/* harmony export */ });
/* harmony import */ var _Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/global-constants */ 1359);
/* harmony import */ var _awesome_cordova_plugins_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/vibration/ngx */ 5951);
/* harmony import */ var _ionic_native_text_to_speech__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/text-to-speech */ 298);
/* harmony import */ var _alertControl_alert_control_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alertControl/alert-control.service */ 2417);
/* harmony import */ var _outputController_output_controller_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../outputController/output-controller.service */ 5233);










let SignalingService = class SignalingService {
  constructor(http, alertCtrl, alertController, vibration, toastController, tts, outputController) {
    this.http = http;
    this.alertCtrl = alertCtrl;
    this.alertController = alertController;
    this.vibration = vibration;
    this.toastController = toastController;
    this.tts = tts;
    this.outputController = outputController;
    this.swarmId = null;
    this.user = null;
    this.alertpresent = false;
  } // general ttp call for all navigation form


  callSpeach(message) {
    /* this.tts
      .speak(message)
      .then(() => console.log("success"))
      .catch((res) => {
        console.log("ERROR generated due to navigation to voice ", res);
      }); */
  } //shows the right alert depending on the resp


  signaling(resp, result, time, filterForChoosenRoute) {
    console.log("in signaling");
    console.log("In signaling responses according to radius", resp[0]["radius"]);

    if (resp[0]["radius"] == src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_1__.GlobalConstants.meeting_checkppoint_radius_outside) {
      if (resp[0].id.includes(filterForChoosenRoute.foreign_trip_id)) {
        this.approachAlert(resp[0].notification.title, result, time);
        console.log("radius code 50  approaching alert for the checkpoint ", resp[0], " ", result, "  ", time);
        this.vibration.vibrate([3000]);
      }
    }

    if (resp[0]["radius"] == src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_1__.GlobalConstants.leaving_checkppoint_radius_outside) {
      if (resp[0].id.includes(filterForChoosenRoute.foreign_trip_id)) {
        this.leaveAlert(resp[0].notification.title, result, time);
        console.log("radius code 50 leaving schwarm ", resp[0], " ", result, "  ", time);
        this.vibration.vibrate([3000]);
      }
    }

    if (resp[0]["radius"] == src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_1__.GlobalConstants.checkpoint_radius_inner) {
      if (resp[0].id.includes(filterForChoosenRoute.foreign_trip_id)) {
        console.log("radius code 10, checkpoint alert just reached checkpoint", resp[0], " ", result, "  ", time);
        this.outputController.genereateOutput("innercheckpointAlert", "You just arrived at the checkpoint");

        if (!this.alertpresent) {
          this.alertpresent = true; // this.checkPointAlert();
          // this.vibration.vibrate([3000]);
        }
      }
    } // notification for the destination arrived


    if (resp[0]["radius"] == src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_1__.GlobalConstants.destination_radius) {
      this.leaveAlertRoute(resp[0].notification.title);
      console.log("radius code 50 destination arrived", resp[0], " ", result, "  ", time);
      this.vibration.vibrate([3000]);
    }

    if (resp[0]["radius"] == src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_1__.GlobalConstants.navigational_radius) {
      this.Navigationaller(resp[0].notification.title, resp[0]["notification"]["text"], resp[0]["notification"]["icon"], resp[0].notification.data);
      console.log("navigation information from geofence", resp[0], " ", result, "  ", time);
      this.vibration.vibrate([3000]);
    }

    if (resp[0]["radius"] == src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_1__.GlobalConstants.navigational_leave_radius) {
      this.Navigationaller(resp[0].notification.title, resp[0]["notification"]["text"], resp[0]["notification"]["icon"], resp[0].notification.data);
      console.log("navigation information from geofence", resp[0], " ", result, "  ", time);
      this.vibration.vibrate([1000]);
    }
  }

  Navigationaller(title, text, icon, data) {
    var _this = this;

    return (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let inhalt = "";
      console.log("now in signaling navigation ", title, "text", text); //check first if street name is defined
      // ! here we have to consider what infromation is available to us and what is not
      // return what is available , if not edit the message inn something understandable 

      let keywords = data;
      inhalt = _this.checkNavigationInformation(keywords);
      _this.navInformation = inhalt;
      _this.navIcon = icon;

      _this.callSpeach(inhalt);

      console.log("-----------inhalt is :", inhalt);
    })();
  }

  checkNavigationInformation(data) {
    // start with the type 
    let type = data.type,
        name = data.name,
        modifier = data.modifier;
    let output = "";

    if (type == "" || type.includes("undefined") || type.includes(undefined)) {
      output = "";
    } else {
      output = type;
    } // check modifier


    if (modifier == "" || modifier.includes("undefined") || modifier.includes(undefined)) {
      //  output += ""
      output += "";
    } else {
      output = output + " " + modifier;
    } // check for street name 


    if (name == "" || name.includes("undefined") || name.includes(undefined)) {
      //  output += " "
      output += "";
    } else {
      output = output + " " + name;
    }

    return output;
  }

  approachAlert(street, result, time) {
    var _this2 = this;

    return (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let message;

      if (street == "undefined" || result == "undefined" || time == "undefined" || street == undefined || result == undefined || time == undefined || street == null || result == null || time == null) {
        message = "Reaching the checkpoint in 50 meters";
      } else {
        message = "Reaching the checkpoint in: " + result + " -- " + time + "min" + " at " + street;
      }

      _this2.outputController.genereateOutput("meetcheckpointAlert", message);

      _this2.callSpeach("Reaching checkpoint in 50 meters");
    })();
  }

  leaveAlert(street, result, time) {
    var _this3 = this;

    return (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let message;

      if (street == "undefined" || result == "undefined" || time == "undefined" || street == undefined || result == undefined || time == undefined || street == null || result == null || time == null) {
        message = "Leaving the swarm";
      } else {
        message = "Leaving the Swarm in: " + result + " -- " + time + "min" + " at " + street;
      }

      _this3.outputController.genereateOutput("leavecheckpointAlert", message);

      _this3.callSpeach(message);
    })();
  }

  leaveAlertRoute(street) {
    var _this4 = this;

    return (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let alertmesage = "";

      if (street == undefined || street == "undefined" || street == "" || street.includes("undefined")) {
        alertmesage = "Destination reached";
      } else {
        alertmesage = "Destination reached" + street;
      }

      _this4.navInformation = alertmesage;

      _this4.outputController.genereateOutput("destinationReached", alertmesage);

      _this4.callSpeach(alertmesage);
    })();
  }

  checkPointAlert() {
    var _this5 = this;

    return (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let alert = yield _this5.alertCtrl.create({
        header: "Checkpoint Alert",
        message: "You just reached the checkpoint",
        cssClass: "home-back-alert",
        buttons: [{
          text: 'OK',
          role: 'confirm',
          handler: () => {
            _this5.alertpresent = false;
          }
        }]
      });
      yield alert.present();
      setTimeout(() => {
        alert.dismiss();
        _this5.alertpresent = false;
      }, 5000);

      _this5.callSpeach("You just reached the checkpoint");
    })();
  }

  getNavigationalInformation() {
    // return this.navInformation;
    return new Promise(resolve => {
      console.log("[signaling] Navinfromation :", this.navInformation);
      resolve(this.navInformation);
    });
  }

  getNavigationalSigns() {
    // return this.navInformation;
    return new Promise(resolve => {
      // console.log("[signaling] Navinfromation :", this.navInformation);
      resolve(this.navIcon);
    });
  }

};

SignalingService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: _alertControl_alert_control_service__WEBPACK_IMPORTED_MODULE_4__.AlertControlService
}, {
  type: _awesome_cordova_plugins_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__.Vibration
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
}, {
  type: _ionic_native_text_to_speech__WEBPACK_IMPORTED_MODULE_3__.TextToSpeech
}, {
  type: _outputController_output_controller_service__WEBPACK_IMPORTED_MODULE_5__.OutputControllerService
}];

SignalingService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
  providedIn: "root"
})], SignalingService);


/***/ }),

/***/ 6578:
/*!*****************************************************!*\
  !*** ./src/app/services/storage/storage.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var _Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ 190);




let StorageService = class StorageService {
  constructor(storage) {
    this.storage = storage; // key value array

    this.keyArray = [];
    this.init();
  }

  init() {
    var _this = this;

    return (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // If using, define drivers here: await this.storage.defineDriver(/*...*/);
      console.log("function calles init serice storage");
      const storage = yield _this.storage.create();
      _this._storage = storage;
    })();
  } // set a key value pair


  set(key, value) {
    this._storage?.set(key, value);
    this.keyArray.push({
      key: key,
      value: value
    });
  } // get the stored key value


  get(key) {
    var _this2 = this;

    return (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const name = yield _this2._storage?.get(key);
      console.log("get:key -", key, "value", name);
      return name;
    })();
  } // delete the stored key value


  delete(key) {
    this._storage?.remove(key);
  } // clear the whole storage


  clearStorage() {
    this.keyArray = [];

    this._storage.clear();
  } // return all the stored key value pair


  getAll() {
    return new Promise(resolve => {
      let arr = [];
      this._storage?.forEach((value, key) => {
        console.log(key, ":", value);
        arr.push({
          key: key,
          value: value
        });
      });
      console.log("key array is ", arr);
      resolve(arr);
    });
  }

  get_sync_keyvaluearray() {
    return new Promise(resolve => {
      resolve(this.keyArray);
    });
  }

};

StorageService.ctorParameters = () => [{
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__.Storage
}];

StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: "root"
})], StorageService);


/***/ }),

/***/ 907:
/*!***********************************************************!*\
  !*** ./src/app/services/transferdata/transfer.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferService": () => (/* binding */ TransferService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var _rest_api_rest_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rest-api/rest-api.service */ 9566);
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/storage.service */ 6578);





let TransferService = class TransferService {
    constructor(rest, storage) {
        this.rest = rest;
        this.storage = storage;
        this.last_trip_deleted_successfully = false;
        this.geofenceFlag = false;
        /*   state: {
          startpoint: this.startpoint,
          endpoint: this.endpoint,
          route_id: this.choosen_route_id,
          route: this.choosen_route_geometry,
          users_positions: this.users_positions,
          meetlat: this.meetlat,
          meetlng: this.meetlng,
          leavelat: this.leavelat,
          leavelng: this.leavelng,
          overlapse: this.meetpts,
          logText: this.logText,
          prev: this.logg,
          meetingStreet: this.meetingStreet,
          leavingStreet: this.leavingStreet,
        },
       
        */
        // here all the subscriber will be handled
        this.flag = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    clearService(page) {
        this.storage.get("last_trip_deleted_successfully").then((res) => {
            this.last_trip_deleted_successfully = res;
            console.log("last trip deleted succesull", this.last_trip_deleted_successfully, "from page ", page);
            if (this.last_trip_deleted_successfully ||
                this.last_trip_deleted_successfully == undefined) {
                this.startpoint =
                    this.endpoint =
                        this.previouslogs =
                            this.routeID =
                                this.routeGeometry =
                                    this.userPosition =
                                        this.meetingPoint =
                                            this.leavingPoint =
                                                this.meetingStreet =
                                                    this.LeavingStreet =
                                                        this.overlapse =
                                                            this.currentPosition =
                                                                this.navigation_steps =
                                                                    undefined;
                this.last_trip_deleted_successfully = false;
                this.geofenceFlag = false;
            }
            else {
                this.storage.get("tripID").then((res) => {
                    this.routeID = res;
                });
                this.endpoint = this.storage.get("endpoint").then((res) => {
                    this.endpoint = res;
                });
                this.storage.get("startpoint").then((res) => {
                    this.startpoint = res;
                });
                this.storage.get("userID").then((res) => {
                    this.user_old = res;
                });
                this.storage.get("deviceID").then((res) => {
                    this.device_old = res;
                    console.info("deleting the ghost trip for RouteId :", this.routeID, "startpoint", this.startpoint, "endpoint", this.endpoint, "device", this.device_old, "userId ", this.user_old);
                    this.rest
                        .updateUser_ghostUser(this.user_old, this.device_old, this.endpoint, this.routeID, true, true, 0)
                        .then(() => console.log("ghost trip "))
                        .catch((error) => {
                        console.log("ghost trip updateUser valled");
                        this.logtext =
                            this.logtext +
                                new Date().toISOString().substring(11, 19) +
                                " Error: " +
                                error +
                                "\r\n";
                    });
                    /* this.rest
                      .update_trip_ghostTrip(
                        this.user_old,
                        this.device_old,
                        this.startpoint,
                        this.routeID,
                        true,
                        true,
                        "transferService Ghost trip "
                      )
                      .then(() => console.log("trip deleted"))
                      .catch((error) => {
                        console.log("ghost trip error update trip called");
                        this.logtext =
                          this.logtext +
                          new Date().toISOString().substring(11, 19) +
                          " Error: " +
                          error +
                          "\r\n";
                      }); */
                    this.last_trip_deleted_successfully = false;
                    this.geofenceFlag = false;
                    this.storage.set("last_trip_deleted_successfully", true);
                });
            }
        });
    }
    _setDeviceID(id) {
        this.deviceID = id;
        this.storage.set("deviceID", id);
        console.log("deviceID", id);
    }
    _setUserID(id) {
        this.userID = id;
        this.storage.set("userID", id);
        console.log("setting user ID", id);
    }
    // start position get and set
    _getStartPosition() {
        console.log("transfer start", this.startpoint);
        return this.startpoint;
    }
    _setStartPosition(pos) {
        this.storage.set("startpoint", pos);
        this.startpoint = pos;
    }
    // destination position get and set
    _setDestinationPosition(pos) {
        this.endpoint = pos;
        this.storage.set("endpoint", this.endpoint);
    }
    _getDestinationPosition() {
        return this.endpoint;
    }
    // for log details
    _getLogText() {
        return this.logtext;
    }
    _setLogText(logg) {
        this.logtext = logg;
    }
    // for previous logs data
    _getPreviousLog() {
        return this.previouslogs;
    }
    _setPreviousLog(logg) {
        this.previouslogs = logg;
    }
    _getLastPointRoute() {
        return this.lastPointRoute;
    }
    _setLastPointRoute(point) {
        this.lastPointRoute = point;
    }
    _getEndTripStreet() {
        return this.endtripStreet;
    }
    _setEndTripStreet(streetname) {
        this.endtripStreet = streetname;
        console.log("endTripstreet name ", this.endtripStreet);
    }
    _getNavSteps() {
        return this.navigation_steps;
    }
    _setNavSteps(x) {
        console.log("[transfer service] navigational steps passed param ", x);
        this.navigation_steps = x;
        console.log("local variable ", this.navigation_steps);
        console.log("length of both objects:  x = ", x.length, " : navsteps var = ", this.navigation_steps.length);
    }
    _getRouteID() {
        return this.routeID;
    }
    _setRouteID(id) {
        this.routeID = id;
        this.storage.set("tripID", this.routeID);
    }
    _getRouteGeometry() {
        return this.routeGeometry;
    }
    _setRouteGeometry(geometry) {
        this.routeGeometry = geometry;
    }
    _setUserPosition(pos) {
        this.userPosition = pos;
    }
    _getUserPosition() {
        return this.userPosition;
    }
    _getMeetingPoint() {
        return this.meetingPoint;
    }
    _setMeetingPoint(point) {
        this.meetingPoint = point;
    }
    _getMeetingStreet() {
        return this.meetingStreet;
    }
    _setMeetingStreet(name) {
        this.meetingStreet = name;
    }
    _getleavingStreet() {
        return this.LeavingStreet;
    }
    _setLeavingStreet(name) {
        this.LeavingStreet = name;
    }
    _setOverlapse(points) {
        this.overlapse = points;
    }
    _getOverlapse() {
        return this.overlapse;
    }
    _setLeavingPoint(point) {
        this.leavingPoint = point;
    }
    _getLeavingPoint() {
        return this.leavingPoint;
    }
    _getTripDistance() {
        return this.distance;
    }
    _setTripdistance(distance) {
        this.distance = distance;
    }
    // this service function will help to make sure geofence addOrUpdate function has been succesfully finished
    // will return a boolean promise
    _geofenceFlagSuccessfull() {
        return new Promise((resolve) => {
            console.log("geofence flag", this.geofenceFlag);
            resolve(this.geofenceFlag);
        });
    }
    _setExpectedSwarmArray(array) {
        this.expectedSwarmArray = array;
    }
    _getExpectedSwarmArray() {
        let array = this.expectedSwarmArray;
        return array;
    }
    _setUserList(list) {
        this.userList = list;
    }
    /**
     *
     *
     */
    _getUserList() {
        console.log("Transfer User List", this.userList);
        return this.userList;
    }
    getStudents() {
        console.log("observer called", this.geofenceFlag);
        this.flagObservable = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable((observer) => {
            observer.next(this.geofenceFlag);
        });
        return this.flagObservable;
    }
};
TransferService.ctorParameters = () => [
    { type: _rest_api_rest_api_service__WEBPACK_IMPORTED_MODULE_0__.RestApiService },
    { type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService }
];
TransferService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: "root",
    })
    /*
     * this service is created to use as a central data provider , to all the pages even if one page cannot consistently
     * transfer the data to other.
     *
     * Also to transfer the log data which is be saved externally on the storage device, directly copying all the data here
     *
     */
], TransferService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 6557:
/*!****************************************************************************!*\
  !*** ./plugins/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FCM": () => (/* binding */ FCM)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 8751);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function') r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





function FCM() {}

FCM.prototype.clearAllNotifications = function () {
  return window.FCM.clearAllNotifications();
};

FCM.prototype.createNotificationChannel = function (channelConfig) {
  return window.FCM.createNotificationChannel(channelConfig);
};

FCM.prototype.deleteInstanceId = function () {
  return window.FCM.deleteInstanceId();
};

FCM.prototype.getAPNSToken = function () {
  return window.FCM.getAPNSToken();
};

FCM.prototype.getInitialPushPayload = function () {
  return window.FCM.getInitialPushPayload();
};

FCM.prototype.getToken = function () {
  return window.FCM.getToken();
};

FCM.prototype.hasPermission = function () {
  return window.FCM.hasPermission();
};

FCM.prototype.onNotification = function (options) {
  var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();

  var handler = function (payload) {
    return observable.next(payload);
  };

  window.FCM.onNotification(handler, options);
  return observable;
};

FCM.prototype.onTokenRefresh = function (options) {
  var observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  window.FCM.onTokenRefresh(function (token) {
    return observable.next(token);
  }, options);
  return observable;
};

FCM.prototype.requestPushPermission = function (options) {
  return window.FCM.requestPushPermission(options);
};

FCM.prototype.subscribeToTopic = function (topic) {
  return window.FCM.subscribeToTopic(topic);
};

FCM.prototype.unsubscribeFromTopic = function (topic) {
  return window.FCM.unsubscribeFromTopic(topic);
};

FCM.pluginName = 'FCM';
FCM.plugin = 'cordova-plugin-fcm-with-dependecy-updated';
FCM.pluginRef = 'FCM';
FCM.repo = 'https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated';
FCM.platforms = ['Android', 'iOS'];
FCM.installed = _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin.installed;
FCM.getPlugin = _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin.getPlugin;
FCM.getPluginName = _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin.getPluginName;
FCM.getPluginRef = _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin.getPluginRef;
FCM.getPluginInstallName = _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin.getPluginInstallName;
FCM.getSupportedPlatforms = _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin.getSupportedPlatforms;
FCM = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], FCM);


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-d395420d_js-node_modules_ionic_core_dist_esm_t-5c7f8f",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-d395420d_js-node_modules_ionic_core_dist_esm_t-5c7f8f",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".flags .button-inner {\n  color: #FFFFFF;\n  text-shadow: 1px 1px 2px #000000;\n  font-size: large;\n  font-weight: bold;\n}\n\nion-fab[right].miclevels {\n  right: 40px;\n}\n\nion-fab[left].miclevels {\n  left: 25px;\n}\n\n.toolbar-background {\n  background-color: #494f54;\n}\n\n.toolbar-md-title-text-color {\n  color: #777;\n}\n\n.bar-stable .button {\n  color: #FFFFFF !important;\n}\n\nion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDRSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBZkY7O0FBb0JBO0VBQ0UsV0FBQTtBQWpCRjs7QUFvQkE7RUFDRSxVQUFBO0FBakJGOztBQW1CQTtFQUNFLHlCQUFBO0FBaEJGOztBQWtCQTtFQUNHLFdBQUE7QUFmSDs7QUFpQkU7RUFDRSx5QkFBQTtBQWRKOztBQWlCQztFQUNDLDJFQUFBO0FBZEY7O0FBaUJBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFkRjs7QUFpQkE7RUFDRSxlQUFBO0FBZEY7O0FBaUJBO0VBQ0UsbUJBQUE7QUFkRjs7QUFpQkE7O0VBRUUsa0JBQUE7QUFkRjs7QUFpQkE7RUFDRSwyREFBQTtBQWRGOztBQWlCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0VBRUEsY0FBQTtFQUVBLGdCQUFBO0FBbEJGOztBQXFCQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWxCRjs7QUFxQkE7RUFDRSxzREFBQTtBQWxCRjs7QUFxQkE7RUFDRSwrQkFBQTtBQWxCRjs7QUFxQkE7RUFDRSxjQUFBO0FBbEJGOztBQXFCQTtFQUNFLGdCQUFBO0FBbEJGOztBQXFCQTtFQUNFLHNCQUFBO0FBbEJGOztBQXFCQTtFQUNFLG1CQUFBO0FBbEJGOztBQXFCQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFsQkY7O0FBcUJBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBbEJGOztBQXFCQTtFQUNFLCtCQUFBO0FBbEJGOztBQXFCQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBbEJGOztBQXFCQTtFQUNFLGtCQUFBO0FBbEJGOztBQXFCQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBbEJGOztBQXFCQTtFQUNFLGtCQUFBO0FBbEJGOztBQXFCQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0FBbkJGOztBQXNCQTtFQUNFLGlDQUFBO0FBbkJGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy92Mi90aGVtaW5nL1xuXG4vLyBBcHAgR2xvYmFsIFNhc3Ncbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBQdXQgc3R5bGUgcnVsZXMgaGVyZSB0aGF0IHlvdSB3YW50IHRvIGFwcGx5IGdsb2JhbGx5LiBUaGVzZVxuLy8gc3R5bGVzIGFyZSBmb3IgdGhlIGVudGlyZSBhcHAgYW5kIG5vdCBqdXN0IG9uZSBjb21wb25lbnQuXG4vLyBBZGRpdGlvbmFsbHksIHRoaXMgZmlsZSBjYW4gYmUgYWxzbyB1c2VkIGFzIGFuIGVudHJ5IHBvaW50XG4vLyB0byBpbXBvcnQgb3RoZXIgU2FzcyBmaWxlcyB0byBiZSBpbmNsdWRlZCBpbiB0aGUgb3V0cHV0IENTUy5cbi8vXG4vLyBTaGFyZWQgU2FzcyB2YXJpYWJsZXMsIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGFkanVzdCBJb25pYydzXG4vLyBkZWZhdWx0IFNhc3MgdmFyaWFibGVzLCBiZWxvbmcgaW4gXCJ0aGVtZS92YXJpYWJsZXMuc2Nzc1wiLlxuLy9cbi8vIFRvIGRlY2xhcmUgcnVsZXMgZm9yIGEgc3BlY2lmaWMgbW9kZSwgY3JlYXRlIGEgY2hpbGQgcnVsZVxuLy8gZm9yIHRoZSAubWQsIC5pb3MsIG9yIC53cCBtb2RlIGNsYXNzZXMuIFRoZSBtb2RlIGNsYXNzIGlzXG4vLyBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gdGhlIDxib2R5PiBlbGVtZW50IGluIHRoZSBhcHAuXG5cbi5mbGFncyAuYnV0dG9uLWlubmVyIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCAjMDAwMDAwO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi8vIGlvbi1mYWIubWljbGV2ZWxze1xuLy8gICBwb3NpdGlvbjpyZWxhdGl2ZTtcbi8vIH1cbmlvbi1mYWJbcmlnaHRdLm1pY2xldmVsc3tcbiAgcmlnaHQ6IDQwcHg7XG59XG5cbmlvbi1mYWJbbGVmdF0ubWljbGV2ZWxze1xuICBsZWZ0OiAyNXB4O1xufVxuLnRvb2xiYXItYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTRmNTQ7XG59XG4udG9vbGJhci1tZC10aXRsZS10ZXh0LWNvbG9ye1xuICAgY29sb3I6ICM3Nzc7XG4gIH1cbiAgLmJhci1zdGFibGUgLmJ1dHRvbntcbiAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xuIH1cblxuIGlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuXG4gIGNvbG9yOiAjNzU3NTc1O1xuXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM2MTZlN2U7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-menu contentId=\"main\" side=\"start\" swipeGesture=\"true\">\n    <ion-header>\n      <ion-toolbar color=\"warning\">\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"ion-padding\">\n      <ion-menu-toggle\n        auto-hide=\"false\"\n        *ngFor=\"let p of appPages; let i = index\"\n      >\n        <ion-item\n          routerDirection=\"root\"\n          [routerLink]=\"[p.url]\"\n          lines=\"none\"\n          detail=\"false\"\n          routerLinkActive=\"selected\"\n        >\n          <ion-icon\n            slot=\"start\"\n            [ios]=\"p.icon + '-outline'\"\n            [md]=\"p.icon + '-sharp'\"\n          ></ion-icon>\n          <ion-label>{{ p.title }}</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n    </ion-content>\n  </ion-menu>\n  <div class=\"ion-page\" id=\"main\">\n \n    <ion-content class=\"ion-padding\">\n      <ion-router-outlet id=\"main\"></ion-router-outlet>\n    </ion-content>\n  </div>\n</ion-app>\n\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map