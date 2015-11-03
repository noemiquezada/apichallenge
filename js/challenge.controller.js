(function() {
    'use strict';
    
    angular
        .module('APIChallenge')
        .controller('ChallengeController', ChallengeController);

    ChallengeController.$inject = ['ChallengeService'];
    
    function ChallengeController(ChallengeService) {
        var vm = this;
        
        vm.credentials = {
            email: '',
            url: ''
        };
        
        vm.register = register;
        
        function register(credentials) {}
        console.log(ChallengeService.reverseString('cupcake'));
        console.log(ChallengeService.needleInAHaystack('cupcake', ['mayonaise', 'cake', 'oreos', 'red velvet cake', 'cupcake', 'cheerios', 'raspberries']));
        
    }
})();