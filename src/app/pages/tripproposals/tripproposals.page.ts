import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import "leaflet.awesome-markers/dist/leaflet.awesome-markers";
import { DeviceOrientation } from "@awesome-cordova-plugins/device-orientation/ngx";
import {
  AlertController,
  IonModal,
  ModalController,
  NavController,
  NavParams,
  Platform,
} from "@ionic/angular";
import { AppComponent } from "src/app/app.component";
import { RestApiService } from "src/app/services/rest-api/rest-api.service";

import { File } from "@awesome-cordova-plugins/file/ngx";
import {
  NativeGeocoderOptions,
  NativeGeocoder,
} from "@awesome-cordova-plugins/native-geocoder/ngx";
import { TransferService } from "src/app/services/transferdata/transfer.service";
import { StorageService } from "src/app/services/storage/storage.service";
import { Router } from "@angular/router";

import { MathematicalModel } from "src/app/class/MathematicalModel/mathematical-model";
import { Global } from "src/app/class/Globalfunction/Global";
import { Users } from "src/app/interface/users";
import { Swarm } from "src/app/interface/swarm";
import "leaflet.smooth_marker_bouncing";
import { TripProposalResponse } from "src/app/interface/trip-proposal-response";
import { Trip } from "src/app/interface/trip";
import { GetTripIntersecionsResponse } from "src/app/interface/get-trip-intersecions-response";
import { User } from "src/app/interface/user";
import { TripIntersection } from "src/app/interface/trip-intersection";
import { GetTripsResponse } from "src/app/interface/get-trips-response";
import { GetUserLocation } from "src/app/interface/get-user-locations";

declare var NativeLogs: any;
declare var L;

@Component({
  selector: "app-tripproposals",
  templateUrl: "./tripproposals.page.html",
  styleUrls: ["./tripproposals.page.scss"],
})
export class TripproposalsPage implements OnInit {
  @ViewChild("map") mapElement: ElementRef;
  @ViewChild(IonModal) modal: IonModal;
  PotentialSwarmLocationUpdateInterval;
  PotentialSwarmLocationUpdateInterval_duration: number = 2000; // unit : ms:
  map2: any;
  marker;
  startLng;
  startLat;
  endLng;
  endLat;
  leavelat;
  leavelng;
  decodeRoute: any[];
  lastPointRoute;
  meetpts: any[] = [{ latitude: 0, longitude: 0 }];
  meetlat;
  meetlng;
  decodedPolyline;
  decodedPolyline3;
  decodedPolyline2;
  polyline =
    "}zq_IgulpA?DKCMC?K@SDi@XyD?MDi@Bg@Dg@VqFJ_BF}@Bg@B_@@GFcA@ODq@NeC@MF}@RgDNiCDg@F_A@M@KBSP_@@SBMNiCDe@B_@Bc@ZqFLqBXoEXsEFgAJuABa@NaC?IB_@Fo@Bi@FwALuCPwC@KDe@B]ZaFn@{J?M@W?WAYLaB?MBU@STuDJaBJ_BHuA@MR_DBa@B]JqA?MDa@@UJUDKLWbBoD@ADOHQJY@IBMJItAuCVm@HQDI|E@F?`@??kF?s@?qF?c@?k@?]?a@?U?S?Q?K?iA?oF?yBFc@Hu@XwAD[Hu@L_AH{@F{@FoA@mA?}@Ci@NAb@Ez@KJARCCg@?IS{HSyGKiD?WGsBAGAk@OaHEuAKqD?OCi@@_@?_@GyBG{BAIAGAKKYEIQa@AECKAEAIMaG?c@KeDG}BAY?UCo@A]C_AASCUa@}CAGMcAEMGIIEGADaAf@eBh@k@CKSw@AAEMOg@K_@CIu@aCe@yA_@mAQg@Oa@?Ea@uAc@sAAEGW@G?IWeAqA_GCKGWNUbBeCDIV_@dA{ADEHMDGZc@Vc@Ra@@ARw@dBsCdBqCd@M@CFIRY\\g@TcAb@q@fAcB_@}@sAgDWq@ED{BdDEFc@qAU\\q@gBiCaHkA_D[{@Si@K[IUYd@GQOa@a@iAW^OTc@sAOa@";
  polyline2 =
    "}zq_IgulpA?DKCMC?K@SDi@XyD?MDi@Bg@Dg@VqFJ_BF}@Bg@B_@@GFcA@ODq@NeC@MF}@RgDNiCDg@F_A@M@KBSVHhMtDNDnA}B|AiBh@u@v@gAr@}@j@_AjAeBLZl@i@Jc@@YX}@fBsEtBiFVaA@KBE?C@G?@ZDr@Bb@J`@HB@DBD@XJHOFGFIFKvAsFrCcLVaAfAiE@G@CD]FAVCJ[CuAB?@EVgAEu@CaFGiEIgEA]OaGEcACa@A]M_ECs@Cu@IsDEsBAaAAa@?a@CaCCaBAUAk@?KAk@GsAc@_JCYKeEAa@IoAAYGe@CYEWI}@Sk@U]?KAYCKKm@CoAAUAOEwAZEQ}FAe@KaE?]Cg@OqGImCC}@Aq@E}@IqDCq@EyAAIAc@Ce@?Ee@mPKgEIsDYqJE_BGUEWAMCiACq@Ac@I}CAKAWQmFWyIAYCgACmAGq@EYMcAa@wAKs@Ok@I[CISs@CKCGYcAOi@[gACOm@kBAGCEK_@Si@}@eCQ_@iAoCCGMYRa@@ARw@dBsCdBqCd@M@CFIRYg@TcAb@q@fAcB_@}@sAgDWq@ED{BdDEFc@qAUq@gBiCaHkA_D[{@Si@K[IUYd@GQOa@a@iAW^OTc@sAOa@";

  intersections = [];
  intersection_distance = "0";
  routes: Trip[] = [];

  choosen_route_id = null;
  choosen_route = this.routes[this.choosen_route_id];
  popup: boolean = true;
  streetname;
  startpoint = { lng: null, lat: null };
  endpoint = { lng: null, lat: null };
  distance = [0, 0];
  choosen_route_geometry;
  users_positions: any;
  first = { lng: 12.551, lat: 52.42 };
  second = { lng: 12.557, lat: 52.419 };
  indexpt;
  steps;
  iconBlue = L.AwesomeMarkers.icon({
    icon: "circle",
    markerColor: "blue",
    prefix: "fa",
    iconColor: "white",
  });
  bikeIcon = L.icon({
    iconUrl: "../assets/content/images/bike.png",
    iconSize: [32, 32], // size of the icon
  });

  swarmIcon = L.icon({
    iconUrl: "../assets/content/images/swarm1.png",
    iconSize: [32, 32], // size of the icon
  });

  meetingIcon = L.icon({
    iconUrl: "../assets/content/images/finish.png",
    iconSize: [32, 32], // size of the icon
  });
  startMarkerIcon = L.icon({
    iconUrl: "../assets/content/images/start_marker.png",
    iconSize: [40, 40], // size of the icon
  });
  destinationIcon = L.icon({
    iconUrl: "../assets/content/images/destination.png",
    iconSize: [32, 32], // size of the icon
  });

  checkpointIcon = L.icon({
    iconUrl: "../assets/content/images/flag.png",
    iconSize: [32, 32], // size of the icon
  });

  swarmPointIcon = L.icon({
    iconUrl: "../assets/content/images/swarmMeetingPoint.png",
    iconSize: [35, 35], // size of the icon,
    iconAnchor: [20, 30], // point of the icon which will corresponds to markers location
  });

  meetingStreet: any;
  leavingStreet: any;
  endTripStreet: any;
  logText;
  public logg: any;
  prev;
  overlap: boolean = false;
  decodeRoute2: any[];
  checkPointMarker_meet = new L.Marker();
  checkPointMarker_meet_popup = L.popup({ autoClose: false });
  checkPointMarker_leave = new L.Marker();
  checkPointMarker_leave_popup = L.popup({ autoClose: false });

  expected_swarmID: string;
  expectedSwarmsArray: Array<Users> = [];
  sortedUsersPositionwithTripID: any = []; //[{trip_id: string, userObject: any}]
  checkpointMarkerArray = []; // contains all the checkpoint markers
  confirmedSwarms: Swarm[] = []; // this are the confirmed swarms in the trip intersections
  // having information about all the confirmed groups present

  generatedColor = []; // keeps the track of all the color already present on the page

  filteredGroupedbyCategoryList = []; // this is the list that will be expanded when there are intersections available
  dynamicPolyline; // polyline whenever a new user selection event gets triggered

  expandableList = []; // this is the content which will be visible in the expandable list

  iconOrange = L.AwesomeMarkers.icon({
    icon: "group",
    markerColor: "orange",
    prefix: "fa",
    iconColor: "black",
  });
  icon2 = L.AwesomeMarkers.icon({
    icon: "group",
    markerColor: "lightgray",
    prefix: "fa",
    iconColor: "black",
  });

  iconOrange_deactive = L.icon({
    iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23ec7b19&icon=users&iconType=awesome&scaleFactor=2&apiKey=c7ff719c2709426abb5c162d7361a78b`,
    iconSize: [30, 40], // size of the icon
  });

  iconOrange_active = L.icon({
    iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23ec7b19&icon=users&iconType=awesome&scaleFactor=2&apiKey=c7ff719c2709426abb5c162d7361a78b`,
    iconSize: [35, 50], // size of the icon
  });
  leavingPointIconActive = L.icon({
    iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23ec7b19&icon=users-slash&iconType=awesome&scaleFactor=2&apiKey=c7ff719c2709426abb5c162d7361a78b`,
    iconSize: [35, 45], // size of the icon
  });
  leavingPointIcondeactive = L.icon({
    iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23ec7b19&icon=users-slash&iconType=awesome&scaleFactor=2&apiKey=c7ff719c2709426abb5c162d7361a78b`,
    iconSize: [30, 40], // size of the icon
  });

  openModal: boolean = false; // this variable helps to show the modal on UI
  ShowProgressBar: boolean = true; // flag for showing progress bar

  constructor(
    private router: Router,
    public navCtrl: NavController,
    public navParams: NavParams,
    public restprovider: RestApiService,
    private alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public device: DeviceOrientation,
    public app: AppComponent,
    private nativeGeocoder: NativeGeocoder,
    private file: File,
    private platform: Platform,
    private transfer: TransferService,
    private storage: StorageService,
    private mathModel: MathematicalModel,
    private ref: ChangeDetectorRef,
    private globalFunction: Global
  ) {
    this.add_users_positions.bind(this);
  }

  ngOnInit() {
    //load coordination sent from the homepage
    console.log("ngon int called ----------------");
    this.ref.detectChanges();
    console.log("ngonint finished call ------------------");
  }

  ionViewWillEnter() {
    console.log("start ion viewiwll enter--------------------");

    this.initalizationMain();
    console.log("end ion viewiwll enter--------------------");
  }
  initalizationMain() {
    console.log("ionviewwillenter TripproposalsPage");
    // console.log("start position before ", this.transfer._getStartPosition());
    this.loadCoordinates();
    this.ShowProgressBar = true;
    this.openModal = false;

    console.log("start: ", this.startpoint, "endpoint :", this.endpoint);
    // get trip data
    this.restprovider
      .getTripProposal(this.startpoint, this.endpoint)
      .then((data: TripProposalResponse) => {
        return (this.routes = data["trips"]);
      })
      .catch((error) => {
        console.log(
          "Error in getting trip request(500 error) :",
          error,
          "500 error"
        );
      })
      .then(() => {
        // TODO : old code base needs to be changed later on
        //select trip related information default trip
        this.choosen_route_id = this.routes[0]["trip_id"];
        this.choosen_route_geometry = this.routes[0].geometry;
        this.distance[0] = this.routes[0]["distance"];
        var intersections_array = this.routes[0]["trip_intersections"];
        // console.log('before : ', this.routes);
        console.log(
          "trip intersections with other trip id ",
          this.routes[0]["trip_intersections"]
        );
        var sum = 0;
        intersections_array.forEach((element, indexpts) => {
          console.log("distance is ", element.distance, "and sum is ", sum);
          if (element.distance >= sum) {
            this.indexpt = indexpts;
            sum = element.distance; // sum take the longest intersection distance
            console.log(
              "sum intersection distance ",
              sum,
              "indexpt",
              this.indexpt
            );
          }
        });

        //define meeting and leaving points if there is an intersection
        if (intersections_array.length == 0) {
          this.intersection_distance = "0";
        }

        // here all the swarms will be shown and also the alone user

        if (intersections_array.length >= 1) {
          this.expected_swarmID = intersections_array[0].expected_swarm_id;
          if (
            this.expected_swarmID != null &&
            this.expected_swarmID != "null" &&
            this.expected_swarmID != undefined
          ) {
            console.log("expexcted swarm id ", this.expected_swarmID);
          }
          this.meetpts = this.decode(
            intersections_array[this.indexpt]["intersections"][0]
          );
          this.meetlat = this.meetpts[0].latitude;
          this.meetlng = this.meetpts[0].longitude;
          console.log(
            "Meeting point :",
            "lat",
            this.meetlat,
            "lng",
            this.meetlng
          );
          this.leavelat = this.meetpts[this.meetpts.length - 1].latitude; //gets the last latitude of the intersection
          this.leavelng = this.meetpts[this.meetpts.length - 1].longitude; //gets the last langtitude of the intersection
          console.log(
            "Leaving point :",
            "lat",
            this.leavelat,
            "lng",
            this.leavelng
          );
          this.intersection_distance = sum.toString().trim().split(".")[0];
        }
        //decode the trip and get the ending point
        this.decodeRoute = this.decode(this.routes[0]["geometry"]);
        // console.log('decode the trip', this.decodeRoute);
        this.lastPointRoute = this.decodeRoute[this.decodeRoute.length - 1];
        // console.log("intersections array", intersections_array);
        // console.log("intersection_distance", this.intersection_distance);
        if (this.platform.is("android")) {
          this.reverseGeocode(this.meetlat, this.meetlng, 1);
          this.reverseGeocode(this.leavelat, this.leavelng, 2);
          this.reverseGeocode(
            this.lastPointRoute.latitude,
            this.lastPointRoute.longitude,
            3
          );
        }
      })
      .then(() => {
        // initialization of each and every swarm and alone user
        this.expectedSwarmsArray = [];
        // everything related to swar information will be gathered and implemented here
      })
      .then(() => {
        return Promise.all(
          this.routes.map((element) => {
            console.log("Routes are ", element);
            return element;
          })
        );
      })
      .then((elem: Trip[]) => {
        console.log("Element is ", elem);

        // initialization of each and every swarm and alone user
        this.expectedSwarmsArray = [];
        // goal is to build each and every single individual dataset
        return Promise.all(
          // this is for the different routes
          elem.map((element: Trip) => {
            let obj: Users;
            let dataArray = [];
            if (element.trip_intersections.length != 0) {
              console.log(
                "trip intersection found ",
                element.trip_intersections
              );
              return Promise.all(
                element.trip_intersections.map((element3: TripIntersection) => {
                  console.log("trip intersection for elementid:", element3);
                  return this.restprovider
                    .getTripintersection(element3.trip_intersection_id, true)
                    .then((data_tripIntersection) => {
                      console.log(
                        "response trip intersection",
                        data_tripIntersection
                      );
                      return this.restprovider
                        .getUserlocation(
                          element3.foreign_trip_id,
                          data_tripIntersection.users[0].device_id
                        )
                        .then(
                          (data: GetUserLocation) => {
                            console.log(
                              "data from the trip intersections ",
                              data
                            );
                            let obj_list = {
                              ...data,
                              foreign_trip_id: element3.foreign_trip_id,
                            };
                            dataArray.push(obj_list);
                            let element2 = data;
                            obj = {
                              trip_id: element.trip_id,
                              trip_id_geometry: element.geometry,
                              device_id: element2.device_id,
                              foreign_trip_id: element3.foreign_trip_id,
                              swarm_id: element3.expected_swarm_id,
                              intersection_distance: element3.distance
                                .toString()
                                .trim()
                                .split(".")[0],
                              intersection_geometry: element3.intersections[0],
                              position: element2.position,
                              speed: element2.speed,
                            };
                            obj.color = this.globalFunction.generateColor();
                            let overlap = this.decode(
                              element3.intersections[0]
                            );
                            var coordinates = overlap.map(
                              (waypoint) =>
                                new L.LatLng(
                                  waypoint.latitude,
                                  waypoint.longitude
                                )
                            );
                            obj.intersection_polyline_LatLngs = coordinates;

                            console.log("new obj final", obj);

                            return obj;
                          },
                          (error) => {
                            console.error("Error getting user location", error);
                          }
                        );
                    });
                })
              )
                .then(
                  (array) => {
                    console.error("value is ", array);
                    console.log("dataarray", dataArray);
                    this.sortedUsersPositionwithTripID.push({
                      trip_id: element.trip_id,
                      userObject: dataArray,
                    });
                    return Promise.all(
                      array.map((obj: any) => {
                        console.warn("get trips mapping", obj);
                        return this.restprovider
                          .getTrips(obj.foreign_trip_id)
                          .then((tripData: GetTripsResponse) => {
                            console.log("calling rest trip", obj);
                            obj.foreign_trip_id_geometry = tripData.geometry;
                            obj.foreign_trip_id_geometry;
                            this.expectedSwarmsArray.push(obj);
                            console.log(
                              "nextfinal push ",
                              this.expectedSwarmsArray
                            );
                            return obj;
                          });
                      })
                    );
                  },
                  (error) => {
                    console.error(error);
                  }
                )
                .then((val) => {
                  console.error("new val is", val);
                  return val;
                });
            }
          })
        );
      })
      .then((x) => {
        console.log("nextfinal x ", x);

        // this.expectedSwarmsArray= x
        console.log("nextfinal swarmArray", this.expectedSwarmsArray);
        return x;
      })
      .then((array) => {
        // ? for now the calls will be done only once but an interval can be set here to call the whole then block
        // ! this.PotentialSwarmLocationUpdateInterval = setInterval(async () => {}

        if (this.expectedSwarmsArray.length != 0) {
          return Promise.all(
            this.expectedSwarmsArray.map((element) => {
              console.log("calculating", element);
              this.openModal = true;

              // ? considered all the information in the interface is available
              //  ! add all the error handler for all the user cases of
              // this is the calculation check for static model
              // calculate distance for the expexcted swarm
              var distanceToCover_forSwarm =
                this.mathModel.getDistanceWithBreakpoint(
                  this.decode(element.foreign_trip_id_geometry),
                  {
                    latitude: element.position.lat,
                    longitude: element.position.lng,
                  },
                  this.decode(element.intersection_geometry)[0]
                );
              let overlap = this.decode(element.intersection_geometry);
              var coordinates = overlap.map(
                (waypoint) =>
                  new L.LatLng(waypoint.latitude, waypoint.longitude)
              );
              element.intersection_polyline_LatLngs = coordinates;
              element.swarm_distanceToCover = distanceToCover_forSwarm;
              // calculate distance for the user
              var distanceToCover_forUser =
                this.mathModel.getDistanceWithBreakpoint(
                  this.decode(element.trip_id_geometry),
                  {
                    latitude: this.startpoint.lat,
                    longitude: this.startpoint.lng,
                  },
                  this.decode(element.intersection_geometry)[0]
                );
              element.user_distanceToCover = distanceToCover_forUser;
              // calculate Time required to reach swarm
              var ETA_forExpectedSwarm = this.mathModel.calculateETADynamic(
                distanceToCover_forSwarm,
                element.speed
              );

              var length = this.decode(element.intersection_geometry).length;
              let leavingpoint_distance =
                this.mathModel.getDistanceWithBreakpoint(
                  this.decode(element.trip_id_geometry),
                  {
                    latitude: this.startpoint.lat,
                    longitude: this.startpoint.lng,
                  },
                  this.decode(element.intersection_geometry)[length - 1]
                );
              element.user_distance_to_leaving_point = leavingpoint_distance;

              element.ETA_swarm = ETA_forExpectedSwarm;
              var ETA_forUser = this.mathModel.calculateETAStatic(
                distanceToCover_forUser
              );
              element.ETA_user = ETA_forUser;
              element.isAbleToMakeSwarm = this.mathModel.tripproposals_criteria(
                ETA_forUser,
                ETA_forExpectedSwarm
              );
              let recommended_speed = this.mathModel.calculateSuggestedSpeed(
                distanceToCover_forUser,
                ETA_forExpectedSwarm
              );
              element.suggestedSpeed = recommended_speed;
              element.isAbleToMakeSwarm;

              this.refreshMarkerPopup();
              setTimeout(() => {
                this.ShowProgressBar = false;
              }, 1000);
              return element;
            })
          );
        } else {
          // no intersection available
          this.ShowProgressBar = false;
          this.openModal = false;
          this.modal.dismiss(null, "cancel").then(
            (data) => {
              console.log("modal successfully dismissed");
            },
            (error) => {
              console.error("Error dismissing the modal", error);
            }
          );
        }
      })
      .then((x) => {
        console.log("nextfinal after interval", x);
        return this.expectedSwarmsArray;
      })
      .then((array) => {
        if (array.length == 0) {
          console.log("skipping 2");
          return;
        }
        console.log("nextfinal return array", array);
        console.log("nextfinal expected swarm", this.expectedSwarmsArray);
        return (
          Promise.all(
            this.expectedSwarmsArray.map((group, product) => {
              console.log(group, product);
            })
          )

            /**
             * @depreceated
             * @alternative new function is being used in new version
             */
            // ! no in use anymore
            .then((array) => {
              console.log(array);
              if (array.includes(undefined)) {
                return;
              }
              let groupByCategory1: any = array.reduce(
                (group, product: any) => {
                  console.log("nextfinal ", "inside reduce");
                  const { trip_id } = product;
                  group[trip_id] = group[trip_id] ?? [];
                  group[trip_id].push(product);
                  console.log("nextfinal", group, product);
                  return group;
                },
                {}
              );

              console.log(
                "nextfinal groupbyCategory1 in reduce ",
                groupByCategory1
              );

              Object.entries(groupByCategory1).forEach((entry: any) => {
                const [key, value] = entry;
                console.log(key, value);
                const groupByCategory2 = value.reduce((group, product) => {
                  const { swarm_id } = product;
                  group[swarm_id] = group[swarm_id] ?? [];
                  group[swarm_id].push(product);
                  // console.log("nextfinalcheck", groupByCategory1[key])

                  return group;
                }, {});
                groupByCategory1[key] = groupByCategory2;
                console.log("nextfinalized", groupByCategory1);
              });

              this.filteredGroupedbyCategoryList = groupByCategory1;
              console.log(
                "nextfinalexpanded list",
                this.filteredGroupedbyCategoryList
              );

              return this.filteredGroupedbyCategoryList;
            })
        );
      })
      .then((filteredList) => {
        console.log("filtered list", filteredList);
        console.log("routes for map :", this.routes);
      })
      .catch((error) => {
        console.error("error generated generating sorted lists ", error);
      })
      .then(() => {})
      .catch((error) => {
        console.error("Error generating checkpoint flags ");
      })
      .then(() => {
        //get the navigation
        this.steps = this.routes[0]["legs"][0]["steps"];
        this.transfer._setNavSteps(this.steps);
        console.log("steps are ", this.steps);
        this.groupList(this.expectedSwarmsArray);
        this.loadmap(this.routes);
      })
      .catch((error) => {
        console.log("Error bar in ngOnInit", error);
        this.logText =
          this.logText +
          new Date().toISOString().substring(11, 19) +
          " Error loading page: " +
          error +
          "\r\n";
        this.file.writeFile(
          this.file.externalApplicationStorageDirectory,
          this.app.filename,
          this.logText,
          { append: true }
        );
      });
    if (this.platform.is("android")) {
      this.writeLogs();
    }
  }

  ionViewDidEnter() {}
  groupList(array) {
    console.log("nextfinal grouplist function", array);
    let groupByCategory1: any = array.reduce((group, product: any) => {
      console.log("nextfinal ", "inside reduce");
      const { trip_id } = product;
      group[trip_id] = group[trip_id] ?? [];
      group[trip_id].push(product);
      console.log("nextfinal", group, product);
      return group;
    }, {});

    console.log("nextfinal groupbyCategory1 ", groupByCategory1);

    Object.entries(groupByCategory1).forEach((entry: any) => {
      const [key, value] = entry;
      console.log(key, value);
      const groupByCategory2 = value.reduce((group, product) => {
        const { swarm_id } = product;
        group[swarm_id] = group[swarm_id] ?? [];
        group[swarm_id].push(product);
        // console.log("nextfinalcheck", groupByCategory1[key])

        return group;
      }, {});
      groupByCategory1[key] = groupByCategory2;
      console.log("nextfinalized", groupByCategory1);
    });

    this.filteredGroupedbyCategoryList = groupByCategory1;
    console.log(
      "nextfinalexpanded list in function ",
      this.filteredGroupedbyCategoryList
    );
  }

  ionViewWillLeave() {
    console.log("ionviewDid will leave  proposal");
    this.modal.dismiss(null, "cancel").then(
      (data) => {
        console.log("modal successfully dismissed");
      },
      (error) => {
        console.error("Error dismissing the modal", error);
      }
    );
    if (this.map2) {
      this.map2.off();
      this.map2.remove();
      this.checkpointMarkerArray.forEach((marker) => {
        marker.remove();
      });
    }
    clearInterval(this.PotentialSwarmLocationUpdateInterval);
  }

  ionViewDidLeave() {
    this.transfer.flag.next("true");
    this.sortedUsersPositionwithTripID = [];
    console.log("--------tripproposal implementation finished----------");
  }
  reload() {
    //document.getElementById("map").outerHTML = "";
    console.log("just enetered reload function");
  }

  exit() {
    this.popup = false;
    this.choosen_route_id = null;
    this.intersection_distance = "0";
  }
  /**
   * loads all necessary variables for trip proposal from transfers
   */
  loadCoordinates() {
    try {
      this.startLat = this.transfer._getStartPosition().lat;
      this.startLng = this.transfer._getStartPosition().lng;
      this.startpoint.lat = this.startLat;
      this.startpoint.lng = this.startLng;
      this.endLat = this.transfer._getDestinationPosition().lat;
      this.endLng = this.transfer._getDestinationPosition().lng;
      this.endpoint.lat = this.endLat;
      this.endpoint.lng = this.endLng;
      this.prev = this.transfer._getPreviousLog();
      this.logText = this.transfer._getLogText();
    } catch (error) {
      console.warn("error loading coordinates from transfer  ", error);
      console.error("error=>", error);
      this.backward();
    } finally {
      console.log("tried loading coordinates");
    }

    console.log(
      "using services transfer:",
      this.startpoint,
      "and endpoint is ",
      this.endpoint
    );

    console.log("finsihed with initialization");
    this.logText =
      this.logText +
      new Date().toISOString().substring(11, 19) +
      " Trip proposals page entered" +
      "\r\n";
    if (this.platform.is("android")) {
      this.file.writeFile(
        this.file.externalApplicationStorageDirectory,
        this.app.filename,
        this.logText,
        { append: true }
      );
    }
  }

  /**
   * @depreceated should not be used due to data Privacy
   *
   * As the marker feature of the users depreaceated in tripproposal page
   * these creates logos for all the users having trip intersection with your own trip
   */

  createLogo() {
    let arr = this.expectedSwarmsArray;
    arr.forEach((element) => {
      console.log("create logo", element);
      let marker = new L.Marker();
      // this is users location
      marker.setIcon(this.swarmIcon);
      marker.setLatLng([element.position.lat, element.position.lng]);
      marker.addTo(this.map2);
    });
  }
  /**
   * creates map with all marker and polyline
   * @param fake_trips routes information from trip proposal
   */
  loadmap(fake_trips) {
    console.log("fake trip", fake_trips);
    this.map2 = L.map("map_tripproposals").setView([52.520008, 13.404954], 14);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {}).addTo(this.map2);
    // load map
    // if condition is to check for two alternative routes
    this.updateExpandableList();
    console.log("nextfinalchoosen", this.expandableList);

    if (fake_trips.length - 1 != 0) {
      // assigning expandable content

      // ? here try to add the polyline
      this.decodedPolyline = this.decode(this.routes[1].geometry);
      // console.log("XXXXXXXXXXXXXXXXXX");
      console.log(this.decodedPolyline);
      var coordinates = this.decodedPolyline.map(
        (waypoint) => new L.LatLng(waypoint.latitude, waypoint.longitude)
      );
      // console.log("coord", coordinates);
      let polyline = L.polyline(coordinates, {
        color: "grey",
        weight: 10,
        opacity: 0.9,
        lineJoin: "round",
        //  dashArray: "0 15",
      }).bindPopup("number 1");
      // select another alternative route
      this.decodedPolyline2 = this.decode(this.routes[0].geometry);
      // console.log("decode 2 ", this.decodedPolyline2);
      var coordinates2 = this.decodedPolyline2.map(
        (waypoint) => new L.LatLng(waypoint.latitude, waypoint.longitude)
      );
      let polyline2 = L.polyline(coordinates2, {
        color: "blue",
        weight: 10,
        opacity: 0.9,
        lineJoin: "round",
        //  dashArray: "0 15",
      })
        .bindPopup("number 2")
        .openPopup();
      polyline.addTo(this.map2);
      polyline2.addTo(this.map2);

      this.map2.fitBounds(polyline2.getBounds());
      //add markers to the map
      this.marker = new L.Marker();
      this.marker.setIcon(this.startMarkerIcon);
      this.marker.setLatLng([this.startpoint.lat, this.startpoint.lng]);
      this.marker.addTo(this.map2);
      this.map2
        .locate({ setView: false, watch: true, enableHighAccuracy: true })
        .on(
          "locationfound",
          function (e) {
            // ! function changed to stop updating the current location of the user for testing purpose

            this.marker.setLatLng([this.startpoint.lat, this.startpoint.lng]);
            this.marker.addTo(this.map2);

            this.marker.setLatLng(e.latlng);
            this.marker.addTo(this.map2);
            this.startpoint.lat = e.latlng.lat;
            this.startpoint.lng = e.latlng.lng;
          },
          this
        );
      L.marker([this.endpoint.lat, this.endpoint.lng], {
        icon: this.destinationIcon,
      }).addTo(this.map2);

      this.draw();
      this.createCheckpoints();

      polyline.on("click", (e) => {
        this.overlap = true;
        this.map2.removeLayer(polyline2);
        this.map2.removeLayer(polyline);
        polyline2.addTo(this.map2);
        polyline.addTo(this.map2);
        polyline.setStyle({
          color: "blue",
        });
        polyline2.setStyle({
          color: "grey",
        });
        this.popup = true;
        this.choosen_route_id = this.routes[1]["trip_id"];
        this.choosen_route_geometry = this.routes[1].geometry;
        this.updateExpandableList();
        this.distance[0] = this.routes[1]["distance"];
        var intersections_array = this.routes[1]["trip_intersections"];
        console.log("route[1]", intersections_array);
        var sum = 0;
        if (intersections_array.length == 0) {
          this.intersection_distance = "0";
        }

        intersections_array.forEach((element, indexpts) => {
          console.log("-----------------route[1]", element);
          if (element.distance >= sum) {
            this.indexpt = indexpts;
            sum = element.distance; // sum take the longest intersection distance
            this.intersection_distance = sum.toString().trim().split(".")[0];
            console.log(
              "index",
              this.indexpt,
              "intersections_array",
              intersections_array,
              "intersection distance",
              this.intersection_distance
            );
            this.meetpts = this.decode(
              intersections_array[this.indexpt]["intersections"][0]
            );
            this.meetlat = this.meetpts[0].latitude;
            this.meetlng = this.meetpts[0].longitude;
            this.leavelat = this.meetpts[this.meetpts.length - 1].latitude; //gets the last latitude of the intersection
            this.leavelng = this.meetpts[this.meetpts.length - 1].longitude; //gets the last langtitude of the intersection
          }
        });

        this.draw();
        this.createCheckpoints();
      });
      // route[0]
      polyline2.on(
        "click",
        (e) => {
          this.overlap = false;
          this.map2.removeLayer(polyline);
          this.map2.removeLayer(polyline2);
          polyline.addTo(this.map2);
          polyline2.addTo(this.map2);
          polyline.setStyle({
            color: "grey",
          });
          polyline2.setStyle({
            color: "blue",
          });
          this.popup = true;
          this.choosen_route_id = this.routes[0]["trip_id"];
          this.choosen_route_geometry = this.routes[0].geometry;
          this.distance[0] = this.routes[0]["distance"];
          this.updateExpandableList();
          var intersections_array = this.routes[0]["trip_intersections"];
          console.log("route[0]", intersections_array);
          var sum = 0;
          if (intersections_array.length == 0) {
            this.intersection_distance = "0";
          }
          intersections_array.forEach((element, indexpts) => {
            console.log("-----------------route[0]", element);
            if (element.distance >= sum) {
              this.indexpt = indexpts;
              sum = element.distance; // sum take the longest intersection distance
              this.intersection_distance = sum.toString().trim().split(".")[0];
              this.meetpts = this.decode(
                intersections_array[this.indexpt]["intersections"][0]
              );
              console.log("intersection distance", this.intersection_distance);
              this.meetlat = this.meetpts[0].latitude;
              this.meetlng = this.meetpts[0].longitude;
              this.leavelat = this.meetpts[this.meetpts.length - 1].latitude; //gets the last latitude of the intersection
              this.leavelng = this.meetpts[this.meetpts.length - 1].longitude; //gets the last langtitude of the intersection
            }
          });

          this.draw();
          this.createCheckpoints();
        },
        this
      );
    } else {
      // this is for only one route
      this.decodedPolyline2 = this.decode(this.routes[0].geometry);
      var coordinates2 = this.decodedPolyline2.map(
        (waypoint) => new L.LatLng(waypoint.latitude, waypoint.longitude)
      );
      let polyline2 = L.polyline(coordinates2, {
        color: "blue",
        weight: 10,
        opacity: 0.9,
        lineJoin: "round",
      }).bindPopup("1 n only 1 ");
      polyline2.addTo(this.map2);

      this.map2.fitBounds(polyline2.getBounds());
      //add markers to the map

      this.marker = new L.Marker();
      this.marker.setIcon(this.startMarkerIcon);
      this.marker.setLatLng([this.startpoint.lat, this.startpoint.lng]);
      this.marker.addTo(this.map2);
      this.map2
        .locate({ setView: false, watch: true, enableHighAccuracy: true })
        .on(
          "locationfound",
          function (e) {
            this.marker.setLatLng(e.latlng);
            this.marker.addTo(this.map2);
            this.startpoint.lat = e.latlng.lat;
            this.startpoint.lng = e.latlng.lng;
          },
          this
        );
      L.marker([this.endpoint.lat, this.endpoint.lng], {
        icon: this.destinationIcon,
      }).addTo(this.map2);
      this.draw();
    }

    console.log("tryinggggg", this.expectedSwarmsArray);
    // console.log(this.expectedSwarmsArray)
    this.map2.on("click", (e) => {
      if (this.expandableList.length != 0) {
        this.modal.setCurrentBreakpoint(0.05);
      }
    });

    this.createCheckpoints();
  }
  /**
   *  @returns {void} generates marker for the map, meeting and leaving points
   * this functions generates checkpoint markers for the trips and their intersection
   */
  createCheckpoints() {
    let arr = this.expectedSwarmsArray;
    console.log("creating markers ", this.choosen_route_id);
    if (this.checkpointMarkerArray.length != 0) {
      this.deleteCheckpointsMarker();
    }

    // console.log("marker should be available here ", this.decode(arr[0].intersection_geometry)[0])
    setTimeout(() => {
      arr.forEach((element) => {
        console.log("create markers", element);
        console.log(
          "creating markers ",
          element.trip_id,
          this.choosen_route,
          element.trip_id == this.choosen_route_id
        );

        if (element.trip_id == this.choosen_route_id) {
          let marker = new L.Marker();

          marker.options.iconSize = [50, 50];
          marker.setIcon(this.iconOrange_deactive);
          let decodedArray = this.decode(element.intersection_geometry);
          let a = decodedArray[0];

          marker.setLatLng([a.latitude, a.longitude]);
          marker.on(
            "click",
            async function () {
              console.log("marker clicked", element);
              this.selectCheckpoint(element, "meeting");
            },
            this
          );

          // setting leaving marker coordinates
          let leaveMarker = new L.Marker();

          let b = decodedArray[decodedArray.length - 1];

          leaveMarker.setIcon(this.leavingPointIcondeactive);
          leaveMarker.setLatLng([b.latitude, b.longitude]);
          leaveMarker.addTo(this.map2);
          leaveMarker.on(
            "click",
            async function () {
              console.log("marker clicked", element);
              this.selectCheckpoint(element, "leaving");
            },
            this
          );

          /* marker.bindPopup("Loading....", {
            closeButton: false,
            className: "checkpointPopUp",
          }); */
          marker.addTo(this.map2);
          // TODO : add estimated time and color for the icon
          // marker.bindPopup()
          element.checkpointMarker = marker;
          element.checkpointMarker;
          this.checkpointMarkerArray.push(marker);
          element.leavingMarker = leaveMarker;
          this.checkpointMarkerArray.push(leaveMarker);
          // this.createLogo();
        }
      });
    }, 150);
  }
  // delete all ther present markers
  deleteCheckpointsMarker() {
    this.checkpointMarkerArray.forEach((marker) => {
      marker.remove();
    });
  }

  refreshMarkerPopup() {
    let array = this.expectedSwarmsArray;
    array.forEach((element) => {
      let marker = element.checkpointMarker;
      if (marker) {
        let a = marker.getPopup().getContent();
        if (a !== element.isAbleToMakeSwarm) {
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

          // let ETA_toCheckpoint = element.c
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
      }
    });
  }
  refreshTripProposal() {
    console.log("refresh tripproposal clicked ");
    if (this.map2) {
      this.map2.stopLocate();
      this.map2.off();
      this.map2.remove();
    }
    if (
      this.startpoint.lat &&
      this.startpoint.lng &&
      this.startpoint.lat != null &&
      this.startpoint.lat != undefined &&
      this.startpoint.lng != null &&
      this.startpoint.lng != undefined
    ) {
      this.transfer._setStartPosition(this.startpoint);
      setTimeout(() => {
        this.ionViewWillEnter();
      }, 1000);
    } else {
      // !here comes one alert box
    }
  }
  /**
   * generates polyline on the map
   */
  draw() {
    //draw the intersection
    let polyline1;
    console.log("overlap", this.overlap);

    if (this.overlap == false) {
      console.log("inside route 0");

      if (this.routes[0]["trip_intersections"].length != 0) {
        var a =
          this.routes[0]["trip_intersections"][this.indexpt]["intersections"];
        this.decodedPolyline3 = this.decode(a[0]);

        var coordinates1 = this.decodedPolyline3.map(
          (waypoint) => new L.LatLng(waypoint.latitude, waypoint.longitude)
        );

        polyline1 = L.polyline(coordinates1, {
          color: "green",
          weight: 8,
          opacity: 0.8,
          lineJoin: "round",
        });
        polyline1.addTo(this.map2);
        if (this.meetlat && this.meetlng) {
          console.log("creating marker");
          this.checkPointMarker_meet.setIcon(this.checkpointIcon);
          this.checkPointMarker_meet.setLatLng([this.meetlat, this.meetlng]);
          //this.checkPointMarker_meet.addTo(this.map2);
          this.reverseGeocode(this.meetlat, this.meetlng, 1);
          console.log("meeting street", this.meetingStreet);
          setTimeout(() => {
            this.checkPointMarker_meet_popup.setContent(this.meetingStreet);
            this.checkPointMarker_meet.bindPopup(
              this.checkPointMarker_meet_popup
            );
            this.checkPointMarker_meet.openPopup();
          }, 500);
        }

        if (this.leavelat && this.leavelng) {
          this.checkPointMarker_leave.setIcon(this.checkpointIcon);
          this.checkPointMarker_leave.setLatLng([this.leavelat, this.leavelng]);
          //this.checkPointMarker_leave.addTo(this.map2);
          this.reverseGeocode(this.leavelat, this.leavelng, 2);
          console.log("leaving street", this.leavingStreet);
          setTimeout(() => {
            this.checkPointMarker_leave.bindPopup(this.leavingStreet);
            this.checkPointMarker_leave.openPopup();
          }, 500);
        }
      } else {
        if (this.map2.hasLayer(this.checkPointMarker_meet)) {
          console.log("trying to remove meet flag route [0] ");
          this.checkPointMarker_meet.remove();
        }
        if (this.map2.hasLayer(this.checkPointMarker_leave)) {
          this.checkPointMarker_leave.remove();
        }
      }
    } else if (this.overlap == true) {
      console.log("inside route 1");
      if (this.routes[1]["trip_intersections"].length != 0) {
        var a =
          this.routes[1]["trip_intersections"][this.indexpt]["intersections"];

        this.decodedPolyline = this.decode(a[0]);

        var coordinates2 = this.decodedPolyline.map(
          (waypoint) => new L.LatLng(waypoint.latitude, waypoint.longitude)
        );
        polyline1 = L.polyline(coordinates2, {
          color: "green",
          weight: 8,
          opacity: 0.8,
          lineJoin: "round",
        });
        polyline1.addTo(this.map2);
        if (this.meetlat && this.meetlng) {
          this.checkPointMarker_meet.setIcon(this.checkpointIcon);
          this.checkPointMarker_meet.setLatLng([this.meetlat, this.meetlng]);
          this.checkPointMarker_meet.addTo(this.map2);
          this.reverseGeocode(this.meetlat, this.meetlng, 1);
          console.log("meeting street", this.meetingStreet);
          setTimeout(() => {
            this.checkPointMarker_meet.bindPopup(this.meetingStreet);
            this.checkPointMarker_meet.openPopup();
          }, 500);
        }

        if (this.leavelat && this.leavelng) {
          this.checkPointMarker_leave.setIcon(this.checkpointIcon);
          this.checkPointMarker_leave.setLatLng([this.leavelat, this.leavelng]);
          this.checkPointMarker_leave.addTo(this.map2);
          this.reverseGeocode(this.leavelat, this.leavelng, 2);
          console.log("leaving street", this.leavingStreet);
          setTimeout(() => {
            this.checkPointMarker_leave.bindPopup(this.leavingStreet);
            this.checkPointMarker_leave.openPopup();
          }, 700);
        }
      } else {
        if (this.map2.hasLayer(this.checkPointMarker_meet)) {
          this.checkPointMarker_meet.remove();
        }
        if (this.map2.hasLayer(this.checkPointMarker_leave)) {
          this.checkPointMarker_leave.remove();
        }
      }
    }
  }
  /**
   * returns street name for a particular geocordinate
   * @param lat latitude
   * @param lng longitude
   * @param street {differentiate between meeting and leaving checkpoint }
   */
  reverseGeocode(lat, lng, street) {
    if (this.platform.is("android") && lat != undefined && lng != undefined) {
      console.log("reverse android called ", lat, lng, street);
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 2,
        defaultLocale: "de_DE",
      };
      try {
        this.nativeGeocoder.reverseGeocode(lat, lng, options).then(
          (result) => {
            console.log("result from reverse geocode", result);
            if (street == 1) {
              if (result[0].thoroughfare == "") {
                this.meetingStreet =
                  result[1].thoroughfare + " " + result[1].subThoroughfare;
                console.log(
                  "called revergeocode :",
                  " street option",
                  street,
                  "name of meeting street is :",
                  this.meetingStreet
                );
              } else {
                this.meetingStreet =
                  result[0].thoroughfare + " " + result[0].subThoroughfare;
                console.log(
                  "called revergeocode :",
                  " street option",
                  street,
                  "name of meeting street is :",
                  this.meetingStreet
                );
              }
            }
            if (street == 2) {
              if (result[0].thoroughfare == "") {
                this.leavingStreet =
                  result[1].thoroughfare + " " + result[1].subThoroughfare;
                console.log(
                  "called revergeocode :",
                  " street option",
                  street,
                  "name of meeting street is :",
                  this.leavingStreet
                );
              } else {
                this.leavingStreet =
                  result[0].thoroughfare + " " + result[0].subThoroughfare;
                console.log(
                  "called revergeocode :",
                  " street option",
                  street,
                  "name of meeting street is :",
                  this.leavingStreet
                );
              }
            }
            if (street == 3) {
              if (result[0].thoroughfare == "") {
                this.endTripStreet =
                  result[1].thoroughfare + " " + result[1].subThoroughfare;
              } else {
                this.endTripStreet =
                  result[0].thoroughfare + " " + result[0].subThoroughfare;
              }
              this.transfer._setEndTripStreet(this.endTripStreet);
            }
          },
          (error) => {
            // this.present_alert_Json();
            console.log("reversegeocode error", error);

            this.logText =
              this.logText +
              new Date().toISOString().substring(11, 19) +
              " error generating reversegeocode failed to add" +
              error +
              "\r\n";
            this.file.writeFile(
              this.file.externalApplicationStorageDirectory,
              this.app.filename,
              this.logText,
              { append: true }
            );
          }
        );
      } catch (e) {
        console.log(
          "ERROR generating reverse geocode for :",
          lat,
          lng,
          "error",
          e
        );
      } finally {
        console.log("reverse finally finished");
      }
    }
  }

  async present_alert_Json() {
    console.log("Present alert called trippsorposals");

    let alert = this.alertCtrl.create({
      header: "Error ",
      subHeader:
        "Error with your geolocation. Please redirect back to the home screen",
      buttons: [
        {
          text: "Back",
          handler: () => {
            console.log("Json error , redirecting to home screen");
            this.navCtrl.navigateRoot(["/home"]);
            this.app.initializeApp();
          },
        },
      ],
    });
    (await alert).present();
    setTimeout(async () => {
      (await alert).dismiss();
      this.navCtrl.navigateRoot(["/home"]);
    }, 3000);
  }

  /**
   * activates the trip in backend
   * and forward to the trips page
   */
  update_user() {
    console.log("Go to trips button clicked");
    this.storage.set("last_trip_deleted_successfully", false);

    this.restprovider
      .putTrips(this.choosen_route_id, "active")
      .then(
        (data) => {
          console.log("trip acivated", data);
        },
        (error) => {
          console.log("error activating trip", error);
        }
      )

      .then(
        () => {
          // sends required information to the trips page
          this.forward();
        },
        (error) => {
          console.log(
            "error caught while moving from proposal page to trip page"
          );
        }
      )
      .catch((error) => {
        console.log("error catch while forwarding to trips", error);
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
  }

  /**
   * @deprecated not in use anymore
   */
  add_users_positions() {
    console.log("add_user_positions() called ");
    this.users_positions.forEach((item) => {
      console.log("each user position", item);
      var marker = new L.marker([item.position.lng, item.position.lat], {
        size: "7px",
        icon: this.bikeIcon,
      });

      marker.addTo(this.map2);
    });
  }
  //function to calculte the difference between two date , it gets a Timestamp as parameter

  date_filter(temps) {
    var temps_date = new Date(temps).getTime();
    var difference = new Date().getTime() - temps_date;
    return Math.floor(difference / (60 * 1000));
  }

  /**
   * forwards to trips page while storing necessary information
   */
  forward() {
    console.log("forward called");
    console.info(
      "startpoint:",
      this.startpoint,
      "endpoint:",
      this.endpoint,
      "route_id:",
      this.choosen_route_id,
      "route:",
      this.choosen_route_geometry,
      "users_positions:",
      this.users_positions,
      "meetlat:",
      this.meetlat,
      "meetlng:",
      this.meetlng,
      "leavelat:",
      this.leavelat,
      "leavelng:",
      this.leavelng,
      "overlapse:",
      this.meetpts,
      "logText:",
      this.logText,
      "prev:",
      this.logg,
      "meetingStreet:",
      this.meetingStreet,
      "leavingStreet:",
      this.leavingStreet
    );

    /*
      transfer service will be called
    */

    let validDataTransfer: boolean = false;
    let condition =
      this.steps != undefined &&
      this.startpoint.lat != undefined &&
      this.startpoint.lng != undefined &&
      this.endpoint.lat != undefined &&
      this.endpoint.lng != undefined &&
      this.choosen_route_id != undefined &&
      this.choosen_route_geometry != undefined &&
      this.steps != null &&
      this.startpoint.lat != null &&
      this.startpoint.lng != null &&
      this.endpoint.lat != null &&
      this.endpoint.lng != null &&
      this.choosen_route_id != null &&
      this.choosen_route_geometry != null;

    if (condition) {
      try {
        this.transfer._setNavSteps(this.steps);
        this.transfer._setStartPosition(this.startpoint);
        this.transfer._setDestinationPosition(this.endpoint);
        this.transfer._setRouteID(this.choosen_route_id);
        this.transfer._setRouteGeometry(this.choosen_route_geometry);
        this.transfer._setUserPosition(this.users_positions);
        this.transfer._setMeetingPoint({
          lat: this.meetlat,
          lng: this.meetlng,
        });
        this.transfer._setLogText(this.logText);
        this.transfer._setPreviousLog(this.logg);
        this.transfer._setLeavingStreet(this.leavingStreet);
        this.transfer._setOverlapse(this.meetpts);
        this.transfer._setLeavingPoint({
          lat: this.leavelat,
          lng: this.leavelng,
        });
        this.transfer._setLastPointRoute(this.lastPointRoute);
        this.transfer._setTripdistance(this.distance[0]);
        // save the intersections for the choosen route and the point of intersections by filtering for the user id

        let array = this.expectedSwarmsArray;
        let filterArrayForChoosenRoute = array.filter((element) => {
          console.log(element);

          return element.trip_id == this.choosen_route_id;
        });
        console.log("filterArrayForChoosenRoute", filterArrayForChoosenRoute);

        console.log("array forwarded", filterArrayForChoosenRoute);
        this.transfer._setExpectedSwarmArray(filterArrayForChoosenRoute);
        let choosenList: any = this.sortedUsersPositionwithTripID.filter(
          (element) => {
            return element.trip_id == this.choosen_route_id;
          }
        );
        console.log("choosenList", choosenList);
        // ! TODO: check user list for transfer if all the users are present if not then gettripintersection promise code needs to be modified to make it work
        if (choosenList.length != 0) {
          if (
            choosenList[0].userObject != undefined &&
            choosenList[0].userObject != null
          ) {
            let a = [...choosenList[0].userObject];
            console.log("choosenList", a);
            let c = [];
            let new_f = a.map((obj) => {
              let a = [obj];
              let o = {
                users: a,
              };
              console.log("mapping ", obj);
              c.push(o);

              return { users: a };
            });
            console.error(" User data to be forwarded", c);
            console.error("choosenList", new_f);
            this.transfer._setUserList(c);
          } else {
            // empty array will be initialized
            let array = [];
            this.transfer._setUserList(array);
          }
        } else {
          // empty array will be initialized
          let array = [];
          this.transfer._setUserList(array);
        }
      } catch (error) {
        console.log("error in transfer service ", error);
      }
      validDataTransfer = true;
    } else {
      console.log(
        "problem with the information to be passed on to the transfer some property is null or undefined"
      );
      validDataTransfer = false;
    }
    console.log(
      "present checkpoint names",
      this.meetingStreet,
      this.leavingStreet,
      this.endTripStreet
    );

    if (validDataTransfer) {
      this.navCtrl
        .navigateRoot(["/trip"])
        .then(
          (suc) => {
            console.log("successfully transmitted to trips page", suc);
          },
          (error) => {
            console.log("eRROR while navigating to trip", error);
          }
        )
        .catch((error) => {
          console.error("there was an error during transit of pages ");
          // alert("problems with transit");
          this.navCtrl.navigateRoot("/home");
        });
    } else {
      // ! show alert here as we cannot move to another page due to invalid values
    }

    this.logText =
      this.logText +
      new Date().toISOString().substring(11, 19) +
      " Trip selected: Overall trip distance = " +
      this.distance[0] +
      ", Overlap distance = " +
      this.intersection_distance +
      "\r\n";

    if (this.platform.is("android")) {
      this.writeLogs();
      this.file
        .writeFile(
          this.file.externalApplicationStorageDirectory,
          this.app.filename,
          this.logText,
          { append: true }
        )
        .then(
          (success) => {
            console.log("file written", success);
          },
          (error) => {
            console.log("error writing the file ", error);
          }
        );
    }
    console.log("finsished with forward call on proposal");
  }
  /**
   * go back to home page
   */
  backward() {
    console.log("TRIPPROPOSAL BACKWARD CALL URL", this.router.url);
    if (this.map2) {
      this.map2.stopLocate();
      this.map2.off();
    }
    this.router.navigateByUrl("/home").then(
      () => {
        console.log("succesfull navigation ");
        // window.location.reload()
      },
      (err) => {
        console.log("Transition error from Tripproposal to home page", err);
        this.router.navigateByUrl("/home");
        this.app.initializeApp();
      }
    );
  }

  writeLogs() {
    let prevLog = this.prev;
    let __this: TripproposalsPage = this;
    NativeLogs.getLog(1000, true, function (_logs) {
      __this.logg = prevLog + _logs;
    });
    this.file
      .writeFile(
        this.file.externalApplicationStorageDirectory,
        this.app.filelog,
        this.logg,
        { append: true }
      )
      .then(
        (suc) => {
          // console.log("write file", suc);
        },
        (error) => {
          // console.error("write file", error);
        }
      );
  }
  beforeSelected = undefined; // before selected user
  /**
   * @returns {void} resets the view when the modal is dismissed
   */
  expandableListReset() {
    if (this.beforeSelected) {
      this.beforeSelected.checkpointMarker.setIcon(this.iconOrange_deactive);
      this.beforeSelected.leavingMarker.setIcon(this.leavingPointIcondeactive);
      this.beforeSelected = undefined;
      this.active = undefined;
      this.activeType = undefined;
      L.Marker.stopAllBouncingMarkers();
    }
    if (this.dynamicPolyline) {
      this.dynamicPolyline.setLatLngs([]);
    }
  }
  active;
  activeType;
  selectCheckpoint(user: Users, type?) {
    console.error(this.expandableList);
    console.log("Swarm selected", user);
    this.active = user;
    this.activeType = type;

    this.modal.getCurrentBreakpoint().then((breakPoint) => {
      console.log("breakpoint is :", breakPoint);
      if (breakPoint == 0.05) {
        // change the break point
        this.modal.setCurrentBreakpoint(0.25);
      }
    });

    if (this.beforeSelected) {
      this.beforeSelected.checkpointMarker.setIcon(this.iconOrange_deactive);
      this.beforeSelected.leavingMarker.setIcon(this.leavingPointIcondeactive);
      this.beforeSelected = user;
      L.Marker.stopAllBouncingMarkers();
    } else {
      this.beforeSelected = user;
    }
    let selectedcheckpointMarker = user.checkpointMarker;
    let selectedLeaveCheckpoint = user.leavingMarker;
    selectedcheckpointMarker.setIcon(this.iconOrange_active);
    selectedLeaveCheckpoint.setIcon(this.leavingPointIconActive);

    if (type == "meeting") {
      selectedcheckpointMarker.bounce(5);
    } else if (type == "leaving") {
      selectedLeaveCheckpoint.bounce(5);
    }

    if (!this.dynamicPolyline) {
      this.createPolyline(user);
    } else {
      this.map2.removeLayer(this.dynamicPolyline);
      this.createPolyline(user);
    }
  }
  createPolyline(user) {
    this.dynamicPolyline = new L.polyline([], {
      color: user.color,
      weight: 8,
      opacity: 0.9,
      lineJoin: "round",
    });

    this.dynamicPolyline.addTo(this.map2);
    this.dynamicPolyline.setLatLngs(user.intersection_polyline_LatLngs);
  }

  /**
   * @returns list of objects with their inoformation to be displayed on thr tripproposal page
   */
  updateExpandableList() {
    this.expandableList =
      this.filteredGroupedbyCategoryList[this.choosen_route_id];
    // alert(this.choosen_route_id);
    let array = [];
    console.log("nextfinal expandableList in updateList", this.expandableList);

    if (this.expandableList != undefined) {
      Object.entries(this.expandableList).forEach(([key, val]) => {
        console.log(key); // the name of the current key.
        console.log(val); // the value of the current key.

        if (key == "null") {
          // provide all the information to be shown with the keywords in the expandable list

          val.forEach((element) => {
            let object = {
              type: "meeting",
              participant: 1,
              mode: element.speed > 5 ? "Fast" : "Slow",
              user: element,
            };
            array.push(object);

            // leaving point object

            let leaveObj = {
              type: "leaving",
              participant: 1,
              user: element,
              leave_event: this.checkLeavingPoint(element)
                ? "You leave the swarm"
                : "Someone leaves the swarm",
              // "streetName": this.reverseGeocode()
            };
            array.push(leaveObj);
          });
        } else {
          let object = {
            type: "meeting",
            participant: val.length,
            mode: val[0].speed > 5 ? "Fast" : "Slow",
            user: val[0],
          };
          array.push(object);

          // leaving point object

          let leaveObj = {
            type: "leaving",
            participant: 1,
            user: val[0],
            leave_event: this.checkLeavingPoint(val[0])
              ? "You leave the swarm"
              : "Someone leaves the swarm",
            // "streetName": this.reverseGeocode()
          };
          array.push(leaveObj);
        }
        console.log(array);
      });
    }
    console.log("nextfinal", array);
    this.expandableList = array;
    if (this.expandableList.length != 0) {
      this.openModal = true;
      this.ionModalChange();
    } else {
      this.openModal = false;
    }
  }

  ionBreakpointDidChange() {
    console.log("change in breakpoint");
  }

  ionModalChange() {
    this.modal.ionBreakpointDidChange.subscribe((data) => {
      this.modal.getCurrentBreakpoint().then((breakPoint) => {
        if (breakPoint == 0.05) {
          this.expandableListReset();
          console.log("reset everything");
        } // else dont do anything
      });
      console.error("ionView change in breakpoint");
    });
  }
  // TODO : currently the intersection is shown which has the maximum distance .
  // TODO : have to integrate it in the app , to show the intersection of other trips together with the one [big UI problem ]
  checkLeavingPoint(user: Users): boolean {
    // if not the end point of intersection , then return someone will leave the trip -> @return false
    // else -> you will leave the swarm i.e @return true

    return true; // i.e "you will leave the swarm at a point "
  }

  /**
   * decode the trip geometry to get polylines
   * @param encoded trip geometery in form of a polyline
   * @returns decoded array of polyline
   */

  decode(encoded): any {
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
        b = encoded.charAt(index++).charCodeAt(0) - 63; //finds ascii   //and substract it by 63
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
}
