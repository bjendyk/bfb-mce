/* global describe */
/* global it */
/* global beforeEach */
/* global module */
/* global expect */

describe('footer controller', function () {
    "use strict";
    
    var ctrl;

    beforeEach(module('bfbApp'));

    beforeEach(inject(function ($componentController) {
        ctrl = $componentController('bfbFooter', null);
    }));

    it('should be properly instantiated', function () {
        expect(ctrl).toBeDefined();
    });

    it('should present current year', function () {
        var thisYear = new Date().getFullYear();
        expect(ctrl.currentYear).toEqual(thisYear);
    });
});