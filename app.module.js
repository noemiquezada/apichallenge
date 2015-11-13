/* Single page application initiation, injecting the following modules: 
ngRoute
ngStorage
Restangular 
*/

(function() {
    angular
        .module('APIChallenge', [
            'ngRoute',
            'ngStorage', 
            'restangular'
        ]);
})();