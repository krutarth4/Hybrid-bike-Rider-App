import { Injectable } from "@angular/core";
import findNearest from "geolib/es/findNearest";
import getPathLength from "geolib/es/getPathLength";
import * as geolib from "geolib";

@Injectable({ providedIn: "root" })
export class MathematicalModel {
  averageHumanSpeed = 4.72; // unit : m/sec // considered speed : 17 km/hr
  extraTimeFrame = 7; // extra time frame in seconds

  /**
   * @returns the Distance of the broken polyline, the segment comes in the pol
   * Breakpoint : the coordonate of meeting point/ checkpoint
   * @param {decoded_polyline , start point , end point }
   * decoded_polyline is an array of coords on the polyline
   * start point and end point in getting a part of polyline
   * @NOTE {no nedd to pass the false value}
   */
  getDistanceWithBreakpoint(
    decoded_polyline: Array<any>,
    startpoint,
    endpoint
  ) {
    let a = decoded_polyline.indexOf(findNearest(startpoint, decoded_polyline));
    let deviation = geolib.getPreciseDistance(
      startpoint,
      decoded_polyline[a],
      0.01
    );
    let b = decoded_polyline.indexOf(findNearest(endpoint, decoded_polyline));

    let broken_polyline = decoded_polyline.slice(a, b);
    let distance = this.calculate_polylineDistance(broken_polyline, deviation);
    if (a > b) {
      // the point has already been crossed
      distance = -distance;
    }
    distance = Math.floor(distance);

    return distance;
  }

  /**
   * @param decodedpolyline // decoded polyline
   * @retuns distance of the polyline in meters
   */
  calculate_polylineDistance(decodedpolyline: Array<any>, deviatedDistance) {
    let d = getPathLength(decodedpolyline) + deviatedDistance;
    return d;
  }

  /**
   * this method calculates the time required for given distance and given speed
   * @return gives the estimated time in seconds
   * @param {distance, speed}
   * **IMPORTANT NOTE**
   * speed in meters per second
   */
  calculateETADynamic(distance, speed) {
    let time = Infinity;
    if (speed < 1 || Number.isNaN(speed) || speed == undefined) {
      speed = 1; // min speed to be considered in secenerio , when user stops
    }
    if (distance == null || distance == undefined) {
      distance = 0;
    }
    time = distance / speed;
    if (time == Infinity) {
      alert("Time is infinity undefinied speed ");
    }
    time = Math.floor(time);
    // console.log(speed,distance,time);
    return time;
  }

  /**
   * @param distance unit in meters
   * @returns estimated time
   */
  calculateETAStatic(distance) {
    let time = Infinity;
    let speed = this.averageHumanSpeed;
    time = distance / speed;
    if (time == Infinity) {
      alert("Time is infinity, error  undefinied speed ");
      // console.error("Math Model alert time undefined or infinity ", time);
    }
    time = Math.floor(time);
    // console.log(speed,distance,time);
    return time;
  }
  /**
   * Decision making criteria
   */
  tripproposals_criteria(estimatedETAUser, estimatedETASwarm): boolean {
    // static view and functions
    let result = false;
    if (estimatedETASwarm >= estimatedETAUser) {
      result = true;
    } else if (estimatedETASwarm + this.extraTimeFrame >= estimatedETAUser) {
      result = true;
    } else {
      result = false;
    }
    return result;
  }
  /**
   * Decision making criteria
   */
  trips_criteria(estimatedETAUser, estimatedETASwarm): boolean {
    let result = false;
    if (estimatedETASwarm >= estimatedETAUser) {
      result = true;
    } else if (estimatedETASwarm + this.extraTimeFrame >= estimatedETAUser) {
      result = true;
    } else {
      result = false;
    }

    return result;
  }

  /**
   * Calculates user required speed to reach the checkpoint in time
   * @param distance user distance from checkpoint
   * @param eta of the swarm to the checkpoint
   * @returns speed at which a user should travel, to reach the checkpoint in time
   */
  calculateSuggestedSpeed(distance: number, eta: number) {
    let suggested_speed = 0;
    if (eta == 0 || eta < 0) {
      return 0;
    }
    suggested_speed = distance / eta; // unit m/sec
    // suggested speed should not increase the users hunmanely possibel speed or lower than
    return suggested_speed;
  }
}
