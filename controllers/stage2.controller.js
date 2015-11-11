(function () {
    "use strict";

    angular
        .module("APIChallenge")
        .controller("Stage2Controller", Stage2Controller);

    Stage2Controller.$inject = ['ApiRestangular', 'Session', 'ChallengeService'];

    function Stage2Controller(ApiRestangular, Session, ChallengeService) {
        var sc2 = this;

        sc2.message = '';
        sc2.messageCode = '';
        sc2.needle = '';
        sc2.haystack = [];
        sc2.index = null;
        sc2.tryButton = tryButton;

        function tryButton() {
            var o = {};
            o.token = Session.getToken();
            if (o.token == undefined) {
                sc2.message = "Error Validating";
                sc2.messagecode = "danger";
            } else {
                sc2.message = "Fetching Needle and Haystack";
                sc2.messageCode = "warning";
                ApiRestangular.haystack().post(o).then(function (r) {
                    sc2.message = 'Fetched Needle and Haystack';
                    sc2.messageCode = "success";
                    sc2.needle = r.result.needle;
                    sc2.haystack = r.result.haystack;
                    sc2.message = "Finding needle in the haystack"
                    sc2.messageCode = "warning";
                    sc2.index = ChallengeService.needleInAHaystack(sc2.needle, sc2.haystack);
                    o.needle = sc2.index;
                    sc2.messageCode = "warning";
                    sc2.message = "Validating Needle";
                    ApiRestangular.validateNeedle().post(o).then(function (i) {
                        sc2.messageCode = "success";
                        sc2.message = "Needle Validated";
                    }, function (error) {
                        sc2.message = "Error Validating";
                        sc2.messagecode = "danger";
                    });
                });
            }

        }
    }

})();