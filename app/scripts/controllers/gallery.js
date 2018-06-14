'use strict';

/**
 * @ngdoc function
 * @name mercedesApp.controller:GalleryController
 * @description
 * # GalleryController
 * Controller of the mercedesApp
 */
 angular.module('mercedesApp.gallery', [])
 .controller('GalleryController', [GalleryController]);

 function GalleryController(){
 	document.title = "Galleri";

 	lightGallery(document.getElementById('lightgalleryKolding')); 
 	lightGallery(document.getElementById('lightgalleryViborg')); 
 	lightGallery(document.getElementById('lightgalleryRoskilde')); 
 }