/* Configuration for the routing of APIChallenge One Page Application */

(function() {
    angular
        .module('APIChallenge')
        .config(config);
    
    config.$inject = ['$routeProvider'];

    function config ($routeProvider) {
        $routeProvider
            .when('/', {
            });
    }

})();