angular.module("myApp", ['ngRoute'])
	.config( function($routeProvider) {
		

		$routeProvider
					
					.when('/', {
						templateUrl: 'views/popular.html',
						controller: 'popularController'
					})
					.when('/views/toprated', {
						templateUrl: 'views/toprated.html',
						controller: 'topratedctr'
					})
					.when('/views/upcoming', {
						templateUrl: 'views/upcoming.html',
						controller: 'upcomingctr'
					})
					.when('/views/nowplaying', {
						templateUrl: 'views/nowplaying.html',
						controller: 'nowplayingctr'
					})

	})

			








