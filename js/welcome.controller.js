(function() {
    'use strict';
    
    angular
        .module('APIChallenge')
        .controller('WelcomeController', WelcomeController);
    
    WelcomeController.$inject = ['API_CONSTANTS', 'AuthService'];
    
    function WelcomeController(API_CONSTANTS, AuthService) {
        var wc = this;
        
        wc.start = start;
        
        function start() {
            var credentials = {
                email: API_CONSTANTS.email,
                github: API_CONSTANTS.github
            };
            console.log("I am in start");
            AuthService.register(credentials);
        }
    }
})();