var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/scheduler.html'
	})
	.when('/list', {
		templateUrl: 'partials/list.html'
	})
	.otherwise({
		redirectTo: '/'
	});


});