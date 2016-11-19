	
	var assignApp = angular.module('assignApp', ['ngRoute']);

	
	assignApp.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});


	assignApp.controller('mainController', function($scope) {
		
		$scope.message = 'This is HOME page!';
	});

	assignApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	assignApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! ';
	});