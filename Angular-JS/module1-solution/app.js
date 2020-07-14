(function () {
	'use strict';
angular.module ('LunchCheck', [])
.controller('lunchCheckController', lunchCheckController);

lunchCheckController.$inject=['$scope'];

function lunchCheckController ($scope) {
	$scope.name='';
	$scope.StateofBeing_green= '';
	$scope.StateofBeing_red= '';
	$scope.StateofBeing_blue= '';
	
	$scope.checker = function () {
		var arrayofwords = $scope.name.split(',');
		var words=0;
		arrayofwords.forEach((item)=>{
			if (item!=false) {
				words++;
			}
		});

		if (words>0&&words<4) {
			$scope.StateofBeing_green = 'Enjoy!';
			$scope.StateofBeing_red= '';
			$scope.StateofBeing_blue= '';
		}
		else if (words>3) {
			$scope.StateofBeing_blue = 'Too much!';
			$scope.StateofBeing_red= '';
			$scope.StateofBeing_green= '';
		}
		else {
			$scope.StateofBeing_red = 'Please enter the data first!!';
			$scope.StateofBeing_green= '';
			$scope.StateofBeing_blue= '';
		}
	}
		
}
})();