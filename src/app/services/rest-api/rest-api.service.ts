import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { AlertController } from "@ionic/angular";
import { SplashScreen } from "@awesome-cordova-plugins/splash-screen/ngx";
import { Router } from "@angular/router";
import { PostUserBody } from "src/app/interface/post-user-body";
import { PostUserResponse } from "src/app/interface/post-user-response";
import { TripProposalBody } from "src/app/interface/trip-proposal-body";
import { TripProposalResponse } from "src/app/interface/trip-proposal-response";
import { GetTripIntersecionsResponse } from "src/app/interface/get-trip-intersecions-response";
import { GetTripsResponse } from "src/app/interface/get-trips-response";

@Injectable({
  providedIn: "root",
})
export class RestApiService {
  /*******************************
   * Configuration Settings
   */

  // the backend API base address
  apiUrl: string = "https://smartmobility.dfki.de/bikerider";
  // the Google API key
  mykey: string = "AIzaSyD6DzItwWYKNk_8dPP4CAt6yzz5gi8A-EU";
  //google map autocomplete URL
  url: string = "https://maps.googleapis.com/maps/api/place/autocomplete/json";
  // the geocoding URL
  urlGeocode: string = "https://maps.googleapis.com/maps/api/geocode/json";
  swarmUrl: string =
    "https://virtserver.swaggerhub.com/dfki_smartmobility/Open_Source_Mobility_Backend/1.1.0";
  osrmUrl: string = "http://router.project-osrm.org/route/v1/bike/";

  //apiUrl: string ='https://virtserver.swaggerhub.com/patrick.jattke/Open_Source_Mobility_Backend/1.0.0' ;
  /*******************************
   * Attributes
   */

  // the temporary identifier generated in the backend
  userId: string;

  // fcm token id

  fcmToken: string;

  // the user's device identifier (e.g., Android ID)
  deviceId: string;

  // the ID of the user's active trip
  activeTripId: string;
  test: any[] = [];

  // generating swarmId for the user to be used
  swarmId: string = null;

  // to get the app offline with certain data feed
  // ! offline
  offline: boolean = false;

  /*******************************
   * CLASS CONSTRUCTOR
   */
  constructor(
    public http: HttpClient,
    @Inject(AlertController) private alerts: AlertController,
    @Inject(SplashScreen) public splashScreen: SplashScreen,
    private router: Router
  ) {}

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
  getUserIdentifier(deviceId: string, fcmToken: string) {
    console.log(deviceId, fcmToken);
    this.deviceId = deviceId;
    this.fcmToken = fcmToken;
    return new Promise((resolve) => {
      const options = {
        headers: new HttpHeaders(),
      };
      var requestBody: PostUserBody = {
        device_id: this.deviceId,
        fcm_token: fcmToken,
      };
      console.log("users device ID:", this.deviceId);
      this.http.post(this.apiUrl + "/users", requestBody, options).subscribe(
        (data: PostUserResponse) => {
          this.userId = data["user_id"];
          console.log("[REST] getUserIdentifier :", data["user_id"]);
          resolve(data);
        },
        async (err) => {
          console.error("Server not responding");
          console.error("post/users Error generating user ID");
          await this.handleError(err);
        }
      );
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
    return new Promise((resolve) => {
      const options = {
        headers: new HttpHeaders().set("APP-USER-ID", this.userId),
        params: new HttpParams().set("intersecting_trip_id", tripid),
      };
      console.log("[rest-api] getuserposition");
      this.http.get(this.apiUrl + "/users", options).subscribe(
        (data) => {
          resolve(data);
          console.log("getusersPosition data called from rest api ", data);
        },
        (err) => console.log("[rest-api] no users found", err)
      );
    });
  }

  // ---------------------------------------------user API end-------------------------------------------------------

  // ---------------------------------------------Swarm API start-------------------------------------------------------
  /**
   * `Get /swarm`
   *
   * Create a new temporary Swarm Id for the user
   *
   * @param deviceId the (secret) device ID of the user's device, used as a kind of identifier in the app
   */

  getSwarmData(swarmid: string) {
    return new Promise((resolve) => {
      const options = {
        headers: new HttpHeaders().set("APP-USER-ID", this.userId),
      };
      this.http
        .get(`${this.apiUrl}/swarms/${swarmid}`, options)
        .subscribe((data) => {
          resolve(data);
          console.log("[rest-api] gettSwarmData", data);
        });
    });
  }

  postSwarm(devicelist_array, swarmID: string) {
    return new Promise((resolve) => {
      const options = {
        headers: new HttpHeaders().set("APP-USER-ID", this.userId),
      };
      var requestBody = {
        swarm_id: swarmID,
        active_members: devicelist_array,
      };
      console.log(
        "users device ID:",
        this.deviceId,
        "request body ",
        requestBody
      );
      this.http.post(this.apiUrl + "/swarms", requestBody, options).subscribe(
        (data) => {
          console.log("[REST] POST/swarm data for created swarm  :", data);
          resolve(data);
        },
        (err) => {
          console.error("error POST/Swarm ", err);
        }
      );
    });
  }
  /**
   *
   * @param DeviceID_array
   * @returns {void} as it updates the swarm information
   */
  updateSwarm(DeviceID_array, swarmId) {
    return new Promise((resolve) => {
      const options = {
        headers: new HttpHeaders().set("APP_USER_ID", this.userId),
        // params: new HttpParams().set("swarm_id", this.swarmId),
      };
      var requestBody = {
        active_members: DeviceID_array,
      };
      console.log(requestBody);
      this.http
        .put(`${this.apiUrl}/swarms/${swarmId}`, requestBody, options)
        .subscribe((data) => {
          resolve(data);
          console.log("[rest-api]update swarm in rest", data);
        });
    });
  }

  deleteSwarm(swarmid) {
    return new Promise((resolve) => {
      const options = {
        headers: new HttpHeaders().set("APP_USER_ID", this.userId),
      };

      this.http
        .delete(`${this.apiUrl}/swarms/${swarmid}`, options)
        .subscribe((data) => {
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

  updateUser(
    currentPosition: any,
    activeTripId,
    destinationReachedFlag: boolean,
    abortedFlag: boolean,
    speed: number
  ) {
    return new Promise((resolve) => {
      resolve("succesful");
      if (
        speed == null ||
        speed == undefined ||
        speed < 0 ||
        Number.isNaN(speed)
      ) {
        speed = 0;
      }
      const options = {
        headers: new HttpHeaders().set("APP-USER-ID", this.userId),
        params: new HttpParams().set("device_id", this.deviceId),
      };
      var requestBody = {
        position: currentPosition,
        position_timestamp: new Date().toISOString(),
        active_trip_id: activeTripId,
        speed: speed,
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

  Swarmupdate_trip(
    current_position: any,
    trip_id: string,
    destination_reached: boolean,
    aborted: boolean,
    speed: number,
    page?: string
  ) {
    return new Promise((resolve) => {
      const options = {
        headers: new HttpHeaders().set("APP-USER-ID", this.userId),
      };

      const requestBody = {
        position: {
          lng: current_position.lng,
          lat: current_position.lat,
        },
        position_timestamp: new Date().toISOString(),
        active_trip_id: trip_id,
        speed: speed,
        destination_reached: destination_reached,
        aborted: aborted,
      };
      console.log(
        "[rest-api] update-trip called for request to update the trip from page :",
        page
      );

      this.http
        .put(`${this.apiUrl}/users/${this.deviceId}`, requestBody, options)
        .subscribe(
          (data) => {
            resolve("deleteXX");
          },
          (error) => {
            console.log("[rest-api] update_trip error:", error);
          }
        );
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

  getTripProposal(
    fromPosition: any,
    toPosition: any,
    intersections: boolean = true
  ): any {
    console.log(
      "[rest-api] get trip proposal request started :with intersection turned :",
      intersections
    );
    return new Promise((resolve) => {
      const options = {
        headers: new HttpHeaders().set("APP-USER-ID", this.userId),
        params: new HttpParams().set("intersections", intersections.toString()),
      };

      var requestBody: TripProposalBody = {
        start_point: { lng: fromPosition.lng, lat: fromPosition.lat },
        end_point: { lng: toPosition.lng, lat: toPosition.lat },
      };

      this.http
        .post(`${this.apiUrl}/trip_proposals`, requestBody, options)
        .subscribe(
          (data: TripProposalResponse) => {
            resolve(data);
            console.log("REST_provider get trip proposal data ", data);
            console.log(
              "REST_provider get trip proposal data ",
              JSON.stringify(data)
            );
          },
          (err) => {
            console.log("ERROR in gettripproposal rest-api", err);
            this.handleError(err);
            this.router.navigateByUrl("/home").then(
              (suc) => {
                console.log(suc);
              },
              (error) => {
                console.error(error);
              }
            );
            this.splashScreen.show();
            window.location.reload();
          }
        );
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
  getTrips(foreignTripId: string): Promise<GetTripsResponse> {
    console.log("REST gettrips");
    return new Promise((resolve) => {
      const options = {
        headers: new HttpHeaders().set("APP-USER-ID", this.userId),
        params: new HttpParams().set("trip_id", foreignTripId),
      };

      this.http.get(`${this.apiUrl}/trips`, options).subscribe(
        (data: GetTripsResponse) => {
          resolve(data);
          console.log("REST get trips ", data);
        },
        (err) => {
          console.error("REST Get/Trips", err);
        }
      );
    });
  }

  putTrips(foreignTripId: string, status: string) {
    if (this.offline) {
      return new Promise((resolve) => {
        let result = {
          status: "inactive",
        };
        resolve(result);
      });
    } else {
      return new Promise((resolve) => {
        const options = {
          headers: new HttpHeaders().set("APP-USER-ID", this.userId),
        };
        let validStatus = [
          "active",
          "inactive",
          "null",
          "aborted",
          "completed",
        ];
        var requestBody = {
          status: status,
        };
        // checking if the parameter is passed correctly

        if (!validStatus.includes(status)) {
          console.error("ERROR invalid status value");
        }

        // resolve("trip updated")
        this.http
          .put(`${this.apiUrl}/trips/${foreignTripId}`, requestBody, options)
          .subscribe(
            (data) => {
              console.log("[rest-api] put trips", data);
              resolve(data);
            },
            (error) => {
              console.log("[rest-api] Put trips:", error);
            }
          );
      });
    }
  }

  // -------------------------------------Trips end-------------------------------------------

  // ------------------------------------- User locations API start-------------------------------------------

  // POST/userlocations

  postUserlocation(
    tripid: string,
    userdeviceID: string,
    currentPosition: any,
    speed: number
  ) {
    return new Promise((resolve) => {
      if (
        speed == null ||
        speed == undefined ||
        speed < 0 ||
        Number.isNaN(speed)
      ) {
        speed = 0;
      }
      const options = {
        headers: new HttpHeaders().set("APP-USER-ID", this.userId),
        // params: new HttpParams().set("device_id", userdeviceID).set("trip_id", tripid),
      };
      var requestBody = {
        device_id: this.deviceId,
        trip_id: tripid,
        position: currentPosition,
        position_timestamp: new Date().toISOString(),
        speed: speed,
      };
      console.log("[rest-api] getuserposition");
      this.http
        .post(this.apiUrl + "/userlocations", requestBody, options)
        .subscribe(
          (data) => {
            resolve(data);
            console.log("[rest-api] update user data ", data);
          },
          (err) => console.log("[rest-api] error post/userlocation", err)
        );
    });
  }

  //GET/Userlocations
  getUserlocation(tripId: string, deviceId?: string) {
    if (this.offline) {
      return new Promise((resolve) => {
        resolve("updated");
      });
    } else {
      return new Promise((resolve) => {
        const options = {
          headers: new HttpHeaders().set("APP-USER-ID", this.userId),
          params: new HttpParams()
            .set("device_id", deviceId)
            .set("trip_id", tripId),
        };
        this.http.get(`${this.apiUrl}/userlocations/`, options).subscribe(
          (data) => {
            // console.log("[rest-api] update user called", data);
            resolve(data);
          },
          (error) => {
            console.log("[rest-api] userlocation error:", error);
          }
        );
      });
    }
  }

  // -------------------------------------user locations end-------------------------------------------

  // -------------------------------------Trip intersections API start-------------------------------------------

  getTripintersection(
    trip_intersection_id: string,
    eager: boolean
  ): Promise<GetTripIntersecionsResponse> {
    return new Promise((resolve) => {
      console.log("inside trip intersection trip id", trip_intersection_id);

      const options = {
        headers: new HttpHeaders().set("APP-USER-ID", this.userId),
        params: new HttpParams().set("eager", eager.toString()),
      };
      this.http
        .get(
          `${this.apiUrl}/tripintersections/${trip_intersection_id}`,
          options
        )
        .subscribe(
          (data: GetTripIntersecionsResponse) => {
            console.log("[rest-api] GET/tripIntersection", data);
            resolve(data);
          },
          (error) => {
            console.log("[rest-api] tripintersection error:", error);
          }
        );
    });
  }

  // -------------------------------------Trip intersections end-------------------------------------------

  getAdresses(input) {
    return new Promise((resolve) => {
      const options = {
        params: new HttpParams()
          .set("input", input)
          .set("key", this.mykey)
          // .set("types","geocode")
          .set("components", "country:de")
          .set("strictbounds", "")
          .set("location", "52.49161311310171,13.330621719360353")
          .set("radius", "50000"),
      };
      this.http.get(this.url, options).subscribe(
        (data) => {
          resolve(data);
          console.log(data);
        },
        (err) => this.handleError(err)
      );
    });
  }
  getadressgeocode(input) {
    return new Promise((resolve) => {
      const options = {
        params: new HttpParams().set("address", input).set("key", this.mykey),
      };
      this.http.get(this.urlGeocode, options).subscribe(
        (data) => {
          resolve(data);
        },
        (err) => this.handleError(err)
      );
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
  updateUser_ghostUser(
    user,
    device,
    currentPosition: any,
    activeTripId,
    destinationReachedFlag: boolean,
    abortedFlag: boolean,
    speed: number
  ) {
    // TODO: test this method as it has not been tested yet!
    return new Promise((resolve) => {
      const options = {
        headers: new HttpHeaders().set("APP-USER-ID", user),
        params: new HttpParams().set("device_id", device),
      };
      if (
        speed == null ||
        speed == undefined ||
        speed < 0 ||
        Number.isNaN(speed)
      ) {
        console.error("speed", speed);
        speed = 0;
      }
      var requestBody = {
        position: currentPosition,
        position_timestamp: new Date().toISOString(),
        active_trip_id: activeTripId,
        speed: speed,
        destination_reached: destinationReachedFlag,
        aborted: abortedFlag,
      };
      this.putTrips(activeTripId, "aborted").then(() => {
        console.log("Successfully deleted ")
    })
    });
  }

  // ---------------------------------OSRM API start-------------------------------------------------
  /**
   *
   * @param toStart
   * @param toPosition
   * @returns route steps
   */

  osrm(toStart, toPosition) {
    return new Promise((resolve) => {
      const options = {
        params: new HttpParams().set("overview", "false").set("steps", "true"),
      };
      this.http
        .get(
          this.osrmUrl +
            toStart.lng +
            "," +
            toStart.lat +
            ";" +
            toPosition.lng +
            "," +
            toPosition.lat,
          options
        )
        .subscribe((data) => {
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
  async handleError(err: Error) {
    console.log("error handler activated");
    let serverError =
      "Unfortunately, the server is not online. Please try again later.<hr>" +
      "<br> We are currently working on it. Sorry for any inconvenience : <br>";

    let internetError = "";

    let alert = this.alerts.create({
      header: "An Error Has Occurred",
      message:
        "Unfortunately, the server is not online. Please try again later.<hr>" +
        "<br> We are currently working on it. Sorry for any inconvenience : <br>",
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
          },
        },
      ],
    });
    (await alert).present();
    setTimeout(async () => {
      (await alert).dismiss();
    }, 5000);
    console.error(`[REST-API] ${err.message}`);
    console.error(err);
  }
}
