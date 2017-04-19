(function () {
    "use strict";

    angular.module('bfbApp')

    .constant('VIEW', {
            HOME: './content/home',
            BIOFEEDBACK: './content/biofeedback',
            OXYGEN: './content/oxygen'
    })

    .factory('textContentService', function ($q, $http, VIEW) {

        return {
            getOxygenContent: getOxygenContent,
            getBiofeedbackContent: getBiofeedbackContent,
            getHomeContent: getHomeContent
        };

        ///////////////////////////////
        function getContent(viewPath) {
            var deferred = $q.defer();

            $http.get(viewPath + '/textContent.json').then(function (response) {
                deferred.resolve(response.data);
            }, function () {
                deferred.reject();
            });

            return deferred.promise;
        }

        function getBiofeedbackContent() {
            return getContent(VIEW.BIOFEEDBACK);
        }

        function getOxygenContent() {
            return getContent(VIEW.OXYGEN);
        }

        function getHomeContent() {
            return getContent(VIEW.HOME);
        }
    });
})();