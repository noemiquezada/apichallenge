(function() {
    'use strict';
    
    angular
        .module('APIChallenge')
        .controller('ChallengeController', ChallengeController);

    ChallengeController.$inject = [];
    
    function ChallengeController() {
        var vm = this;
        
        vm.credentials = {
            email: '',
            url: '';
        };
    }
})();