/***
Metronic AngularJS App Main Script
***/

/* Metronic App */
var BankInterApp = angular.module("BankInterApp", [
    "ui.router", 
    "ui.bootstrap", 
    "oc.lazyLoad",  
    "ngSanitize",
    "LocalStorageModule"
]); 

/* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
BankInterApp.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        // global configs go here
    });
}]);

/********************************************
 BEGIN: BREAKING CHANGE in AngularJS v1.3.x:
*********************************************/
/**
`$controller` will no longer look for controllers on `window`.
The old behavior of looking on `window` for controllers was originally intended
for use in examples, demos, and toy apps. We found that allowing global controller
functions encouraged poor practices, so we resolved to disable this behavior by
default.

To migrate, register your controllers with modules rather than exposing them
as globals:

Before:

```javascript
function MyController() {
  // ...
}
```

After:

```javascript
angular.module('myApp', []).controller('MyController', [function() {
  // ...
}]);

Although it's not recommended, you can re-enable the old behavior like this:

```javascript
angular.module('myModule').config(['$controllerProvider', function($controllerProvider) {
  // this option might be handy for migrating old apps, but please don't use it
  // in new ones!
  $controllerProvider.allowGlobals();
}]);
**/

//AngularJS v1.3.x workaround for old style controller declarition in HTML
BankInterApp.config(['$controllerProvider', function($controllerProvider) {
  // this option might be handy for migrating old apps, but please don't use it
  // in new ones!
  $controllerProvider.allowGlobals();
}]);

/********************************************
 END: BREAKING CHANGE in AngularJS v1.3.x:
*********************************************/

/* Setup global settings */
BankInterApp.factory('settings', ['$rootScope', function($rootScope) {
    // supported languages
    var settings = {
        layout: {
            pageSidebarClosed: false, // sidebar menu state
            pageContentWhite: true, // set page content layout
            pageBodySolid: false, // solid body color state
            pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
        },
        assetsPath: 'assets',
        globalPath: 'assets/global',
        layoutPath: 'assets/layouts/layout',
    };

    $rootScope.settings = settings;

    return settings;
}]);

/* Setup App Main Controller */
BankInterApp.controller('AppController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.$on('$viewContentLoaded', function() {
        //App.initComponents(); // init core components
        //Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive 
    });
}]);



/* ###### Common Request Service #####*/

//interceptor all request
BankInterApp.factory('httpGlobalInterceptor', ['$q', '$injector', 'localStorageService', '$log', function ($q, $injector, $localStorage, $log) {
    return {
        'request': function (config) {
            config.headers = config.headers || {};
            if ( !angular.isUndefined($localStorage.get("CMS-AuthorizationToken")) ) {

                config.headers["CMS-AuthorizationToken"] = $localStorage.get("CMS-AuthorizationToken");

            }

            return config;
        },
        'requestError': function (rejection) {

            $injector.get('toastr').error("Error sending data to the server", "Server Error", {closeButton: true});
            $log.warn("There is an error. Reason:");
            $log.debug("http_code: " + rejection.status + ", Response: " + rejection.statusText);

            if (canRecover(rejection)) {
                return responseOrNewPromise
            }
            return $q.reject(rejection);
        },
        'response': function (response) {

            return response;
        },
        'responseError': function (response) {

            $injector.get('toastr').error("Acess to the requested resource has been denied", "Unauthorized Error", {closeButton: true});
            $log.error("http_code: " + response.status + ", Response: " + response.statusText);

            if ( response.status === 401 || response.status === 403 || response.status === -1 ) {

                $injector.get('$state').go('login');
            }
            return $q.reject(response);
        }
    };
}]);

BankInterApp.factory('$request', ['$rootScope', '$http', 'URL_CONFIG', '$log', function ($rootScope, $http, URL_CONFIG, $log) {


    var request = {};

    request.getFile = function (urlRelative) {
        window.open(URL_CONFIG.API_URL + '' + urlRelative, "_blank");
    };

    request.get = function (urlRelative, dataRequest) {
        var config_request = {};
        if (!!dataRequest && typeof dataRequest === 'object') {
            config_request = {
                params: dataRequest
            };
        }

        return $http.get(URL_CONFIG.API_URL + '' + urlRelative, config_request);

    }

    request.post = function (urlRelative, dataRequest) {

        return $http.post(URL_CONFIG.API_URL + '' + urlRelative, dataRequest);

    }

    request.put = function (urlRelative, dataRequest) {

        return $http.put(URL_CONFIG.API_URL + '' + urlRelative, dataRequest);

    }

    request.delete = function (urlRelative, dataRequest) {
        var config_request = {};
        if (!!dataRequest && typeof dataRequest === 'object') {
            config_request =
            {
                data: dataRequest
            };
        }

        //return $http.delete( URL_CONFIG.API_URL + '' + urlRelative, config_request);
        return $http.post(URL_CONFIG.API_URL + '' + urlRelative, dataRequest);

    }

    return request;

}]);

/*Default Setup $http Service*/
BankInterApp.config(['$httpProvider', function ($httpProvider) {

    //default config all requets
    $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
    $httpProvider.interceptors.push('httpGlobalInterceptor');

}]);

/***
Layout Partials.
By default the partials are loaded through AngularJS ng-include directive. In case they loaded in server side(e.g: PHP include function) then below partial 
initialization can be disabled and Layout.init() should be called on page load complete as explained above.
***/

/* Setup Layout Part - Header */
BankInterApp.controller('HeaderController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initHeader(); // init header
    });
}]);

/* Setup Layout Part - Sidebar */
BankInterApp.controller('SidebarController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initSidebar(); // init sidebar
    });
}]);

/* Setup Layout Part - Quick Sidebar */
BankInterApp.controller('QuickSidebarController', ['$scope', function($scope) {    
    $scope.$on('$includeContentLoaded', function() {
       setTimeout(function(){
            QuickSidebar.init(); // init quick sidebar        
        }, 2000)
    });
}]);

/* Setup Layout Part - Theme Panel */
BankInterApp.controller('ThemePanelController', ['$scope', function($scope) {    
    
}]);

/* Setup Layout Part - Footer */
BankInterApp.controller('FooterController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initFooter(); // init footer
    });
}]);



/* Init global settings and run the app */
BankInterApp.run(["$rootScope", "settings", "$state", function($rootScope, settings, $state) {
    $rootScope.$state = $state; // state to be accessed from view
    $rootScope.$settings = settings; // state to be accessed from view
}]);