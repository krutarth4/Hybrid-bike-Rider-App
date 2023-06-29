import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Users } from "src/app/interface/users";
import { RestApiService } from "../rest-api/rest-api.service";
import { StorageService } from "../storage/storage.service";

@Injectable({
  providedIn: "root",
})

/*
 * this service is created to use as a central data provider , to all the pages even if one page cannot consistently
 * transfer the data to other.
 *
 * Also to transfer the log data which is be saved externally on the storage device, directly copying all the data here
 *
 */
export class TransferService {
  last_trip_deleted_successfully: boolean = false;
  currentPosition;
  user_old;
  device_old;

  constructor(private rest: RestApiService, private storage: StorageService) {}

  clearService(page?: string) {
    this.storage.get("last_trip_deleted_successfully").then((res) => {
      this.last_trip_deleted_successfully = res;
      console.log(
        "last trip deleted succesull",
        this.last_trip_deleted_successfully,
        "from page ",
        page
      );
      if (
        this.last_trip_deleted_successfully ||
        this.last_trip_deleted_successfully == undefined
      ) {
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
      } else {
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
          console.info(
            "deleting the ghost trip for RouteId :",
            this.routeID,
            "startpoint",
            this.startpoint,
            "endpoint",
            this.endpoint,
            "device",
            this.device_old,
            "userId ",
            this.user_old
          );
          this.rest
            .updateUser_ghostUser(
              this.user_old,
              this.device_old,
              this.endpoint,
              this.routeID,
              true,
              true,
              0
            )
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
  deviceID;
  userID;

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

  /* 
  ? state to be transfered from home to tripproposals
  
  state: {
        logText: this.logText,
        startpoint: this.currentposition,
        endpoint: this.Locations.endpoint,
        prev: this.logg,
      },
      
  */

  public logtext;
  startpoint;
  endpoint;
  previouslogs;

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

  // tripproposal to trips page

  navigation_steps;
  routeID;
  routeGeometry;
  userPosition;
  meetingPoint;
  leavingPoint;
  meetingStreet;
  LeavingStreet;
  endtripStreet;
  overlapse;
  geofenceFlag: boolean = false;
  lastPointRoute;
  expectedSwarmArray;
  userList;
  distance;

  _getLastPointRoute() {
    return this.lastPointRoute;
  }
  _setLastPointRoute(point): void {
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
  _setNavSteps(x: Array<object>) {
    console.log("[transfer service] navigational steps passed param ", x);
    this.navigation_steps = x;
    console.log("local variable ", this.navigation_steps);
    console.log(
      "length of both objects:  x = ",
      x.length,
      " : navsteps var = ",
      this.navigation_steps.length
    );
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
  _setTripdistance(distance:number) {
    this.distance= distance
  }
  // this service function will help to make sure geofence addOrUpdate function has been succesfully finished
  // will return a boolean promise
  _geofenceFlagSuccessfull(): Promise<boolean> {
    return new Promise((resolve) => {
      console.log("geofence flag", this.geofenceFlag);
      resolve(this.geofenceFlag);
    });
  }

  _setExpectedSwarmArray(array) {
    this.expectedSwarmArray = array;
  }
  _getExpectedSwarmArray(): Users[] {
    let array = this.expectedSwarmArray
    return array;
  }
  _setUserList(list) {
    this.userList = list
  }
  /**
   * 
   * 
   */
  _getUserList(): any [] {
  console.log("Transfer User List", this.userList)
   return this.userList

  }
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
  flag = new Subject();

  flagObservable;

  public getStudents(): any {
    console.log("observer called", this.geofenceFlag);
    this.flagObservable = new Observable((observer) => {
      observer.next(this.geofenceFlag);
    });

    return this.flagObservable;
  }
}
