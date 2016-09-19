var app = angular.module("demoApp",[]);

app.controller("demoCtrl", function demoCtrl($scope){
	$scope.message = "Users";
	
	$scope.add = function(){
        $scope.result = $scope.a + $scope.b;
	     //R=result;
	}
	$scope.sub = function(){
		$scope.result = $scope.a - $scope.b;
	     //R=result;
	}
	$scope.mul = function(){
		$scope.result = $scope.a * $scope.b;
	    // R=result;
	}
	$scope.div = function(){
		$scope.result = $scope.a / $scope.b;
	    // R=result;
	}
	});
