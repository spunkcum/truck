'use strict';

/**
 * @ngdoc function
 * @name mercedesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mercedesApp
 */
 angular.module('mercedesApp.kolding', [])
 .controller('KoldingPageController', [KoldingPageController]);

 function KoldingPageController(){
 	document.title = "Kolding";
 }