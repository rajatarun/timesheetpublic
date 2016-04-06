angular.module('app')
.controller('userCntrl',['userDetails','$scope','weeks','fileUpload','$location',function(userDetails,$scope,weeks,fileUpload,$location){
	$scope.name=userDetails.getUsername();
	$scope.num_week1= 1;
	$scope.isActive = function(){
			console.log(userDetails.getStatus())
            return userDetails.getStatus();
        }
      $scope.logout = function () {
      		userDetails.restoreDefaults();
      		$location.url('/');
      }
	$scope.submit = function(timesheet){
		$scope.timesheet.week1=$scope.timesheet.m1+$scope.timesheet.t1+$scope.timesheet.w1+$scope.timesheet.r1+$scope.timesheet.f1;
		$scope.timesheet.username = $scope.name;
		console.log($scope.timesheet);
		weeks.weekreport($scope.timesheet).then(function(res){
			if(res == "upload success"){
				$scope.action1 = true;
				$scope.action = res;
			}
			else{
				$scope.action2 = true;
				$scope.action1 = false;
				$scope.error = res;

			}
		})
	}
	$scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log('file is ' );
        console.dir(file);
        var uploadUrl = "/fileUpload";
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };

}])

.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}])
.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
        })
        .error(function(){
        });
    }
}]);


