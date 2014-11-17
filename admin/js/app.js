'use strict';

var couponApp = angular.module('couponApp', [
  'ngRoute',
  'ui.date',
  'ui.bootstrap'
]);

couponApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/add', {
        templateUrl: 'tpl/couponAdd.html',
        controller: 'CouponAddCtrl'
      })
  }]);

couponApp.controller('CouponAddCtrl', ['$scope', '$http', 
  function($scope, $http) {
    $scope.expiryDate = '';
    $scope.dateOptions = {
        changeYear: true,
        changeMonth: true,
        yearRange: '1900:-0',
        dateFormat:'yy-mm-dd'
    };
    
    $scope.save = function() {
      var config = {
        headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
      }
      var data = $("form#deal-form").serialize();
      $http.post("server/addCoupon.php", data, config).
        success(function () {
  
        }).
        error(function(){
          
        });
      }
  }]);

