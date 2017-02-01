BankInterApp = angular.module('BankInterApp');


BankInterApp.controller('ValoracionController',['$rootScope', '$scope', '$http', '$timeout','ValoracionService', function($rootScope, $scope, $http, $timeout,ValoracionService) {
  		$scope.$on('$viewContentLoaded', function() {   
  		      DashboardCharts().init_extracto_valoracion();
  		 });
   		$scope.selected = {} ;
		ValoracionService.getData().success(function(res){
				$scope.data =res ;
		});
		$scope.selectProducto  = function(producto){
			$scope.selected = producto;
		};
		
  
}]);