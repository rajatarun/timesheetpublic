var app = angular.module("app")
app.controller("regController", ['RegService','userDetails','$scope',function(RegService,userDetails,$scope){
		
		$scope.name=userDetails.getUsername();
		console.log(name)
		$scope.submit=function(user){
         	console.log(user);
         	RegService.setuser(user).then(function(value){
         		console.log(value);
         	});
         	 
        };
         	 
        
}]);
         
