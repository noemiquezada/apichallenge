(function() {
    'use strict';
    
    angular
        .module('APIChallenge')
        .controller('ChallengeController', ChallengeController);

    ChallengeController.$inject = ['ChallengeService'];
    
    function ChallengeController(ChallengeService) {
        console.log(ChallengeService.reverseString('cupcake'));
        console.log(ChallengeService.needleInAHaystack('cupcake', ['mayonaise', 'cake', 'oreos', 'red velvet cake', 'cupcake', 'cheerios', 'raspberries']));
        console.log(ChallengeService.prefix('dis', ['disagree', 'impatient', 'disarm', 'misbehave', 'mislay', 'disobey', 'disown', 'pretest', 'agreedis', 'adisrm']));
        console.log(ChallengeService.datingGame("2010-01-13T18:31:16Z", 60));
        
    }
})();