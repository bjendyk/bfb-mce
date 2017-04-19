/* global describe */
/* global it */
/* global beforeEach */
/* global module */
/* global expect */

describe('smooth scroller controller', function () {
    "use strict";
    
    var ctrl;

    beforeEach(module('bfbApp'));

    beforeEach(inject(function ($componentController) {
        var bindings = {
            title: 'my title',
            target: 'my target'
        };
        ctrl = $componentController('bfbSmoothScroller', null, bindings);
    }));

    it('should be properly instantiated', function () {
        expect(ctrl).toBeDefined();
    });

    it('should have its parameters bound correctly', function () {
        expect(ctrl.title).toEqual('my title');
        expect(ctrl.target).toEqual('my target');
    });
});