'use strict';

/**
 * @ngdoc function
 * @name mercedesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mercedesApp
 */
 angular.module('mercedesApp.roskilde', [])
 .controller('RoskildePageController', [RoskildePageController]);

 function RoskildePageController(){
 	document.title = "Sjællandsringen";
 }