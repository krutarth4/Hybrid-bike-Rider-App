"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 678);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage,]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 2260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _awesome_cordova_plugins_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/device-orientation/ngx */ 326);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 6457);
/* harmony import */ var src_app_services_rest_api_rest_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/rest-api/rest-api.service */ 9566);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.component */ 5041);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 5453);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/native-geocoder/ngx */ 9683);
/* harmony import */ var _awesome_cordova_plugins_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/speech-recognition/ngx */ 3898);
/* harmony import */ var src_app_services_transferdata_transfer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/transferdata/transfer.service */ 907);
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/storage/storage.service */ 6578);
/* harmony import */ var leaflet_smooth_marker_bouncing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! leaflet.smooth_marker_bouncing */ 1422);
/* harmony import */ var leaflet_smooth_marker_bouncing__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(leaflet_smooth_marker_bouncing__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _obsidize_rx_console__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @obsidize/rx-console */ 7548);
















;





let HomePage = class HomePage {
  constructor(restProvider, http, geolocation, nativeGeocoder, ngZone, navCtrl, platform, navParams, device, toastcontroller, ref, app, file, alertCtrl, router, speechRecognition, transfer, storage) {
    var _this = this;

    this.restProvider = restProvider;
    this.http = http;
    this.geolocation = geolocation;
    this.nativeGeocoder = nativeGeocoder;
    this.ngZone = ngZone;
    this.navCtrl = navCtrl;
    this.platform = platform;
    this.navParams = navParams;
    this.device = device;
    this.toastcontroller = toastcontroller;
    this.ref = ref;
    this.app = app;
    this.file = file;
    this.alertCtrl = alertCtrl;
    this.router = router;
    this.speechRecognition = speechRecognition;
    this.transfer = transfer;
    this.storage = storage;
    this.currentLocation = {};
    this.autocompleteDestination = {
      input: ""
    };
    this.startAutocompleteLocations = [];
    this.markerSwitch = false;
    this.startMarkerIcon = L.icon({
      iconUrl: "../assets/content/images/start_marker.png",
      iconSize: [40, 40] // size of the icon

    });
    this.startMarker = new L.Marker([], {
      icon: this.startMarkerIcon
    });
    this.Locations = {
      startpoint: {
        lat: null,
        lng: null
      },
      endpoint: {
        lat: null,
        lng: null
      }
      /* startpoint :{lat: 52.510881,lng: 13.317306 },
        endpoint: {lat: 52.523203,lng: 13.329604} */

    };
    this.currentposition = {
      lat: null,
      lng: null
    };
    this.isEnabled = false;
    this.prevZoom = 14;
    this.currentMarkerSwitch = true;
    this.firstMarker = true;
    this.destMarker = new L.Marker();
    this.isRecording = false;
    this.isActive = false;
    /**
     * icons for marker
     */

    this.geolocationIcon = L.icon({
      iconUrl: "../assets/content/images/navigation.png",
      iconSize: [32, 32] // size of the icon

    });
    this.geolocationIcon_2 = L.icon({
      iconUrl: "../assets/content/images/navigation2.png",
      iconSize: [40, 40] // size of the icon

    });
    this.api_key = "c7ff719c2709426abb5c162d7361a78b";
    this.meetingPointIcon = L.icon({
      iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23ec7b19&icon=users&iconType=awesome&noWhiteCircle&scaleFactor=2&apiKey=c7ff719c2709426abb5c162d7361a78b`,
      iconSize: [32, 40] // size of the icon

    });
    this.logger = new _obsidize_rx_console__WEBPACK_IMPORTED_MODULE_13__.Logger('home app component');
    this.startMarkerCreated = false;
    /**
     * loads map and set the markers
     * @param zoom zoom level for map
     */

    this.loadMap = zoom => {
      let destinationIcon = L.icon({
        iconUrl: "../assets/content/images/destination.png",
        iconSize: [35, 35]
      });
      this.map = L.map("map_home", {
        zoomControl: false
      });
      L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution: "BikeRiderApp DFKI"
      }).addTo(this.map);
      L.control.zoom({
        position: "bottomright"
      }).addTo(this.map);
      this.platform.ready().then(() => {
        //watch user position
        this.map.locate({
          setView: false,
          watch: true,
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000
        }) //put starMarker when location found
        // here the start marker would be put, with the start address on the leaflet map
        .on("locationfound", function (e) {
          console.log("location from on locate", e.latlng);

          if (this.currentMarkerSwitch) {
            this.startMarker.bindPopup(JSON.stringify(e.latlng));
            this.firstMarker = false;
          } //L.marker(e.latlng).addTo(map)


          this.currentposition = e.latlng;

          if (!this.startMarkerCreated) {
            console.warn("created through leaflet location service");
            this.startMarker.setLatLng(this.currentposition);
            this.startMarker.addTo(this.map);
            this.map.setView([this.currentposition.lat, this.currentposition.lng], zoom);
            this.startMarkercreated = true;
          } else {
            this.startMarker.setLatLng(this.currentposition);
          }
        }, this);
        this.geolocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 10000
        }).then(resp => {
          console.log("Current position from plugin :", resp);
          let pos = {
            lat: resp.coords.latitude,
            lng: resp.coords.longitude
          };
          this.currentposition.lat = pos.lat;
          this.currentposition.lng = pos.lng;
          console.log("creating marker start", pos);

          if (!this.startMarkerCreated) {
            this.startMarker.setLatLng(pos);
            this.startMarker.addTo(this.map);
            this.startMarkerCreated = true;
          } // destinationIcon when clicked


          const click = this.map.on("click", e => {
            console.log("markerswitch", this.markerSwitch);

            if (this.markerSwitch == false) {
              let eventId = e.originalEvent.srcElement.id;

              if (eventId == "map_home") {
                console.log("Destination address through marker:", e.latlng);
                this.Locations.endpoint.lat = e.latlng.lat;
                this.Locations.endpoint.lng = e.latlng.lng; // here the code for geocoding comes

                let options = {
                  useLocale: true,
                  maxResults: 5
                };
                this.nativeGeocoder.reverseGeocode(e.latlng.lat, e.latlng.lng, options).then(result => {
                  //console.log("here is the reverse geo code",JSON.stringify(result[0]));
                  this.autocomplete.input = result[0].thoroughfare + " " + result[0].subThoroughfare + ", " + result[0].postalCode + " " + result[0].subLocality + " " + result[0].locality;
                  console.log("Here the address should be send to the html data :", result[0].thoroughfare, " ", result[0].subThoroughfare, ", ", result[0].postalCode, " ", result[0].subLocality, " ", result[0].locality);
                }).catch(error => // this.autocomplete.input = "error" + error
                console.log("error getting reverse geocode for the destination marker", error));

                if (this.Locations.endpoint.lat && this.Locations.endpoint.lng) {
                  latview = this.Locations.endpoint.lat;
                  lngview = this.Locations.endpoint.lng;
                  let pos = {
                    lat: latview,
                    lng: lngview
                  };
                  console.log("setting dest", pos);
                  this.destMarker.setIcon(destinationIcon);
                  this.destMarker.setLatLng(pos);
                  this.destMarker.addTo(this.map);
                }

                this.isEnabled = true; // this.detectChanges();
                // this.ref.detectChanges()

                this.markerSwitch = true;
              }
            } else {
              if (e.originalEvent.srcElement.id == "map_home") {
                this.destMarker.remove();
                console.log("marker removed from: ", this.autocomplete.input);
              } // this.ClearAutocomplete();


              this.autocomplete.input = "";
              this.markerSwitch = false;
            }
          });
          var latview = resp.coords.latitude;
          var lngview = resp.coords.longitude;
          this.map.setView([latview, lngview], zoom);

          if (this.Locations.endpoint.lat && this.Locations.endpoint.lng) {
            latview = this.Locations.endpoint.lat;
            lngview = this.Locations.endpoint.lng;
            let pos = {
              lat: latview,
              lng: lngview
            };
            console.log("setting dest", pos);
            this.destMarker.setIcon(destinationIcon);
            this.destMarker.setLatLng(pos);
            this.destMarker.addTo(this.map); // ! TESTING based - oustside berlin region

            /* this.restProvider.osrm(this.currentposition, pos).then((data) => {
              console.log("OSRM: ", data)
            }) */
          }
        }).catch(error => {
          //write log in case of error: alert can be added
          console.log("Error getting location in loadmap", error);

          if (this.currentposition.lat == null || this.currentposition.lng == null) {
            // ! get started with the new
            this.geoErrorAlert();
          }

          this.logText = this.logText + new Date().toISOString().substring(11, 19) + " " + error + "\r\n";
          this.file.writeFile(this.file.externalApplicationStorageDirectory, this.app.filename, this.logText, {
            append: true
          }).then(suc => {}, err => {});
        });
      });
    }; //select location for the destination field


    this.selectLocationDestination = /*#__PURE__*/function () {
      var _ref = (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (location) {
        _this.autocomplete.input = yield location.description;
        console.log("autocomplete feature", _this.autocomplete.input);

        try {
          _this.restProvider.getadressgeocode(_this.autocomplete.input).then(d => {
            console.log("Adress selected from searchbar", location, "d", d);
            var loc = d["results"][0].geometry;
            _this.Locations.endpoint.lat = loc.location.lat;
            _this.Locations.endpoint.lng = loc.location.lng;
            console.log("destination endpoints from searchbar", loc.location);

            _this.IsEnabled();

            _this.detectChanges();
          });

          _this.autocompleteItems = [];
        } catch (error) {
          console.error("error from search bar", error);
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(); //call the logfile from app component


    console.log("----------------------HOME------Page-------------------");
    this.logger.debug("start of home");
    console.log("Home page constructor", "deviceId", this.device);
    this.logText = this.app.logText; //initiate google autocomplete service for client-side

    this.autocomplete = {
      input: ""
    };
    this.autocompleteItems = [];
    this.sessionToken = new google.maps.places.AutocompleteSessionToken();
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.platform.backButton.subscribeWithPriority(9, () => {
      console.log("home back button press");
      this.presentAlert();
    });
  }

  ngOnInit() {
    console.log("home page ngonint"); // invalidateSize is added here to prevent errors loading the map, when navigating from trip to home page

    this.interval = setInterval(() => {
      try {
        if (this.map) {
          this.map.invalidateSize();
        }
      } catch (error) {
        console.log("error invalidating map");
      }
    }, 2000);
    this.interval;
    this.ref.detectChanges();
    console.log("saved trip id before :", this.transfer._getRouteID());
  }

  ionViewWillEnter() {
    console.log("home page ionViewWillEnter");
    this.Locations = {
      startpoint: {
        lat: null,
        lng: null
      },
      endpoint: {
        lat: null,
        lng: null
      }
    };
    this.currentposition.lat = null;
    this.currentposition.lng = null;

    try {
      this.loadMap(14);
    } catch (error) {
      console.error("catched Error", error);
    }
  }

  ionViewDidEnter() {}

  ionViewWillLeave() {
    //document.getElementById("map_home").outerHTML="";\
    this.startMarker.remove();
    this.startMarkerCreated = false;
    this.map.stopLocate();
    this.map.off();
    this.map.remove();
    clearInterval(this.interval);
    console.log("Home page exited ");
  }
  /**
   * *NOTE*: it checks if the last trip was deleted successfully if not then iut uses particualr flags to delete the old trip and generates new user id and device id
   */


  checkGhostTrip() {
    let old_id;
    this.storage.get("last_trip_deleted_successfully").then(result => {
      console.log("last_trip_deleted_successfully", result);
      old_id = result;
      console.log("old id ", old_id);

      if (old_id == false) {
        console.log("old_trip_id found");
        this.transfer.clearService("home ghost id true");
      } else {
        console.log("no old id");
        this.transfer.clearService("home ghost id false");
      }
    });
  }
  /**
   * set users current location
   */


  setcurrentlocation() {
    this.geolocation.getCurrentPosition().then(resp => {
      this.currentposition.lat = resp.coords.latitude;
      this.currentposition.lng = resp.coords.longitude;
    }).catch(error => {
      console.error("Error getting location for setCurrentLocation", error); // this.geoErrorAlert();

      this.logText = this.logText + new Date().toISOString().substring(11, 19) + " " + error + "\r\n";
      this.file.writeFile(this.file.externalApplicationStorageDirectory, this.app.filename, this.logText, {
        append: true
      }).then(suc => {}, err => {});
    });
  }
  /**
   * error fetching user geolocation
   */


  geoErrorAlert() {
    var _this2 = this;

    return (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let alert = yield _this2.alertCtrl.create({
        header: "Location-Service Error",
        cssClass: "home-back-alert",
        subHeader: "Security setting of android version is hindering the location services for third party software",
        buttons: ["OK", {
          text: "retry",
          handler: () => {
            window.location.reload();
          }
        }, {
          text: "Exit app",
          handler: () => {
            navigator["app"].exitApp();
          }
        }]
      });
      yield alert.present();
      setTimeout(() => {
        alert.dismiss();
      }, 10000);
    })();
  }
  /**
   * used for testing purpose for leaflet package plugin w3c
   */


  watchLocationLeaflet() {
    this.platform.ready().then(() => {
      //watch user position
      this.map.locate({
        setView: false,
        watch: true,
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000
      }) // here the start marker would be put, with the start address on the leaflet map
      .on("locationfound", function (e) {
        console.log("location from on locate", e.latlng);

        if (this.currentMarkerSwitch) {
          this.firstMarker = false;
          this.startMarker.bindPopup(JSON.stringify(e.latlng));
        } //L.marker(e.latlng).addTo(map)


        this.currentposition = e.latlng;
      }, this);
      this.map.on("locationerror", function (e) {
        // this.setcurrentlocation();
        console.error("error getting location ", e);
      }, this);
    });
  }
  /**
   * go to tripproposals page
   */


  goToProposals() {
    //clear autocomplete text
    this.ClearAutocomplete();
    this.logText = this.logText + new Date().toISOString().substring(11, 19) + " User Id: " + this.restProvider.userId + "\r\n";
    console.log("gotoproposal page from home page "); //console.log(this.currentposition)

    this.logText = this.logText + new Date().toISOString().substring(11, 19) + " current position: " + this.currentposition.lat + "," + this.currentposition.lng + "\r\n";
    this.logText = this.logText + new Date().toISOString().substring(11, 19) + " Destination: " + this.Locations.endpoint.lat + "," + this.Locations.endpoint.lng + "\r\n";
    this.logText = this.logText + new Date().toISOString().substring(11, 19) + " Navigating to Tripproposals Page \r\n";

    if (this.platform.is("android")) {
      //write logs
      this.writeLogs();
      this.file.writeFile(this.file.externalApplicationStorageDirectory, this.app.filename, this.logText, {
        append: true
      }).then(suc => {}, err => {});
    } //send needed variables to tripproposals page

    /*
    Calling the central service here
    */


    let validDataTransfer = false;

    if (this.Locations.endpoint && this.Locations.endpoint.lat != null && this.Locations.endpoint.lng != null && this.currentLocation && this.currentposition.lat != null && this.currentposition.lng != null) {
      this.transfer._setDestinationPosition(this.Locations.endpoint);

      this.transfer._setStartPosition(this.currentposition);

      validDataTransfer = true;
      console.log("start:", this.currentposition, "destination :", this.Locations.endpoint);
    } else {
      console.error("start and end coordinate one was null ");
      console.log("start:", this.currentposition, "destination :", this.Locations.endpoint);
      validDataTransfer = false;
    }

    this.transfer._setLogText(this.logText);

    this.transfer._setPreviousLog(this.logg);

    this.transfer._setDeviceID(this.app.id);

    this.transfer._setUserID(this.app.userID);

    let navigationExtras = {
      state: {
        logText: this.logText,
        startpoint: this.currentposition,
        endpoint: this.Locations.endpoint,
        prev: this.logg
      }
    };
    console.log("data to be fowarded from trips to tripproposals", navigationExtras);

    if (validDataTransfer) {
      this.navCtrl.navigateForward(["/tripproposals"]).catch(error => {
        console.log("HOME PAGE error in transiting page to trippropposal", error);
        this.app.initializeApp();
      });
    } else {
      console.log("start:", this.currentposition, "destination :", this.Locations.endpoint);
      console.log("there was error going to tripproposal as start and end coordinate is undefined");
      this.destinationalert();
    }

    this.startMarkerCreated = false;
  }
  /**
   *
   * @returns search bar results
   */


  UpdateSearchResults() {
    if (this.autocomplete.input == "") {
      this.autocompleteItems = [];
      return;
    }

    let self = this;
    let config;
    let myLatLng = new google.maps.LatLng({
      lat: this.currentposition.lat,
      lng: this.currentposition.lng
    });
    config = {
      // types: ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
      input: this.autocomplete.input,
      sessionToken: this.sessionToken,
      // language: "EN",
      location: myLatLng,
      //the predicted places are only in the radius of 50km from user position
      radius: 500 * 100 //50Km
      //,
      //componentRestrictions: { country: 'FR,ES,BE' }

    };
    this.GoogleAutocomplete.getPlacePredictions(config, (predictions, status) => {
      self.autocompleteItems = [];
      this.ngZone.run(() => {
        predictions.forEach(prediction => {
          self.autocompleteItems.push(prediction);
        });
      });
    });
  }
  /**
   * clears search bar
   */


  ClearAutocomplete() {
    this.autocompleteItems = [];
    this.autocomplete.input = "";
  }
  /**
   * sets user current location for marker
   * @param location
   */


  selectLocation(location) {
    this.Locations.startpoint.lat = location.lat;
    this.Locations.startpoint.lng = location.lng;
    this.autocomplete.input = location.display_name;
    this.startAutocompleteLocations = [];
    this.IsEnabled();
  }

  IsEnabled() {
    if (this.autocomplete.input != "") this.isEnabled = true;
  }
  /**
   * detect any changes in data and update the UI accordingly
   */


  detectChanges() {
    console.log("home detect changes called");

    try {
      this.startMarkerCreated = false;
      this.prevZoom = this.map.getZoom();
      this.map.off();
      this.map.remove();
      this.loadMap(this.prevZoom);
    } catch (error) {
      console.error("error detect changes", error);
    }
  }
  /**
   * if hardware back button is pressed
   */


  presentAlert() {
    var _this3 = this;

    return (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let alert = _this3.alertCtrl.create({
        header: "Alert!",
        cssClass: "home-back-alert",
        subHeader: "Do you want to leave the app ?",
        backdropDismiss: true,
        animated: true,
        buttons: ["Dismiss", {
          text: "Yes",
          handler: () => {
            navigator["app"].exitApp();
          }
        }]
      });

      (yield alert).present();
    })();
  }

  writeLogs() {
    let prevLog = this.app.logg;

    let __this = this;

    NativeLogs.getLog(1000, true, function (_logs) {
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
   * set the map back to current location of user
   */


  setview() {
    console.log("view set current location");
    this.map.setView([this.currentposition.lat, this.currentposition.lng]);
    console.log("the location should be set");
  }
  /**
   * speech to text plugin
   */


  speechtotext() {
    this.isActive = !this.isActive;

    if (this.isAndroid()) {
      this.getPermission();

      if (this.isActive) {
        console.log("isActive: ", this.isActive);
        this.startListening();
        setTimeout(() => {
          console.log("timeout called for voice input");
          this.stopListening();
          this.isActive = !this.isActive;
        }, 5000);
      } else {
        console.log("isActive: ", this.isActive);
        this.stopListening();
      }
    }
  }

  startListening() {
    console.log("start with listening");
    let options = {
      language: "de-DE",
      matches: 1,
      showPopup: false // helps not to popUp android voice input output from native device

    };
    this.speechRecognition.startListening(options).subscribe(matches => {
      this.matches = matches;
      this.autocomplete.input = this.matches[0];
      this.UpdateSearchResults();
      this.ref.detectChanges();
    });
    this.isRecording = true;
  }

  stopListening() {
    this.speechRecognition.stopListening().then(() => {
      console.log("stop listening");
      this.isRecording = false;
    });
    this.matches = null;
  }

  getPermission() {
    this.speechRecognition.hasPermission().then(hasPermission => {
      console.log("has permission : ", hasPermission);

      if (!hasPermission) {
        this.speechRecognition.requestPermission();
      }
    });
  }

  isAndroid() {
    console.log("checking android", this.platform.is("android"));
    let res = this.platform.is("android");
    return res;
  }

  destinationalert() {
    var _this4 = this;

    return (0,_Users_dfki_krutarth_opensourcelabmobilityapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("error getiing map location ");
      let toast = yield _this4.toastcontroller.create({
        message: "Please select a location on the map",
        position: "middle",
        duration: 2000
      });
      toast.present();
    })();
  } // this was supposed to give input for the current location but currently not in use
  // ? not in use


  setCurrentAdress() {
    this.currentMarkerSwitch = false;
    console.log("set dummy current address");
    this.map.removeLayer(this.startMarker);
    this.map.removeLayer(this.marker);
    this.map.on("click", function (res) {
      let mark = new L.marker(res.latlng, {
        draggable: true
      });
      console.log("clicked on map for currejnt address", res);
      this.map.addLayer(mark); // this.currentmarker = false

      this.firstMarker = false;
    });
  }

};

HomePage.ctorParameters = () => [{
  type: src_app_services_rest_api_rest_api_service__WEBPACK_IMPORTED_MODULE_5__.RestApiService
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient
}, {
  type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__.Geolocation
}, {
  type: _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__.NativeGeocoder
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.NgZone
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.NavParams
}, {
  type: _awesome_cordova_plugins_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__.DeviceOrientation
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ToastController
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef
}, {
  type: src_app_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent
}, {
  type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router
}, {
  type: _awesome_cordova_plugins_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_9__.SpeechRecognition
}, {
  type: src_app_services_transferdata_transfer_service__WEBPACK_IMPORTED_MODULE_10__.TransferService
}, {
  type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_11__.StorageService
}];

HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: "app-home",
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectionStrategy.Default,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ }),

/***/ 2260:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".leaflet-control-zoom {\n  position: relative;\n  top: 30%;\n  margin-top: 100px;\n  padding-top: 100px;\n}\n\n.leaflet-verticalcenter .leaflet-control {\n  margin-bottom: 10px;\n}\n\n.leaflet-verticalcenter {\n  position: absolute;\n  z-index: 1000;\n  pointer-events: none;\n  top: 50%; /* possible because the placeholder's parent is the map */\n  transform: translateY(-50%); /* using the CSS3 Transform technique */\n  padding-top: 10px;\n}\n\n.top {\n  z-index: 99999;\n  position: absolute;\n  height: 15vh;\n  width: 100vw;\n}\n\n.speech-btn {\n  --background: var(--ion-color-chatblue, darkblue);\n}\n\n.speech-btn.isActive {\n  --background: var(--ion-color-chatred, darkred);\n}\n\n#map_home {\n  padding-top: 0;\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  position: relative;\n}\n\n#map_home .localisationButton {\n  position: absolute;\n  z-index: 99999999999;\n  right: 20px;\n  top: 30px;\n  font-size: 40px;\n}\n\n#map_home .gpsbutton {\n  float: right;\n  position: absolute;\n  bottom: 14%;\n  right: 1%;\n  z-index: 99999 !important;\n}\n\n.searchbar-md {\n  padding: 8px 0px;\n  width: 100%;\n}\n\nion-list {\n  padding: 0px;\n  width: 80%;\n  margin: 0 auto;\n  background: transparent;\n}\n\n.toolbar-title {\n  color: #ffffff;\n  display: inline;\n  margin-left: 70px;\n}\n\n.lol {\n  display: flex;\n}\n\n.locate_icon {\n  color: black;\n}\n\n.xx {\n  border-radius: 25px;\n  background-color: orange;\n  border-color: orangered;\n}\n\nion-searchbar {\n  --border-radius: 25px;\n  margin: 0 auto;\n}\n\nion-item {\n  width: 80%;\n  margin: 0 auto;\n  border-color: orange;\n  border-style: hidden hidden hidden solid;\n}\n\n.btn-search {\n  --background: rgba(10, 2, 2, 0.827);\n  margin: 3px auto;\n  position: absolute;\n  right: 45%;\n}\n\n.btn-blt {\n  --background: rgba(10, 2, 2, 0.827);\n  margin: 3px auto;\n  position: relative;\n  right: 45%;\n}\n\n.speech {\n  margin: 10px auto;\n}\n\n.row-2-btn {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsUUFBQSxFQUFBLHlEQUFBO0VBQ0EsMkJBQUEsRUFBQSx1Q0FBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUdGOztBQUFBO0VBQ0UsaURBQUE7QUFHRjs7QUFBQTtFQUNFLCtDQUFBO0FBR0Y7O0FBQUE7RUFFRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFFSjs7QUFBRTtFQUVFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7RUFFQSx1QkFBQTtBQURGOztBQUdBO0VBRUUscUJBQUE7RUFFQSxjQUFBO0FBRkY7O0FBT0E7RUFFRSxVQUFBO0VBQ0EsY0FBQTtFQUVBLG9CQUFBO0VBQ0Esd0NBQUE7QUFORjs7QUFRQTtFQUNFLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFMRjs7QUFPQTtFQUNFLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFKRjs7QUFNQTtFQUNFLGlCQUFBO0FBSEY7O0FBS0E7RUFDRSx1QkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlYWZsZXQtY29udHJvbC16b29tIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDMwJTtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cbi5sZWFmbGV0LXZlcnRpY2FsY2VudGVyIC5sZWFmbGV0LWNvbnRyb2wge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmxlYWZsZXQtdmVydGljYWxjZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0b3A6IDUwJTsgLyogcG9zc2libGUgYmVjYXVzZSB0aGUgcGxhY2Vob2xkZXIncyBwYXJlbnQgaXMgdGhlIG1hcCAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IC8qIHVzaW5nIHRoZSBDU1MzIFRyYW5zZm9ybSB0ZWNobmlxdWUgKi9cbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi50b3Age1xuICB6LWluZGV4OiA5OTk5OTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDE1dmg7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLnNwZWVjaC1idG4ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1jaGF0Ymx1ZSwgZGFya2JsdWUpO1xufVxuXG4uc3BlZWNoLWJ0bi5pc0FjdGl2ZSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWNoYXRyZWQsIGRhcmtyZWQpO1xufVxuXG4jbWFwX2hvbWUge1xuICAvLyBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAubG9jYWxpc2F0aW9uQnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTk5OTk5OTk5OTk7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxuICAuZ3BzYnV0dG9uIHtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjM5LCAxNjYsIDMyLCAwLjYyNyk7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDE0JTtcbiAgICByaWdodDogMSU7XG4gICAgei1pbmRleDogOTk5OTkgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uc2VhcmNoYmFyLW1kIHtcbiAgcGFkZGluZzogOHB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tbGlzdCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4udG9vbGJhci10aXRsZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xufVxuXG4ubG9sIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuXG4ubG9jYXRlX2ljb24ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi54eCB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgLy9ib3JkZXItc3R5bGU6IGhpZGRlbjtcbiAgYm9yZGVyLWNvbG9yOiBvcmFuZ2VyZWQ7XG59XG5pb24tc2VhcmNoYmFyIHtcbiAgLy8tLWljb24tY29sb3I6IHllbGxvdztcbiAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICAvL2Rpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAvL2JvcmRlci1jb2xvcjogb3JhbmdlcmVkO1xuICAvL2JvcmRlci1zdHlsZTogZG91YmxlO1xufVxuXG5pb24taXRlbSB7XG4gIC8vYm9yZGVyLXJhZGl1czogMTAlO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgLy9jb2xvcjogYmx1ZTtcbiAgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7XG4gIGJvcmRlci1zdHlsZTogaGlkZGVuIGhpZGRlbiBoaWRkZW4gc29saWQ7XG59XG4uYnRuLXNlYXJjaCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgxMCwgMiwgMiwgMC44MjcpO1xuICBtYXJnaW46IDNweCBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA0NSU7XG59XG4uYnRuLWJsdCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgxMCwgMiwgMiwgMC44MjcpO1xuICBtYXJnaW46IDNweCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiA0NSU7XG59XG4uc3BlZWNoIHtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG4ucm93LTItYnRuIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header> </ion-header>\n<ion-content class=\"no-scroll\">\n  <div id=\"map_home\">\n    <div class=\"top noclick\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"10\">\n            <ion-searchbar\n              id=\"input\"\n              class=\"xx\"\n              [(ngModel)]=\"autocomplete.input\"\n              debounce=\"-200\"\n              (ionInput)=\"UpdateSearchResults()\"\n              placeholder=\"search for destination\"\n              (ionClear)=\"ClearAutocomplete()\"\n              align-center\n              searchIcon=\"location\"\n            ></ion-searchbar>\n          </ion-col>\n          <ion-col size=\"auto\">\n            <ion-button\n              class=\"speech\"\n              [color]=\" !isActive ? 'dark' : 'warning' \"\n              (click)=\"speechtotext()\"\n            >\n              <ion-icon name=\"mic-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"row-2-btn\">\n          <ion-button\n            class=\"btn-search\"\n            shape=\"round\"\n            strong=\"true\"\n            (click)=\"goToProposals()\"\n          >\n            Get Trips\n          </ion-button>\n         \n        </ion-row>\n      </ion-grid>\n\n      <ion-list [hidden]=\"autocompleteItems.length == 0\">\n        <ion-item\n          fill=\"solid\"\n          *ngFor=\"let location of   autocompleteItems\"\n          tappable\n          (click)=\"selectLocationDestination(location)\"\n        >\n          {{location.description}}\n        </ion-item>\n      </ion-list>\n\n      <!-- <ion-button (click)=\"setCurrentAdress()\"\n        >Reset current position</ion-button\n      > -->\n    </div>\n    <ion-button\n      class=\"gpsbutton\"\n      id=\"gpsbuttonid\"\n      shape=\"round\"\n      (click)=\"setview()\"\n    >\n      <ion-icon class=\"locate_icon\" name=\"locate\"></ion-icon>\n    </ion-button>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map