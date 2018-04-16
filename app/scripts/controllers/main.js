'use strict';

/**
 * @ngdoc function
 * @name mercedesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mercedesApp
 */
 angular.module('mercedesApp.homePage', [])
 .controller('HomePageController', [HomePageController]);

 function HomePageController(){
 	document.title = "Road Efficiency Tour 2018";

 	var wfpwnhg1yt7tvg;(function(d, t) {
 		var s = d.createElement(t), options = {
 			'userName':'dypaang',
 			'formHash':'wfpwnhg1yt7tvg',
 			'autoResize':true,
 			'height':'2493',
 			'async':true,
 			'host':'wufoo.eu',
 			'header':'hide',
 			'ssl':true
 		};
 		s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.eu/scripts/embed/form.js';
 		s.onload = s.onreadystatechange = function() {
 			var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
 			try { wfpwnhg1yt7tvg = new WufooForm();wfpwnhg1yt7tvg.initialize(options);wfpwnhg1yt7tvg.display(); } catch (e) {}
 		};
 		var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
 	})(document, 'script');
 }