angular.module("myApp")
.controller("topratedctr", function($scope, $rootScope, moviesService) {
	$scope.title="Top Rated Movies";
	moviesService.getRated()
	.then( function(response) {
		$scope.rateds = response.data.results;
	})	
})
.controller("popularController", function($scope, $rootScope, moviesService) {
	$scope.title="Top Popular Movies";
	moviesService.getPop()
	.then( function(response) {
		$scope.pops = response.data.results;
		console.log($scope.pops);
	})	
})

.controller("upcomingctr", function($scope, $rootScope, moviesService) {
	$scope.title="Upcoming Movies";
	moviesService.getUpcomings()
	.then( function(response) {
		$scope.Upcomings = response.data.results;
	})
	})

.controller("nowplayingctr", function($scope, $rootScope, moviesService) {
$scope.title="Now Paying Movies";
moviesService.getNows()
.then( function(response) {
	$scope.nows = response.data.results;
})	
})


