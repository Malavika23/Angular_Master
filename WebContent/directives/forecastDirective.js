weatherApp
.directive('forecastDirective', function(){
	return{
		restrict:"E",
		templateUrl:"forecast-directive.html",
		replace: true,
		scope:{
			weatherDay: "=",
			weatherDate:"@",
			convertToF: "&",
			convertToDate: "&"
			
		}
	};
});