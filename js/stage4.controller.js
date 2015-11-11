(function () {
    "use strict";

    angular
        .module("APIChallenge")
        .controller("Stage4Controller", Stage4Controller);

    Stage4Controller.$inject = ['ApiRestangular', 'Session', 'ChallengeService'];

    function Stage4Controller(ApiRestangular, Session, ChallengeService) {
        var sc4 = this;

        sc4.message = '';
        sc4.messageCode = '';
        sc4.datestamp = null;
        sc4.interval = null;
        sc4.newDatestamp = null;
        sc4.tryButton = tryButton;

        function tryButton() {
            var o = {};
            o.token = Session.getToken();
            console.log("This is o");
            console.log(o);
            if (o.token == undefined) {
                sc4.message = "Error Validating";
                sc4.messagecode = "danger";
            } else {
                sc4.message = "Fetching datestamp and interval";
                sc4.messageCode = "warning";
                ApiRestangular.time().post(o).then(function (r) {
                    sc4.message = 'Fetched datestamp and interval';
                    sc4.messageCode = "success";
                    console.log("I am fetching");
                    console.log(r);
                    sc4.datestamp = r.result.datestamp;
                    sc4.interval = r.result.interval;
                    sc4.message = "Finding new datestamp"
                    sc4.messageCode = "warning";
                    sc4.newDatestamp = ChallengeService.datingGame(sc4.datestamp, sc4.interval);
                    o.datestamp = sc4.newDatestamp;
                    sc4.messageCode = "warning";
                    sc4.message = "Validating new datestamp";
                    console.log('this is o now'); 
                    console.log(o);
                    ApiRestangular.validateTime().post(o).then(function (i) {
                        console.log("I am in here");
                        console.log(i);
                        sc4.messageCode = "success";
                        sc4.message = "DateTime + Interval Validated";
                    }, function (error) {
                        console.log(error);
                        sc4.message = "Error Validating";
                        sc4.messagecode = "danger";
                    });
                });
            }

        }
    }

})();