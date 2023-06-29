cordova.define("cordova-plugin-nearby-meshnetwork.NearbyConnections", function(require, exports, module) {
/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

var argscheck = require('cordova/argscheck');
var channel = require('cordova/channel');
var exec = require('cordova/exec');
var cordova = require('cordova');


var nearbyConnectionsExport = {};

/**
 * Start NearbyConnections service.
 *
 * @param {Function} successCallback The function to call when service successfully started
 * @param {Function} errorCallback The function to call when there is an error getting service start.
 */
nearbyConnectionsExport.startService = function (successCallback, errorCallback, nodeName) {
    argscheck.checkArgs('fF', 'NearbyConnections.startService', arguments);
    exec(successCallback, errorCallback, 'NearbyConnections', 'startService', [nodeName]);
};

/**
 * Stop NearbyConnections service.
 *
 * @param {Function} successCallback The function to call when service successfully stopped
 * @param {Function} errorCallback The function to call when there is an error getting service stopped.
 */
nearbyConnectionsExport.stopService = function (successCallback, errorCallback) {
    argscheck.checkArgs('fF', 'NearbyConnections.stopService', arguments);
    exec(successCallback, errorCallback, 'NearbyConnections', 'stopService', []);
};

/**
 * Listen to NearbyConnections events. e.g. JOIN_NETWORK, NETWORK_CHANGE, LEAVE_NETWORK, MESSAGE_RECEIVED
 * the naming here is not correct after event "MESSAGE_RECEIVED" is added. To be changed.
 *
 * @param {Function} successCallback The function to call when a event is sent back
 * @param {Function} errorCallback The function to call if there is error 
 */
nearbyConnectionsExport.listenConnections = function (successCallback, errorCallback) {
    argscheck.checkArgs('fF', 'NearbyConnections.listenConnections', arguments);
    exec(successCallback, errorCallback, 'NearbyConnections', 'listenConnections', []);
};

/**
 * Flush message in the network.
 *
 * @param {Function} successCallback The function to call when a message is successfully sent
 * @param {Function} errorCallback The function to call if there is error 
 */
nearbyConnectionsExport.flushMessage = function (successCallback, errorCallback, payload) {
  argscheck.checkArgs('fF', 'NearbyConnections.flushMessage', arguments);
  exec(successCallback, errorCallback, 'NearbyConnections', 'flushMessage', [payload]);
};


module.exports = nearbyConnectionsExport;

});
