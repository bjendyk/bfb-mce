/* global describe */
/* global it */
/* global beforeEach */
/* global module */
/* global expect */
/* spyOn */

describe('home controller', function () {
    "use strict";
    
    var ctrl, deferred, $controller, $cookies, $mdToast, $rootScope;

    beforeEach(module('bfbApp'));
    beforeEach(module('bfbApp.templates'));

    beforeEach(inject(function (_$controller_, _$cookies_, _$mdToast_, _$rootScope_, $q) {
        $controller = _$controller_;
        $cookies = _$cookies_;
        $mdToast = _$mdToast_;
        $rootScope = _$rootScope_;

        deferred = $q.defer();

        spyOn($mdToast, 'show').and.returnValue(deferred.promise);
    }));

    it('should be properly instantiated', function () {
        ctrl = $controller('HomeCtrl');
        expect(ctrl).toBeDefined();
    });

    it('should display a cookies banner if the cookie has not been saved', function () {
        spyOn($cookies, 'get').and.returnValue(false);

        ctrl = $controller('HomeCtrl');
        expect($mdToast.show).toHaveBeenCalled();
    });

    it('should not display a cookies banner if the cookie has been saved', function () {
        spyOn($cookies, 'get').and.returnValue(true);

        ctrl = $controller('HomeCtrl');
        expect($mdToast.show).not.toHaveBeenCalled();
    });

    it('should save a cookie when the cookie banner is dismissed', function () {
        var now = new Date(),
            exp = new Date(now.getFullYear()+1, now.getMonth(), now.getDate());

        spyOn($cookies, 'get').and.returnValue(false);
        spyOn($cookies, 'put');

        ctrl = $controller('HomeCtrl');
        expect($mdToast.show).toHaveBeenCalled();

        deferred.resolve();

        $rootScope.$apply();
        expect($cookies.put).toHaveBeenCalledWith('acceptCookieLaw', 'true', {expires: exp});
    });
});