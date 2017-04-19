(function () {
    "use strict";

    angular.module('bfbApp').controller('HomeCtrl', function ($mdToast, $cookies, textContentService) {
        var ctrl = this;
        var showCookieToast = !$cookies.get('acceptCookieLaw');
        var toast;

        if (showCookieToast) {
            toast = $mdToast.simple()
                .textContent(
                    'Korzystając z tej strony wyrażasz zgodę na przechowywanie ciasteczek na Twoim urządzeniu.')
                .action('Rozumiem')
                .highlightAction(true)
                .highlightClass('md-accent')
                .position('top right')
                .hideDelay(0);

            $mdToast.show(toast).then(function () {
                var now = new Date(),
                exp = new Date(now.getFullYear()+1, now.getMonth(), now.getDate());

                $cookies.put('acceptCookieLaw', 'true', {expires: exp});
            });
        }

        textContentService.getHomeContent().then(function (content) {
            ctrl.sections = content;
        });
    });
})();