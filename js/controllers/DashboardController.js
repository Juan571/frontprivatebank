BankInterApp = angular.module('BankInterApp').controller('DashboardController', function($rootScope, $scope, $http, $timeout) {
    $scope.$on('$viewContentLoaded', function() {   
        // initialize core components
        App.initAjax();
        DashboardCharts().init();
        DashboardCharts().init_extracto_valoracion();
		DashboardCharts().init_extracto_rentabilidad();
		DashboardCharts().init_extracto_diversificacion();
		DashboardCharts().init_extracto_posicion();
		DashboardCharts().init_extracto_riesgo();
		DashboardCharts().init_extracto_comparativa();
    });

    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;
});
