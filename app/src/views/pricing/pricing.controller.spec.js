/* global describe */
/* global it */
/* global beforeEach */
/* global module */
/* global expect */

describe('pricing controller', function () {
    "use strict";
    
    var ctrl;

    beforeEach(module('bfbApp'));

    beforeEach(inject(function ($controller) {
        ctrl = $controller('PricingCtrl');
    }));

    it('should be properly instantiated', function () {
        expect(ctrl).toBeDefined();
    });

    it('should define 2 items for biofeedback, 4 items for oxygen', function () {
        expect(ctrl.bfbPricing.length).toEqual(2);
        expect(ctrl.oxygenPricing.length).toEqual(4);
    });
});