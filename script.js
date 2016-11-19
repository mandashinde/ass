	
	var assignApp = angular.module('assignApp', ['ngRoute']);

	
	assignApp.config(function($routeProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'views/home.html',
				controller  : 'mainController'
			})

			.when('/about', {
				templateUrl : 'views/about.html',
				controller  : 'aboutController'
			})

			.when('/contact', {
				templateUrl : 'views/contact.html',
				controller  : 'contactController'
			});
	});


	assignApp.controller('mainController', function($scope) {
		
		$scope.message = 'This is HOME page!';
	});

	assignApp.controller('aboutController', function($scope) {
		$scope.message = ' I am an about page.';
	});

	assignApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! ';
	});