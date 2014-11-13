function Authentication($http, $cookies, $window) {
    function isAuthenticated() {
        return $cookies.authenticatedUser;
    }

    function getAuthenticatedUser() {
        if ($cookies.authenticatedUser) {
            return JSON.parse($cookies.authenticatedUser);
        }
        return;
    }

    function setAuthenticatedUser(user) {
        $cookies.authenticatedUser = JSON.stringify(user);
    }

    function unauthenticate(user) {
        delete $cookies.authenticatedUser;
    }

    function register(username, password, email) {
        return $http.post('/api/v1/auth/register/', {
            username: username,
            password: password,
            email: email
        });
    }

    function login(username, password) {
        function loginSuccess(data, status, header, config) {
            setAuthenticatedUser(data.data);
            $window.location = '/';
        }

        function loginFail(data, status, header, config) {
            console.log(data.data.error);
        }

        return $http.post('/api/v1/auth/login/', {
            username: username,
            password: password,
        }).then(loginSuccess, loginFail);
    }

    return {
        register: register,
        login: login,
        unauthenticate: unauthenticate
    };
}

Authentication.$inject = ['$http', '$cookies', '$window'];
angular.module('borg.authentication.services')
       .factory('Authentication', Authentication);
