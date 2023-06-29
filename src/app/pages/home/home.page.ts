import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";

import {
  NgZone,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  Input,
} from "@angular/core";
import { NavParams, ToastController, AlertController } from "@ionic/angular";
import { Platform, NavController } from "@ionic/angular";
import {
  DeviceOrientation,
  DeviceOrientationCompassHeading,
} from "@awesome-cordova-plugins/device-orientation/ngx";
import { HttpClient } from "@angular/common/http";
import * as _ from "lodash";
import { Geolocation } from "@awesome-cordova-plugins/geolocation/ngx";
import { RestApiService } from "src/app/services/rest-api/rest-api.service";

import { AppComponent } from "src/app/app.component";
import { File } from "@awesome-cordova-plugins/file/ngx";
import { NavigationExtras, Router } from "@angular/router";
import {
  NativeGeocoderOptions,
  NativeGeocoder,
  NativeGeocoderResult,
} from "@awesome-cordova-plugins/native-geocoder/ngx";;
import { SpeechRecognition } from "@awesome-cordova-plugins/speech-recognition/ngx";
import { TransferService } from "src/app/services/transferdata/transfer.service";
import { StorageService } from "src/app/services/storage/storage.service";
import "leaflet.smooth_marker_bouncing";
import { Logger } from "@obsidize/rx-console";

declare var google;
declare var NativeLogs: any;
declare var L: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomePage implements OnInit {
  map: any;
  currentLocation = {};
  address;
  marker;

  autocomplete: { input: string };
  autocompleteItems: any[];
  location: any;
  placeid: any;
  GoogleAutocomplete: any;
  autocompleteDestination = { input: "" };
  startAutocompleteLocations = [];
  currentLat: any;
  currentLng: any;
  addressValue: any;
  zoom: number;
  markerSwitch: boolean = false;

  startMarkerIcon = L.icon({
    iconUrl: "../assets/content/images/start_marker.png",
    iconSize: [40, 40], // size of the icon
  });

  startMarker = new L.Marker([], { icon: this.startMarkerIcon });

  Locations = {
    startpoint: { lat: null, lng: null },
    endpoint: { lat: null, lng: null },
    /* startpoint :{lat: 52.510881,lng: 13.317306 },
      endpoint: {lat: 52.523203,lng: 13.329604} */
  };

  currentposition = { lat: null, lng: null };
  isEnabled = false;

  logText;
  public logg: any;
  sessionToken;
  interval;
  prevZoom = 14;
  prev: any;
  autocompleteLocations: any[];
  currentMarkerSwitch: boolean = true;
  firstMarker = true;
  destMarker = new L.Marker();
  /**
   * Voice input variables
   */
  matches: string[];
  isRecording: boolean = false;
  isActive: boolean = false;

  /**
   * icons for marker
   */

  geolocationIcon = L.icon({
    iconUrl: "../assets/content/images/navigation.png",
    iconSize: [32, 32], // size of the icon
  });
  geolocationIcon_2 = L.icon({
    iconUrl: "../assets/content/images/navigation2.png",
    iconSize: [40, 40], // size of the icon
  });

  api_key = "c7ff719c2709426abb5c162d7361a78b";
  meetingPointIcon = L.icon({
    iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23ec7b19&icon=users&iconType=awesome&noWhiteCircle&scaleFactor=2&apiKey=c7ff719c2709426abb5c162d7361a78b`,
    iconSize: [32, 40], // size of the icon
  });

  private  logger = new Logger('home app component')

  constructor(
    public restProvider: RestApiService,
    public http: HttpClient,
    public geolocation: Geolocation,
    public nativeGeocoder: NativeGeocoder,
    private ngZone: NgZone,
    public navCtrl: NavController,
    public platform: Platform,
    public navParams: NavParams,
    public device: DeviceOrientation,
    private toastcontroller: ToastController,
    private ref: ChangeDetectorRef,
    public app: AppComponent,
    private file: File,
    public alertCtrl: AlertController,
    public router: Router,
    private speechRecognition: SpeechRecognition,
    public transfer: TransferService,
    public storage: StorageService
  ) {
    //call the logfile from app component
    console.log("----------------------HOME------Page-------------------");
    this.logger.debug("start of home")


    console.log("Home page constructor", "deviceId", this.device);
    this.logText = this.app.logText;
    //initiate google autocomplete service for client-side
    this.autocomplete = { input: "" };
    this.autocompleteItems = [];
    this.sessionToken = new google.maps.places.AutocompleteSessionToken();
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    
    this.platform.backButton.subscribeWithPriority(9, () => {
      console.log("home back button press");
      this.presentAlert();
    });
  }

  ngOnInit() {
    console.log("home page ngonint");

    // invalidateSize is added here to prevent errors loading the map, when navigating from trip to home page
    this.interval = setInterval(() => {
      try {
        if (this.map) {
          this.map.invalidateSize();
          
        }
      } catch (error) {
        console.log("error invalidating map")
      }
    }, 2000);
    this.interval;
    this.ref.detectChanges();
    console.log("saved trip id before :", this.transfer._getRouteID());
  }
  ionViewWillEnter() {
    console.log("home page ionViewWillEnter");
    this.Locations = {
      startpoint: { lat: null, lng: null },
      endpoint: { lat: null, lng: null },
    };
    this.currentposition.lat = null;
    this.currentposition.lng = null;
    
    try {
      this.loadMap(14);
    } catch (error) {
      console.error("catched Error", error);
    }
  
  }
  ionViewDidEnter() {
  
  }

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
    this.storage.get("last_trip_deleted_successfully").then((result) => {
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
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.currentposition.lat = resp.coords.latitude;
        this.currentposition.lng = resp.coords.longitude;
      })
      .catch((error) => {
        console.error("Error getting location for setCurrentLocation", error);
        // this.geoErrorAlert();
        this.logText =
          this.logText +
          new Date().toISOString().substring(11, 19) +
          " " +
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
  /**
   * error fetching user geolocation 
   */
  async geoErrorAlert() {
    let alert = await this.alertCtrl.create({
      header: "Location-Service Error",
      cssClass: "home-back-alert",
      subHeader:
        "Security setting of android version is hindering the location services for third party software",
      buttons: [
        "OK",
        {
          text: "retry",
          handler: () => {
            window.location.reload();
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
    await alert.present();
    setTimeout(() => {
      alert.dismiss();
    }, 10000);
  }
  startMarkerCreated: boolean = false;

  /**
   * loads map and set the markers
   * @param zoom zoom level for map
   */
  loadMap = (zoom) => {
    let destinationIcon = L.icon({
      iconUrl: "../assets/content/images/destination.png",
      iconSize: [35, 35],
    });

    this.map = L.map("map_home", {
      zoomControl: false,
    });
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution: "BikeRiderApp DFKI",
    }).addTo(this.map);

    L.control
      .zoom({
        position: "bottomright",
      })
      .addTo(this.map);
    this.platform.ready().then(() => {
      //watch user position
      this.map
        .locate({
          setView: false,
          watch: true,
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        })
        //put starMarker when location found
        // here the start marker would be put, with the start address on the leaflet map
        .on(
          "locationfound",
          function (e) {
            console.log("location from on locate", e.latlng);

            if (this.currentMarkerSwitch) {
              this.startMarker.bindPopup(JSON.stringify(e.latlng));
              this.firstMarker = false;
            }
            //L.marker(e.latlng).addTo(map)
            this.currentposition = e.latlng;
            if (!this.startMarkerCreated) {
              console.warn("created through leaflet location service");
              this.startMarker.setLatLng(this.currentposition);
              this.startMarker.addTo(this.map);
              this.map.setView(
                [this.currentposition.lat, this.currentposition.lng],
                zoom
              );
              this.startMarkercreated = true;
            }
            else {
              this.startMarker.setLatLng(this.currentposition)
            }
          },
          this
        );

      this.geolocation
        .getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 10000,
        })
        .then((resp) => {
          console.log("Current position from plugin :", resp);
          let pos = {
            lat: resp.coords.latitude,
            lng: resp.coords.longitude,
          };
          this.currentposition.lat = pos.lat;
          this.currentposition.lng = pos.lng;
          console.log("creating marker start", pos);
          if (!this.startMarkerCreated) {
            this.startMarker.setLatLng(pos);
            this.startMarker.addTo(this.map);
            this.startMarkerCreated = true;
          }
          // destinationIcon when clicked
          const click = this.map.on("click", (e) => {
            console.log("markerswitch", this.markerSwitch);
            if (this.markerSwitch == false) {
              let eventId = e.originalEvent.srcElement.id;
              
              if (eventId == "map_home") {
                console.log("Destination address through marker:", e.latlng);
                this.Locations.endpoint.lat = e.latlng.lat;
                this.Locations.endpoint.lng = e.latlng.lng;
                // here the code for geocoding comes
                let options: NativeGeocoderOptions = {
                  useLocale: true,
                  maxResults: 5,
                };


                this.nativeGeocoder
                  .reverseGeocode(e.latlng.lat, e.latlng.lng, options)
                  .then((result: NativeGeocoderResult[]) => {
                    //console.log("here is the reverse geo code",JSON.stringify(result[0]));
                    this.autocomplete.input =
                      result[0].thoroughfare +
                      " " +
                      result[0].subThoroughfare +
                      ", " +
                      result[0].postalCode +
                      " " +
                      result[0].subLocality +
                      " " +
                      result[0].locality;
                    console.log(
                      "Here the address should be send to the html data :",
                      result[0].thoroughfare,
                      " ",
                      result[0].subThoroughfare,
                      ", ",
                      result[0].postalCode,
                      " ",
                      result[0].subLocality,
                      " ",
                      result[0].locality
                    );
                  })
                  .catch((error: any) =>
                    // this.autocomplete.input = "error" + error
                    console.log(
                      "error getting reverse geocode for the destination marker",
                      error
                    )
                    
                  );
                if (
                  this.Locations.endpoint.lat &&
                  this.Locations.endpoint.lng
                ) {
                  latview = this.Locations.endpoint.lat;
                  lngview = this.Locations.endpoint.lng;

                  let pos = {
                    lat: latview,
                    lng: lngview,
                  };
                  console.log("setting dest", pos);
                  this.destMarker.setIcon(destinationIcon);
                  this.destMarker.setLatLng(pos);
                  this.destMarker.addTo(this.map);
                 
                }

                this.isEnabled = true;
                // this.detectChanges();
                // this.ref.detectChanges()
                this.markerSwitch = true;
              }
            } else {
              if (e.originalEvent.srcElement.id == "map_home") {
                this.destMarker.remove();
                console.log("marker removed from: ", this.autocomplete.input);
              }
              // this.ClearAutocomplete();
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
              lng: lngview,
            };
            console.log("setting dest", pos);
            this.destMarker.setIcon(destinationIcon);
            this.destMarker.setLatLng(pos);
            this.destMarker.addTo(this.map);
            // ! TESTING based - oustside berlin region
            /* this.restProvider.osrm(this.currentposition, pos).then((data) => {
              console.log("OSRM: ", data)
            }) */
          }
        })
        .catch((error) => {
          //write log in case of error: alert can be added
          console.log("Error getting location in loadmap", error);
          if (
            this.currentposition.lat == null ||
            this.currentposition.lng == null
          ) {
            // ! get started with the new
            this.geoErrorAlert();
          }
          this.logText =
            this.logText +
            new Date().toISOString().substring(11, 19) +
            " " +
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
    });
  };
/**
 * used for testing purpose for leaflet package plugin w3c
 */
  watchLocationLeaflet() {
    this.platform.ready().then(() => {
      //watch user position
      this.map
        .locate({
          setView: false,
          watch: true,
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        })
       
        // here the start marker would be put, with the start address on the leaflet map
        .on(
          "locationfound",
          function (e) {
            console.log("location from on locate", e.latlng);

            if (this.currentMarkerSwitch) {
              this.firstMarker = false;
              this.startMarker.bindPopup(JSON.stringify(e.latlng));
            }
            //L.marker(e.latlng).addTo(map)
            this.currentposition = e.latlng;
          },
          this
        );
      this.map.on(
        "locationerror",
        function (e) {
          // this.setcurrentlocation();
          console.error("error getting location ", e);
        },
        this
      );
    });
  }
/**
 * go to tripproposals page 
 */
  goToProposals() {
    //clear autocomplete text
    this.ClearAutocomplete();

    this.logText =
      this.logText +
      new Date().toISOString().substring(11, 19) +
      " User Id: " +
      this.restProvider.userId +
      "\r\n";
    console.log("gotoproposal page from home page ");
    //console.log(this.currentposition)
    this.logText =
      this.logText +
      new Date().toISOString().substring(11, 19) +
      " current position: " +
      this.currentposition.lat +
      "," +
      this.currentposition.lng +
      "\r\n";
    this.logText =
      this.logText +
      new Date().toISOString().substring(11, 19) +
      " Destination: " +
      this.Locations.endpoint.lat +
      "," +
      this.Locations.endpoint.lng +
      "\r\n";
    this.logText =
      this.logText +
      new Date().toISOString().substring(11, 19) +
      " Navigating to Tripproposals Page \r\n";
    if (this.platform.is("android")) {
      //write logs
      this.writeLogs();
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
    //send needed variables to tripproposals page

    /*
    Calling the central service here 
    */
    let validDataTransfer: boolean = false;
    if (
      this.Locations.endpoint &&
      this.Locations.endpoint.lat != null &&
      this.Locations.endpoint.lng != null &&
      this.currentLocation &&
      this.currentposition.lat != null &&
      this.currentposition.lng != null
    ) {
      this.transfer._setDestinationPosition(this.Locations.endpoint);
      this.transfer._setStartPosition(this.currentposition);
      validDataTransfer = true;
      console.log(
        "start:",
        this.currentposition,
        "destination :",
        this.Locations.endpoint
      );
    } else {
      console.error("start and end coordinate one was null ");
      console.log(
        "start:",
        this.currentposition,
        "destination :",
        this.Locations.endpoint
      );
      validDataTransfer = false;
    }
    this.transfer._setLogText(this.logText);
    this.transfer._setPreviousLog(this.logg);
    this.transfer._setDeviceID(this.app.id);
    this.transfer._setUserID(this.app.userID);

    let navigationExtras: NavigationExtras = {
      state: {
        logText: this.logText,
        startpoint: this.currentposition,
        endpoint: this.Locations.endpoint,
        prev: this.logg,
      },
    };
    console.log(
      "data to be fowarded from trips to tripproposals",
      navigationExtras
    );

    if (validDataTransfer) {
      this.navCtrl.navigateForward(["/tripproposals"]).catch((error) => {
        console.log(
          "HOME PAGE error in transiting page to trippropposal",
          error
        );
        this.app.initializeApp();
      });
    } else {
      console.log(
        "start:",
        this.currentposition,
        "destination :",
        this.Locations.endpoint
      );
      console.log(
        "there was error going to tripproposal as start and end coordinate is undefined"
      );
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
    let config: any;
    let myLatLng = new google.maps.LatLng({
      lat: this.currentposition.lat,
      lng: this.currentposition.lng,
    });
    config = {
      // types: ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
      input: this.autocomplete.input,
      sessionToken: this.sessionToken,
      // language: "EN",
      location: myLatLng,
      //the predicted places are only in the radius of 50km from user position
      radius: 500 * 100, //50Km
      //,
      //componentRestrictions: { country: 'FR,ES,BE' }
    };
    this.GoogleAutocomplete.getPlacePredictions(
      config,
      (predictions, status) => {
        self.autocompleteItems = [];
        this.ngZone.run(() => {
          predictions.forEach((prediction) => {
            self.autocompleteItems.push(prediction);
          });
        });
      }
    );
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
      console.error("error detect changes", error )
    }
  }
/**
 * if hardware back button is pressed
 */
  async presentAlert() {
    let alert = this.alertCtrl.create({
      header: "Alert!",
      cssClass: "home-back-alert",
      subHeader: "Do you want to leave the app ?",
      backdropDismiss: true,
      animated: true,
      buttons: [
        "Dismiss",
        {
          text: "Yes",
          handler: () => {
            navigator["app"].exitApp();
          },
        },
      ],
    });
    (await alert).present();
  }

  writeLogs() {
    let prevLog = this.app.logg;
    let __this: HomePage = this;
    NativeLogs.getLog(1000, true, function (_logs) {
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

  //select location for the destination field
  selectLocationDestination = async (location) => {
    this.autocomplete.input = await location.description;
    console.log("autocomplete feature", this.autocomplete.input);
    try {
      this.restProvider
      .getadressgeocode(this.autocomplete.input)
      .then((d) => {
        console.log("Adress selected from searchbar", location, "d", d);
        var loc = d["results"][0].geometry;
        this.Locations.endpoint.lat = loc.location.lat;
        this.Locations.endpoint.lng = loc.location.lng;
        console.log("destination endpoints from searchbar", loc.location);
        this.IsEnabled();
        this.detectChanges();
      })
 
    this.autocompleteItems = [];
      
    } catch (error) {
      console.error("error from search bar", error)
    }
    
  };
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
      matches: 1, // outputs only 1 matching string
      showPopup: false, // helps not to popUp android voice input output from native device
    };
    this.speechRecognition.startListening(options).subscribe((matches) => {
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
    this.speechRecognition.hasPermission().then((hasPermission: boolean) => {
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

  async destinationalert() {
    console.log("error getiing map location ");
    let toast = await this.toastcontroller.create({
      message: "Please select a location on the map",
      position: "middle",
      duration: 2000,
    });
    toast.present();
  }

  // this was supposed to give input for the current location but currently not in use
  // ? not in use
  setCurrentAdress() {
    this.currentMarkerSwitch = false;
    console.log("set dummy current address");
    this.map.removeLayer(this.startMarker);
    this.map.removeLayer(this.marker);
    this.map.on("click", function (res) {
      let mark = new L.marker(res.latlng, { draggable: true });
      console.log("clicked on map for currejnt address", res);
      this.map.addLayer(mark);
      // this.currentmarker = false
      this.firstMarker = false;
    });
  }
}
