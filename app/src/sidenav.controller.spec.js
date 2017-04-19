/* global describe */
/* global it */
/* global beforeEach */
/* global module */
/* global expect */

describe('sidenav controller', function () {
    "use strict";
    
    var ctrl;

    beforeEach(module('bfbApp'));

    beforeEach(inject(function ($controller) {
        ctrl = $controller('SidenavCtrl');
    }));

    it('should be properly instantiated', function () {
        expect(ctrl).toBeDefined();
    });

    it('should expose 3 phones', function () {
        expect(ctrl.bfbPhone1).toBeDefined();
        expect(ctrl.bfbPhone2).toBeDefined();
        expect(ctrl.oxyPhone).toBeDefined();
    });
});