angular.module("app")
.factory('adminService',['userDetails','$http',function(userDetails,$http){
	return{
	setuser:function(user){
		return $http.post('/api/reg',user).then(function(res){
			this.template =res.data;
			if(res.data=="success"){
				userDetails.setUsername(user.name);
				userDetails.setEmail(user.email);
				userDetails.setStatus(true);
			}
			return res.data;
		})
	},
	template:''
	}
}])