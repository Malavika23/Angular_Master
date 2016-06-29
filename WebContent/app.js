var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: "views/home.htm",
			controller: "mainController"
		})
		.when('/city',{
			templateUrl: "views/forecast.html",
			controller: "forecastController"
		})
		.when('/city/:days',{
			templateUrl: "views/forecast.html",
			controller: "forecastController"
		}).
		otherwise({
			redirectTo: '/'
		});
});

