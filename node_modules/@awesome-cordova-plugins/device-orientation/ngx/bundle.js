'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

var DeviceOrientation = /** @class */ (function (_super) {
    tslib.__extends(DeviceOrientation, _super);
    function DeviceOrientation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceOrientation.prototype.getCurrentHeading = function () { return core.cordova(this, "getCurrentHeading", {}, arguments); };
    DeviceOrientation.prototype.watchHeading = function (options) { return core.cordova(this, "watchHeading", { "callbackOrder": "reverse", "observable": true, "clearFunction": "clearWatch" }, arguments); };
    DeviceOrientation.pluginName = "DeviceOrientation";
    DeviceOrientation.plugin = "cordova-plugin-device-orientation";
    DeviceOrientation.pluginRef = "navigator.compass";
    DeviceOrientation.repo = "https://github.com/apache/cordova-plugin-device-orientation";
    DeviceOrientation.platforms = ["Amazon Fire OS", "Android", "BlackBerry 10", "Browser", "Firefox OS", "iOS", "Tizen", "Ubuntu", "Windows", "Windows Phone"];
    DeviceOrientation.decorators = [
        { type: core$1.Injectable }
    ];
    return DeviceOrientation;
}(core.AwesomeCordovaNativePlugin));

exports.DeviceOrientation = DeviceOrientation;
