/* global describe */
/* global beforeEach */
/* global it */
/* global inject */
/* global expect */

describe('contactService', function () {
    "use strict";

    var contactService;

    beforeEach(module('bfbApp'));

    beforeEach(inject(function (_contactService_) {
        contactService = _contactService_;
    }));

    it('should be properly instantiated', function () {
        expect(contactService).toBeDefined();
    });

    it('should expose 3 phone numbers', function () {
        expect(contactService.phones.bfb).toBeDefined();
        expect(contactService.phones.bfb.length).toEqual(2);
        expect(contactService.phones.oxygen).toBeDefined();
        expect(contactService.phones.oxygen.length).toEqual(1);
    });

    it('should expose 2 email addresses', function () {
        expect(contactService.emails).toBeDefined();
        expect(contactService.emails.bfb).toBeDefined();
        expect(contactService.emails.oxygen).toBeDefined();
    });

    it('should expose an address', function () {
        expect(contactService.address).toBeDefined();
    });
});