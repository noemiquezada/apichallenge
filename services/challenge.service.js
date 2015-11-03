(function () {
    'use strict';

    angular
        .module('APIChallenge')
        .service('ChallengeService', ChallengeService);

    ChallengeService.$inject = [];

    function ChallengeService() {
        var vm = this;

        vm.reverseString = reverseString;

        function reverseString(str) {
            var reverseStr = '';
            for (var i = str.length - 1; i > -1; i--) {
                reverseStr += str[i];
            }
            return reverseStr;
        }
    }
})();