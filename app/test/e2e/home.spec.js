/* global browser */
/* global element */
/* global by */

describe('home view', function () {
    "use strict";

    beforeEach(function () {
        browser.get('http://localhost:3210');
    });

    it('should present 3 text content elements', function () {
        var textContent = element.all(by.repeater('textContentItem in ctrl.sections.welcome.items'));
        expect(textContent.count()).toEqual(3);
    });

    it('should display a cookie banner', function () {
        expect(element(by.css('div.md-toast-content')).isPresent()).toEqual(true);
    });

    it('should dismiss the cookie banner when the acknowledge button is clicked', function () {
        var button = element(by.css('div.md-toast-content > button'));
        expect(button.isPresent()).toEqual(true);
        
        button.click().then(function () {
            expect(element(by.css('div.md-toast-content')).isPresent()).toEqual(false);
        });
    });
});