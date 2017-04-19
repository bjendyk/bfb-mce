/* global describe */
/* global it */
/* global beforeEach */
/* global module */
/* global expect */

describe('contact controller', function () {
    "use strict";
    
    var ctrl;

    beforeEach(module('bfbApp'));

    beforeEach(module(function ($provide) {
        $provide.value('contactService', {
            phones: {
                bfb: [
                    {
                        display: 'phone1',
                        phone: 'phone1'
                    },
                    {
                        display: 'phone2',
                        phone: 'phone2'
                    }
                ],
                oxygen: [
                    {
                        display: 'phone3',
                        phone: 'phone3'
                    }
                ]
            },
            address: 'address',
            emails: {
                bfb: 'email1',
                oxygen: 'email2'
            }
        });
    }));

    beforeEach(inject(function ($controller) {
        ctrl = $controller('ContactCtrl');
    }));

    it('should be properly instantiated', function () {
        expect(ctrl).toBeDefined();
    });

    it('should set up google maps', function () {
        expect(ctrl.googleMapsUrl).toContain('maps.googleapis.com');
        expect(ctrl.mapOptions).toBeDefined();
    });

    it('should set up telephone numbers', function () {
        expect(ctrl.bfbPhone1).toBeDefined();
        expect(ctrl.bfbPhone1.phone).toEqual('phone1');
        expect(ctrl.bfbPhone1.display).toEqual('phone1');
        expect(ctrl.bfbPhone2).toBeDefined();
        expect(ctrl.bfbPhone2.phone).toEqual('phone2');
        expect(ctrl.bfbPhone2.display).toEqual('phone2');
        expect(ctrl.oxygenPhone).toBeDefined();
        expect(ctrl.oxygenPhone.phone).toEqual('phone3');
        expect(ctrl.oxygenPhone.display).toEqual('phone3');
    });

    it('should set up email addresses', function () {
        expect(ctrl.bfbEmail).toEqual('email1');
        expect(ctrl.oxygenEmail).toEqual('email2');
    });

    it('should set up an address', function () {
        expect(ctrl.address).toEqual('address');
    });
});