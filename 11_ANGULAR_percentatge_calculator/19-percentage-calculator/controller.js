angular.module('myApp')
	.controller('myController', function($scope) {

		

		$scope.f1 = function(e) {
			e.preventDefault();
			$scope.res1 = $scope.op_1/100 * $scope.op_2;
		}

	})
	.controller('myController1', function($scope) {

			

			$scope.f2 = function(e) {
				e.preventDefault();
				$scope.res2 = ($scope.op_21/$scope.op_22) * 100 
			}

	})
	.controller('myController3', function($scope) {

			

			$scope.f3 = function(e) {
				e.preventDefault();
				$scope.res3 = ($scope.op_32 - $scope.op_31)/$scope.op_31 * 100
			}

	})
		








	// $('#f1-calculate').on('click',function(event){
	// 		event.preventDefault();
			
	// 		var a=+$('#f1-a').val();
	// 		var b=+$('#f1-b').val();
	// 		if (a==0) { $('#f1-a').val(0) }
	// 		if (b==0) { $('#f1-b').val(0) }

	// 		$('#f1 .alert').remove();	
	// 		$('#f1').removeClass('has-error');
	// 		if (isNaN(a) || isNaN(b)) {							
	// 			$('#f1 span').after(errorHTML);
	// 			$('#f1').addClass('has-error');
	// 		} else {				
	// 			$('#f1-result').val( a / 100 * b);	
	// 		}
				
			
// 		});		








// })