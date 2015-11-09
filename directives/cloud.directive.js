(function() {
    "use strict";
    
    angular
        .module('APIChallenge')
        .directive('kjClouds', cloudFunction);
        
        function cloudFunction() {
            return {
                restrict: 'A',
                templateUrl: 'templates/clouds.html'
            };
        }
})();