var app = angular.module('coupon',[]);
app.controller('couponController', ['$scope','$http', function($scope,$http){
	
	$scope.coupons = [];
	$http.get('index.php').success(function(data){
		$scope.coupons = data;
	});
}]);
