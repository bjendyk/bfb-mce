/* global describe */
/* global it */
/* global beforeEach */
/* global module */
/* global expect */

describe('textContent component', function () {
    "use strict";
    
    var ctrl, bindings, $componentController;

    beforeEach(module('bfbApp'));

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;

        bindings = {
            item: {
                image: 'img1',
                content: 'content1'
            },
            isAlternate: false
        };
    }));

    it('should be properly instantiated', function () {
        ctrl = $componentController('textContent', null, bindings);
        expect(ctrl).toBeDefined();
    });

    it('should have its parameters bound correctly', function () {
        ctrl = $componentController('textContent', null, bindings);
        expect(ctrl.isAlternate).toEqual(false);
        expect(ctrl.item).toBeDefined();
        expect(ctrl.item.image).toEqual('img1');
        expect(ctrl.item.content).toEqual('content1');
    });

    it('should order image 1st, text 2nd if "isAlternate" is false', function () {
        bindings.isAlternate = false;
        ctrl = $componentController('textContent', null, bindings);
        ctrl.$onInit();

        expect(ctrl.imageOrderInRow).toEqual(0);
        expect(ctrl.textOrderInRow).toEqual(1);
    });

    it('should order text 1st, image 2nd if "isAlternate" is true', function () {
        bindings.isAlternate = true;
        ctrl = $componentController('textContent', null, bindings);
        ctrl.$onInit();

        expect(ctrl.textOrderInRow).toEqual(0);
        expect(ctrl.imageOrderInRow).toEqual(1);
    });
});