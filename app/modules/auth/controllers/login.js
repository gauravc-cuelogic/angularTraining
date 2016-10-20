'use strict';

(function() {

    angular
        .module('auth')
        .controller('loginController', ['$scope', '$state', '$location', 'loginService', 'localStorageServiceWrapper', loginController]);

    function loginController($scope, $state , $location, loginService, localStorageServiceWrapper) {
        console.log("Inside login controller");
        $scope.submit = function() {

          var validLogin = loginService.validateLogin($scope.email, $scope.password);
          if(validLogin){
            localStorageServiceWrapper.set('email', $scope.email);
            localStorageServiceWrapper.set('password', $scope.password);
            $location.path( "/dashboard" );
          }else{

          }
      };
    }

})();
