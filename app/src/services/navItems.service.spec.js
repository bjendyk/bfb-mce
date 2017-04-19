/* global describe */
/* global beforeEach */
/* global it */
/* global inject */
/* global expect */

describe('navItemsService', function () {
    "use strict";

    var navItemsService;

    beforeEach(module('bfbApp'));

    beforeEach(inject(function (_navItemsService_) {
        navItemsService = _navItemsService_;
    }));

    it('should be properly instantiated', function () {
        expect(navItemsService).toBeDefined();
    });

    it('should expose 5 navigation items', function () {
        expect(navItemsService.getNavItems().length).toEqual(5);
    });
});