'use strict';

/**
 * @ngdoc function
 * @name mercedesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mercedesApp
 */
 angular.module('mercedesApp.viborg', [])
 .controller('ViborgPageController', [ViborgPageController]);

 function ViborgPageController(){
 	document.title = "Program Viborg";
 }