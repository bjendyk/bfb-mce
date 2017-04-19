(function () {
    "use strict";

    angular.module('bfbApp').controller('MainCtrl', function ($mdSidenav, $state, navItemsService) {
        var ctrl = this;

        ctrl.toggleSidenav = function (id) {
            $mdSidenav(id).toggle();
        };

        ctrl.navigateTo = function (item) {
            ctrl.currentNavItem = item.state;
            $state.go(item.state);
        };

        ctrl.navItems = navItemsService.getNavItems();
        ctrl.currentNavItem = ctrl.navItems[0].state;
        ctrl.currentYear = new Date().getFullYear();
    });
})();