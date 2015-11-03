(function() {
    angular
        .module('APIChallenge')
        .config(config);
    
    config.$inject = ['$routeProvider'];

    function config ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "templates/challenge.html",
                controller: "ChallengeController",
                controllerAs: 'vm'
            });
    }

})();