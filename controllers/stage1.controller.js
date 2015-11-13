(function () {
    "use strict";

    angular
        .module("APIChallenge")
        .controller("Stage1Controller", Stage1Controller);

    Stage1Controller.$inject = ['ApiRestangular', 'Session', 'ChallengeService'];

    function Stage1Controller(ApiRestangular, Session, ChallengeService) {
        var sc1 = this;

        sc1.message = '';
        sc1.messageCode = '';
        sc1.word = '';
        sc1.reverseWord = '';
        sc1.tryButton = tryButton;

        function tryButton() {
            var o = {};
            o.token = Session.getToken();
            if (o.token == undefined) {
                sc1.message = "Error Validating";
                sc1.messagecode = "danger";
            } else {
                sc1.message = "Fetching word";
                sc1.messageCode = "warning";
                ApiRestangular.getString().post(o).then(function (str) {
                    sc1.message = 'Fetched Word';
                    sc1.messageCode = "success";
                    sc1.word = str.result;
                    sc1.message = "Reversing String"
                    sc1.messageCode = "warning";
                    sc1.reverseWord = ChallengeService.reverseString(sc1.word);
                    o.string = sc1.reverseWord;
                    sc1.messageCode = "warning";
                    sc1.message = "Validating String";
                    ApiRestangular.validateString().post(o).then(function (str) {
                        sc1.messageCode = "success";
                        sc1.message = "String Validated";
                    }, function (error) {
                        sc1.message = "Error Validating";
                        sc1.messagecode = "danger";
                    });
                });
            }

        }
    }

})();