/* global browser */
/* global element */
/* global by */

describe('biofeedback view', function () {
    "use strict";

    beforeEach(function () {
        browser.get('http://localhost:3210/#!/biofeedback');
    });

    it('should present 3 text content elements in "biofeedback" section', function () {
        var textContent = element.all(by.repeater('textContentItem in ctrl.sections.biofeedback.items'));
        expect(textContent.count()).toEqual(3);
    });

    it('should present 2 text content elements in "about" section', function () {
        var textContent = element.all(by.repeater('textContentItem in ctrl.sections.about.items'));
        expect(textContent.count()).toEqual(2);
    });

    it('should present 2 text content elements in "training" section', function () {
        var textContent = element.all(by.repeater('textContentItem in ctrl.sections.training.items'));
        expect(textContent.count()).toEqual(2);
    });

    it('should present 4 elements in "bfbTarget" repeater', function () {
        var elements = element.all(by.repeater('item in ctrl.bfbTarget'));
        expect(elements.count()).toEqual(4);
    });

    it('should present 4 elements in "bfbApplications" repeater', function () {
        var elements = element.all(by.repeater('item in ctrl.bfbApplications'));
        expect(elements.count()).toEqual(4);
    });
});