weatherApp.controller('forecastController', ['$scope', '$routeParams', 'forecastService', '$resource', function($scope, $routeParams, forecastService, $resource){
	$scope.city=forecastService.city;
	$scope.days = $routeParams.days || '2';
	$scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",
						{callback: "JSON_CALLBACK"},
						{get: {method: "JSONP"}}
						);
	$scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: $scope.days});
	console.log($scope.weatherResult);
	
	$scope.convertToF = function(degK){
		return Math.round((1.8*(degK-273)) + 32);
	};
	$scope.convertToDate = function(date){
		return new Date(date * 1000);
	};

}]);