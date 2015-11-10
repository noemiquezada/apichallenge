(function () {
    "use strict";

    angular
        .module("APIChallenge")
        .controller("Stage1Controller", Stage1Controller);

    Stage1Controller.$inject = ['ApiRestangular', 'Session', 'ChallengeService'];

    function Stage1Controller(ApiRestangular, Session, ChallengeService) {
        var sc = this;

        sc.message = '';
        sc.messageCode = '';
        sc.word = '';
        sc.reverseWord = '';
        sc.tryButton = tryButton;

        function tryButton() {
            var o = {};
            o.token = Session.getToken();
            console.log("This is o");
            console.log(o);
            if (o.token == undefined) {
                sc.message = "Error Validating";
                sc.messagecode = "danger";
            } else {
                sc.message = "Fetching word";
                sc.messageCode = "warning";
                ApiRestangular.getString().post(o).then(function (str) {
                    sc.message = 'Fetched Word';
                    sc.messageCode = "success";
                    sc.word = str.result;
                    sc.message = "Reversing String"
                    sc.messageCode = "warning";
                    sc.reverseWord = ChallengeService.reverseString(sc.word);
                    o.string = sc.reverseWord;
                    sc.messageCode = "warning";
                    sc.message = "Validating String";
                    console.log('this is o now'); 
                    console.log(o);
                    ApiRestangular.validateString().post(o).then(function (str) {
                        console.log("I am in here");
                        console.log(str);
                        sc.messageCode = "success";
                        sc.message = "String Validated";
                    }, function (error) {
                        sc.message = "Error Validating";
                        sc.messagecode = "danger";
                    });
                });
            }

        }
    }

})();