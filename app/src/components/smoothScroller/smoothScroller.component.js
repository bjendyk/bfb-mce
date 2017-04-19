(function () {
    "use strict";

    function component() {
        return {
            templateUrl: 'templates/components/smoothScroller/smoothScroller.tpl.html',
            bindings: {
                title: '@',
                target: '@'
            }
        };
    }

    angular.module('bfbApp').component('bfbSmoothScroller', component());
})();