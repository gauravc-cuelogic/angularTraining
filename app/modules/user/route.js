(function() {
    'use strict';

    angular
        .module('user')
        .config(['$stateProvider', stateProvider])

    function stateProvider($stateProvider) {

        $stateProvider
            .state('base.user', {
                url: '/add/user?Id',
                views: {
                    'content': {
                        templateUrl: 'app/modules/user/views/add_user.html',
                        controller: 'userController'
                    }
                }
            })
            .state('base.user_edit', {
                url: '/add/user_edit',
                views: {
                    'content': {
                        templateUrl: 'app/modules/user/views/edit_user.html',
                        controller: 'userController'
                    }
                }
            });
    }

})();
