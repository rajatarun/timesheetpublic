angular.module("app").controller("adminController",['getDetails','$scope',function (getDetails,$scope) {
	$scope.submit=function(name){
	getDetails.getUserDetails(name).then(function(value){
		
		$scope.data = value.data;
		console.log(value);
	});
	}
}])
.factory("getDetails",function($http){
	return {
		getUserDetails:function(user){
			var url = "api/user/"+user
			return $http.get(url,function(response){
				return response.data;
			})
		}
	}
})