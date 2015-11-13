/* 
Name: Session Service
Description: Service that creates an abstraction for registration and access to sessionStorage, which houses the token that is used in all Api requests. 
*/

(function(){
    "use strict";
    
    angular
        .module('APIChallenge')
        .service('Session', Session);
    
    Session.$inject = ['$sessionStorage']
    
    function Session($sessionStorage) {
        
        var vm = this;
        
        vm.setToken = setToken;
        vm.getToken = getToken;
        vm.clearToken = clearToken;
        
        function setToken(token) {
            $sessionStorage.$default({
                token: token
            });
        }
        
        function getToken() {
            return $sessionStorage.token;
        }
        
        function clearToken() {
            $sessionStorage.token = "";
        }

    }
})();