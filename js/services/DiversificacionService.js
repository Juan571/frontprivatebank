BankInterApp.service('DiversificacionService', ['$rootScope','$request',
    function($rootScope,$request) {
    this.getData  = function(){
    	return $request.get("data/diversificacion.json");
    }



}]);