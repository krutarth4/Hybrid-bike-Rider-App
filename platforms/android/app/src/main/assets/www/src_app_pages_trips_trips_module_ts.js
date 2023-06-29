"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_trips_trips_module_ts"],{

/***/ 765:
/*!*****************************************************!*\
  !*** ./src/app/pages/trips/trips-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripsPageRoutingModule": () => (/* binding */ TripsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _trips_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trips.page */ 5976);




const routes = [
    {
        path: '',
        component: _trips_page__WEBPACK_IMPORTED_MODULE_0__.TripsPage
    }
];
let TripsPageRoutingModule = class TripsPageRoutingModule {
};
TripsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TripsPageRoutingModule);



/***/ }),

/***/ 4629:
/*!*********************************************!*\
  !*** ./src/app/pages/trips/trips.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripsPageModule": () => (/* binding */ TripsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _trips_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trips-routing.module */ 765);
/* harmony import */ var _trips_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trips.page */ 5976);
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-gauge */ 3398);
/* harmony import */ var src_app_modules_sharedModule_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/sharedModule/shared-module/shared-module.module */ 1699);









let TripsPageModule = class TripsPageModule {
};
TripsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _trips_routing_module__WEBPACK_IMPORTED_MODULE_0__.TripsPageRoutingModule,
            ngx_gauge__WEBPACK_IMPORTED_MODULE_8__.NgxGaugeModule,
            src_app_modules_sharedModule_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__.SharedModuleModule
        ],
        declarations: [_trips_page__WEBPACK_IMPORTED_MODULE_1__.TripsPage],
    })
], TripsPageModule);



/***/ }),

/***/ 5976:
/*!*******************************************!*\
  !*** ./src/app/pages/trips/trips.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripsPage": () => (/* binding */ TripsPage)
/* harmony export */ });
/* harmony import */ var _Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _trips_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trips.page.html?ngResource */ 1935);
/* harmony import */ var _trips_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trips.page.scss?ngResource */ 442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _awesome_cordova_plugins_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/device-orientation/ngx */ 326);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 5453);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 6457);
/* harmony import */ var _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/native-geocoder/ngx */ 9683);
/* harmony import */ var _ionic_native_geofence__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geofence */ 2739);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/app.component */ 5041);
/* harmony import */ var src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/events/events.service */ 1716);
/* harmony import */ var src_app_services_rest_api_rest_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/rest-api/rest-api.service */ 9566);
/* harmony import */ var src_app_services_signaling_signaling_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/signaling/signaling.service */ 8334);
/* harmony import */ var leaflet_awesome_markers_dist_leaflet_awesome_markers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! leaflet.awesome-markers/dist/leaflet.awesome-markers */ 5388);
/* harmony import */ var leaflet_awesome_markers_dist_leaflet_awesome_markers__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(leaflet_awesome_markers_dist_leaflet_awesome_markers__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var geolib_es_findNearest__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! geolib/es/findNearest */ 7161);
/* harmony import */ var geolib_es_getPathLength__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! geolib/es/getPathLength */ 7485);
/* harmony import */ var src_app_services_transferdata_transfer_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/transferdata/transfer.service */ 907);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 6578);
/* harmony import */ var src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/common/global-constants */ 1359);
/* harmony import */ var src_app_class_MathematicalModel_mathematical_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/class/MathematicalModel/mathematical-model */ 9022);
/* harmony import */ var src_app_services_outputController_output_controller_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/services/outputController/output-controller.service */ 5233);
/* harmony import */ var src_app_class_Globalfunction_Global__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/class/Globalfunction/Global */ 3270);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-gauge */ 3398);
/* harmony import */ var leaflet_smooth_marker_bouncing__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! leaflet.smooth_marker_bouncing */ 1422);
/* harmony import */ var leaflet_smooth_marker_bouncing__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(leaflet_smooth_marker_bouncing__WEBPACK_IMPORTED_MODULE_21__);



























let TripsPage = class TripsPage {
  // ------------------
  constructor(events, alertCtrl, navCtrl, navParams, rest, geolocation, platform, geofence, signal, ref, file, app, nativeGeocoder, transfer, storage, mathModel, outputCtrl, global, gauge) {
    this.events = events;
    this.alertCtrl = alertCtrl;
    this.navCtrl = navCtrl;
    this.navParams = navParams;
    this.rest = rest;
    this.geolocation = geolocation;
    this.platform = platform;
    this.geofence = geofence;
    this.signal = signal;
    this.ref = ref;
    this.file = file;
    this.app = app;
    this.nativeGeocoder = nativeGeocoder;
    this.transfer = transfer;
    this.storage = storage;
    this.mathModel = mathModel;
    this.outputCtrl = outputCtrl;
    this.global = global;
    this.gauge = gauge;
    this.startMarkerIcon = L.icon({
      iconUrl: "../assets/content/images/start_marker.png",
      iconSize: [40, 40] // size of the icon

    });
    this.current_position = {};
    this.exist = false;
    this.distance = null;
    this.popup = false;
    this.overlay = "";
    this.otherUserPosition = L.icon({
      iconUrl: "../assets/content/images/swarm1.png",
      iconSize: [32, 32] // size of the icon

    });
    this.myPositionIcon = L.icon({
      iconUrl: "../assets/content/images/bike.png",
      iconSize: [32, 32] // size of the icon

    });
    this.destinationIcon = L.icon({
      iconUrl: "../assets/content/images/destination.png",
      iconSize: [32, 32] // size of the icon

    });
    this.meetingPointIconDefault = L.icon({
      iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23ec7b19&icon=users&iconType=awesome&scaleFactor=2&apiKey=c7ff719c2709426abb5c162d7361a78b`,
      iconSize: [30, 40] // size of the icon

    });
    this.meetingPointIconActive = L.icon({
      iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23ec7b19&icon=users&iconType=awesome&scaleFactor=2&apiKey=c7ff719c2709426abb5c162d7361a78b`,
      iconSize: [35, 50] // size of the icon

    });
    this.leavingPointIconActive = L.icon({
      iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23ec7b19&icon=users-slash&iconType=awesome&scaleFactor=2&apiKey=c7ff719c2709426abb5c162d7361a78b`,
      iconSize: [35, 50] // size of the icon

    });
    this.leavingPointIcondeactive = L.icon({
      iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23ec7b19&icon=users-slash&iconType=awesome&scaleFactor=2&apiKey=c7ff719c2709426abb5c162d7361a78b`,
      iconSize: [30, 40] // size of the icon

    });
    this.swarmId = null;
    this.user = null;
    this.Seconduser = null;
    this.geofenceDebug = false; // use to see information of created geofences in the UI
    // ! not in use anymore

    this.variable_names = {};
    this.c = new L.circle();
    this.accuracyMarker = new L.circle();
    this.cercleFlag = false;
    this.userIDs = "";
    this.position = "";
    this.event = "";
    this.table = [];
    this.eventType = ""; // event logging variable

    this.coordonate = {
      position_timestamp: new Date().toISOString().substring(11, 19),
      userID: this.userIDs,
      Position: this.position,
      EventType: this.eventType,
      Event: this.event
    };
    this.meetptss = {
      lat: 0,
      lng: 0
    }; //card number is associated to the distance and duration text display

    this.card = "1";
    this.cameraTracker = true;
    this.onlocation = {};
    this.navigationMessage = "Have a nice ride";
    this.navigationCalculation = undefined;
    this.directionalIcon = "../assets/content/images/bike.png";
    this.geofenceCount = 0;
    this.currentSpeed = 0;
    this.checkPointMarkerArray = [];
    this.showCurrentSpeed = 0;
    this.i = 0;
    this.showCurrentSpeedColor = "orange";
    this.accuracyMarkerFlag = false; // gauge information
    // gauge condition to show

    this.showSpeedometer = true;
    this.gaugeType = "semi";
    this.gaugeValue = 30; //this.currentSpeed; // this is the current speed m/sec // to convert the unit to km/hr mulitply by 3.6

    this.gaugeLabel = "Current Speed";
    this.gaugeAppendText = "m/sec"; // units fro speed measurement

    this.thresholdConfig = {
      0: {
        color: "orange",
        bgOpacity: 0.9
      },
      20: {
        color: "green",
        bgOpacity: 0.9
      },
      40: {
        color: "red",
        bgOpacity: 0.9
      }
    };
    this.suggestedSpeed = undefined;
    /**
     * @not_in_use as we have custom design properties according to the speed which is a dynamic property
     */

    this.markerConfig = {
      0: {
        color: "#555",
        size: 4,
        label: "0",
        type: "line"
      },
      15: {
        color: "#555",
        size: 2,
        type: "line"
      },
      30: {
        color: "#555",
        size: 4,
        label: "30",
        type: "line"
      },
      40: {
        color: "#555",
        size: 2,
        type: "line"
      },
      50: {
        color: "#555",
        size: 4,
        label: "50",
        type: "line"
      },
      [this.suggestedSpeed]: {
        color: "#555",
        size: 4,
        label: "s",
        type: "triangle"
      }
    };
    this.foregroundcolor = "'black'";
    this.backgroundcolor = "black"; // not in use

    this.footerColor = "orange"; // not in use

    this.showsecondline = false;
    this.showFooter = false;
    this.showSwarmInformation = false; // flag to show swarm in UI or not

    this.border_color = "white"; // default color

    this.numberOfMembersInSwarm = 0; // critical information for the overlap and swarm formation

    /**
     * this array will help to compare locally saved expectedSwarmArray to know about users left, new users and much more
     */

    this.userData = [];
    this.currentLegIndex = 0; // current leg index in the steps array

    this.legInProcess = false; // TODO : a subscriber function for all the properties shown in UI
    // TODO : showSpeed, suggestedSpeed // later on distance and time for units change
    // not implemented in teh code

    this.showCurrentSpeedSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_22__.BehaviorSubject(this.currentSpeed);
    this.ui_showCurrentSpeed = this.showCurrentSpeedSubscription.asObservable();
    console.log("trip page constructor");
    console.log("Welcome to trips page");
    var userID = this.rest.userId;
    console.log("user ID", userID);
    this.loadInformation(); //this code is only used when on mobile device since it does not function on browser

    try {
      if (this.platform.is("android")) {
        platform.ready().then(() => {
          // check nearbyconnections plugin first
          if (NearbyConnections) {
            console.log("nearbyconnections is now defined");
            this.logText = this.logText + new Date().toISOString().substring(11, 19) + " Nearbyconnections is now defined \r\n";
            this.file.writeFile(this.file.externalApplicationStorageDirectory, this.app.filename, this.logText, {
              append: true
            });
          } //start the plugin


          console.log("startservice");
          NearbyConnections.startService(function () {}, function () {}, this.rest.deviceId);
          console.log("listen service");
          NearbyConnections.listenConnections(function (success) {
            console.log("Nearbyconnection success variable is : ", success);

            if (success["event_type"] == "MESSAGE_RECEIVED") {
              events.groupDBController(success);
            } else {
              events.initialize(success);
            }
          }, function (err) {
            console.log("ERROR in nearby :", err);
          });
        });
        this.deviceorientation = new _awesome_cordova_plugins_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__.DeviceOrientation();
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
        this.meetptss = {
          lat: this.meetlat,
          lng: this.meetlng
        };
        this.leavelat = this.transfer._getLeavingPoint().lat;
        this.leavelng = this.transfer._getLeavingPoint().lng;
        this.leaveptss = {
          lat: this.leavelat,
          lng: this.leavelng
        };
        this.overlapse = this.transfer._getOverlapse();
        this.logText = this.transfer._getLogText();
        this.endTripStreet = this.transfer._getEndTripStreet();
        this.lastPointRoute = this.transfer._getLastPointRoute();
        this.expectedSwarmsArray = this.transfer._getExpectedSwarmArray();

        if (this.expectedSwarmsArray.length != 0) {
          // default checkpoint for the calculation
          this.choosenMeetingPoint = this.expectedSwarmsArray[0];
          console.log("choosen checkpoint default ", this.choosenMeetingPoint);
          this.overlapse = this.decode(this.choosenMeetingPoint.intersection_geometry);
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
      this.file.writeFile(this.file.externalApplicationStorageDirectory, this.app.filename, this.logText, {
        append: true
      }).then(suc => {}, err => {});
    }

    this.checkpointMessageSubscription = this.outputCtrl._cast_checkpoint_alert.pipe().subscribe(message => {
      this.checkpointMessage = message;
    }, error => {
      console.error("Subscription error", error);
    });
    this.swarmMessageSubscription = this.outputCtrl._cast_swarm_alert.pipe().subscribe(message => {
      this.swarmMessage = message;
    }, error => {
      console.error("Subscription error", error);
    });
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


  updateSwarmArrayInformation(data) {
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
          let found = old_array.findIndex(function (datanew) {
            return datanew.device_id == item;
          });
          console.warn("found", found);

          if (found < 0) {
            // create a new object and push in
            console.warn("new device found");
            console.warn(element);
            let obj = {
              trip_id: this.trip_id,
              trip_id_geometry: this.trip_polyline,
              device_id: element.users[0].device_id,
              foreign_trip_id: element.users[0].foreign_trip_id,
              swarm_id: element.users[0].swarm_id,
              intersection_distance: element.users[0].distance.toString().trim().split(".")[0],
              intersection_geometry: element.users[0].intersections[0],
              position: element.users[0].position,
              speed: element.users[0].speed,
              color: this.global.generateColor()
            }; // get their trip geometry

            this.rest.getTrips(obj.foreign_trip_id).then(tripData => {
              console.log("🚀 ~ file: trips.page.ts:529 ~ TripsPage ~ .then ~ tripData:", tripData);
              obj.foreign_trip_id_geometry = tripData.geometry;
              return obj;
            }).catch(error => {
              console.error("error getting trips data ", error);
            }).then(() => {
              // console.log("Object", obj)
              this.expectedSwarmsArray.push(obj);
              console.log("all the expected swarm build up "); // console.table(this.expectedSwarmsArray);
            }).catch(error => {
              console.error("ERROR geting trip data ", error, "forDevice Id : ", element.element.users[0].device_id);
            }); // add marker checkpoint for the new point of intersection

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
      console.log("same users intersections "); // update the swarmExpected array

      for (let i = 0; i < old_array.length; i++) {
        let item = old_array[i].device_id;
        let found = new_array.findIndex(function (datanew) {
          return datanew.users[0].device_id == item;
        });
        console.warn("Founded in swarm Array", found);

        if (found < 0) {// console.error("Inconsitent data. Try again....")
        } else if (found >= 0) {
          console.log("user found and updating position"); // update the array position and speed

          let updatingUser = old_array[i];
          let element = new_array[found];
          console.warn("element founded", element);
          updatingUser.position = element.users[0].position;
          updatingUser.speed = element.users[0].speed;
        }
      }
    }

    try {
      new_array.forEach(element => {
        let new_device_id = element.users[0].device_id;
        old_array.forEach(element2 => {
          if (element2.device_id == new_device_id) {
            // update the position
            element2.position = element.users[0].position;
            element2.speed = element.users[0].speed;
          } else {// update the swarm Array
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


  createCheckpoint(element) {
    // here only one-one checkpoint will be added
    let marker = new L.Marker();
    marker.setIcon(this.meetingPointIconDefault);
    console.log("create checkpoint ", element);
    console.log("marker should be available here ");
    let a = this.decode(element.intersection_geometry)[0];
    marker.setLatLng([a.latitude, a.longitude]);
    marker.bindPopup("Loading...", {
      closeButton: false,
      className: "checkpointPopUp"
    });
    marker.addTo(this.map);
    element.checkpointMarker = marker; // leaving point marker

    let decode = this.decode(element.intersection_geometry);
    let b = decode[decode.length - 1];
    let leaveMarker = new L.Marker();
    leaveMarker.setIcon(this.leavingPointIcondeactive);
    leaveMarker.setLatLng([b.latitude, b.longitude]);
    leaveMarker.addTo(this.map);
    element.leavingMarker = leaveMarker;
    let overlap = this.decode(element.intersection_geometry);
    var coordinates = overlap.map(waypoint => new L.LatLng(waypoint.latitude, waypoint.longitude));
    element.intersection_polyline_LatLngs = coordinates; // user position marker

    try {
      let userPositionMarker = new L.Marker();
      userPositionMarker.setIcon(this.otherUserPosition);
      userPositionMarker.setLatLng({
        lat: element.position.lat,
        lng: element.position.lng
      });
      userPositionMarker.addTo(this.map);
      element.marker = userPositionMarker;
      this.checkPointMarkerArray.push({
        checkpointmarker: marker,
        userMarker: userPositionMarker,
        leavingMarker: leaveMarker
      });
    } catch (error) {
      console.error("Other icon generator ", error);
    } // case, when only one meeting point present


    if (this.choosenMeetingPoint == undefined) {
      // console.log("new user creating checkpoint :", this.choosenMeetingPoint)
      this.choosenMeetingPoint = element;
      element.checkpointMarker.setIcon(this.meetingPointIconActive);
      element.leavingMarker.setIcon(this.leavingPointIconActive);
      this.dynamicPolyline.setLatLngs(element.intersection_polyline_LatLngs);
    } // marker are click-able


    marker.on("click", /*#__PURE__*/(0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      this.undoSelection(this.choosenMeetingPoint);
      console.log("marker clicked", marker);
      console.log(element);
      this.choosenMeetingPoint = element;
      yield this.choosenMeetingPoint;
      this.suggestedSpeed = element.suggestedSpeed * 3.6;
      this.suggestedSpeed = Math.round(this.suggestedSpeed * 10) / 10;
      this.distance_to_meet_checkpoint = element.user_distanceToCover;
      yield this.suggestedSpeed;
      marker.setIcon(this.swarmPointIconBig);
      console.log(this.suggestedSpeed);
      console.log("switching polyline"); // this code snippet helps to dynamically change the polyline for the user for the choosen checkpoint

      this.dynamicPolyline.setLatLngs(element.intersection_polyline_LatLngs);
    }), this); // add geofence for the new checkpoint

    setTimeout(() => {
      this.createGeofence(element);
    }, 2000);
  }
  /**
   * it helps with the UI of navigational information
   * @param steps coordinates for leg
   */


  manualNavigation(steps) {
    this.decodedPolyline = this.decode(this.trip_polyline);
    console.log("steps provided", steps);

    if (this.current_position.lat == undefined || this.current_position.lng == undefined) {} else {
      this.currentLeg = steps[this.currentLegIndex];
      this.navigationMessage = this.signal.checkNavigationInformation({
        type: this.currentLeg.maneuver.type,
        name: this.currentLeg.maneuver.name,
        modifier: this.currentLeg.maneuver.modifier
      });
      this.NavigationalInterval = setInterval(() => {
        this.mathModel.getDistanceWithBreakpoint(this.decodedPolyline, {
          latitude: this.current_position.lat,
          longitude: this.current_position.lng
        }, {
          latitude: this.currentLeg.location[1],
          longitude: this.currentLeg.location[0]
        });
      }, 2000);
      let legDistance = this.mathModel.getDistanceWithBreakpoint(this.decodedPolyline, {
        latitude: this.current_position.lat,
        longitude: this.current_position.lng
      }, {
        latitude: this.currentLeg.location[1],
        longitude: this.currentLeg.location[0]
      });

      if (legDistance >= 0) {
        // send all the information
        this.navigationCalculation = Math.ceil(legDistance / 10) * 10;
      } else {
        // switch to next leg
        this.navigationCalculation = 0;
        this.currentLegIndex++;
        this.currentLeg = steps[this.currentLegIndex]; // to stop last leg distance calculation

        clearInterval(this.NavigationalInterval);

        if (this.currentLegIndex < this.steps.length) {
          this.manualNavigation(this.steps);
        } else {// stop the all execution
          // at the end of the route
        }
      }
    }
  }

  createGeofence(element) {
    let fences = [];
    let arr = this.expectedSwarmsArray;
    let index = arr.findIndex(function (elem) {
      return element.device_id == elem.device_id;
    });

    if (index < 0) {
      console.error("for new geofence id not found");
    } else {
      console.log("index found successfully :");
    }

    let meetlat = element.intersection_polyline_LatLngs[0].latitude;
    let meetlng = element.intersection_polyline_LatLngs[0].longitude;
    let leavelng = element.intersection_polyline_LatLngs[element.intersection_polyline_LatLngs.length - 1].longitude;
    let leavelat = element.intersection_polyline_LatLngs[element.intersection_polyline_LatLngs.length - 1].latitude;
    let meetfence_outside = {
      id: src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.meeting_checkppoint_id_outside + "." + element.foreign_trip_id,
      latitude: meetlat,
      longitude: meetlng,
      radius: src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.meeting_checkppoint_radius_outside,
      transitionType: 1,
      notification: {
        id: 333,
        title: "",
        text: "",
        openAppOnClick: false
      }
    };
    fences.push(meetfence_outside);
    let meetfence_inside = {
      id: src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.meeting_checkppoint_id_inner + "." + index,
      latitude: meetlat,
      longitude: meetlng,
      radius: src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.checkpoint_radius_inner,
      transitionType: 1,
      notification: {
        id: index,
        title: "",
        text: "",
        openAppOnClick: false
      }
    };
    fences.push(meetfence_inside);
    let leavefence_outside = {
      id: src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.leaving_checkppoint_id_outside + "." + index,
      latitude: leavelat,
      longitude: leavelng,
      radius: src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.leaving_checkppoint_radius_outside,
      transitionType: 1,
      notification: {
        id: index,
        title: "",
        text: "",
        openAppOnClick: false
      }
    };
    fences.push(leavefence_outside);
    let leavefence_inside = {
      id: src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.leaving_checkppoint_id_inner + "." + index,
      latitude: leavelat,
      longitude: leavelng,
      radius: src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.checkpoint_radius_inner,
      transitionType: 1,
      notification: {
        id: index,
        title: "",
        text: "",
        openAppOnClick: false
      }
    };
    fences.push(leavefence_inside);

    if (this.platform.is("android")) {
      this.platform.ready().then(succ => {
        try {
          this.geofence.addOrUpdate(fences).then(success => {
            console.log("fences added", fences);
          }, error => {
            console.log("error creating geofences ", error);
          });
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
    this.app._fcm_observer.subscribe(data_fcm => {
      console.log("[fcm] new user trip intersection id ", data_fcm); // create new user

      if (data_fcm.trip_intersection_id && data_fcm.trip_intersection_id != "undefined") {
        const updatedKey = "foreign_trip_id";
        const distanceKey = "distance";
        const intersectionKey = "intersections";
        this.rest.getTripintersection(data_fcm.trip_intersection_id, true).then(data => {
          console.warn("trip intersection ", data);
          data.users.forEach(user => {
            let modifiedObject = { ...user,
              [updatedKey]: user.active_trip_id,
              [distanceKey]: data.trip_intersection.distance,
              [intersectionKey]: data.trip_intersection.intersections
            };
            let found = this.userData.findIndex(function (datanew) {
              return datanew.users[0].device_id == user.device_id;
            });
            console.warn("FCM user found ", found);

            if (found < 0) {
              console.log("new user found ");
              this.userData.push(modifiedObject);
            } else {
              console.log("User already present");
            }
          }); // update information for the swarm Array

          try {
            this.updateSwarmArrayInformation(this.userData);
          } catch (error) {
            console.log("ERROR from update list FCM", error);
          }
        });
      }
    }, error => {
      console.error("FCM subscriber error", error);
    });
  }
  /**
   * This functions helps to check the trip status of the users and update the user position
   * After which it calls updateswarm array and refresh user position
   */


  newUser() {
    //check other user trip status and update their location
    Promise.all(this.userData.map((user, index) => {
      // check if trip active
      console.log("user data", user);
      this.rest.getTrips(user[0].foreign_trip_id).then(data => {
        if (data.status == "active") {
          // update the position
          // error handling !dont need it anymore
          if (user[0].foreign_trip_id == undefined || user[0].device_id == undefined) {
            console.error("undefined users found for user ", user);
            console.error("userData is ", this.userData);
            return;
          }

          return this.rest.getUserlocation(user[0].foreign_trip_id, user[0].device_id).then(userPosition => {
            console.log("REST get/userlocation", userPosition);
            user.position = userPosition.position;
            user.position_timestamp = userPosition.position_timestamp;
            console.log("UserPosition", userPosition.position);
            return user;
          }, error => {
            console.error("new user get location error ", error);
          });
        } else {
          // delete user from userData array
          let a = this.userData[index].splice(index, 1);
          console.log("deleted usewr ", a);
          console.log("deleted user~ new array ", this.userData);
        }
      }, error => {
        console.log("Error geting trip status", error);
      });
    })).then(array => {
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
    console.log("check before geofence count :", this.geofenceCount, "steps ", this.steps.length);

    if (this.platform.is("android")) {
      this.platform.ready().then(() => {
        try {
          this.geofence.onTransitionReceived().pipe().subscribe(resp => {
            console.log("----------------------geofence on transition received", resp);
            resp.forEach(element => {
              console.log("trips get elemet for geofencing", element);

              if (element["id"] == src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.meeting_checkppoint_id_outside) {
                // this is all logging texts
                // the signals and alerts are triggered in the signaling service
                this.logText = this.logText + new Date().toISOString().substring(11, 19) + " Approaching a Swarm in 100 meters" + "\r\n";
                this.file.writeFile(this.file.externalApplicationStorageDirectory, this.app.filename, this.logText, {
                  append: true
                }).then(suc => {}, err => {});
                this.writeLogEvents("Approaching a Swarm in 100 meters", "SwarmEvents");
                this.object = Object.assign({}, this.table);
                this.file.writeFile(this.file.externalApplicationStorageDirectory, this.app.fileEvent, this.object, {
                  append: true
                }).then(suc => {}, err => {});
              }

              if (element["id"] == src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.leaving_checkppoint_id_outside) {
                this.logText = this.logText + new Date().toISOString().substring(11, 19) + " Leaving the Swarm in 100 meters" + "\r\n";
                this.file.writeFile(this.file.externalApplicationStorageDirectory, this.app.filename, this.logText, {
                  append: true
                }).then(suc => {}, err => {});
                this.writeLogEvents("Leaving the Swarm in 100 meters", "SwarmEvents");
                this.object = Object.assign({}, this.table);
                this.file.writeFile(this.file.externalApplicationStorageDirectory, this.app.fileEvent, this.object, {
                  append: true
                }).then(suc => {}, err => {});
              }

              if (element["id"] == src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.destination_id) {
                this.logText = this.logText + new Date().toISOString().substring(11, 19) + " You just reached your Destination" + "\r\n";
                this.file.writeFile(this.file.externalApplicationStorageDirectory, this.app.filename, this.logText, {
                  append: true
                }).then(suc => {}, err => {});
                this.writeLogEvents("You just reached your Destination", "TripEvents");
                this.object = Object.assign({}, this.table);
                this.file.writeFile(this.file.externalApplicationStorageDirectory, this.app.fileEvent, this.object, {
                  append: true
                }).then(suc => {}, err => {});
                setTimeout(() => {
                  console.log("element[id] == 300 go home calles");
                  this.goHome("completed");
                }, 6000);
              }

              if (element["radius"] == src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.leaving_checkppoint_radius_outside) {
                this.logText = this.logText + new Date().toISOString().substring(11, 19) + " " + resp[0].notification.title + " " + resp[0]["notification"]["text"] + "\r\n";
                this.file.writeFile(this.file.externalApplicationStorageDirectory, this.app.filename, this.logText, {
                  append: true
                }).then(suc => {}, err => {});
                this.writeLogEvents(element.notification.title + " " + resp[0]["notification"]["text"], "TurnbyTurnNavigation");
                console.log("radius 99 ", resp[0]["notification"]["text"]); //
                //

                this.object = Object.assign({}, this.table);
                this.file.writeFile(this.file.externalApplicationStorageDirectory, this.app.fileEvent, this.object, {
                  append: true
                }).then(suc => {}, err => {});
              }

              if (element["id"] == src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.meeting_checkppoint_id_inner) {
                this.card = "3";
                this.logText = this.logText + new Date().toISOString().substring(11, 19) + " Just reached Checkpoint" + "\r\n";
                this.file.writeFile(this.file.externalApplicationStorageDirectory, this.app.filename, this.logText, {
                  append: true
                }).then(suc => {}, err => {});
                this.writeLogEvents("Just reached Checkpoint", "SwarmEvents");
                this.object = Object.assign({}, this.table);
                this.file.writeFile(this.file.externalApplicationStorageDirectory, this.app.fileEvent, this.object, {
                  append: true
                }).then(suc => {}, err => {});
              }

              if (element["id"] == src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.leaving_checkppoint_id_inner) {
                this.card = "1";
                this.logText = this.logText + new Date().toISOString().substring(11, 19) + " Just reached Breakoff point" + "\r\n";
                this.file.writeFile(this.file.externalApplicationStorageDirectory, this.app.filename, this.logText, {
                  append: true
                }).then(suc => {}, err => {});
                this.writeLogEvents("Just reached Breakoff point", "SwarmEvents");
                this.object = Object.assign({}, this.table);
                this.file.writeFile(this.file.externalApplicationStorageDirectory, this.app.fileEvent, this.object, {
                  append: true
                }).then(suc => {}, err => {});
              }
            }); //send the response to the signal service

            try {
              this.signal.signaling(resp, this.finalDistance, this.time, this.choosenMeetingPoint);
              setTimeout(() => {
                this.signal.getNavigationalInformation().then(data => {
                  console.log("directional message :", data);
                  this.navigationMessage = data;

                  if (this.legInProcess) {
                    clearInterval(this.legInterval);
                    this.legInProcess = false;
                  }

                  console.log("response from geofencing listener", resp);
                  this.calculateLegdistance(resp);
                  console.log("Navigation information is : ", this.navigationMessage);
                }); // for navigational signs for UI

                this.signal.getNavigationalSigns().then(data => {
                  this.directionalIcon = data;
                  console.log("---------directionalIcon", this.directionalIcon);
                });
              }, 500);
            } catch (error) {
              console.log("Error recieving signaling information ", error);
            }
          }, error => {
            console.log("error in listening to geofence subscription", error);
          });
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
      this.interval1; // initiate the userlist
      // this.userList = this.users_positions;

      try {
        this.Newusers();
      } catch (error) {
        console.error("error newUser" + error);
      }
    }, 3000);
  } // here only the updated swarm array list should be passed


  dynamicSuggestedSpeedModel() {
    var _this = this;

    try {
      let chossed_route_id = this.trip_id;
      let array = this.expectedSwarmsArray;
      console.log("array", array);
      array.forEach( /*#__PURE__*/function () {
        var _ref2 = (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (element) {
          // this is the calculation check for static model
          // calculate distance for the expexcted swarm
          console.log("element", element);
          console.log(_this.current_position);

          if (_this.current_position.lat == undefined || _this.current_position.lng == undefined) {
            console.log(_this.current_position);
            return;
          }

          var distanceToCover_forSwarm = _this.mathModel.getDistanceWithBreakpoint(_this.decode(element.foreign_trip_id_geometry), {
            latitude: element.position.lat,
            longitude: element.position.lng
          }, _this.decode(element.intersection_geometry)[0]); // calculate distance for the user


          var distanceToCover_forUser = _this.mathModel.getDistanceWithBreakpoint(_this.decode(element.trip_id_geometry), {
            latitude: _this.current_position.lat,
            longitude: _this.current_position.lng
          }, // ! here we need to have current location of the rider
          _this.decode(element.intersection_geometry)[0]);

          element.user_distanceToCover = distanceToCover_forUser;
          console.log("distave for swarm ", distanceToCover_forSwarm, "distance for user ", distanceToCover_forUser); // calculate Time required to reach swarm

          var ETA_forExpectedSwarm = _this.mathModel.calculateETADynamic(distanceToCover_forSwarm, element.speed);

          element.ETA_swarm = ETA_forExpectedSwarm;

          var ETA_forUser = _this.mathModel.calculateETADynamic(distanceToCover_forUser, _this.currentSpeed);

          element.ETA_user = ETA_forUser;
          element.isAbleToMakeSwarm = _this.mathModel.trips_criteria(ETA_forUser, ETA_forExpectedSwarm);

          let suggestedspeed = _this.mathModel.calculateSuggestedSpeed(distanceToCover_forUser, ETA_forExpectedSwarm);

          var length = _this.decode(element.intersection_geometry).length;

          let leavingpoint_distance = _this.mathModel.getDistanceWithBreakpoint(_this.decode(element.trip_id_geometry), {
            latitude: _this.current_position.lat,
            longitude: _this.current_position.lng
          }, // ! here we need to have current location of the rider
          _this.decode(element.intersection_geometry)[length - 1]);

          element.user_distance_to_leaving_point = leavingpoint_distance;

          var ETA_toLeavingPoint = _this.mathModel.calculateETADynamic(leavingpoint_distance, _this.currentSpeed);

          element.user_ETA_to_leaving_point = ETA_toLeavingPoint;
          element.suggestedSpeed = suggestedspeed;
          yield element.suggestedSpeed;

          if (_this.choosenMeetingPoint !== undefined) {
            console.log("choosen device id ", _this.choosenMeetingPoint.device_id);

            if (_this.choosenMeetingPoint.device_id == element.device_id) {
              _this.suggestedSpeed = suggestedspeed * 3.6;
              _this.suggestedSpeed = Math.round(_this.suggestedSpeed * 10) / 10;
              console.log("for the choosen checkpoint ", _this.suggestedSpeed);
            }
          }

          console.log("suggested speed ", element.suggestedSpeed);
        });

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
      this.refreshMarkerPopup(); // here the suggested speed will be calculated
    } catch (error) {
      alert("dynamic error in function " + error);
    }
  }

  ionViewWillLeave() {
    console.log("ionviewwill leave trips");
    document.getElementById("map_trips").outerHTML = ""; //clear intervals, stop map locating before leaving the page

    console.log("clearing interval trips");
    clearInterval(this.interval1);
    clearInterval(this.interval2);
    clearInterval(this.geoInterval);
    clearInterval(this.legInterval);
    this.events.event_stop(); // this.swarmMessageSubscription.unsubscibe();
    // this.checkpointMessageSubscription.unsubscibe();
    // this.events.set_cercle(2);

    this.map.stopLocate();

    if (this.platform.is("android")) {
      console.log("stoping nearbyservices");
      NearbyConnections.stopService(function () {
        console.log("[NEARBYCONNECTION] Stopped successful");
      }, function () {
        console.error("[NEARBYCONNECTION] failed to stop");
      }, this.rest.deviceId);
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
  } // it helps to create new checkpoint and geofence for the new user or meeting point and laso draw polyline


  DrawNewPolyline(Overlapsegeometry) {
    //draw new polyline when a second user with overlapse joins
    console.log("DrawNewPolyline");
    var newMeetlat;
    var newMeetlng;
    var newLeavelat;
    var newLeavelng;
    this.overlapse = this.decode(Overlapsegeometry);
    var coordinates = this.overlapse.map(waypoint => new L.LatLng(waypoint.latitude, waypoint.longitude));
    this.overlapsePolyline = L.polyline(coordinates, {
      color: "green",
      weight: 8,
      opacity: 0.9,
      lineJoin: "round"
    });
    this.overlapsePolyline.on("click", e => {});
    this.overlapsePolyline.addTo(this.map); //get the new meeting point coords

    newMeetlat = this.overlapse[0].latitude;
    newMeetlng = this.overlapse[0].longitude;
    this.meetptss = {
      lat: this.overlapse[0].latitude,
      lng: this.overlapse[0].longitude
    };
    console.log("Meeting point:", this.meetptss);
    newLeavelat = this.overlapse[this.overlapse.length - 1].latitude; //gets the last latitude of the intersection

    newLeavelng = this.overlapse[this.overlapse.length - 1].longitude; //gets the last langtitude of the intersection

    this.leaveptss = {
      lat: newLeavelat,
      lng: newLeavelng
    };
    console.log("Leaving point", this.leaveptss);
    let options = {
      useLocale: true,
      maxResults: 2,
      defaultLocale: "de_DE"
    };

    if (this.platform.is("android")) {
      //street names
      this.nativeGeocoder.reverseGeocode(newMeetlat, newMeetlng, options).then(result => {
        if (result[0].thoroughfare == "") {
          this.meetingStreet = result[1].thoroughfare;
        } else {
          this.meetingStreet = result[0].thoroughfare;
        }
      }, error => {
        console.error("Error geting street name", error);
      });
      this.nativeGeocoder.reverseGeocode(newLeavelat, newLeavelng, options).then(result => {
        if (result[0].thoroughfare == "") {
          this.leavingStreet = result[1].thoroughfare;
        } else {
          this.leavingStreet = result[0].thoroughfare;
        }
      }, error => {
        console.error("Error getting street name", error);
      }).then(() => {
        //new geofences
        this.addTurnNavigation(src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.meeting_checkppoint_id_outside, 100, newMeetlat, newMeetlng, this.meetingStreet, "", "", src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.meeting_checkppoint_radius_outside);
        this.addTurnNavigation(src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.leaving_checkppoint_id_outside, 400, newLeavelat, newLeavelng, this.leavingStreet, "", "", src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.leaving_checkppoint_radius_outside);
        this.addTurnNavigation(src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.meeting_checkppoint_id_inner, 125, newMeetlat, newMeetlng, this.meetingStreet, "", "", src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.checkpoint_radius_inner);
        this.addTurnNavigation(src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.leaving_checkppoint_id_inner, 425, newLeavelat, newLeavelng, this.leavingStreet, "", "", src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.checkpoint_radius_inner);
      });
    }
  } //function create geofences


  addTurnNavigation(id, idx, lat, lng, modifier, type, str, radius) {
    if (this.platform.is("android")) {
      let fencess = [{
        id: id,
        latitude: lat,
        longitude: lng,
        radius: radius,
        transitionType: 1,
        notification: {
          id: idx,
          title: type + " " + modifier,
          text: str,
          openAppOnClick: false
        }
      }];
      console.log("geofence in addTurn Navigation in trips");
      this.platform.ready().then(() => {
        this.geofence.addOrUpdate(fencess).then(() => console.log(fencess, "NavigationGeofence added in trip"), err => {
          console.log("Turn Geofences failed to add in trip err");
          this.logText = this.logText + new Date().toISOString().substring(11, 19) + " Turn Geofences failed to add" + err + "\r\n";
        });
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
    var coordinates = this.decodedPolyline.map(waypoint => new L.LatLng(waypoint.latitude, waypoint.longitude));
    let polyline = L.polyline(coordinates, {
      color: "grey",
      weight: 8,
      opacity: 0.9,
      lineJoin: "round"
    });
    this.dynamicPolyline = L.polyline([], {
      color: "green",
      weight: 8,
      opacity: 0.9,
      lineJoin: "round"
    });
    polyline.on("click", e => {});
    this.dynamicPolyline.on("click", e => {});
    polyline.addTo(this.map);
    this.dynamicPolyline.addTo(this.map);
    this.map.fitBounds(polyline.getBounds());
    L.marker([this.endpoint.lat, this.endpoint.lng], {
      icon: this.destinationIcon
    }).addTo(this.map);
    L.marker([this.startpoint.lat, this.startpoint.lng], {
      icon: this.startMarkerIcon
    }).addTo(this.map);
    this.marker = new L.Marker();
    this.marker2 = new L.Marker(); //watch user

    this.map.locate({
      setView: true,
      enableHighAccuracy: true,
      watch: true,
      timeout: 10000,
      maximumAge: 5000
    }).on("locationfound", function (e) {
      var radius = e.accuracy; // e speed vector unit in m/sec

      console.log("speed", e.speed);
      console.log("Loadmap position", e);
      this.currentSpeed = e.speed; //  the unit fom m/sec

      console.log("Location user", e.latlng);
      this.marker.setLatLng(e.latlng);
      this.marker.bindPopup("Leaflet locationfound" + this.marker.getLatLng());
      this.marker.setIcon(this.myPositionIcon);
      this.current_position.lat = e.latlng.lat;
      this.current_position.lng = e.latlng.lng;
      this.marker.addTo(this.map);

      try {
        if (this.choosenMeetingPoint != "undefined" && this.choosenMeetingPoint != undefined) {
          // when there is a checkpoint available and selected
          if (this.choosenMeetingPoint.suggestedSpeed >= 0 && !Number.isNaN(this.choosenMeetingPoint.suggestedSpeed)) {
            let sSpeed = this.choosenMeetingPoint.suggestedSpeed;
            let SpeedDeviationFactor = 6;
            let lowerLimit = sSpeed - SpeedDeviationFactor;
            let upperLimit = sSpeed + SpeedDeviationFactor;

            if (this.showCurrentSpeed < lowerLimit) {
              this.showCurrentSpeedColor = "orange";
            } else if (this.showCurrentSpeed >= lowerLimit && this.showCurrentSpeed < upperLimit) {
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

      if (Number.isNaN(this.currentSpeed) || this.currentSpeed == undefined || this.currentSpeed == null) {
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
    }, this);
    this.map.on("locationerror", function (e) {
      this.onLocationError();
      this.geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 10000
      }).then(resp => {
        this.current_position.lat = resp.coords.latitude;
        this.current_position.lng = resp.coords.longitude; // update the marker

        if (this.marker) {
          this.marker.setLatLng({
            lat: this.current_position.lat,
            lng: this.current_position.lng
          });
        }
      }).catch(error => {
        console.error("Error with geolocation");
      });
    }, this); // --------------------
    // stop following the icon when clicked on map

    const click = this.map.on("drag", e => {
      //console.log("following icon has been turned off")
      //console.log("event is ", e)
      this.map.locate({
        setView: false
      });
      this.cameraTracker = false; // console.log("cameraTracker", this.cameraTracker);
    }); // Add all the meeting points

    try {
      this.createCheckpoints();
    } catch (error) {
      console.log("error creating checkpoints", error);
    }
  }
  /**
   * this function helps to calculate leg distance untill the next leg is listened from the geofence
   * @param resp data of geofence for turns geocoordinates
   */


  calculateLegdistance(resp) {
    try {
      this.legInProcess = true; // flag for the distance calculation

      let path = this.decode(this.trip_polyline);
      this.legInterval = setInterval(() => {
        let distance_of_leg = this.mathModel.getDistanceWithBreakpoint(path, {
          latitude: this.current_position.lat,
          longitude: this.current_position.lng
        }, {
          latitude: resp[0].latitude,
          longitude: resp[0].longitude
        });

        if (distance_of_leg >= 0) {
          this.navigationCalculation = Math.ceil(distance_of_leg / 10) * 10;
        } else {
          this.navigationCalculation = 0;
        }
      }, 2000);
    } catch (error) {
      console.error("error calculating leg distance", error);
    }
  } // creates all checkpoints geofence and related marker and UI


  createCheckpoints() {
    console.log("creatingcheckpoints");
    let arr = this.expectedSwarmsArray;
    arr.forEach(element => {
      let marker;
      marker = new L.Marker();
      marker.setIcon(this.meetingPointIconDefault);
      let a = this.decode(element.intersection_geometry)[0];
      marker.setLatLng([a.latitude, a.longitude]); // ! might need better infotmation on the popup

      marker.bindPopup("Loading...", {
        closeButton: false,
        className: "checkpointPopUp"
      });
      marker.addTo(this.map);
      element.checkpointMarker = marker; // leaving point marker

      let decode = this.decode(element.intersection_geometry);
      let b = decode[decode.length - 1];
      let leaveMarker = new L.Marker();
      leaveMarker.setIcon(this.leavingPointIcondeactive);
      leaveMarker.setLatLng([b.latitude, b.longitude]);
      leaveMarker.addTo(this.map);
      element.leavingMarker = leaveMarker;
      let overlap = this.decode(element.intersection_geometry);
      var coordinates = overlap.map(waypoint => new L.LatLng(waypoint.latitude, waypoint.longitude));
      element.intersection_polyline_LatLngs = coordinates; // condition when default selection happens when transiting from tripproposals page to trips page

      if (this.choosenMeetingPoint.device_id == element.device_id) {
        this.suggestedSpeed = this.choosenMeetingPoint.suggestedSpeed * 3.6;
        this.suggestedSpeed = Math.round(this.suggestedSpeed * 10) / 10;
        this.distance_to_meet_checkpoint = element.user_distanceToCover;
        this.dynamicPolyline.setLatLngs(element.intersection_polyline_LatLngs);
        marker.setIcon(this.meetingPointIconActive);
        leaveMarker.setIcon(this.leavingPointIconActive);
      } // user position marker


      try {
        let userPositionMarker = new L.Marker();
        let a = L.icon({
          iconUrl: "../assets/content/images/swarm1.png",
          iconSize: [32, 32] // size of the icon

        });
        userPositionMarker.setIcon(this.otherUserPosition);
        console.log();
        console.log("other user position ", element);
        userPositionMarker.setLatLng({
          lat: element.position.lat,
          lng: element.position.lng
        });
        console.log();
        userPositionMarker.addTo(this.map);
        element.marker = userPositionMarker; // contains information about the user and its checkpoint

        this.checkPointMarkerArray.push({
          checkpointmarker: marker,
          userMarker: userPositionMarker,
          leavingMarker: leaveMarker
        });
      } catch (error) {
        console.error("errior generating user marker ", error);
      } // marker are clickable


      marker.on("click", /*#__PURE__*/(0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
        console.log("switching polyline"); // this code snippet helps to dynamically change the polyline for the user for the choosen checkpoint

        this.dynamicPolyline.setLatLngs(element.intersection_polyline_LatLngs);
      }), this);
      console.log("from checkpoint", element);
    });
  } // this function helps to undo the selected marker by updating the unselected checkpoint icon


  undoSelection(meetingpoint) {
    if (meetingpoint && meetingpoint != null && meetingpoint != undefined && meetingpoint != "undefined") {
      let selected = meetingpoint.checkpointMarker;
      selected.setIcon(this.meetingPointIconDefault);
      let leaveSelected = meetingpoint.leavingMarker;
      leaveSelected.setIcon(this.leavingPointIcondeactive); // animation stop can be done here
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


  deleteCheckpoint(element) {
    // remove checkpoint marker
    let marker = element.checkpointMarker; // delete from the global marker array

    let index = this.checkPointMarkerArray.findIndex(function (data) {
      return marker._leaflet_id == data.checkpointmarker._leaflet_id;
    });
    this.checkPointMarkerArray.splice(index, 1); // remove from the marker array

    element.checkpointMarker.remove();
    element.leavingMarker.remove();
    this.map.removeLayer(element.marker);
    this.map.removeLayer(element.leavingMarker); // element.marker.remove()
    // remove from the array of expected swarms

    let i = this.expectedSwarmsArray.findIndex(function (data) {
      return data.device_id == element.device_id;
    });
    this.expectedSwarmsArray.splice(i, 1);
    console.log("Updated swarm array ", this.expectedSwarmsArray); // if the deleted swarm is the choosen one

    console.log("deleting for element", element, "checkpoint at this point ", this.choosenMeetingPoint);

    if (this.expectedSwarmsArray.length !== 0 && this.choosenMeetingPoint != undefined) {
      if (this.choosenMeetingPoint.device_id == element.device_id) {
        this.dynamicPolyline.setLatLngs([]);
        this.suggestedSpeed = undefined;
        this.distance_to_meet_checkpoint = 0;

        if (this.expectedSwarmsArray.length !== 0) {
          this.choosenMeetingPoint = this.expectedSwarmsArray[0];
          this.choosenMeetingPoint.checkpointMarker.setIcon(this.meetingPointIconActive);
          this.choosenMeetingPoint.leavingMarker.setIcon(this.leavingPointIconActive);
          this.dynamicPolyline.setLatLngs(this.choosenMeetingPoint.intersection_polyline_LatLngs);
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


  updateUserPosition() {
    let pos = {
      lat: this.current_position.lat,
      lng: this.current_position.lng
    };
    console.log("update own position");
    console.warn("Position is ", pos);

    if (pos.lat !== undefined && pos.lng !== undefined) {
      if (this.currentSpeed == null || this.currentSpeed == undefined || this.currentSpeed < 0 || Number.isNaN(this.currentSpeed)) {
        // ! take a look
        this.currentSpeed = 0;
      }

      this.rest.postUserlocation(this.trip_id, this.rest.userId, pos, this.currentSpeed).then(data => {
        console.log("user position updated", data);
      }, error => {
        console.error("Error updarting user position:", error);
      });
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
          lng: this.current_position.lng
        });
        this.c.setRadius(50);
        this.c.addTo(this.map);
        this.c.setStyle({
          color: "yellow"
        });
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


  onLocationError() {
    return (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.error("error geting map location ");
      /* let toast = await this.toastController.create({
        message: "ERROR getting geolocation",
        position: "middle",
        duration: 4000,
      }); */
      //  await toast.present();
    })();
  }
  /**
   * It again brings the screen of the user to current user's location ~ Go to current GPS location
   * @param $event map click event or gps relocation button event
   */


  switchoncamera($event) {
    this.cameraTracker = true;
    this.map.setView({
      lat: this.current_position.lat,
      lng: this.current_position.lng
    });
    this.map.locate({
      setView: true
    });
  }

  load_positions(positions) {
    console.log("user positions are ", positions);
  }

  goHome(tripstatus) {
    //stop services and mark trip and user as done
    console.log("clicked on go home ");

    if (this.platform.is("android")) {
      NearbyConnections.stopService(function () {}, function () {}, this.rest.deviceId);
    } // ! dont need anymore


    if (this.currentSpeed == null || this.currentSpeed == undefined || this.currentSpeed < 0 || Number.isNaN(this.currentSpeed)) {
      // ! take a look
      this.currentSpeed = 0;
    }

    this.rest.putTrips(this.trip_id, tripstatus).then(data => console.log("Quiting trip", data), error => {
      console.error("Error ", tripstatus, "trip");
    }).catch(error => {
      this.logText = this.logText + new Date().toISOString().substring(11, 19) + " Error: " + error + "\r\n";
      this.file.writeFile(this.file.externalApplicationStorageDirectory, this.app.filename, this.logText, {
        append: true
      });
    });
    this.transfer.last_trip_deleted_successfully = true;
    this.storage.set("last_trip_deleted_successfully", true);
    this.map.off();
    this.map.remove();
    console.log("navigating started");
    this.navCtrl.navigateRoot("/home").catch(error => {
      this.logText = this.logText + new Date().toISOString().substring(11, 19) + " Error: " + error + "\r\n";
      this.file.writeFile(this.file.externalApplicationStorageDirectory, this.app.filename, this.logText, {
        append: true
      }).then(suc => {}, err => {});
    });
  } // function to decode trip geometr into waypoints


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
      points.push({
        latitude: lat / 1e5,
        longitude: lng / 1e5
      });
    }

    return points;
  } // this function calculate the distance between the current position of the user and his arrival point


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

    if (this.current_position.lat == this.endpoint.lat && this.current_position.lng == this.endpoint.lng) {
      this.distance = 0;
      return 0;
    } else {
      if (!this.decodedPolyline) {
        console.warn("Decoded polyline has not been initialized, initializing....");
        this.decodedPolyline = this.decode(this.trip_polyline);
      } //find the nearest point to you in the polyline based from your waypoints


      this.closest = (0,geolib_es_findNearest__WEBPACK_IMPORTED_MODULE_13__["default"])(this.current_position, this.decodedPolyline);
      var i = this.decodedPolyline.indexOf(this.closest);
      console.warn(":distance calculator", this.decodedPolyline); // calculating distance to the checkpoint

      let currP;

      try {
        let currentPolyline = this.decodedPolyline.slice(i);
        currP = currentPolyline;
        var d = (0,geolib_es_getPathLength__WEBPACK_IMPORTED_MODULE_14__["default"])(currentPolyline);
        let length = this.decodedPolyline.length; // console.log("total path length ", d);

        this.distance = this.mathModel.getDistanceWithBreakpoint(this.decodedPolyline, {
          latitude: this.current_position.lat,
          longitude: this.current_position.lng
        }, this.decodedPolyline[length - 1]);
        let ETA = this.mathModel.calculateETADynamic(this.distance, this.currentSpeed);
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
      let array = this.expectedSwarmsArray;

      for (var i = 0; i <= array.length - 1; i++) {
        try {
          if (array[i].marker == undefined) {
            array[i].marker = new L.marker();

            if (array[i].position != undefined) {
              array[i].marker.setIcon(this.otherUserPosition).array[i].marker.setLatLng({
                lat: array[i].position.lat,
                lng: array[i].position.lng
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
            lng: array[i].position.lng
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
    array.forEach(element => {
      let marker = element.checkpointMarker;

      if (marker) {
        let a = marker.getPopup().getContent();
        let reachable = "";

        if (element.isAbleToMakeSwarm) {
          reachable = "Yes";
        } else {
          reachable = "No";
        }

        let recommended_speed = this.mathModel.calculateSuggestedSpeed(element.user_distanceToCover, element.ETA_swarm);
        recommended_speed *= 3.6;
        let popupContent = "<div background-color ='black'>Reachable :" + reachable + "<br/>" + "Distance to checkpoint: " + element.user_distanceToCover + " m" + "</br>" + "ETA :" + element.ETA_user + " sec" + "<br/>" + "Recommended Speed " + Math.round(recommended_speed * 10) / 10 + " km/hr" + "</div>";
        marker.getPopup().setContent(popupContent);
        marker.getPopup().update();
      }
    });
  }
  /**
   * @not_in_use no notification to show for user
   */


  NewUserAlert() {
    var _this2 = this;

    return (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("newuseralert trip");
      let alert = yield _this2.alertCtrl.create({
        subHeader: "A new Biker is joining your Trip !",
        buttons: ["Ok"]
      });
      alert.present();
      setTimeout(() => {
        alert.dismiss();
      }, 3000);
    })();
  }
  /**
   * an alert which prompts teh suer to select if user wants to quit the trip
   */


  presentAlert() {
    var _this3 = this;

    return (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(" [alert]  present "); //this.events.publish('log');

      let alert = yield _this3.alertCtrl.create({
        header: "Leave the trip",
        subHeader: "Do you want to leave the trip ?",
        buttons: ["Dismiss", {
          text: "Yes",
          handler: () => {
            if (_this3.platform.is("android")) {
              _this3.writeLogs();
            }

            _this3.goHome("aborted");
          }
        }]
      });
      alert.present();
    })();
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
          lng: element.maneuver.location[0]
        });
        c.setRadius(src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.navigational_radius);
        c.addTo(this.map);
        c.setStyle({
          color: "blue"
        });
        c.bindPopup("element" + element.maneuver.type + " " + element.maneuver.modifier);
      }

      if (element.maneuver.type == "new name" || element.maneuver.type == "notification") {
        element.maneuver.type = "continue";
      }

      let icon = "../assets/content/images/route.png";

      if (element.maneuver.type == "turn" && element.maneuver.modifier == "right") {
        icon = "../assets/content/images/turnRight.png";
      }

      if (element.maneuver.type == "turn" && element.maneuver.modifier == "left") {
        icon = "../assets/content/images/turnLeft.png";
      }

      if (this.platform.is("android")) {
        let fence = {
          id: index + 1,
          latitude: element.maneuver.location[1],
          longitude: element.maneuver.location[0],
          radius: src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.navigational_radius,
          transitionType: 1,
          notification: {
            id: index + 1,
            title: element.maneuver.type + " " + element.maneuver.modifier,
            text: element.name,
            openAppOnClick: false,
            icon: icon,
            data: {
              type: element.maneuver.type,
              modifier: element.maneuver.modifier,
              name: element.name
            }
          }
        };
        fences.push(fence); // for the next step transition - used for data to be shown as soon as the last transition is finished
        // and user doesn't have to wait for next transition to show the data for the next step.

        if (index + 1 <= this.steps.length - 1) {
          let leg = this.steps[index + 1];
          let element2 = leg;

          if (this.geofenceDebug) {
            let c = new L.circle();
            c.setLatLng({
              lat: element2.maneuver.location[1],
              lng: element2.maneuver.location[0]
            });
            c.setRadius(src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.navigational_leave_radius);
            c.addTo(this.map);
            c.setStyle({
              color: "red"
            });
            c.bindPopup("element" + element2.maneuver.type + " modifier" + element2.maneuver.modifier + " name" + element.name);
          }

          if (element2.maneuver.type == "new name" || element2.maneuver.type == "notification") {
            element2.maneuver.type = "continue";
          }

          let icon = "../assets/content/images/route.png";

          if (element2.maneuver.type == "turn" && element2.maneuver.modifier == "right") {
            icon = "../assets/content/images/turnRight.png";
          }

          if (element2.maneuver.type == "turn" && element2.maneuver.modifier == "left") {
            icon = "../assets/content/images/turnLeft.png";
          }

          let fence_leave_next_leg = {
            id: index + 100,
            latitude: element2.maneuver.location[1],
            longitude: element2.maneuver.location[0],
            radius: src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.navigational_leave_radius,
            transitionType: 2,
            notification: {
              id: index + 100,
              title: element2.maneuver.type + " " + element2.maneuver.modifier,
              text: element2.name,
              openAppOnClick: false,
              icon: icon,
              data: {
                type: element2.maneuver.type,
                modifier: element2.maneuver.modifier,
                name: element2.name
              }
            }
          };
          fences.push(fence_leave_next_leg);
        }

        if (element.maneuver.type.includes("undefined") && element.maneuver.type == "" && element.maneuver.modifier.includes("undefined") && element.maneuver.modifier == "") {
          console.error("undefined geofence notification alert ", element);
        }
      }
    });
    console.log("fences are ", fences);

    if (this.platform.is("android")) {
      this.platform.ready().then(succ => {
        try {
          this.geofence.addOrUpdate(fences).then(success => {
            console.log("fences added", fences);
          }, error => {
            console.log("error creating geofences ", error);
          });
        } catch (error) {
          console.log("error creating geofences", error);
        }
      });
    }

    console.log("done initializing the geofence");
  } // function to add geofences from tripproposal


  addpoint() {
    var _this4 = this;

    return (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //geofence for all the checkpoint or point of intersection
      if (_this4.platform.is("android")) {
        let array = _this4.expectedSwarmsArray;
        let fences = [];
        array.forEach((element, index) => {
          let meetlat = element.intersection_polyline_LatLngs[0].lat;
          let meetlng = element.intersection_polyline_LatLngs[0].lng;
          let leavelng = element.intersection_polyline_LatLngs[element.intersection_polyline_LatLngs.length - 1].lng;
          let leavelat = element.intersection_polyline_LatLngs[element.intersection_polyline_LatLngs.length - 1].lat;
          let meetfence_outside = {
            id: src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.meeting_checkppoint_id_outside + "." + element.foreign_trip_id,
            latitude: meetlat,
            longitude: meetlng,
            radius: src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.meeting_checkppoint_radius_outside,
            transitionType: 1,
            notification: {
              id: index,
              title: "",
              text: "",
              openAppOnClick: false
            }
          };
          fences.push(meetfence_outside);
          let meetfence_inside = {
            id: src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.meeting_checkppoint_id_inner + "." + element.foreign_trip_id,
            latitude: meetlat,
            longitude: meetlng,
            radius: src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.checkpoint_radius_inner,
            transitionType: 1,
            notification: {
              id: index,
              title: "",
              text: "",
              openAppOnClick: false
            }
          };
          fences.push(meetfence_inside);
          let leavefence_outside = {
            id: src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.leaving_checkppoint_id_outside + "." + element.foreign_trip_id,
            latitude: leavelat,
            longitude: leavelng,
            radius: src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.leaving_checkppoint_radius_outside,
            transitionType: 1,
            notification: {
              id: index,
              title: "",
              text: "",
              openAppOnClick: false
            }
          };
          fences.push(leavefence_outside);
          let leavefence_inside = {
            id: src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.leaving_checkppoint_id_inner + "." + element.foreign_trip_id,
            latitude: leavelat,
            longitude: leavelng,
            radius: src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.checkpoint_radius_inner,
            transitionType: 1,
            notification: {
              id: index,
              title: "",
              text: "",
              openAppOnClick: false
            }
          };
          fences.push(leavefence_inside);
        }); // TODO : add geofence in database - *done*

        try {
          _this4.geofence.addOrUpdate(fences).then(success => {
            console.log("fences added", fences);
          }, error => {
            console.log("error creating geofences ", error);
          });
        } catch (error) {
          console.log("error creating geofences", error);
        }
      }
    })();
  }
  /**
   * add destination geofence
   */


  addDestinationGeofence() {
    // geofence for destination reached
    this.addTurnNavigation(src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.destination_id, 300, this.lastPointRoute.latitude, this.lastPointRoute.longitude, this.endTripStreet, "", "", src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_17__.GlobalConstants.destination_radius);
  } //writelog


  writeLogEvents(event, eventtype) {
    this.coordonate = {
      position_timestamp: new Date().toISOString(),
      userID: this.rest.userId,
      Position: this.current_position,
      Event: event,
      EventType: eventtype
    };
    this.table.push(this.coordonate); // console.log(this.coordonate);
    // console.log(this.table);
  } //write logs


  writeLogs() {
    let prevLog = this.prev;

    let __this = this;

    NativeLogs.getLog(10000, true, function (_logs) {
      __this.logg = prevLog + _logs;
    });
    setTimeout(() => {
      this.file.writeFile(this.file.externalApplicationStorageDirectory, this.app.filelog, this.logg, {
        append: true
      }).then(suc => {}, err => {});
      this.prev = this.logg;
    });
  }
  /**
   * checks if the input is a not a number
   */


  numberCheck(s) {
    this.showsecondline = Number.isNaN(s);
  }

  uiShowSubscriptions() {
    // current speed subscription
    this.ui_showCurrentSpeed.pipe().subscribe(speed => {// speed= this.
    });

    if (!this.choosenMeetingPoint) {// suggested speed and everything else
    }
  }

};

TripsPage.ctorParameters = () => [{
  type: src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_9__.Events
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.NavParams
}, {
  type: src_app_services_rest_api_rest_api_service__WEBPACK_IMPORTED_MODULE_10__.RestApiService
}, {
  type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.Platform
}, {
  type: _ionic_native_geofence__WEBPACK_IMPORTED_MODULE_7__.Geofence
}, {
  type: src_app_services_signaling_signaling_service__WEBPACK_IMPORTED_MODULE_11__.SignalingService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_24__.ChangeDetectorRef
}, {
  type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File
}, {
  type: src_app_app_component__WEBPACK_IMPORTED_MODULE_8__.AppComponent
}, {
  type: _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__.NativeGeocoder
}, {
  type: src_app_services_transferdata_transfer_service__WEBPACK_IMPORTED_MODULE_15__.TransferService
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_16__.StorageService
}, {
  type: src_app_class_MathematicalModel_mathematical_model__WEBPACK_IMPORTED_MODULE_18__.MathematicalModel
}, {
  type: src_app_services_outputController_output_controller_service__WEBPACK_IMPORTED_MODULE_19__.OutputControllerService
}, {
  type: src_app_class_Globalfunction_Global__WEBPACK_IMPORTED_MODULE_20__.Global
}, {
  type: ngx_gauge__WEBPACK_IMPORTED_MODULE_25__.NgxGauge
}];

TripsPage.propDecorators = {
  mapElement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_24__.ViewChild,
    args: ["map"]
  }],
  appAlert: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_24__.ViewChild,
    args: ["appAlert"]
  }]
};
TripsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_24__.Component)({
  selector: "app-trips",
  template: _trips_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_trips_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
}) //TODO: check fo the new user and users position update and how the UI is reacting to the new location input
// TODO: check where to update swarmArray information and the data foemat
], TripsPage);


/***/ }),

/***/ 442:
/*!********************************************************!*\
  !*** ./src/app/pages/trips/trips.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".leaflet-control-zoom {\n  top: 50px;\n}\n\n.overlay {\n  box-sizing: border-box;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 999999999999;\n}\n\n@keyframes overlayFadein {}\n\n.scroll-content {\n  padding: 0 !important;\n}\n\n#map_trips {\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  position: relative;\n  z-index: -2;\n  display: flex;\n  flex-direction: row-reverse;\n  padding: 2rem;\n}\n\nion-header {\n  background: #494f54;\n  padding: 0 12px;\n  font-size: 2rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n}\n\n.gpsbuttontrip {\n  float: right;\n  position: absolute;\n  bottom: 14%;\n  right: 2%;\n  z-index: 99999 !important;\n}\n\n.backbutton {\n  padding: 0;\n  margin-top: 0.7rem;\n  font-size: 2rem;\n  background: #494f54 !important;\n  border-style: none !important;\n  box-shadow: none;\n  color: white;\n}\n\n.title {\n  margin-top: 1rem;\n  margin-left: 20px;\n  color: black;\n  padding: 0;\n  display: block;\n}\n\n/* .distance {\n  margin-top: 1rem;\n  margin-left: 20px;\n  margin-right: 40px;\n  color: white;\n  padding: 0;\n} */\n\n.head-btn {\n  size: 150%;\n  font-size: 20px;\n}\n\n.spinner {\n  margin-left: 160px;\n}\n\n.spinner > * {\n  background: white;\n}\n\n.modal {\n  box-sizing: border-box;\n  position: absolute;\n  height: 40%;\n  width: 70%;\n  background: #ecf0f1;\n  top: 100px;\n  left: 45px;\n  z-index: 999999999999;\n}\n\n.modal ion-card-header {\n  padding: 0;\n  display: flex;\n  flex-direction: row-reverse;\n  margin-bottom: 10px;\n}\n\n.modal ion-card-header .goButton {\n  margin-top: 30px;\n}\n\n.modal .exit-button {\n  width: 40px;\n  height: 40px;\n  background: #b2bec3;\n  margin-top: 10px;\n  margin-left: auto;\n  margin-right: 20px;\n  border-radius: 50%;\n}\n\n.modal .swarm {\n  box-sizing: content-box;\n  position: absolute;\n  background: #ecf0f1;\n  bottom: 1%;\n  right: 1%;\n  z-index: 999999999999;\n  width: min-content;\n  border: 1px solid black;\n}\n\n#map {\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  position: relative;\n  z-index: -2;\n  display: flex;\n  flex-direction: row-reverse;\n  padding: 2rem;\n}\n\nion-header {\n  color: white;\n  background: orange;\n}\n\nion-toolbar {\n  --background: orange;\n}\n\n.btn-quit {\n  --background: rgba(10, 2, 2, 0.827);\n}\n\n.locate_icontrip {\n  color: black;\n}\n\nlabel {\n  color: black;\n}\n\n.navInfo {\n  color: black;\n}\n\n.distance {\n  color: black;\n}\n\n.top {\n  z-index: 99999;\n  position: absolute;\n  height: 15vh;\n  width: 100vw;\n}\n\nion-avatar {\n  --border-radius: 50%;\n  background-color: white;\n  float: left;\n  position: relative;\n  bottom: 14%;\n  right: 2%;\n  z-index: 99999 !important;\n}\n\nion-chip {\n  --border-radius: 50%;\n  background-color: gray;\n  float: left;\n  position: absolute;\n  bottom: 14%;\n  right: 2%;\n  size: auto;\n  z-index: 99999 !important;\n}\n\n.center {\n  text-align: center;\n}\n\n.dot {\n  height: 15px;\n  width: 15px;\n  background-color: #bbb;\n  border-radius: 50%;\n  margin-left: auto;\n  margin-right: 5%;\n  margin-top: 2px;\n  display: flex;\n}\n\n.top {\n  z-index: 999999;\n}\n\n.topContent {\n  border-style: solid;\n  background-color: white;\n  border-color: white;\n  border-radius: 10px;\n  height: 130px;\n  box-shadow: 20px 20px 50px grey;\n}\n\nion-footer {\n  width: 80%;\n  display: flex;\n  justify-content: center;\n}\n\n.speedometer {\n  position: absolute;\n  bottom: 18%;\n  left: 2%;\n  justify-content: center;\n  z-index: 99999 !important;\n  border-radius: 50%;\n}\n\n.ngx-gauge-meter {\n  background: white;\n  border-radius: 50%;\n  margin: 0;\n  padding: 0 !important;\n  font-size: 15px;\n}\n\n.requiredSpeed {\n  width: 70px;\n  height: auto;\n  border: 2px solid;\n  z-index: 99999;\n  background: white;\n  position: absolute;\n  bottom: 35%;\n  left: 2%;\n  font-size: 15px;\n}\n\n#requirespseedsmall {\n  font-size: 13px;\n}\n\n.bottomContent {\n  position: relative;\n  width: 100%;\n  display: flex;\n  height: auto;\n  box-shadow: 20px 20px 50px grey;\n  border-style: solid;\n  justify-content: center;\n  bottom: 5px;\n  background-color: white;\n  border-top: 5px solid;\n}\n\n.appAlert {\n  position: relative;\n  width: 100%;\n  display: flex;\n  background-color: orange;\n  color: black;\n  justify-content: center;\n  box-shadow: 10px 10px 30px 10px grey;\n  border-radius: 10px;\n}\n\n.badge {\n  position: absolute;\n  top: -12px;\n  right: 0;\n  justify-content: center;\n  display: block;\n}\n\nion-img {\n  max-width: 70%;\n  max-height: 70%;\n}\n\n.stick {\n  position: absolute;\n  width: 100% !important;\n  height: auto;\n  bottom: 5px;\n  z-index: 99999 !important;\n  align-items: center;\n}\n\n.a {\n  animation: bounceInUp;\n  animation-duration: 2s;\n}\n\n.animate__bounceOutDown {\n  animation-duration: 3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyaXBzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7QUFDRjs7QUFDQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUFBLDBCQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFFQSxtQkFBQTtBQUFGOztBQUdBO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFERjs7QUFHQTs7Ozs7O0dBQUE7O0FBUUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQURGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFBRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQURJO0VBQ0UsZ0JBQUE7QUFHTjs7QUFBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtBQUFKOztBQUdFO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0Usb0JBQUE7QUFGRjs7QUFJQTtFQUNFLG1DQUFBO0FBREY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDRixrQkFBQTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFBQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Ysa0JBQUE7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUtGOztBQUhBO0VBQ0UsZUFBQTtBQU1GOztBQUhBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7QUFNRjs7QUFIQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFNRjs7QUFGQTtFQUVHLGtCQUFBO0VBQ0MsV0FBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBR0Esa0JBQUE7QUFFSjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBTUE7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDRSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFKSjs7QUFRQTtFQUNFLGVBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUVBLHVCQUFBO0VBQ0EscUJBQUE7QUFORjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFFQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7QUFQRjs7QUFZQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFURjs7QUFZQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBVEY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBUkY7O0FBYUE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FBVkY7O0FBY0E7RUFDRSxzQkFBQTtBQVhGIiwiZmlsZSI6InRyaXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWFmbGV0LWNvbnRyb2wtem9vbSB7XG4gIHRvcDogNTBweDtcbn1cbi5vdmVybGF5IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDk5OTk5OTk5OTk5OTtcbn1cbkBrZXlmcmFtZXMgb3ZlcmxheUZhZGVpbiB7XG59XG4uc2Nyb2xsLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbiNtYXBfdHJpcHMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IC0yO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbmlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjNDk0ZjU0O1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICBkaXNwbGF5OiBmbGV4O1xuXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ncHNidXR0b250cmlwIHtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOSwgMTY2LCAzMiwgMC42MjcpO1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNCU7XG4gIHJpZ2h0OiAyJTtcbiAgei1pbmRleDogOTk5OTkgIWltcG9ydGFudDtcbn1cblxuLmJhY2tidXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAwLjdyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYmFja2dyb3VuZDogIzQ5NGY1NCAhaW1wb3J0YW50IDtcbiAgYm9yZGVyLXN0eWxlOiBub25lICFpbXBvcnRhbnQgO1xuICBib3gtc2hhZG93OiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLyogLmRpc3RhbmNlIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwO1xufSAqL1xuXG4uaGVhZC1idG4ge1xuICBzaXplOiAxNTAlO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uc3Bpbm5lciB7XG4gIG1hcmdpbi1sZWZ0OiAxNjBweDtcbn1cbi5zcGlubmVyID4gKiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ubW9kYWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDAlO1xuICB3aWR0aDogNzAlO1xuICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xuICB0b3A6IDEwMHB4O1xuICBsZWZ0OiA0NXB4O1xuICB6LWluZGV4OiA5OTk5OTk5OTk5OTk7XG4gIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC5nb0J1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbiAgfVxuICAuZXhpdC1idXR0b24ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcblxuICAgIGJhY2tncm91bmQ6ICNiMmJlYzM7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAuc3dhcm0ge1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xuICAgIGJvdHRvbTogMSU7XG4gICAgcmlnaHQ6IDElO1xuICAgIHotaW5kZXg6IDk5OTk5OTk5OTk5OTtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIH1cbn1cblxuI21hcCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogLTI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogb3JhbmdlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogb3JhbmdlO1xufVxuLmJ0bi1xdWl0IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDEwLCAyLCAyLCAwLjgyNyk7XG59XG4ubG9jYXRlX2ljb250cmlwIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5sYWJlbCB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5uYXZJbmZvIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmRpc3RhbmNle1xuICBjb2xvciA6IGJsYWNrXG59XG5cblxuLnRvcCB7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTV2aDtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuaW9uLWF2YXRhciB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZmxvYXQ6IGxlZnQ7XG5wb3NpdGlvbiA6IHJlbGF0aXZlO1xuICBib3R0b206IDE0JTtcbiAgcmlnaHQ6IDIlO1xuICB6LWluZGV4OiA5OTk5OSAhaW1wb3J0YW50O1xufVxuaW9uLWNoaXB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBmbG9hdDogbGVmdDtcbnBvc2l0aW9uIDogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTQlO1xuICByaWdodDogMiU7XG4gIHNpemU6IGF1dG87XG4gIHotaW5kZXg6IDk5OTk5ICFpbXBvcnRhbnQ7XG59XG4uY2VudGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZG90IHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnRvcHtcbiAgei1pbmRleDogOTk5OTk5O1xuICBcbn1cbi50b3BDb250ZW50e1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OjEzMHB4O1xuICBib3gtc2hhZG93OiAyMHB4IDIwcHggNTBweCBncmV5OztcbiAgXG59XG5pb24tZm9vdGVye1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuXG4uc3BlZWRvbWV0ZXJ7XG4gICAgLy8gZmxvYXQ6IHJpZ2h0O1xuICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDE4JTtcbiAgICBsZWZ0OiAyJTsgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogOTk5OTkgIWltcG9ydGFudDtcbiAgICAvLyBiYWNrZ3JvdW5kOiBncmV5O1xuICAgIC8vIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC8vIGJvcmRlci1jb2xvcjogb3JhbmdlO1xuXG4gICAgLy8gb3BhY2l0eTogMTAwJTtcbn1cbi5uZ3gtZ2F1Z2UtbWV0ZXJ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOjUwJTtcbiAgbWFyZ2luOjA7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4O1xuXG5cblxufVxuXG4ucmVxdWlyZWRTcGVlZHtcblxuICB3aWR0aDogNzBweDsgXG4gIGhlaWdodDogYXV0bzsgXG4gIGJvcmRlcjogMnB4IHNvbGlkIDtcbiAgei1pbmRleDo5OTk5OTtcbiAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDM1JTtcbiAgICBsZWZ0OiAyJTtcbiAgICBmb250LXNpemU6IDE1cHg7XG5cbn1cblxuI3JlcXVpcmVzcHNlZWRzbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmJvdHRvbUNvbnRlbnR7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6MTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAyMHB4IDIwcHggNTBweCBncmV5OztcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8vIENlbnRlcnMgdGhlIGl0ZW1cbiAgYm90dG9tOiA1cHg7IC8vIE1vdmVzIGl0IHVwIGEgbGl0dGxlIGZyb20gdGhlIGJvdHRvbVxuICAvLyBsZWZ0OiAxMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItdG9wOiA1cHggc29saWQgO1xufVxuXG4uYXBwQWxlcnR7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgLy8gYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICBjb2xvcjogYmxhY2s7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMzBweCAxMHB4IGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cblxufVxuXG4uYmFkZ2V7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTJweDtcbiAgcmlnaHQ6MDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6YmxvY2s7XG5cbn1cbmlvbi1pbWd7XG4gIG1heC13aWR0aDogNzAlO1xuICBtYXgtaGVpZ2h0OiA3MCU7IFxufVxuLnN0aWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvdHRvbTogNXB4O1xuICB6LWluZGV4OiA5OTk5OSAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG59IFxuLmF7XG4gIGFuaW1hdGlvbjogYm91bmNlSW5VcDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcblxufVxuXG4uYW5pbWF0ZV9fYm91bmNlT3V0RG93bntcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcblxufVxuXG5cblxuIl19 */";

/***/ }),

/***/ 1935:
/*!********************************************************!*\
  !*** ./src/app/pages/trips/trips.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content padding>\n  <div id=\"map_trips\" class=\"map_trips\" style=\"height: 100%; width: 100%\">\n    <div class=\"top\" style=\"justify-content: center; margin: auto\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"3\"> </ion-col>\n\n          <ion-col\n            class=\"topContent\"\n            [style.border-color]=\"border_color\"\n            size=\"8\"\n          >\n            <ion-row>\n              <ion-col class=\"image\" size=\"4\"\n                ><ion-img width=\"50px\" [src]=\"directionalIcon\"> </ion-img\n              ></ion-col>\n              <ion-col class=\"distance\">\n                <ion-row\n                  ><h3><b> {{this.navigationMessage}} </b></h3></ion-row\n                >\n                <ion-row *ngIf=\"this.navigationCalculation != undefined\">\n                  <h5>in {{this.navigationCalculation | distancePipe}}</h5>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n  <!-- \n  <button\n    class=\"gpsbuttontrip\"\n    id=\"gpsbuttonidtrip\"\n    ion-button\n    color=\"medium\"\n    shape=\"round\"\n    (click)=\"switchoncamera($event)\"\n  >\n    <ion-icon class=\"locate_icontrip\" size=\"large\" name=\"locate\"></ion-icon>\n  </button> -->\n  <div\n    class=\"requiredSpeed\"\n    *ngIf=\"this.choosenMeetingPoint != undefined && this.choosenMeetingPoint.ETA_user>=0\"\n  >\n    <p class=\"center\" id=\"requirespseedsmall\">\n      Required Speed <br />\n      <b>\n        {{suggestedSpeed | number:'1.1-1'}}<br />\n        Kmh\n      </b>\n    </p>\n  </div>\n  <div class=\"speedometer\">\n    <ngx-gauge\n      type=\"full\"\n      [value]=\"this.showCurrentSpeed\"\n      [thick]=\"10\"\n      [size]=\"80\"\n      [min]=\"0\"\n      [max]=\"50\"\n      [foregroundColor]=\"this.showCurrentSpeedColor\"\n      [backgroundColor]=\"'grey'\"\n      label=\"kmh\"\n\n    >\n      <ngx-gauge-value [style.color]=\"this.showCurrentSpeedColor\">\n        {{this.showCurrentSpeed}}\n      </ngx-gauge-value>\n    </ngx-gauge>\n  </div>\n  <div class=\"stick\">\n    <div\n      *ngIf=\"this.swarmMessage != 'undefined' \"\n      class=\"animate__animated animate__bounceInUp \"\n    >\n      <h4 class=\"center appAlert\">{{ this.swarmMessage }}</h4>\n    </div>\n    <div\n      *ngIf=\"this.checkpointMessage != 'undefined' \"\n      class=\"animate__animated animate__bounceInUp \"\n    >\n      <h4 class=\"center appAlert\">{{this.checkpointMessage}}</h4>\n    </div>\n  </div>\n</ion-content>\n<div class=\"bottomContent\" [style.border-color]=\"border_color\">\n  <div\n    class=\"w3-badge w3-orange w3-large w3-margin-right badge\"\n    *ngIf=\"showSwarmInformation\"\n  >\n    {{this.numberOfMembersInSwarm}}\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"1\"\n        ><ion-button\n          shape=\"round\"\n          fill=\"outline\"\n          size=\"small\"\n          color=\"dark\"\n          (click)=\"presentAlert()\"\n        >\n          <ion-icon name=\"close-outline\"></ion-icon> </ion-button\n      ></ion-col>\n      <ion-col class=\"center\">\n        <div\n          *ngIf=\"this.choosenMeetingPoint == undefined || this.choosenMeetingPoint.user_ETA_to_leaving_point < 0 \"\n        >\n          <p><b> {{this.distance | distancePipe }} </b></p>\n          <p>{{this.yourETA | time}}</p>\n        </div>\n        <div *ngIf=\"this.choosenMeetingPoint != undefined\">\n          <div *ngIf=\"this.choosenMeetingPoint.ETA_user != undefined\">\n            <p *ngIf=\"this.choosenMeetingPoint.user_distanceToCover >= 0\">\n              Join Swarm :\n              <b\n                >{{this.choosenMeetingPoint.user_distanceToCover |\n                distancePipe}}</b\n              >\n              |\n              <b>{{this.choosenMeetingPoint.ETA_user | time}}</b>\n            </p>\n            <p\n              *ngIf=\"this.choosenMeetingPoint.user_distanceToCover < 0 && this.choosenMeetingPoint.user_ETA_to_leaving_point >=0 \"\n            >\n              Leave Swarm :\n              <b\n                >{{this.choosenMeetingPoint.user_distance_to_leaving_point |\n                distancePipe}}</b\n              >\n              |\n              <b\n                >{{this.choosenMeetingPoint.user_ETA_to_leaving_point |\n                time}}</b\n              >\n            </p>\n          </div>\n          \n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_trips_trips_module_ts.js.map