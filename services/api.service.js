(function() {
    'use strict';
    
    angular
        .module('APIChallenge')
        .factory('Api', Api);
    
    Api.$inject = ['Restangular'];
    
    function Api (Restangular) {
        var service = {
            register: register,
            getString: getString,
            validateString: validateString,
            haystack: haystack,
            validateNeedle: validateNeedle,
            prefix: prefix,
            validatePrefix: validatePrefix,
            time: time,
            validateTime: validateTime
        };
        
        return service;
        
        function register() {
            return Restangular.service('register');
        }
        
        function getString() {
            return Restangular.service('getstring');
        }
        
        function validateString() {
            return Restangular.service('validatestring');
        }
        
        function haystack() {
            return Restangular.service('haystack');
        }
        
        function validateNeedle() {
            return Restangular.service('validateneedle');
        }
        
        function prefix() {
            return Restangular.service('prefix');
        }
        
        function validatePrefix() {
            return Restangular.service('validateprefix');
        }
        
        function time() {
            return Restangular.service('time');
        }
        
        function validateTime() {
            return Restangular.service('validatetime');
        }
    }
    
})();