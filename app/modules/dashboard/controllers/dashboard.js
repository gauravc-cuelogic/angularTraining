(function() {

    'use strict';

    angular
        .module('dashboard')
        .controller('dashboardController', ['$scope', '$state', 'employeeService', dashboardController]);

    function dashboardController($scope, $state, employeeService) {

      //  $scope.employeeList = function() {
            //calling API and get user list
            $scope.getEmp = employeeService.getEmpList().empDetails;
            console.log($scope.getEmp);
            $scope.subTabMenus = [{
                'tabMenu': 'All',
                'action': 'dashboard'
            }, {
                'tabMenu': 'Proposals',
                'action': 'proposals'
            }]
      //  }
    }

})();
