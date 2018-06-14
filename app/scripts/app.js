'use strict';

/**
* @ngdoc overview
* @name mercedesApp
* @description
* # mercedesApp
*
* Main module of the application.
*/
angular
.module('mercedesApp', [
	'mercedesApp.homePage',
	'mercedesApp.viborg',
	'mercedesApp.kolding',
	'mercedesApp.roskilde', 
	'mercedesApp.gallery',
	

	'ngAnimate',
	'ngAria',
	'ngCookies',
	'ngMessages',
	'ngResource',
	'ngRoute',
	'ngSanitize',
	'ngTouch',
	'angular-google-analytics'
	])
.controller('MainController', ['$rootScope', '$scope', MainController])

.config(['AnalyticsProvider', function (AnalyticsProvider) {
   // Add configuration code as desired
   AnalyticsProvider.setAccount('UA-69011597-13');  //UU-XXXXXXX-X should be your tracking code
}]).run(['Analytics', function(Analytics) { }])

.config(function ($routeProvider) {
	$routeProvider
	.when('/forside', {
		templateUrl: 'views/main.html',
		controller: 'HomePageController',
		controllerAs: 'homePage'
	})
	.when('/viborg', {
		templateUrl: 'views/viborg.html',
		controller: 'ViborgPageController',
		controllerAs: 'viborg'
	})
	.when('/kolding', {
		templateUrl: 'views/kolding.html',
		controller: 'KoldingPageController',
		controllerAs: 'kolding'
	})
	.when('/roskilde', {
		templateUrl: 'views/roskilde.html',
		controller: 'RoskildePageController',
		controllerAs: 'roskilde'
	})
	.when('/galleri', {
		templateUrl: 'views/gallery.html',
		controller: 'GalleryController',
		controllerAs: 'gallery'
	})
	.otherwise({
		redirectTo: '/galleri'
	});
});

function MainController($rootScope, $scope){
	document.title = "Galleri";
	$scope.page = "galleri";

	$scope.selectPage = function(page){
		$scope.page = page;
	};

	var url = document.URL.split("#!");

	var urlPath = url[(url.length - 1)];

	if(urlPath.indexOf("galleri") != -1){
		$scope.page = "galleri";
	} else if (urlPath.indexOf("roskilde") != -1){
		$scope.page = "roskilde";
	} else if (urlPath.indexOf("kolding") != -1){
		$scope.page = "kolding";
	} else if (urlPath.indexOf("viborg") != -1){
		$scope.page = "viborg";
	}
}