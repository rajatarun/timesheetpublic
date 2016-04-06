angular.module('app')
.factory('userDetails',function(){
	return{
	username :'',
	email:'',
	isActive:true,
	getUsername:function(){
		return localStorage.username;
	},
	setUsername:function(name){
		localStorage.setItem('username',name);
		this.username=name;
	},
	getEmail:function(){
		return localStorage.username;
	},
	setEmail:function(email){
		localStorage.setItem('email',email);
		this.email=email;
	},
	getStatus:function(){
		return localStorage.status;
	},
	setStatus:function(status){
		localStorage.setItem('status',status);
		this.isActive = status; 
	},
	restoreDefaults:function(){
		localStorage.clear();
	}
}
})