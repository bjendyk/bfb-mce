/* global browser */
/* global element */
/* global by */

describe('oxygen view', function () {
    "use strict";

    beforeEach(function () {
        browser.get('http://localhost:3210/#!/oxygen');
    });

    it('should present 2 text content elements in "oxygen" section', function () {
        var textContentItems = element.all(by.repeater('textContentItem in ctrl.sections.oxygen.items'));
        expect(textContentItems.count()).toEqual(2);
    });

    it('should present 3 text content elements in "about" section', function () {
        var textContent = element.all(by.repeater('textContentItem in ctrl.sections.about.items'));
        expect(textContent.count()).toEqual(3);
    });

    it('should present 15 elements in "oxygenApplication" repeater', function () {
        var elements = element.all(by.repeater('item in ctrl.oxygenApplication'));
        expect(elements.count()).toEqual(15);
    });
});