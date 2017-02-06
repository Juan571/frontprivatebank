BankInterApp = angular.module('BankInterApp')
var data=[];
BankInterApp.controller('DiversificacionController',['$rootScope','$scope','$http','$timeout','DiversificacionService', function($rootScope, $scope, $http, $timeout,DiversificacionService) {
    //console.log(data);
    data=DiversificacionService.getData().success(function(res){
        $scope.juandiego =res ;
       // console.log(valores);
        //return (valores);
    });
    $scope.$on('$viewContentLoaded', function() {
        // initialize core components


       // console.log($scope.juandiego);
        App.initAjax();
        DiversificacionCharts().init();
    });
    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;


    $scope.selected = {} ;


}]);
