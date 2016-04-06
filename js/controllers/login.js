var app = angular.module("app")
	app.controller("logController", ['logService','userDetails','$scope','$compile','$location',function(logService, userDetails,$scope,$compile,$location){
		
		
        $scope.submit=function(user){
         	console.log(user);

         	logService.setuser(user).then(function(value){
               if(value == "first"){
                  $location.url('/changepassword')
               }
         		if(value == "success"){
                  if(user.role == "admin")
                     $location.url('/adminhome')
                  else if(user.role == "user")
                     $location.url('/user')

         		}
         		else{
         			$scope.message = "username and password do not match"
         			$scope.danger = true;	
         		}
         	}
         	);

         	 
         	};
         }]);
	app.directive('userpage',['logService','$compile',function(logService,$compile){
		return{
			restrict:'E',
			link:function(s,e,a){
				e.html(logService.template);
			}
		}
	}]);
         