weatherApp.controller('mainController', ['$scope', '$location', 'forecastService',  function($scope, $location, forecastService){
	
	$scope.city=forecastService.city;
	//$scope.units = forecastService.units;
	
	$scope.$watch('city', function(newValue, oldValue) {		
	  forecastService.city = $scope.city;
	});

	  forecastService.units = $scope.units;
	/* to make the submission work on pressing enter */
	$scope.submit = function(path){
		$location.path = (path);
		console.log('submit clicked ' + $location.path);
	};
}]);
