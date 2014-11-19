var app = angular.module('coupon',[]);
app.controller('couponController', ['$scope','$http', function($scope,$http){
	
	$scope.coupons = [];
	$scope.dataModes = ['carousel','fade','slide','flip','flip-list'];
	$scope.colors = ['amber','blue','brown','cobalt','crimson','cyan','emerald','green','indigo','lime','magenta','mango','mauve','orange','pink','purple','violet','sienna','red','steel','yellow'];
	$http.get('index.php').success(function(data){
		$scope.coupons = data;
		setTimeout(function(){
			$('.panel').liveTile();
		},100);
	});
	$scope.getColor = function(){
		var randomInt = $scope.getRandomInt(0,$scope.colors.length);
		return $scope.colors[randomInt];
	};
	$scope.getDelay = function(){
		return $scope.getRandomInt(1000,3000);
	};
	$scope.getMode = function(){
		var randomInt = $scope.getRandomInt(0,$scope.dataModes.length);
		return $scope.dataModes[randomInt];
	};
	$scope.getClass = function(){
		var characters = ['A','B','C','D'];
		var charIndex = $scope.getRandomInt(0,3);
		return "tile-strip-"+characters[charIndex];
	};
	$scope.getRandomInt = function(min, max) {
   		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
}]);
