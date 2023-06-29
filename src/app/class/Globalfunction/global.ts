import { Injectable, Input } from "@angular/core";
@Injectable({ providedIn: "root" })
export class Global {
  // this class will contain all the global functions which will be useed all over the app

  // contains all the rewritten functions from the page Home , tripproposal , trips page
  constructor() {}

  assigned_colors = []; // array contains all the assigned color form the application
  choosable_color = [
    "purple",
    "orange",
    "red",
    "green",
    "darkred",
    "blue",
    "cadetblue",
    "darkpurple",
  ];

  /**
   * this functions helpd to generate color by making sure the same color is not choosen twice
   *
   * @returns color in string format
   */
  generateColor(): string {
    let choosenColor;
    if (this.assigned_colors.length == 0) {
      choosenColor = this.choosable_color[0];
      this.assigned_colors.push(choosenColor);
    } else {
      if (this.assigned_colors.length >= this.choosable_color.length) {
        console.warn("assignable colors will be repeated");
        this.assigned_colors = [];
      } else {
        choosenColor = this.choosable_color[this.assigned_colors.length];
        this.assigned_colors.push(choosenColor);
      }
    }
    return choosenColor;
  }

  generatedColor: any;
  /**
   * this function is to generate random colors
   * @deprecated as @function{generateColor} is used in place
   * @returns random hex color code
   */
  generateColorRandom(): string {
    let color;
    var length = 6;
    var chars = "0123456789ABCDEF";
    var hex = "#";
    while (length--) hex += chars[(Math.random() * 16) | 0];
    color = hex;

    //check if color has already been created
    let alreadyAssigned: boolean;

    alreadyAssigned = this.generatedColor.includes(color);
    // if it has been already assigned
    if (alreadyAssigned) {
      return this.generateColor();
    } else {
      this.generatedColor.push(color);
      return color;
    }
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
