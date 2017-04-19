(function () {
    "use strict";

    angular.module('bfbApp').factory('navItemsService', function (STATE) {
        var items = [
            {
                state: STATE.HOME.name,
                name: STATE.HOME.displayName
            },
            {
                state: STATE.BIOFEEDBACK.name,
                name: STATE.BIOFEEDBACK.displayName
            },
            {
                state: STATE.OXYGEN.name,
                name: STATE.OXYGEN.displayName,
            },
            {
                state: STATE.PRICING.name,
                name: STATE.PRICING.displayName
            },
            {
                state: STATE.CONTACT.name,
                name: STATE.CONTACT.displayName
            }
        ];

        return {
            getNavItems: getNavItems    
        };

        function getNavItems() {
            return items;
        }
    });
})();
