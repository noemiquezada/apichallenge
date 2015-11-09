(function() {
    "use strict";
     
    angular
        .module('APIChallenge')
        .factory('AuthService', AuthService);
    
        AuthService.$inject = ['Session', 'ApiRestangular']; 
    
        function AuthService (Session, ApiRestangular) {
            var authService = {
                register: register 
            };
            
            function register(credentials){
                ApiRestangular.register().post(credentials).then(function(token) {
                    console.log("Registered");
                    console.log("This is the token: ");
                    console.log(token);
                    Session.setToken(token.result); 
                }, function(error) {
                    console.log(error);
                });
            }
            
            return authService;
        }
})();