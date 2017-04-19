(function () {
    "use strict";

    function component() {
        return {
            templateUrl: 'templates/components/footer/footer.tpl.html',
            controller: function () {
                var ctrl = this;
                ctrl.currentYear = new Date().getFullYear();
            }
        };
    }

    angular.module('bfbApp').component('bfbFooter', component());
})();