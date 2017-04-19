/* global describe */
/* global beforeEach */
/* global it */
/* global inject */
/* global expect */

describe('textContentService', function () {
    "use strict";

    var textContentService, $httpBackend, VIEW;

    beforeEach(module('bfbApp'));
    beforeEach(module('bfbApp.templates'));

    beforeEach(inject(function (_textContentService_, _$httpBackend_, _VIEW_) {
        textContentService = _textContentService_;
        $httpBackend = _$httpBackend_;
        VIEW = _VIEW_;
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should expose an API', function () {
        expect(typeof(textContentService.getHomeContent)).toEqual('function');
        expect(typeof(textContentService.getBiofeedbackContent)).toEqual('function');
        expect(typeof(textContentService.getOxygenContent)).toEqual('function');
    });

    it('should fetch home text content', function () {
        var requestUrl = VIEW.HOME + '/textContent.json';

        $httpBackend.when('GET', requestUrl).respond({});
        $httpBackend.expectGET(requestUrl);

        textContentService.getHomeContent();
        $httpBackend.flush();
    });

    it('should fetch biofeedback text content', function () {
        var requestUrl = VIEW.BIOFEEDBACK + '/textContent.json';

        $httpBackend.when('GET', requestUrl).respond({});
        $httpBackend.expectGET(requestUrl);

        textContentService.getBiofeedbackContent();
        $httpBackend.flush();
    });

    it('should fetch oxygen text content', function () {
        var requestUrl = VIEW.OXYGEN + '/textContent.json';

        $httpBackend.when('GET', requestUrl).respond({});
        $httpBackend.expectGET(requestUrl);

        textContentService.getOxygenContent();
        $httpBackend.flush();
    });

    it('should return the text content as a response', function () {
        var requestUrl = VIEW.HOME + '/textContent.json';
        var response = {content: 'text content'};

        $httpBackend.when('GET', requestUrl).respond(response);
        $httpBackend.expectGET(requestUrl);

        textContentService.getHomeContent().then(function (result) {
            expect(result).toEqual(response);
        });
        $httpBackend.flush();
    });
});