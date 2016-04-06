angular.module('app').controller('adminHomeController',['$scope','userDetails','$location',function($scope,$location,userDetails){

$scope.username=userDetails.getUsername();

}])