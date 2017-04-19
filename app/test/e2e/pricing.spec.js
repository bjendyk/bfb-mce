/* global browser */
/* global element */
/* global by */

describe('pricing view', function () {
    "use strict";

    beforeEach(function () {
        browser.get('http://localhost:3210/#!/pricing');
    });

    it('should present 2 pricing items for biofeedback', function () {
        var elements = element.all(by.repeater('item in ctrl.bfbPricing'));
        expect(elements.count()).toEqual(2);
    });

    it('should present 4 pricing items and a helper text for oxygen', function () {
        var elements = element.all(by.repeater('item in ctrl.oxygenPricing'));
        expect(elements.count()).toEqual(4);
        expect(element(by.css('div.pricing-info div.info-text')).isPresent()).toEqual(true);
    });
});