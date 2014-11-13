angular.module('borg', [
    'borg.routes',
    'borg.config',
    'borg.authentication'
]);

angular.module('borg.routes', ['ngRoute']);
angular.module('borg.config', []);


function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
}
run.$inject = ['$http'];
angular.module('borg')
    .run(run);

