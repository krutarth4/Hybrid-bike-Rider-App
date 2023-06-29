cordova.define("cordova-plugin-native-logs.NativeLogs", function(require, exports, module) {

module.exports = {

	pluginName: "NativeLogs",

	getLog:function(_nbLines,_bCopyToClipboard,successCB,failureCB){
		cordova.exec(successCB, failureCB, this.pluginName,"getLog", [_nbLines,_bCopyToClipboard]);
	}
};




});
