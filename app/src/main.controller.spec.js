/* global describe */
/* global it */
/* global beforeEach */
/* global module */
/* global expect */

describe('main controller', function () {
    "use strict";
    
    var ctrl;

    beforeEach(module('bfbApp'));

    beforeEach(inject(function ($controller) {
        ctrl = $controller('MainCtrl');
    }));

    it('should be properly instantiated', function () {
        expect(ctrl).toBeDefined();
    });
});