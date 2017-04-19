/* global describe */
/* global it */
/* global beforeEach */
/* global module */
/* global expect */

describe('biofeedback controller', function () {
    "use strict";

    var ctrl, deferred, $rootScope;

    beforeEach(module('bfbApp'));
    beforeEach(module('bfbApp.templates'));

    beforeEach(inject(function ($controller, $q, _$rootScope_, textContentService) {
        $rootScope = _$rootScope_;
        deferred = $q.defer();

        spyOn(textContentService, 'getBiofeedbackContent').and.returnValue(deferred.promise);

        ctrl = $controller('BiofeedbackCtrl', {
            textContentService: textContentService
        });
    }));

    it('should be properly instantiated', function () {
        expect(ctrl).toBeDefined();
    });

    it('should contain 4 application items', function () {
        expect(ctrl.bfbApplications.length).toEqual(4);
    });

    it('should contain 2 timing items', function () {
        expect(ctrl.bfbTiming.length).toEqual(2);
    });

    it('should contain 4 target items', function () {
        expect(ctrl.bfbTarget.length).toEqual(4);
    });

    it('should obtain "biofeedback", "about" and "training" text content sections from textContentService',
        function () {
            deferred.resolve({
                biofedback: {},
                about: {},
                training: {}
            });

            $rootScope.$apply();

            expect(ctrl.sections.biofedback).toBeDefined();
            expect(ctrl.sections.about).toBeDefined();
            expect(ctrl.sections.training).toBeDefined();
        });

    it('should define one item for each text content section', function () {
        deferred.resolve({
            biofeedback: {
                items: [
                    {
                        image: 'img1',
                        content: 'content1'
                    }
                ]
            },
            about: {
                items: [
                    {
                        image: 'img2',
                        content: 'content2'
                    }
                ]
            },
            training: {
                items: [
                    {
                        image: 'img3',
                        content: 'content3'
                    }
                ]
            }
        });

        $rootScope.$apply();

        expect(ctrl.sections.biofeedback.items.length).toEqual(1);
        expect(ctrl.sections.about.items.length).toEqual(1);
        expect(ctrl.sections.training.items.length).toEqual(1);

        expect(ctrl.sections.biofeedback.items[0].image).toBeDefined();
        expect(ctrl.sections.biofeedback.items[0].content).toBeDefined();
        expect(ctrl.sections.about.items[0].image).toBeDefined();
        expect(ctrl.sections.about.items[0].content).toBeDefined();
        expect(ctrl.sections.training.items[0].image).toBeDefined();
        expect(ctrl.sections.training.items[0].content).toBeDefined();
    });
});