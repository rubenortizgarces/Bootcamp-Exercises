angular.module('myApp')
	.factory('moviesService', function($http) {

			function getPop() {
				return $http.get("https://api.themoviedb.org/3/movie/popular?api_key=4beb9a816d4ff94c399b182704f1df03&language=en-US");
			}
				
			
			function getRated() {
				return $http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=4beb9a816d4ff94c399b182704f1df03&&language=en-US");
			}

			function getUpcomings() {
				return $http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=4beb9a816d4ff94c399b182704f1df03&&language=en-US");
			}
			function getNows() {
				return $http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=4beb9a816d4ff94c399b182704f1df03&&language=en-US");
			}
			return{
				getUpcomings:getUpcomings,
				getPop:getPop,
				getRated:getRated,
				getNows:getNows,
			}
	})
