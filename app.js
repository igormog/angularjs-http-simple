// $http is an AngularJS service for reading data from remote servers.

var app = angular.module('myApp', []);

/* For .controller */
app.controller('customersCtrl', function($scope, $http) {

	$http.get('data.json')
		.success(function(response) {
			$scope.names = response.records;
		})
		.error(function (result) {
			console.log('Error http.get');
		});

});

/* For .factory
app.factory('customersCtrl', function($http) {

	var names = null;
	$http.get('data.json').success(function(data) {
		names = response.records;
	});

});
*/