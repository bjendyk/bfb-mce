(function () {
    "use strict";

    angular.module('bfbApp').controller('SidenavCtrl', function(contactService) {
        var ctrl = this;

        ctrl.address = contactService.address;
        ctrl.bfbPhone1 = contactService.phones.bfb[0];
        ctrl.bfbPhone2 = contactService.phones.bfb[1];
        ctrl.oxyPhone = contactService.phones.oxygen[0];
    });
})();