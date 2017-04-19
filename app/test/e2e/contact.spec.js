/* global browser */
/* global element */
/* global by */

describe('contact view', function () {
    "use strict";

    beforeEach(function () {
        browser.driver.manage().window().maximize();
        browser.get('http://localhost:3210/#!/contact');
    });

    it('should present a google maps element', function () {
        var elements = element.all(by.css('ng-map div.gmnoprint'));
        expect(elements.count()).toBeGreaterThan(0);
    });

    it('should present a single non-clickable button with biofeedback phone numbers for large screens', function () {
        var button = element(by.css('div#bfb-contact div.hide-sm button.md-primary'));
        expect(button.isDisplayed()).toEqual(true);
    });

    it('should present 2 href buttons with biofeedback phone numbers for small screens', function () {
        var buttons;
        
        browser.driver.manage().window().setSize(400, 800);
        buttons = element.all(by.css('div#bfb-contact div.hide-gt-sm a.md-primary[href^="tel:"]'));
        expect(buttons.count()).toEqual(2);
        expect(buttons.first().isDisplayed()).toEqual(true);
        expect(buttons.last().isDisplayed()).toEqual(true);
    });

    it('should present a single non-clickable button with oxygen phone number for large screens', function () {
        var button = element(by.css('div#oxygen-contact div.hide-sm button.md-primary'));
        expect(button.isDisplayed()).toEqual(true);
    });

    it('should present a single href button with oxygen phone number for small screens', function () {
        var button;
        
        browser.driver.manage().window().setSize(400, 800);
        button = element(by.css('div#oxygen-contact div.hide-gt-sm a.md-primary[href^="tel:"]'));
        expect(button.isDisplayed()).toEqual(true);
    });
});