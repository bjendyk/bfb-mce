/* global describe */
/* global it */
/* global beforeEach */
/* global module */
/* global expect */

describe('oxygen controller', function () {
    "use strict";
    
    var ctrl, deferred, $rootScope;

    beforeEach(module('bfbApp'));
    beforeEach(module('bfbApp.templates'));

    beforeEach(inject(function ($controller, $q, _$rootScope_, textContentService) {
        $rootScope = _$rootScope_;

        deferred = $q.defer();
        spyOn(textContentService, 'getOxygenContent').and.returnValue(deferred.promise);

        ctrl = $controller('OxygenCtrl', {
            textContentService: textContentService
        });
    }));

    it('should be properly instantiated', function () {
        expect(ctrl).toBeDefined();
    });

    it('should define 15 oxygen application items', function () {
        expect(ctrl.oxygenApplication.length).toEqual(15);
    });

    it('should obtain "oxygen" and "about" text content sections from textContentService', function () {
        deferred.resolve({
            oxygen: {},
            about: {}
        });

        $rootScope.$apply();

        expect(ctrl.sections.oxygen).toBeDefined();
        expect(ctrl.sections.about).toBeDefined();
    });

    it('should define 2 items for "oxygen" section', function () {
        deferred.resolve({
            oxygen: {
                items: [
                    {
                        image: 'img1',
                        content: 'content1'
                    },
                    {
                        image: 'img2',
                        content: 'content2'
                    }
                ]
            }
        });

        $rootScope.$apply();

        expect(ctrl.sections.oxygen.items.length).toEqual(2);
        expect(ctrl.sections.oxygen.items[0].image).toBeDefined();
        expect(ctrl.sections.oxygen.items[0].content).toBeDefined();
        expect(ctrl.sections.oxygen.items[1].image).toBeDefined();
        expect(ctrl.sections.oxygen.items[1].content).toBeDefined();
    });

    it('should define 3 items for "oxygen" section', function () {
        deferred.resolve({
            about: {
                items: [
                    {
                        image: 'img1',
                        content: 'content1'
                    },
                    {
                        image: 'img2',
                        content: 'content2'
                    },
                    {
                        image: "img3",
                        content: "content3"
                    }
                ]
            }
        });

        $rootScope.$apply();

        expect(ctrl.sections.about.items.length).toEqual(3);
        expect(ctrl.sections.about.items[0].image).toBeDefined();
        expect(ctrl.sections.about.items[0].content).toBeDefined();
        expect(ctrl.sections.about.items[1].image).toBeDefined();
        expect(ctrl.sections.about.items[1].content).toBeDefined();
        expect(ctrl.sections.about.items[2].image).toBeDefined();
        expect(ctrl.sections.about.items[2].content).toBeDefined();
    });
});
