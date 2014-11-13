function LoginController($scope, $location, Authentication) {
    $scope.login = function() {
        Authentication.login($scope.username, $scope.password);
    };
}


LoginController.$inject = ['$scope', '$location', 'Authentication'];
angular.module('borg.authentication.controllers')
    .controller('LoginController', LoginController);
