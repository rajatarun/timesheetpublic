var app = angular.module('app');
app.controller('Newusercontroller',['NewUser','userDetails','$scope','$location', function(NewUser,userDetails,$scope,$location) {

	$scope.submit=function(user){
         	if(user.password==user.repassword){
         		user.name=userDetails.getUsername();
         		NewUser.change(user).then(function(value){
         			if(value=="success")
         				$location.url('/user')
         		})
         	}

}
         	
}])