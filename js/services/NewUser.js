angular.module("app")
.factory('NewUser',['$http',function($http){
	return{
	change:function(data){
		return $http.post('/api/change',data).then(function(res){
			console.log(res.data);
			return res.data;
		})
		
	}
	}
	
}])