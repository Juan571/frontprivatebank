BankInterApp.service('ValoracionService', ['$rootScope','$request',
    function($rootScope,$request) {
    this.getData  = function(){
    	return $request.get("data/valoracion.json");
    }



}]);