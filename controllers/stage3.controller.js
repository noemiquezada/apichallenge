(function () {
    "use strict";

    angular
        .module("APIChallenge")
        .controller("Stage3Controller", Stage3Controller);

    Stage3Controller.$inject = ['ApiRestangular', 'Session', 'ChallengeService'];

    function Stage3Controller(ApiRestangular, Session, ChallengeService) {
        var sc3 = this;

        sc3.message = '';
        sc3.messageCode = '';
        sc3.prefix = '';
        sc3.array = [];
        sc3.index = [];
        sc3.tryButton = tryButton;

        function tryButton() {
            var o = {};
            o.token = Session.getToken();
            console.log("This is o");
            console.log(o);
            if (o.token == undefined) {
                sc3.message = "Error Validating";
                sc3.messagecode = "danger";
            } else {
                sc3.message = "Fetching prefix and array";
                sc3.messageCode = "warning";
                ApiRestangular.prefix().post(o).then(function (r) {
                    sc3.message = 'Fetched prefix and array';
                    sc3.messageCode = "success";
                    console.log("I am fetching");
                    console.log(r);
                    sc3.prefix = r.result.prefix;
                    sc3.array = r.result.array;
                    sc3.message = "Finding prefix in the array"
                    sc3.messageCode = "warning";
                    sc3.resultArray = ChallengeService.prefix(sc3.prefix, sc3.array);
                    o.array = sc3.resultArray;
                    sc3.messageCode = "warning";
                    sc3.message = "Validating prefix";
                    console.log('this is o now'); 
                    console.log(o);
                    ApiRestangular.validatePrefix().post(o).then(function (i) {
                        console.log("I am in here");
                        console.log(i);
                        sc3.messageCode = "success";
                        sc3.message = "Prefix Validated";
                    }, function (error) {
                        console.log(error);
                        sc3.message = "Error Validating";
                        sc3.messagecode = "danger";
                    });
                });
            }

        }
    }

})();