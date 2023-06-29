cordova.define("cordova-plugin-google-play-services-checker.GooglePlayServicesChecker", function(require, exports, module) {
var emptyFnc = function () {
};
module.exports = {
  check: function (successCallback, errorCallback) {
    cordova.exec(successCallback || emptyFnc, errorCallback || emptyFnc, "GooglePlayServicesChecker", "check", []);
  }
};

});
