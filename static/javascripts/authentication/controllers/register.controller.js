function log_failure(data, status, headers, config) {
    console.log(data.data);
}

function RegisterController($scope, Authentication) {
    $scope.register = function() {
        Authentication.register($scope.username, $scope.password, $scope.email).then(
            function(data, status, headers, config) {
                Authentication.login($scope.username, $scope.password);
            }, log_failure
        );
    };
}

RegisterController.$inject = ['$scope', 'Authentication'];

angular.module('borg.authentication.controllers')
    .controller('RegisterController', RegisterController);
