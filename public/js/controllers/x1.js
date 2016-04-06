(function(){
	var app = angular.module("test", []); 
	app.controller("pwd", function($scope) {
	$scope.check = function(){
		console.log($scope.y)
		if($scope.y == $scope.x){
		$scope.alert="passwords match";
	}
	else{
	$scope.alert = "passwords do not match";}
	};
});
})();
	