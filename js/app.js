'use strict';
angular.module('app', ['ngRoute'])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/login', {
                    templateUrl:"templates/login.html",
                    controller:'logController'
                })
                .when('/register', {
                    templateUrl:"templates/Registration.html",
                    controller:'regController'
                })
                .when('/user', {
                    templateUrl: 'templates/userPage.html'
                })
                .when('/admin', {
                    templateUrl: 'templates/admin.html',
                    controller:'adminController'
                })
                .when('/adminhome',{
                    templateUrl:'templates/homepage.html'
                })
                .when('/changepassword',{
                    templateUrl:'templates/NewUser.html',
                    controller:'Newusercontroller'
                })


        }])
    .controller('mainCntrl',['userDetails','$routeParams','$scope','$http',function(userDetails,$routeParams,$scope,$http)
    {
      
        this.params = $routeParams;
        
        $scope.name = userDetails.getUsername();
    }]);
    