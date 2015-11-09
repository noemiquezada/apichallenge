(function() {
    "use strict";
     
    angular
        .module('APIChallenge')
        .factory('AuthService', AuthService);
    
        AuthService.$inject = ['Session', 'Api']; 
    
        function AuthService (Session, Api) {
            var authService = {
                register: register 
            };
            
            function register(credentials){
                
                var apiRegister = Api.register; 
                apiRegister.post(credentials).then(function(token) {
                    console.log("Registered");
                    console.log("This is the token: " + token);
                    Session.setToken(token); 
                });
            }
            
            return authService;
        }
})();