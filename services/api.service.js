/* 
Name: ApiRestangular Service
Description: Decoupling Restangular Service from Controllers by creating custom service to hide Restangular object from anywhere. This ApiRestangular service also configures the Restangular service to point the code2040. 
*/

(function() {
    'use strict';
    
    angular
        .module('APIChallenge')
        .factory('ApiRestangular', Api);
    
    Api.$inject = ['Restangular'];
    
    function Api (Restangular) {
        
        Restangular.setBaseUrl('http://challenge.code2040.org/api');

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
            return Restangular.all('register');
        }
        
        function getString() {
            return Restangular.all('getstring');
        }
        
        function validateString() {
            return Restangular.all('validatestring');
        }
        
        function haystack() {
            return Restangular.all('haystack');
        }
        
        function validateNeedle() {
            return Restangular.all('validateneedle');
        }
        
        function prefix() {
            return Restangular.all('prefix');
        }
        
        function validatePrefix() {
            return Restangular.all('validateprefix');
        }
        
        function time() {
            return Restangular.all('time');
        }
        
        function validateTime() {
            return Restangular.all('validatetime');
        }
    }
    
})();