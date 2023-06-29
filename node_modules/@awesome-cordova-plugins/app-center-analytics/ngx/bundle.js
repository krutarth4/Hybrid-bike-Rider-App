'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var AppCenterAnalytics = /** @class */ (function (_super) {
    tslib.__extends(AppCenterAnalytics, _super);
    function AppCenterAnalytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterAnalytics.prototype.trackEvent = function (eventName, properties) { return core.cordova(this, "trackEvent", {}, arguments); };
    AppCenterAnalytics.prototype.isEnabled = function () { return core.cordova(this, "isEnabled", {}, arguments); };
    AppCenterAnalytics.prototype.setEnabled = function (shouldEnable) { return core.cordova(this, "setEnabled", {}, arguments); };
    AppCenterAnalytics.pluginName = "AppCenterAnalytics";
    AppCenterAnalytics.plugin = "cordova-plugin-appcenter-analytics";
    AppCenterAnalytics.pluginRef = "AppCenter.Analytics";
    AppCenterAnalytics.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-analytics";
    AppCenterAnalytics.platforms = ["Android", "iOS"];
    AppCenterAnalytics.decorators = [
        { type: core$1.Injectable }
    ];
    return AppCenterAnalytics;
}(core.AwesomeCordovaNativePlugin));

exports.AppCenterAnalytics = AppCenterAnalytics;
