'use strict';
(function() {

    angular
        .module('user')
        .controller('userController', ['$scope', '$stateParams', 'employeeService' ,userController]);

    function userController($scope, $stateParams, employeeService) {
      if($stateParams.Id) {
        $scope = employeeService.getEmpList($stateParams.Id);
        $scope.setTitle = 'Edit user';
        console.log($scope);
      }else{
        $scope.setTitle = 'Add user';
      }
    }

})();
