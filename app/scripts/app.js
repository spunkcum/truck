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
	.otherwise({
		redirectTo: '/forside'
	});
});

function MainController($rootScope, $scope){
	document.title = "Forside";
	$scope.page = "forside";

	var url = document.URL.split("#!");

	if(url[(url.length - 1)].includes("forside")){
		$scope.page = "forside";
	}else if(url[(url.length - 1)].includes("viborg")){
		$scope.page = "viborg";
	}else if(url[(url.length - 1)].includes("kolding")){
		$scope.page = "kolding";
	}else if(url[(url.length - 1)].includes("roskilde")){
		$scope.page = "roskilde";
	}

	$scope.selectPage = function(page){
		$scope.page = page;
	};
}