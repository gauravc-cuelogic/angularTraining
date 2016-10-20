'use strict';
(function() {

    angular
        .module('user')
        .controller('userController', ['$scope', '$stateParams', 'employeeService' ,userController]);

    function userController($scope, $stateParams, employeeService) {
      if($stateParams.Id) {
        $scope.setTitle = 'Edit user';
        $scope.empData = employeeService.getEmpList($stateParams.Id);
      }else{
        $scope.setTitle = 'Add user';
      }

      $scope.submit = function(id){
        console.log($scope.first_name);
        //employeeService.updateEmpList(id,)
      }
    }

})();
