var emptyFnc = function () {
};
module.exports = {
  check: function (successCallback, errorCallback) {
    cordova.exec(successCallback || emptyFnc, errorCallback || emptyFnc, "GooglePlayServicesChecker", "check", []);
  }
};
