var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'ui.bootstrap.datetimepicker', 'ngFileUpload', 'ui.codemirror']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/scheduler.html',
		controller: 'new_campaign'
	})
	.when('/confirmation', {
		templateUrl: 'partials/confirmation.html'
	})
	.when('/list', {
		templateUrl: 'partials/list.html'
	})
	.when('/edit/:id', {
		templateUrl: 'partials/edit.html',
		controller: 'edit_campaign'
	})
	.otherwise({
		redirectTo: '/'
	});


});