/* 
Name: Challenge Service
Description: Service that houses methods that map to the stages of the API Challenge.
Stage 1 : Reverse a String
Stage 2 : Needle in a Haystack
Stage 3 : Prefix
Stage 4 : The Dating Game
*/
(function () {
    'use strict';

    angular
        .module('APIChallenge')
        .service('ChallengeService', ChallengeService);

    ChallengeService.$inject = [];

    function ChallengeService() {
        var vm = this;

        vm.reverseString = reverseString;
        vm.needleInAHaystack = needleInAHaystack;
        vm.prefix = prefix;
        vm.datingGame = datingGame;

        // Stage 1
        function reverseString(str) {
            var reverseStr = '';
            // Starting from the back to the front
            for (var i = str.length - 1; i > -1; i--) {
                // Append to new string
                reverseStr += str[i];
            }
            return reverseStr;
        }
        
        // Stage 2
        function needleInAHaystack(needle, haystack) {
            // Search for needle string in haystack 
            for (var i = 0; i < haystack.length; i++) {
                // If needle is found in haystack return index
                if (needle === haystack[i]) {
                    return i; 
                }
            }
            // Else return 01
            return -1;
        }
        
        // Stage 3
        function prefix(prfx, strs) {
            // Empty array
            var notPrefixedStrs = [];
            // Loop through array of strings
            for (var i = 0; i < strs.length; i++) {
                // If a string starts with prfx ignore
                if (strs[i].search(prfx) != 0) {
                    // Append to empty array
                    notPrefixedStrs.push(strs[i]);
                }
            }
            // Return empty array
            return notPrefixedStrs; 
        }
        
        // Stage 4
        function datingGame (datestamp, interval) {
            // Create date object from datestamp
            var datestampObject = new Date(datestamp);
            // Add interval
            datestampObject.setSeconds(datestampObject.getSeconds() + interval);
            //return dateObject in ISO
            return datestampObject.toISOString();
        }
    }
})();