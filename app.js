// $http is an AngularJS service for reading data from remote servers.

var app = angular.module('myApp', []);

app.controller('customersCtrl', function($scope, $http) {
	$http.get("data.json")
		.success(function(response) {
			$scope.names = response.records;
		})
		.error(function (result) {
			console.log('Error http.get');
		});
});