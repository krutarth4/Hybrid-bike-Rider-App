(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_class_Globalfunction_Global_ts-src_app_class_MathematicalModel_mathematical-m-e07184"],{

/***/ 3270:
/*!************************************************!*\
  !*** ./src/app/class/Globalfunction/Global.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Global": () => (/* binding */ Global)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let Global = class Global {
    // this class will contain all the global functions which will be useed all over the app
    // contains all the rewritten functions from the page Home , tripproposal , trips page
    constructor() {
        this.assigned_colors = []; // array contains all the assigned color form the application
        this.choosable_color = [
            "purple",
            "orange",
            "red",
            "green",
            "darkred",
            "blue",
            "cadetblue",
            "darkpurple",
        ];
    }
    /**
     * this functions helpd to generate color by making sure the same color is not choosen twice
     *
     * @returns color in string format
     */
    generateColor() {
        let choosenColor;
        if (this.assigned_colors.length == 0) {
            choosenColor = this.choosable_color[0];
            this.assigned_colors.push(choosenColor);
        }
        else {
            if (this.assigned_colors.length >= this.choosable_color.length) {
                console.warn("assignable colors will be repeated");
                this.assigned_colors = [];
            }
            else {
                choosenColor = this.choosable_color[this.assigned_colors.length];
                this.assigned_colors.push(choosenColor);
            }
        }
        return choosenColor;
    }
    /**
     * this function is to generate random colors
     * @deprecated as @function{generateColor} is used in place
     * @returns random hex color code
     */
    generateColorRandom() {
        let color;
        var length = 6;
        var chars = "0123456789ABCDEF";
        var hex = "#";
        while (length--)
            hex += chars[(Math.random() * 16) | 0];
        color = hex;
        //check if color has already been created
        let alreadyAssigned;
        alreadyAssigned = this.generatedColor.includes(color);
        // if it has been already assigned
        if (alreadyAssigned) {
            return this.generateColor();
        }
        else {
            this.generatedColor.push(color);
            return color;
        }
    }
    /**
     * decode the trip geometry to get polylines
     * @param encoded trip geometery in form of a polyline
     * @returns decoded array of polyline
     */
    decode(encoded) {
        // array that holds the points
        var points = [];
        var index = 0, len = encoded.length;
        var lat = 0, lng = 0;
        while (index < len) {
            var b, shift = 0, result = 0;
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
};
Global.ctorParameters = () => [];
Global = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({ providedIn: "root" })
], Global);



/***/ }),

/***/ 9022:
/*!***************************************************************!*\
  !*** ./src/app/class/MathematicalModel/mathematical-model.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MathematicalModel": () => (/* binding */ MathematicalModel)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var geolib_es_findNearest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! geolib/es/findNearest */ 7161);
/* harmony import */ var geolib_es_getPathLength__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! geolib/es/getPathLength */ 7485);
/* harmony import */ var geolib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! geolib */ 2727);
/* harmony import */ var geolib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(geolib__WEBPACK_IMPORTED_MODULE_2__);





let MathematicalModel = class MathematicalModel {
    constructor() {
        this.averageHumanSpeed = 4.72; // unit : m/sec // considered speed : 17 km/hr
        this.extraTimeFrame = 7; // extra time frame in seconds
    }
    /**
     * @returns the Distance of the broken polyline, the segment comes in the pol
     * Breakpoint : the coordonate of meeting point/ checkpoint
     * @param {decoded_polyline , start point , end point }
     * decoded_polyline is an array of coords on the polyline
     * start point and end point in getting a part of polyline
     * @NOTE {no nedd to pass the false value}
     */
    getDistanceWithBreakpoint(decoded_polyline, startpoint, endpoint) {
        let a = decoded_polyline.indexOf((0,geolib_es_findNearest__WEBPACK_IMPORTED_MODULE_0__["default"])(startpoint, decoded_polyline));
        let deviation = geolib__WEBPACK_IMPORTED_MODULE_2__.getPreciseDistance(startpoint, decoded_polyline[a], 0.01);
        let b = decoded_polyline.indexOf((0,geolib_es_findNearest__WEBPACK_IMPORTED_MODULE_0__["default"])(endpoint, decoded_polyline));
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
    calculate_polylineDistance(decodedpolyline, deviatedDistance) {
        let d = (0,geolib_es_getPathLength__WEBPACK_IMPORTED_MODULE_1__["default"])(decodedpolyline) + deviatedDistance;
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
    tripproposals_criteria(estimatedETAUser, estimatedETASwarm) {
        // static view and functions
        let result = false;
        if (estimatedETASwarm >= estimatedETAUser) {
            result = true;
        }
        else if (estimatedETASwarm + this.extraTimeFrame >= estimatedETAUser) {
            result = true;
        }
        else {
            result = false;
        }
        return result;
    }
    /**
     * Decision making criteria
     */
    trips_criteria(estimatedETAUser, estimatedETASwarm) {
        let result = false;
        if (estimatedETASwarm >= estimatedETAUser) {
            result = true;
        }
        else if (estimatedETASwarm + this.extraTimeFrame >= estimatedETAUser) {
            result = true;
        }
        else {
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
    calculateSuggestedSpeed(distance, eta) {
        let suggested_speed = 0;
        if (eta == 0 || eta < 0) {
            return 0;
        }
        suggested_speed = distance / eta; // unit m/sec
        // suggested speed should not increase the users hunmanely possibel speed or lower than
        return suggested_speed;
    }
};
MathematicalModel = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({ providedIn: "root" })
], MathematicalModel);



/***/ }),

/***/ 9489:
/*!***********************************************************!*\
  !*** ./node_modules/geolib/es/computeDestinationPoint.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _getLatitude = _interopRequireDefault(__webpack_require__(/*! ./getLatitude */ 3313));

var _getLongitude = _interopRequireDefault(__webpack_require__(/*! ./getLongitude */ 3552));

var _toRad = _interopRequireDefault(__webpack_require__(/*! ./toRad */ 9814));

var _toDeg = _interopRequireDefault(__webpack_require__(/*! ./toDeg */ 9531));

var _constants = __webpack_require__(/*! ./constants */ 3387);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var computeDestinationPoint = function computeDestinationPoint(start, distance, bearing) {
  var radius = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 6371000;
  var lat = (0, _getLatitude.default)(start);
  var lng = (0, _getLongitude.default)(start);
  var delta = distance / radius;
  var theta = (0, _toRad.default)(bearing);
  var phi1 = (0, _toRad.default)(lat);
  var lambda1 = (0, _toRad.default)(lng);
  var phi2 = Math.asin(Math.sin(phi1) * Math.cos(delta) + Math.cos(phi1) * Math.sin(delta) * Math.cos(theta));
  var lambda2 = lambda1 + Math.atan2(Math.sin(theta) * Math.sin(delta) * Math.cos(phi1), Math.cos(delta) - Math.sin(phi1) * Math.sin(phi2));
  var longitude = (0, _toDeg.default)(lambda2);

  if (longitude < _constants.MINLON || longitude > _constants.MAXLON) {
    lambda2 = (lambda2 + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
    longitude = (0, _toDeg.default)(lambda2);
  }

  return {
    latitude: (0, _toDeg.default)(phi2),
    longitude: longitude
  };
};

var _default = computeDestinationPoint;
exports["default"] = _default;

/***/ }),

/***/ 3387:
/*!*********************************************!*\
  !*** ./node_modules/geolib/es/constants.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.areaConversion = exports.timeConversion = exports.distanceConversion = exports.altitudeKeys = exports.latitudeKeys = exports.longitudeKeys = exports.MAXLON = exports.MINLON = exports.MAXLAT = exports.MINLAT = exports.earthRadius = exports.sexagesimalPattern = void 0;
var sexagesimalPattern = /^([0-9]{1,3})°\s*([0-9]{1,3}(?:\.(?:[0-9]{1,}))?)['′]\s*(([0-9]{1,3}(\.([0-9]{1,}))?)["″]\s*)?([NEOSW]?)$/;
exports.sexagesimalPattern = sexagesimalPattern;
var earthRadius = 6378137;
exports.earthRadius = earthRadius;
var MINLAT = -90;
exports.MINLAT = MINLAT;
var MAXLAT = 90;
exports.MAXLAT = MAXLAT;
var MINLON = -180;
exports.MINLON = MINLON;
var MAXLON = 180;
exports.MAXLON = MAXLON;
var longitudeKeys = ["lng", "lon", "longitude", 0];
exports.longitudeKeys = longitudeKeys;
var latitudeKeys = ["lat", "latitude", 1];
exports.latitudeKeys = latitudeKeys;
var altitudeKeys = ["alt", "altitude", "elevation", "elev", 2];
exports.altitudeKeys = altitudeKeys;
var distanceConversion = {
  m: 1,
  km: 0.001,
  cm: 100,
  mm: 1000,
  mi: 1 / 1609.344,
  sm: 1 / 1852.216,
  ft: 100 / 30.48,
  in: 100 / 2.54,
  yd: 1 / 0.9144
};
exports.distanceConversion = distanceConversion;
var timeConversion = {
  m: 60,
  h: 3600,
  d: 86400
};
exports.timeConversion = timeConversion;
var areaConversion = {
  m2: 1,
  km2: 0.000001,
  ha: 0.0001,
  a: 0.01,
  ft2: 10.763911,
  yd2: 1.19599,
  in2: 1550.0031
};
exports.areaConversion = areaConversion;
areaConversion.sqm = areaConversion.m2;
areaConversion.sqkm = areaConversion.km2;
areaConversion.sqft = areaConversion.ft2;
areaConversion.sqyd = areaConversion.yd2;
areaConversion.sqin = areaConversion.in2;

/***/ }),

/***/ 3780:
/*!***********************************************!*\
  !*** ./node_modules/geolib/es/convertArea.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _constants = __webpack_require__(/*! ./constants */ 3387);

var convertArea = function convertArea(squareMeters) {
  var targetUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "m";
  var factor = _constants.areaConversion[targetUnit];

  if (factor) {
    return squareMeters * factor;
  }

  throw new Error("Invalid unit used for area conversion.");
};

var _default = convertArea;
exports["default"] = _default;

/***/ }),

/***/ 4760:
/*!***************************************************!*\
  !*** ./node_modules/geolib/es/convertDistance.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _constants = __webpack_require__(/*! ./constants */ 3387);

var convertDistance = function convertDistance(meters) {
  var targetUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "m";
  var factor = _constants.distanceConversion[targetUnit];

  if (factor) {
    return meters * factor;
  }

  throw new Error("Invalid unit used for distance conversion.");
};

var _default = convertDistance;
exports["default"] = _default;

/***/ }),

/***/ 7163:
/*!************************************************!*\
  !*** ./node_modules/geolib/es/convertSpeed.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _constants = __webpack_require__(/*! ./constants */ 3387);

var convertSpeed = function convertSpeed(metersPerSecond) {
  var targetUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "kmh";

  switch (targetUnit) {
    case "kmh":
      return metersPerSecond * _constants.timeConversion.h * _constants.distanceConversion.km;

    case "mph":
      return metersPerSecond * _constants.timeConversion.h * _constants.distanceConversion.mi;

    default:
      return metersPerSecond;
  }
};

var _default = convertSpeed;
exports["default"] = _default;

/***/ }),

/***/ 7452:
/*!********************************************************!*\
  !*** ./node_modules/geolib/es/decimalToSexagesimal.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var imprecise = function imprecise(number) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  var factor = Math.pow(10, decimals);
  return Math.round(number * factor) / factor;
};

var decimal2sexagesimalNext = function decimal2sexagesimalNext(decimal) {
  var _decimal$toString$spl = decimal.toString().split("."),
      _decimal$toString$spl2 = _slicedToArray(_decimal$toString$spl, 2),
      pre = _decimal$toString$spl2[0],
      post = _decimal$toString$spl2[1];

  var deg = Math.abs(Number(pre));
  var min0 = Number("0." + (post || 0)) * 60;
  var sec0 = min0.toString().split(".");
  var min = Math.floor(min0);
  var sec = imprecise(Number("0." + (sec0[1] || 0)) * 60).toString();

  var _sec$split = sec.split("."),
      _sec$split2 = _slicedToArray(_sec$split, 2),
      secPreDec = _sec$split2[0],
      _sec$split2$ = _sec$split2[1],
      secDec = _sec$split2$ === void 0 ? "0" : _sec$split2$;

  return deg + "\xB0 " + min.toString().padStart(2, "0") + "' " + secPreDec.padStart(2, "0") + "." + secDec.padEnd(1, "0") + "\"";
};

var _default = decimal2sexagesimalNext;
exports["default"] = _default;

/***/ }),

/***/ 7161:
/*!***********************************************!*\
  !*** ./node_modules/geolib/es/findNearest.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _orderByDistance = _interopRequireDefault(__webpack_require__(/*! ./orderByDistance */ 8247));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var findNearest = function findNearest(point, coords) {
  return (0, _orderByDistance.default)(point, coords)[0];
};

var _default = findNearest;
exports["default"] = _default;

/***/ }),

/***/ 4682:
/*!****************************************************!*\
  !*** ./node_modules/geolib/es/getAreaOfPolygon.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _toRad = _interopRequireDefault(__webpack_require__(/*! ./toRad */ 9814));

var _getLatitude = _interopRequireDefault(__webpack_require__(/*! ./getLatitude */ 3313));

var _getLongitude = _interopRequireDefault(__webpack_require__(/*! ./getLongitude */ 3552));

var _constants = __webpack_require__(/*! ./constants */ 3387);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var getAreaOfPolygon = function getAreaOfPolygon(points) {
  var area = 0;

  if (points.length > 2) {
    var lowerIndex;
    var middleIndex;
    var upperIndex;

    for (var i = 0; i < points.length; i++) {
      if (i === points.length - 2) {
        lowerIndex = points.length - 2;
        middleIndex = points.length - 1;
        upperIndex = 0;
      } else if (i === points.length - 1) {
        lowerIndex = points.length - 1;
        middleIndex = 0;
        upperIndex = 1;
      } else {
        lowerIndex = i;
        middleIndex = i + 1;
        upperIndex = i + 2;
      }

      var p1lon = (0, _getLongitude.default)(points[lowerIndex]);
      var p2lat = (0, _getLatitude.default)(points[middleIndex]);
      var p3lon = (0, _getLongitude.default)(points[upperIndex]);
      area += ((0, _toRad.default)(p3lon) - (0, _toRad.default)(p1lon)) * Math.sin((0, _toRad.default)(p2lat));
    }

    area = area * _constants.earthRadius * _constants.earthRadius / 2;
  }

  return Math.abs(area);
};

var _default = getAreaOfPolygon;
exports["default"] = _default;

/***/ }),

/***/ 6258:
/*!*********************************************!*\
  !*** ./node_modules/geolib/es/getBounds.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _getLatitude = _interopRequireDefault(__webpack_require__(/*! ./getLatitude */ 3313));

var _getLongitude = _interopRequireDefault(__webpack_require__(/*! ./getLongitude */ 3552));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var getBounds = function getBounds(points) {
  if (Array.isArray(points) === false || points.length === 0) {
    throw new Error("No points were given.");
  }

  return points.reduce(function (stats, point) {
    var latitude = (0, _getLatitude.default)(point);
    var longitude = (0, _getLongitude.default)(point);
    return {
      maxLat: Math.max(latitude, stats.maxLat),
      minLat: Math.min(latitude, stats.minLat),
      maxLng: Math.max(longitude, stats.maxLng),
      minLng: Math.min(longitude, stats.minLng)
    };
  }, {
    maxLat: -Infinity,
    minLat: Infinity,
    maxLng: -Infinity,
    minLng: Infinity
  });
};

var _default = getBounds;
exports["default"] = _default;

/***/ }),

/***/ 1984:
/*!*******************************************************!*\
  !*** ./node_modules/geolib/es/getBoundsOfDistance.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _getLatitude = _interopRequireDefault(__webpack_require__(/*! ./getLatitude */ 3313));

var _getLongitude = _interopRequireDefault(__webpack_require__(/*! ./getLongitude */ 3552));

var _toRad = _interopRequireDefault(__webpack_require__(/*! ./toRad */ 9814));

var _toDeg = _interopRequireDefault(__webpack_require__(/*! ./toDeg */ 9531));

var _constants = __webpack_require__(/*! ./constants */ 3387);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var getBoundsOfDistance = function getBoundsOfDistance(point, distance) {
  var latitude = (0, _getLatitude.default)(point);
  var longitude = (0, _getLongitude.default)(point);
  var radLat = (0, _toRad.default)(latitude);
  var radLon = (0, _toRad.default)(longitude);
  var radDist = distance / _constants.earthRadius;
  var minLat = radLat - radDist;
  var maxLat = radLat + radDist;
  var MAX_LAT_RAD = (0, _toRad.default)(_constants.MAXLAT);
  var MIN_LAT_RAD = (0, _toRad.default)(_constants.MINLAT);
  var MAX_LON_RAD = (0, _toRad.default)(_constants.MAXLON);
  var MIN_LON_RAD = (0, _toRad.default)(_constants.MINLON);
  var minLon;
  var maxLon;

  if (minLat > MIN_LAT_RAD && maxLat < MAX_LAT_RAD) {
    var deltaLon = Math.asin(Math.sin(radDist) / Math.cos(radLat));
    minLon = radLon - deltaLon;

    if (minLon < MIN_LON_RAD) {
      minLon += Math.PI * 2;
    }

    maxLon = radLon + deltaLon;

    if (maxLon > MAX_LON_RAD) {
      maxLon -= Math.PI * 2;
    }
  } else {
    minLat = Math.max(minLat, MIN_LAT_RAD);
    maxLat = Math.min(maxLat, MAX_LAT_RAD);
    minLon = MIN_LON_RAD;
    maxLon = MAX_LON_RAD;
  }

  return [{
    latitude: (0, _toDeg.default)(minLat),
    longitude: (0, _toDeg.default)(minLon)
  }, {
    latitude: (0, _toDeg.default)(maxLat),
    longitude: (0, _toDeg.default)(maxLon)
  }];
};

var _default = getBoundsOfDistance;
exports["default"] = _default;

/***/ }),

/***/ 3249:
/*!*********************************************!*\
  !*** ./node_modules/geolib/es/getCenter.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _getLatitude = _interopRequireDefault(__webpack_require__(/*! ./getLatitude */ 3313));

var _getLongitude = _interopRequireDefault(__webpack_require__(/*! ./getLongitude */ 3552));

var _toRad = _interopRequireDefault(__webpack_require__(/*! ./toRad */ 9814));

var _toDeg = _interopRequireDefault(__webpack_require__(/*! ./toDeg */ 9531));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var getCenter = function getCenter(points) {
  if (Array.isArray(points) === false || points.length === 0) {
    return false;
  }

  var numberOfPoints = points.length;
  var sum = points.reduce(function (acc, point) {
    var pointLat = (0, _toRad.default)((0, _getLatitude.default)(point));
    var pointLon = (0, _toRad.default)((0, _getLongitude.default)(point));
    return {
      X: acc.X + Math.cos(pointLat) * Math.cos(pointLon),
      Y: acc.Y + Math.cos(pointLat) * Math.sin(pointLon),
      Z: acc.Z + Math.sin(pointLat)
    };
  }, {
    X: 0,
    Y: 0,
    Z: 0
  });
  var X = sum.X / numberOfPoints;
  var Y = sum.Y / numberOfPoints;
  var Z = sum.Z / numberOfPoints;
  return {
    longitude: (0, _toDeg.default)(Math.atan2(Y, X)),
    latitude: (0, _toDeg.default)(Math.atan2(Z, Math.sqrt(X * X + Y * Y)))
  };
};

var _default = getCenter;
exports["default"] = _default;

/***/ }),

/***/ 6059:
/*!*****************************************************!*\
  !*** ./node_modules/geolib/es/getCenterOfBounds.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _getBounds = _interopRequireDefault(__webpack_require__(/*! ./getBounds */ 6258));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var getCenterOfBounds = function getCenterOfBounds(coords) {
  var bounds = (0, _getBounds.default)(coords);
  var latitude = bounds.minLat + (bounds.maxLat - bounds.minLat) / 2;
  var longitude = bounds.minLng + (bounds.maxLng - bounds.minLng) / 2;
  return {
    latitude: parseFloat(latitude.toFixed(6)),
    longitude: parseFloat(longitude.toFixed(6))
  };
};

var _default = getCenterOfBounds;
exports["default"] = _default;

/***/ }),

/***/ 5014:
/*!*******************************************************!*\
  !*** ./node_modules/geolib/es/getCompassDirection.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _getRhumbLineBearing = _interopRequireDefault(__webpack_require__(/*! ./getRhumbLineBearing */ 3299));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var getCompassDirection = function getCompassDirection(origin, dest) {
  var bearingFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _getRhumbLineBearing.default;
  var bearing = typeof bearingFn === "function" ? bearingFn(origin, dest) : (0, _getRhumbLineBearing.default)(origin, dest);

  if (isNaN(bearing)) {
    throw new Error("Could not calculate bearing for given points. Check your bearing function");
  }

  switch (Math.round(bearing / 22.5)) {
    case 1:
      return "NNE";

    case 2:
      return "NE";

    case 3:
      return "ENE";

    case 4:
      return "E";

    case 5:
      return "ESE";

    case 6:
      return "SE";

    case 7:
      return "SSE";

    case 8:
      return "S";

    case 9:
      return "SSW";

    case 10:
      return "SW";

    case 11:
      return "WSW";

    case 12:
      return "W";

    case 13:
      return "WNW";

    case 14:
      return "NW";

    case 15:
      return "NNW";

    default:
      return "N";
  }
};

var _default = getCompassDirection;
exports["default"] = _default;

/***/ }),

/***/ 9222:
/*!****************************************************!*\
  !*** ./node_modules/geolib/es/getCoordinateKey.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var getCoordinateKey = function getCoordinateKey(point, keysToLookup) {
  return keysToLookup.reduce(function (foundKey, key) {
    if (typeof point === "undefined" || point === null) {
      throw new Error("'".concat(point, "' is no valid coordinate."));
    }

    if (Object.prototype.hasOwnProperty.call(point, key) && typeof key !== "undefined" && typeof foundKey === "undefined") {
      foundKey = key;
      return key;
    }

    return foundKey;
  }, undefined);
};

var _default = getCoordinateKey;
exports["default"] = _default;

/***/ }),

/***/ 3140:
/*!*****************************************************!*\
  !*** ./node_modules/geolib/es/getCoordinateKeys.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _constants = __webpack_require__(/*! ./constants */ 3387);

var _getCoordinateKey = _interopRequireDefault(__webpack_require__(/*! ./getCoordinateKey */ 9222));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var getCoordinateKeys = function getCoordinateKeys(point) {
  var keysToLookup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    longitude: _constants.longitudeKeys,
    latitude: _constants.latitudeKeys,
    altitude: _constants.altitudeKeys
  };
  var longitude = (0, _getCoordinateKey.default)(point, keysToLookup.longitude);
  var latitude = (0, _getCoordinateKey.default)(point, keysToLookup.latitude);
  var altitude = (0, _getCoordinateKey.default)(point, keysToLookup.altitude);
  return _objectSpread({
    latitude: latitude,
    longitude: longitude
  }, altitude ? {
    altitude: altitude
  } : {});
};

var _default = getCoordinateKeys;
exports["default"] = _default;

/***/ }),

/***/ 390:
/*!***********************************************!*\
  !*** ./node_modules/geolib/es/getDistance.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _getLatitude = _interopRequireDefault(__webpack_require__(/*! ./getLatitude */ 3313));

var _getLongitude = _interopRequireDefault(__webpack_require__(/*! ./getLongitude */ 3552));

var _toRad = _interopRequireDefault(__webpack_require__(/*! ./toRad */ 9814));

var _robustAcos = _interopRequireDefault(__webpack_require__(/*! ./robustAcos */ 4049));

var _constants = __webpack_require__(/*! ./constants */ 3387);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var getDistance = function getDistance(from, to) {
  var accuracy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  accuracy = typeof accuracy !== "undefined" && !isNaN(accuracy) ? accuracy : 1;
  var fromLat = (0, _getLatitude.default)(from);
  var fromLon = (0, _getLongitude.default)(from);
  var toLat = (0, _getLatitude.default)(to);
  var toLon = (0, _getLongitude.default)(to);

  var distance = Math.acos((0, _robustAcos.default)(Math.sin((0, _toRad.default)(toLat)) * Math.sin((0, _toRad.default)(fromLat)) + Math.cos((0, _toRad.default)(toLat)) * Math.cos((0, _toRad.default)(fromLat)) * Math.cos((0, _toRad.default)(fromLon) - (0, _toRad.default)(toLon)))) * _constants.earthRadius;

  return Math.round(distance / accuracy) * accuracy;
};

var _default = getDistance;
exports["default"] = _default;

/***/ }),

/***/ 6186:
/*!*******************************************************!*\
  !*** ./node_modules/geolib/es/getDistanceFromLine.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _getDistance = _interopRequireDefault(__webpack_require__(/*! ./getDistance */ 390));

var _robustAcos = _interopRequireDefault(__webpack_require__(/*! ./robustAcos */ 4049));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var getDistanceFromLine = function getDistanceFromLine(point, lineStart, lineEnd) {
  var accuracy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var d1 = (0, _getDistance.default)(lineStart, point, accuracy);
  var d2 = (0, _getDistance.default)(point, lineEnd, accuracy);
  var d3 = (0, _getDistance.default)(lineStart, lineEnd, accuracy);
  var alpha = Math.acos((0, _robustAcos.default)((d1 * d1 + d3 * d3 - d2 * d2) / (2 * d1 * d3)));
  var beta = Math.acos((0, _robustAcos.default)((d2 * d2 + d3 * d3 - d1 * d1) / (2 * d2 * d3)));

  if (alpha > Math.PI / 2) {
    return d1;
  }

  if (beta > Math.PI / 2) {
    return d2;
  }

  return Math.sin(alpha) * d1;
};

var _default = getDistanceFromLine;
exports["default"] = _default;

/***/ }),

/***/ 5070:
/*!*********************************************************!*\
  !*** ./node_modules/geolib/es/getGreatCircleBearing.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _getLatitude = _interopRequireDefault(__webpack_require__(/*! ./getLatitude */ 3313));

var _getLongitude = _interopRequireDefault(__webpack_require__(/*! ./getLongitude */ 3552));

var _toRad = _interopRequireDefault(__webpack_require__(/*! ./toRad */ 9814));

var _toDeg = _interopRequireDefault(__webpack_require__(/*! ./toDeg */ 9531));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var getGreatCircleBearing = function getGreatCircleBearing(origin, dest) {
  var destLat = (0, _getLatitude.default)(dest);
  var detLon = (0, _getLongitude.default)(dest);
  var originLat = (0, _getLatitude.default)(origin);
  var originLon = (0, _getLongitude.default)(origin);
  var bearing = ((0, _toDeg.default)(Math.atan2(Math.sin((0, _toRad.default)(detLon) - (0, _toRad.default)(originLon)) * Math.cos((0, _toRad.default)(destLat)), Math.cos((0, _toRad.default)(originLat)) * Math.sin((0, _toRad.default)(destLat)) - Math.sin((0, _toRad.default)(originLat)) * Math.cos((0, _toRad.default)(destLat)) * Math.cos((0, _toRad.default)(detLon) - (0, _toRad.default)(originLon)))) + 360) % 360;
  return bearing;
};

var _default = getGreatCircleBearing;
exports["default"] = _default;

/***/ }),

/***/ 3313:
/*!***********************************************!*\
  !*** ./node_modules/geolib/es/getLatitude.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _constants = __webpack_require__(/*! ./constants */ 3387);

var _getCoordinateKey = _interopRequireDefault(__webpack_require__(/*! ./getCoordinateKey */ 9222));

var _toDecimal = _interopRequireDefault(__webpack_require__(/*! ./toDecimal */ 3360));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var getLatitude = function getLatitude(point, raw) {
  var latKey = (0, _getCoordinateKey.default)(point, _constants.latitudeKeys);

  if (typeof latKey === "undefined" || latKey === null) {
    return;
  }

  var value = point[latKey];
  return raw === true ? value : (0, _toDecimal.default)(value);
};

var _default = getLatitude;
exports["default"] = _default;

/***/ }),

/***/ 3552:
/*!************************************************!*\
  !*** ./node_modules/geolib/es/getLongitude.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _constants = __webpack_require__(/*! ./constants */ 3387);

var _getCoordinateKey = _interopRequireDefault(__webpack_require__(/*! ./getCoordinateKey */ 9222));

var _toDecimal = _interopRequireDefault(__webpack_require__(/*! ./toDecimal */ 3360));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var getLongitude = function getLongitude(point, raw) {
  var latKey = (0, _getCoordinateKey.default)(point, _constants.longitudeKeys);

  if (typeof latKey === "undefined" || latKey === null) {
    return;
  }

  var value = point[latKey];
  return raw === true ? value : (0, _toDecimal.default)(value);
};

var _default = getLongitude;
exports["default"] = _default;

/***/ }),

/***/ 7485:
/*!*************************************************!*\
  !*** ./node_modules/geolib/es/getPathLength.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _getDistance = _interopRequireDefault(__webpack_require__(/*! ./getDistance */ 390));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var getPathLength = function getPathLength(points) {
  var distanceFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _getDistance.default;
  return points.reduce(function (acc, point) {
    if (_typeof(acc) === "object" && acc.last !== null) {
      acc.distance += distanceFn(point, acc.last);
    }

    acc.last = point;
    return acc;
  }, {
    last: null,
    distance: 0
  }).distance;
};

var _default = getPathLength;
exports["default"] = _default;

/***/ }),

/***/ 6804:
/*!******************************************************!*\
  !*** ./node_modules/geolib/es/getPreciseDistance.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _getLatitude = _interopRequireDefault(__webpack_require__(/*! ./getLatitude */ 3313));

var _getLongitude = _interopRequireDefault(__webpack_require__(/*! ./getLongitude */ 3552));

var _toRad = _interopRequireDefault(__webpack_require__(/*! ./toRad */ 9814));

var _constants = __webpack_require__(/*! ./constants */ 3387);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var getDistance = function getDistance(start, end) {
  var accuracy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  accuracy = typeof accuracy !== "undefined" && !isNaN(accuracy) ? accuracy : 1;
  var startLat = (0, _getLatitude.default)(start);
  var startLon = (0, _getLongitude.default)(start);
  var endLat = (0, _getLatitude.default)(end);
  var endLon = (0, _getLongitude.default)(end);
  var b = 6356752.314245;
  var ellipsoidParams = 1 / 298.257223563;
  var L = (0, _toRad.default)(endLon - startLon);
  var cosSigma;
  var sigma;
  var sinAlpha;
  var cosSqAlpha;
  var cos2SigmaM;
  var sinSigma;
  var U1 = Math.atan((1 - ellipsoidParams) * Math.tan((0, _toRad.default)(parseFloat(startLat))));
  var U2 = Math.atan((1 - ellipsoidParams) * Math.tan((0, _toRad.default)(parseFloat(endLat))));
  var sinU1 = Math.sin(U1);
  var cosU1 = Math.cos(U1);
  var sinU2 = Math.sin(U2);
  var cosU2 = Math.cos(U2);
  var lambda = L;
  var lambdaP;
  var iterLimit = 100;

  do {
    var sinLambda = Math.sin(lambda);
    var cosLambda = Math.cos(lambda);
    sinSigma = Math.sqrt(cosU2 * sinLambda * (cosU2 * sinLambda) + (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda) * (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda));

    if (sinSigma === 0) {
      return 0;
    }

    cosSigma = sinU1 * sinU2 + cosU1 * cosU2 * cosLambda;
    sigma = Math.atan2(sinSigma, cosSigma);
    sinAlpha = cosU1 * cosU2 * sinLambda / sinSigma;
    cosSqAlpha = 1 - sinAlpha * sinAlpha;
    cos2SigmaM = cosSigma - 2 * sinU1 * sinU2 / cosSqAlpha;

    if (isNaN(cos2SigmaM)) {
      cos2SigmaM = 0;
    }

    var C = ellipsoidParams / 16 * cosSqAlpha * (4 + ellipsoidParams * (4 - 3 * cosSqAlpha));
    lambdaP = lambda;
    lambda = L + (1 - C) * ellipsoidParams * sinAlpha * (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));
  } while (Math.abs(lambda - lambdaP) > 1e-12 && --iterLimit > 0);

  if (iterLimit === 0) {
    return NaN;
  }

  var uSq = cosSqAlpha * (_constants.earthRadius * _constants.earthRadius - b * b) / (b * b);
  var A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
  var B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
  var deltaSigma = B * sinSigma * (cos2SigmaM + B / 4 * (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) - B / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM)));
  var distance = b * A * (sigma - deltaSigma);
  return Math.round(distance / accuracy) * accuracy;
};

var _default = getDistance;
exports["default"] = _default;

/***/ }),

/***/ 3299:
/*!*******************************************************!*\
  !*** ./node_modules/geolib/es/getRhumbLineBearing.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _getLatitude = _interopRequireDefault(__webpack_require__(/*! ./getLatitude */ 3313));

var _getLongitude = _interopRequireDefault(__webpack_require__(/*! ./getLongitude */ 3552));

var _toRad = _interopRequireDefault(__webpack_require__(/*! ./toRad */ 9814));

var _toDeg = _interopRequireDefault(__webpack_require__(/*! ./toDeg */ 9531));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var getRhumbLineBearing = function getRhumbLineBearing(origin, dest) {
  var diffLon = (0, _toRad.default)((0, _getLongitude.default)(dest)) - (0, _toRad.default)((0, _getLongitude.default)(origin));
  var diffPhi = Math.log(Math.tan((0, _toRad.default)((0, _getLatitude.default)(dest)) / 2 + Math.PI / 4) / Math.tan((0, _toRad.default)((0, _getLatitude.default)(origin)) / 2 + Math.PI / 4));

  if (Math.abs(diffLon) > Math.PI) {
    if (diffLon > 0) {
      diffLon = (Math.PI * 2 - diffLon) * -1;
    } else {
      diffLon = Math.PI * 2 + diffLon;
    }
  }

  return ((0, _toDeg.default)(Math.atan2(diffLon, diffPhi)) + 360) % 360;
};

var _default = getRhumbLineBearing;
exports["default"] = _default;

/***/ }),

/***/ 7078:
/*!************************************************************!*\
  !*** ./node_modules/geolib/es/getRoughCompassDirection.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var getRoughCompassDirection = function getRoughCompassDirection(exact) {
  if (/^NNE|NE|NNW|N$/.test(exact)) {
    return "N";
  }

  if (/^ENE|E|ESE|SE$/.test(exact)) {
    return "E";
  }

  if (/^SSE|S|SSW|SW$/.test(exact)) {
    return "S";
  }

  if (/^WSW|W|WNW|NW$/.test(exact)) {
    return "W";
  }
};

var _default = getRoughCompassDirection;
exports["default"] = _default;

/***/ }),

/***/ 505:
/*!********************************************!*\
  !*** ./node_modules/geolib/es/getSpeed.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _getDistance = _interopRequireDefault(__webpack_require__(/*! ./getDistance */ 390));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var getSpeed = function getSpeed(start, end) {
  var distanceFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _getDistance.default;
  var distance = distanceFn(start, end);
  var time = Number(end.time) - Number(start.time);
  var metersPerSecond = distance / time * 1000;
  return metersPerSecond;
};

var _default = getSpeed;
exports["default"] = _default;

/***/ }),

/***/ 2727:
/*!*****************************************!*\
  !*** ./node_modules/geolib/es/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  computeDestinationPoint: true,
  convertArea: true,
  convertDistance: true,
  convertSpeed: true,
  decimalToSexagesimal: true,
  findNearest: true,
  getAreaOfPolygon: true,
  getBounds: true,
  getBoundsOfDistance: true,
  getCenter: true,
  getCenterOfBounds: true,
  getCompassDirection: true,
  getCoordinateKey: true,
  getCoordinateKeys: true,
  getDistance: true,
  getDistanceFromLine: true,
  getGreatCircleBearing: true,
  getLatitude: true,
  getLongitude: true,
  getPathLength: true,
  getPreciseDistance: true,
  getRhumbLineBearing: true,
  getRoughCompassDirection: true,
  getSpeed: true,
  isDecimal: true,
  isPointInLine: true,
  isPointInPolygon: true,
  isPointNearLine: true,
  isPointWithinRadius: true,
  isSexagesimal: true,
  isValidCoordinate: true,
  isValidLatitude: true,
  isValidLongitude: true,
  orderByDistance: true,
  sexagesimalToDecimal: true,
  toDecimal: true,
  toRad: true,
  toDeg: true,
  wktToPolygon: true
};
Object.defineProperty(exports, "computeDestinationPoint", ({
  enumerable: true,
  get: function get() {
    return _computeDestinationPoint.default;
  }
}));
Object.defineProperty(exports, "convertArea", ({
  enumerable: true,
  get: function get() {
    return _convertArea.default;
  }
}));
Object.defineProperty(exports, "convertDistance", ({
  enumerable: true,
  get: function get() {
    return _convertDistance.default;
  }
}));
Object.defineProperty(exports, "convertSpeed", ({
  enumerable: true,
  get: function get() {
    return _convertSpeed.default;
  }
}));
Object.defineProperty(exports, "decimalToSexagesimal", ({
  enumerable: true,
  get: function get() {
    return _decimalToSexagesimal.default;
  }
}));
Object.defineProperty(exports, "findNearest", ({
  enumerable: true,
  get: function get() {
    return _findNearest.default;
  }
}));
Object.defineProperty(exports, "getAreaOfPolygon", ({
  enumerable: true,
  get: function get() {
    return _getAreaOfPolygon.default;
  }
}));
Object.defineProperty(exports, "getBounds", ({
  enumerable: true,
  get: function get() {
    return _getBounds.default;
  }
}));
Object.defineProperty(exports, "getBoundsOfDistance", ({
  enumerable: true,
  get: function get() {
    return _getBoundsOfDistance.default;
  }
}));
Object.defineProperty(exports, "getCenter", ({
  enumerable: true,
  get: function get() {
    return _getCenter.default;
  }
}));
Object.defineProperty(exports, "getCenterOfBounds", ({
  enumerable: true,
  get: function get() {
    return _getCenterOfBounds.default;
  }
}));
Object.defineProperty(exports, "getCompassDirection", ({
  enumerable: true,
  get: function get() {
    return _getCompassDirection.default;
  }
}));
Object.defineProperty(exports, "getCoordinateKey", ({
  enumerable: true,
  get: function get() {
    return _getCoordinateKey.default;
  }
}));
Object.defineProperty(exports, "getCoordinateKeys", ({
  enumerable: true,
  get: function get() {
    return _getCoordinateKeys.default;
  }
}));
Object.defineProperty(exports, "getDistance", ({
  enumerable: true,
  get: function get() {
    return _getDistance.default;
  }
}));
Object.defineProperty(exports, "getDistanceFromLine", ({
  enumerable: true,
  get: function get() {
    return _getDistanceFromLine.default;
  }
}));
Object.defineProperty(exports, "getGreatCircleBearing", ({
  enumerable: true,
  get: function get() {
    return _getGreatCircleBearing.default;
  }
}));
Object.defineProperty(exports, "getLatitude", ({
  enumerable: true,
  get: function get() {
    return _getLatitude.default;
  }
}));
Object.defineProperty(exports, "getLongitude", ({
  enumerable: true,
  get: function get() {
    return _getLongitude.default;
  }
}));
Object.defineProperty(exports, "getPathLength", ({
  enumerable: true,
  get: function get() {
    return _getPathLength.default;
  }
}));
Object.defineProperty(exports, "getPreciseDistance", ({
  enumerable: true,
  get: function get() {
    return _getPreciseDistance.default;
  }
}));
Object.defineProperty(exports, "getRhumbLineBearing", ({
  enumerable: true,
  get: function get() {
    return _getRhumbLineBearing.default;
  }
}));
Object.defineProperty(exports, "getRoughCompassDirection", ({
  enumerable: true,
  get: function get() {
    return _getRoughCompassDirection.default;
  }
}));
Object.defineProperty(exports, "getSpeed", ({
  enumerable: true,
  get: function get() {
    return _getSpeed.default;
  }
}));
Object.defineProperty(exports, "isDecimal", ({
  enumerable: true,
  get: function get() {
    return _isDecimal.default;
  }
}));
Object.defineProperty(exports, "isPointInLine", ({
  enumerable: true,
  get: function get() {
    return _isPointInLine.default;
  }
}));
Object.defineProperty(exports, "isPointInPolygon", ({
  enumerable: true,
  get: function get() {
    return _isPointInPolygon.default;
  }
}));
Object.defineProperty(exports, "isPointNearLine", ({
  enumerable: true,
  get: function get() {
    return _isPointNearLine.default;
  }
}));
Object.defineProperty(exports, "isPointWithinRadius", ({
  enumerable: true,
  get: function get() {
    return _isPointWithinRadius.default;
  }
}));
Object.defineProperty(exports, "isSexagesimal", ({
  enumerable: true,
  get: function get() {
    return _isSexagesimal.default;
  }
}));
Object.defineProperty(exports, "isValidCoordinate", ({
  enumerable: true,
  get: function get() {
    return _isValidCoordinate.default;
  }
}));
Object.defineProperty(exports, "isValidLatitude", ({
  enumerable: true,
  get: function get() {
    return _isValidLatitude.default;
  }
}));
Object.defineProperty(exports, "isValidLongitude", ({
  enumerable: true,
  get: function get() {
    return _isValidLongitude.default;
  }
}));
Object.defineProperty(exports, "orderByDistance", ({
  enumerable: true,
  get: function get() {
    return _orderByDistance.default;
  }
}));
Object.defineProperty(exports, "sexagesimalToDecimal", ({
  enumerable: true,
  get: function get() {
    return _sexagesimalToDecimal.default;
  }
}));
Object.defineProperty(exports, "toDecimal", ({
  enumerable: true,
  get: function get() {
    return _toDecimal.default;
  }
}));
Object.defineProperty(exports, "toRad", ({
  enumerable: true,
  get: function get() {
    return _toRad.default;
  }
}));
Object.defineProperty(exports, "toDeg", ({
  enumerable: true,
  get: function get() {
    return _toDeg.default;
  }
}));
Object.defineProperty(exports, "wktToPolygon", ({
  enumerable: true,
  get: function get() {
    return _wktToPolygon.default;
  }
}));

var _computeDestinationPoint = _interopRequireDefault(__webpack_require__(/*! ./computeDestinationPoint */ 9489));

var _convertArea = _interopRequireDefault(__webpack_require__(/*! ./convertArea */ 3780));

var _convertDistance = _interopRequireDefault(__webpack_require__(/*! ./convertDistance */ 4760));

var _convertSpeed = _interopRequireDefault(__webpack_require__(/*! ./convertSpeed */ 7163));

var _decimalToSexagesimal = _interopRequireDefault(__webpack_require__(/*! ./decimalToSexagesimal */ 7452));

var _findNearest = _interopRequireDefault(__webpack_require__(/*! ./findNearest */ 7161));

var _getAreaOfPolygon = _interopRequireDefault(__webpack_require__(/*! ./getAreaOfPolygon */ 4682));

var _getBounds = _interopRequireDefault(__webpack_require__(/*! ./getBounds */ 6258));

var _getBoundsOfDistance = _interopRequireDefault(__webpack_require__(/*! ./getBoundsOfDistance */ 1984));

var _getCenter = _interopRequireDefault(__webpack_require__(/*! ./getCenter */ 3249));

var _getCenterOfBounds = _interopRequireDefault(__webpack_require__(/*! ./getCenterOfBounds */ 6059));

var _getCompassDirection = _interopRequireDefault(__webpack_require__(/*! ./getCompassDirection */ 5014));

var _getCoordinateKey = _interopRequireDefault(__webpack_require__(/*! ./getCoordinateKey */ 9222));

var _getCoordinateKeys = _interopRequireDefault(__webpack_require__(/*! ./getCoordinateKeys */ 3140));

var _getDistance = _interopRequireDefault(__webpack_require__(/*! ./getDistance */ 390));

var _getDistanceFromLine = _interopRequireDefault(__webpack_require__(/*! ./getDistanceFromLine */ 6186));

var _getGreatCircleBearing = _interopRequireDefault(__webpack_require__(/*! ./getGreatCircleBearing */ 5070));

var _getLatitude = _interopRequireDefault(__webpack_require__(/*! ./getLatitude */ 3313));

var _getLongitude = _interopRequireDefault(__webpack_require__(/*! ./getLongitude */ 3552));

var _getPathLength = _interopRequireDefault(__webpack_require__(/*! ./getPathLength */ 7485));

var _getPreciseDistance = _interopRequireDefault(__webpack_require__(/*! ./getPreciseDistance */ 6804));

var _getRhumbLineBearing = _interopRequireDefault(__webpack_require__(/*! ./getRhumbLineBearing */ 3299));

var _getRoughCompassDirection = _interopRequireDefault(__webpack_require__(/*! ./getRoughCompassDirection */ 7078));

var _getSpeed = _interopRequireDefault(__webpack_require__(/*! ./getSpeed */ 505));

var _isDecimal = _interopRequireDefault(__webpack_require__(/*! ./isDecimal */ 3554));

var _isPointInLine = _interopRequireDefault(__webpack_require__(/*! ./isPointInLine */ 3612));

var _isPointInPolygon = _interopRequireDefault(__webpack_require__(/*! ./isPointInPolygon */ 9383));

var _isPointNearLine = _interopRequireDefault(__webpack_require__(/*! ./isPointNearLine */ 3838));

var _isPointWithinRadius = _interopRequireDefault(__webpack_require__(/*! ./isPointWithinRadius */ 647));

var _isSexagesimal = _interopRequireDefault(__webpack_require__(/*! ./isSexagesimal */ 3271));

var _isValidCoordinate = _interopRequireDefault(__webpack_require__(/*! ./isValidCoordinate */ 1239));

var _isValidLatitude = _interopRequireDefault(__webpack_require__(/*! ./isValidLatitude */ 727));

var _isValidLongitude = _interopRequireDefault(__webpack_require__(/*! ./isValidLongitude */ 8705));

var _orderByDistance = _interopRequireDefault(__webpack_require__(/*! ./orderByDistance */ 8247));

var _sexagesimalToDecimal = _interopRequireDefault(__webpack_require__(/*! ./sexagesimalToDecimal */ 1476));

var _toDecimal = _interopRequireDefault(__webpack_require__(/*! ./toDecimal */ 3360));

var _toRad = _interopRequireDefault(__webpack_require__(/*! ./toRad */ 9814));

var _toDeg = _interopRequireDefault(__webpack_require__(/*! ./toDeg */ 9531));

var _wktToPolygon = _interopRequireDefault(__webpack_require__(/*! ./wktToPolygon */ 2071));

var _constants = __webpack_require__(/*! ./constants */ 3387);

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _constants[key];
    }
  });
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

/***/ }),

/***/ 3554:
/*!*********************************************!*\
  !*** ./node_modules/geolib/es/isDecimal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var isDecimal = function isDecimal(value) {
  var checkedValue = value.toString().trim();

  if (isNaN(parseFloat(checkedValue))) {
    return false;
  }

  return parseFloat(checkedValue) === Number(checkedValue);
};

var _default = isDecimal;
exports["default"] = _default;

/***/ }),

/***/ 3612:
/*!*************************************************!*\
  !*** ./node_modules/geolib/es/isPointInLine.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _getDistance = _interopRequireDefault(__webpack_require__(/*! ./getDistance */ 390));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var isPointInLine = function isPointInLine(point, lineStart, lineEnd) {
  return (0, _getDistance.default)(lineStart, point) + (0, _getDistance.default)(point, lineEnd) === (0, _getDistance.default)(lineStart, lineEnd);
};

var _default = isPointInLine;
exports["default"] = _default;

/***/ }),

/***/ 9383:
/*!****************************************************!*\
  !*** ./node_modules/geolib/es/isPointInPolygon.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _getLatitude = _interopRequireDefault(__webpack_require__(/*! ./getLatitude */ 3313));

var _getLongitude = _interopRequireDefault(__webpack_require__(/*! ./getLongitude */ 3552));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var isPointInPolygon = function isPointInPolygon(point, polygon) {
  var isInside = false;
  var totalPolys = polygon.length;

  for (var i = -1, j = totalPolys - 1; ++i < totalPolys; j = i) {
    if (((0, _getLongitude.default)(polygon[i]) <= (0, _getLongitude.default)(point) && (0, _getLongitude.default)(point) < (0, _getLongitude.default)(polygon[j]) || (0, _getLongitude.default)(polygon[j]) <= (0, _getLongitude.default)(point) && (0, _getLongitude.default)(point) < (0, _getLongitude.default)(polygon[i])) && (0, _getLatitude.default)(point) < ((0, _getLatitude.default)(polygon[j]) - (0, _getLatitude.default)(polygon[i])) * ((0, _getLongitude.default)(point) - (0, _getLongitude.default)(polygon[i])) / ((0, _getLongitude.default)(polygon[j]) - (0, _getLongitude.default)(polygon[i])) + (0, _getLatitude.default)(polygon[i])) {
      isInside = !isInside;
    }
  }

  return isInside;
};

var _default = isPointInPolygon;
exports["default"] = _default;

/***/ }),

/***/ 3838:
/*!***************************************************!*\
  !*** ./node_modules/geolib/es/isPointNearLine.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _getDistanceFromLine = _interopRequireDefault(__webpack_require__(/*! ./getDistanceFromLine */ 6186));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var isPointNearLine = function isPointNearLine(point, start, end, distance) {
  return (0, _getDistanceFromLine.default)(point, start, end) < distance;
};

var _default = isPointNearLine;
exports["default"] = _default;

/***/ }),

/***/ 647:
/*!*******************************************************!*\
  !*** ./node_modules/geolib/es/isPointWithinRadius.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _getDistance = _interopRequireDefault(__webpack_require__(/*! ./getDistance */ 390));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var isPointWithinRadius = function isPointWithinRadius(point, center, radius) {
  return (0, _getDistance.default)(point, center) < radius;
};

var _default = isPointWithinRadius;
exports["default"] = _default;

/***/ }),

/***/ 3271:
/*!*************************************************!*\
  !*** ./node_modules/geolib/es/isSexagesimal.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _constants = __webpack_require__(/*! ./constants */ 3387);

var isSexagesimal = function isSexagesimal(value) {
  return _constants.sexagesimalPattern.test(value.toString().trim());
};

var _default = isSexagesimal;
exports["default"] = _default;

/***/ }),

/***/ 1239:
/*!*****************************************************!*\
  !*** ./node_modules/geolib/es/isValidCoordinate.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _getCoordinateKeys2 = _interopRequireDefault(__webpack_require__(/*! ./getCoordinateKeys */ 3140));

var _isValidLatitude = _interopRequireDefault(__webpack_require__(/*! ./isValidLatitude */ 727));

var _isValidLongitude = _interopRequireDefault(__webpack_require__(/*! ./isValidLongitude */ 8705));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var isValidCoordinate = function isValidCoordinate(point) {
  var _getCoordinateKeys = (0, _getCoordinateKeys2.default)(point),
      latitude = _getCoordinateKeys.latitude,
      longitude = _getCoordinateKeys.longitude;

  if (Array.isArray(point) && point.length >= 2) {
    return (0, _isValidLongitude.default)(point[0]) && (0, _isValidLatitude.default)(point[1]);
  }

  if (typeof latitude === "undefined" || typeof longitude === "undefined") {
    return false;
  }

  var lon = point[longitude];
  var lat = point[latitude];

  if (typeof lat === "undefined" || typeof lon === "undefined") {
    return false;
  }

  if ((0, _isValidLatitude.default)(lat) === false || (0, _isValidLongitude.default)(lon) === false) {
    return false;
  }

  return true;
};

var _default = isValidCoordinate;
exports["default"] = _default;

/***/ }),

/***/ 727:
/*!***************************************************!*\
  !*** ./node_modules/geolib/es/isValidLatitude.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _isDecimal = _interopRequireDefault(__webpack_require__(/*! ./isDecimal */ 3554));

var _isSexagesimal = _interopRequireDefault(__webpack_require__(/*! ./isSexagesimal */ 3271));

var _sexagesimalToDecimal = _interopRequireDefault(__webpack_require__(/*! ./sexagesimalToDecimal */ 1476));

var _constants = __webpack_require__(/*! ./constants */ 3387);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var isValidLatitude = function isValidLatitude(value) {
  if ((0, _isDecimal.default)(value)) {
    if (parseFloat(value) > _constants.MAXLAT || value < _constants.MINLAT) {
      return false;
    }

    return true;
  }

  if ((0, _isSexagesimal.default)(value)) {
    return isValidLatitude((0, _sexagesimalToDecimal.default)(value));
  }

  return false;
};

var _default = isValidLatitude;
exports["default"] = _default;

/***/ }),

/***/ 8705:
/*!****************************************************!*\
  !*** ./node_modules/geolib/es/isValidLongitude.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _isDecimal = _interopRequireDefault(__webpack_require__(/*! ./isDecimal */ 3554));

var _isSexagesimal = _interopRequireDefault(__webpack_require__(/*! ./isSexagesimal */ 3271));

var _sexagesimalToDecimal = _interopRequireDefault(__webpack_require__(/*! ./sexagesimalToDecimal */ 1476));

var _constants = __webpack_require__(/*! ./constants */ 3387);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var isValidLongitude = function isValidLongitude(value) {
  if ((0, _isDecimal.default)(value)) {
    if (parseFloat(value) > _constants.MAXLON || value < _constants.MINLON) {
      return false;
    }

    return true;
  }

  if ((0, _isSexagesimal.default)(value)) {
    return isValidLongitude((0, _sexagesimalToDecimal.default)(value));
  }

  return false;
};

var _default = isValidLongitude;
exports["default"] = _default;

/***/ }),

/***/ 8247:
/*!***************************************************!*\
  !*** ./node_modules/geolib/es/orderByDistance.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _getDistance = _interopRequireDefault(__webpack_require__(/*! ./getDistance */ 390));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var orderByDistance = function orderByDistance(point, coords) {
  var distanceFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _getDistance.default;
  distanceFn = typeof distanceFn === "function" ? distanceFn : _getDistance.default;
  return coords.slice().sort(function (a, b) {
    return distanceFn(point, a) - distanceFn(point, b);
  });
};

var _default = orderByDistance;
exports["default"] = _default;

/***/ }),

/***/ 4049:
/*!**********************************************!*\
  !*** ./node_modules/geolib/es/robustAcos.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var robustAcos = function robustAcos(value) {
  if (value > 1) {
    return 1;
  }

  if (value < -1) {
    return -1;
  }

  return value;
};

var _default = robustAcos;
exports["default"] = _default;

/***/ }),

/***/ 1476:
/*!********************************************************!*\
  !*** ./node_modules/geolib/es/sexagesimalToDecimal.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _constants = __webpack_require__(/*! ./constants */ 3387);

var sexagesimalToDecimal = function sexagesimalToDecimal(sexagesimal) {
  var data = new RegExp(_constants.sexagesimalPattern).exec(sexagesimal.toString().trim());

  if (typeof data === "undefined" || data === null) {
    throw new Error("Given value is not in sexagesimal format");
  }

  var min = Number(data[2]) / 60 || 0;
  var sec = Number(data[4]) / 3600 || 0;
  var decimal = parseFloat(data[1]) + min + sec;
  return ["S", "W"].includes(data[7]) ? -decimal : decimal;
};

var _default = sexagesimalToDecimal;
exports["default"] = _default;

/***/ }),

/***/ 3360:
/*!*********************************************!*\
  !*** ./node_modules/geolib/es/toDecimal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _isDecimal = _interopRequireDefault(__webpack_require__(/*! ./isDecimal */ 3554));

var _isSexagesimal = _interopRequireDefault(__webpack_require__(/*! ./isSexagesimal */ 3271));

var _sexagesimalToDecimal = _interopRequireDefault(__webpack_require__(/*! ./sexagesimalToDecimal */ 1476));

var _isValidCoordinate = _interopRequireDefault(__webpack_require__(/*! ./isValidCoordinate */ 1239));

var _getCoordinateKeys = _interopRequireDefault(__webpack_require__(/*! ./getCoordinateKeys */ 3140));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var toDecimal = function toDecimal(value) {
  if ((0, _isDecimal.default)(value)) {
    return Number(value);
  }

  if ((0, _isSexagesimal.default)(value)) {
    return (0, _sexagesimalToDecimal.default)(value);
  }

  if ((0, _isValidCoordinate.default)(value)) {
    var keys = (0, _getCoordinateKeys.default)(value);

    if (Array.isArray(value)) {
      return value.map(function (v, index) {
        return [0, 1].includes(index) ? toDecimal(v) : v;
      });
    }

    return _objectSpread(_objectSpread(_objectSpread({}, value), keys.latitude && _defineProperty({}, keys.latitude, toDecimal(value[keys.latitude]))), keys.longitude && _defineProperty({}, keys.longitude, toDecimal(value[keys.longitude])));
  }

  if (Array.isArray(value)) {
    return value.map(function (point) {
      return (0, _isValidCoordinate.default)(point) ? toDecimal(point) : point;
    });
  }

  return value;
};

var _default = toDecimal;
exports["default"] = _default;

/***/ }),

/***/ 9531:
/*!*****************************************!*\
  !*** ./node_modules/geolib/es/toDeg.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var toDeg = function toDeg(value) {
  return value * 180 / Math.PI;
};

var _default = toDeg;
exports["default"] = _default;

/***/ }),

/***/ 9814:
/*!*****************************************!*\
  !*** ./node_modules/geolib/es/toRad.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var toRad = function toRad(value) {
  return value * Math.PI / 180;
};

var _default = toRad;
exports["default"] = _default;

/***/ }),

/***/ 2071:
/*!************************************************!*\
  !*** ./node_modules/geolib/es/wktToPolygon.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var wktToPolygon = function wktToPolygon(wkt) {
  if (!wkt.startsWith("POLYGON")) {
    throw new Error("Invalid wkt.");
  }

  var coordsText = wkt.slice(wkt.indexOf("(") + 2, wkt.indexOf(")")).split(", ");
  var polygon = coordsText.map(function (coordText) {
    var _coordText$split = coordText.split(" "),
        _coordText$split2 = _slicedToArray(_coordText$split, 2),
        longitude = _coordText$split2[0],
        latitude = _coordText$split2[1];

    return {
      longitude: parseFloat(longitude),
      latitude: parseFloat(latitude)
    };
  });
  return polygon;
};

var _default = wktToPolygon;
exports["default"] = _default;

/***/ }),

/***/ 5388:
/*!******************************************************************************!*\
  !*** ./node_modules/leaflet.awesome-markers/dist/leaflet.awesome-markers.js ***!
  \******************************************************************************/
/***/ (function() {

/*
  Leaflet.AwesomeMarkers, a plugin that adds colorful iconic markers for Leaflet, based on the Font Awesome icons
  (c) 2012-2013, Lennard Voogdt

  http://leafletjs.com
  https://github.com/lvoogdt
*/

/*global L*/
(function (window, document, undefined) {
  "use strict";
  /*
   * Leaflet.AwesomeMarkers assumes that you have already included the Leaflet library.
   */

  L.AwesomeMarkers = {};
  L.AwesomeMarkers.version = '2.0.1';
  L.AwesomeMarkers.Icon = L.Icon.extend({
    options: {
      iconSize: [35, 45],
      iconAnchor: [17, 42],
      popupAnchor: [1, -32],
      shadowAnchor: [10, 12],
      shadowSize: [36, 16],
      className: 'awesome-marker',
      prefix: 'glyphicon',
      spinClass: 'fa-spin',
      extraClasses: '',
      icon: 'home',
      markerColor: 'blue',
      iconColor: 'white'
    },
    initialize: function (options) {
      options = L.Util.setOptions(this, options);
    },
    createIcon: function () {
      var div = document.createElement('div'),
          options = this.options;

      if (options.icon) {
        div.innerHTML = this._createInner();
      }

      if (options.bgPos) {
        div.style.backgroundPosition = -options.bgPos.x + 'px ' + -options.bgPos.y + 'px';
      }

      this._setIconStyles(div, 'icon-' + options.markerColor);

      return div;
    },
    _createInner: function () {
      var iconClass,
          iconSpinClass = "",
          iconColorClass = "",
          iconColorStyle = "",
          options = this.options;

      if (options.icon.slice(0, options.prefix.length + 1) === options.prefix + "-") {
        iconClass = options.icon;
      } else {
        iconClass = options.prefix + "-" + options.icon;
      }

      if (options.spin && typeof options.spinClass === "string") {
        iconSpinClass = options.spinClass;
      }

      if (options.iconColor) {
        if (options.iconColor === 'white' || options.iconColor === 'black') {
          iconColorClass = "icon-" + options.iconColor;
        } else {
          iconColorStyle = "style='color: " + options.iconColor + "' ";
        }
      }

      return "<i " + iconColorStyle + "class='" + options.extraClasses + " " + options.prefix + " " + iconClass + " " + iconSpinClass + " " + iconColorClass + "'></i>";
    },
    _setIconStyles: function (img, name) {
      var options = this.options,
          size = L.point(options[name === 'shadow' ? 'shadowSize' : 'iconSize']),
          anchor;

      if (name === 'shadow') {
        anchor = L.point(options.shadowAnchor || options.iconAnchor);
      } else {
        anchor = L.point(options.iconAnchor);
      }

      if (!anchor && size) {
        anchor = size.divideBy(2, true);
      }

      img.className = 'awesome-marker-' + name + ' ' + options.className;

      if (anchor) {
        img.style.marginLeft = -anchor.x + 'px';
        img.style.marginTop = -anchor.y + 'px';
      }

      if (size) {
        img.style.width = size.x + 'px';
        img.style.height = size.y + 'px';
      }
    },
    createShadow: function () {
      var div = document.createElement('div');

      this._setIconStyles(div, 'shadow');

      return div;
    }
  });

  L.AwesomeMarkers.icon = function (options) {
    return new L.AwesomeMarkers.Icon(options);
  };
})(this, document);

/***/ })

}]);
//# sourceMappingURL=default-src_app_class_Globalfunction_Global_ts-src_app_class_MathematicalModel_mathematical-m-e07184.js.map