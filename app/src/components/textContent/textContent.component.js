(function () {
    "use strict";

    function component() {
        return {
            templateUrl: 'templates/components/textContent/textContent.tpl.html',
            bindings: {
                item: '=',
                isAlternate: '='
            },
            controller: function () {
                var ctrl = this;

                ctrl.$onInit = function () {
                    // order used by layout-gt-xs
                    ctrl.imageOrderInRow = ctrl.isAlternate ? 1 : 0;
                    ctrl.textOrderInRow = ctrl.isAlternate ? 0 : 1;
                };
            }
        };
    }

    angular.module('bfbApp').component('textContent', component());
})();
