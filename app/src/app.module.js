(function () {
    "use strict";

    angular.module('bfbApp',
        ['ngMaterial', 'ui.router', 'ngCookies', 'ngMap', 'ngSanitize', 'duScroll'])

        .constant('GMAPS_API_KEY', '_GMAPS_API_KEY_')

        .constant('STATE', {
            HOME: {
                name: 'home',
                path: '/home',
                templateUrl: 'templates/views/home/home.tpl.html',
                controller: 'HomeCtrl as ctrl',
                displayName: 'Start'
            },
            CONTACT: {
                name: 'contact',
                path: '/contact',
                templateUrl: 'templates/views/contact/contact.tpl.html',
                controller: 'ContactCtrl as ctrl',
                displayName: 'Kontakt'
            },
            PRICING: {
                name: 'pricing',
                path: '/pricing',
                templateUrl: 'templates/views/pricing/pricing.tpl.html',
                controller: 'PricingCtrl as ctrl',
                displayName: 'Cennik'
            },
            OXYGEN: {
                name: 'oxygen',
                path: '/oxygen',
                templateUrl: 'templates/views/oxygen/oxygen.tpl.html',
                controller: 'OxygenCtrl as ctrl',
                displayName: 'Terapia tlenowa'
            },
            BIOFEEDBACK: {
                name: 'biofeedback',
                path: '/biofeedback',
                templateUrl: 'templates/views/biofeedback/biofeedback.tpl.html',
                controller: 'BiofeedbackCtrl as ctrl',
                displayName: 'Biofeedback'
            }
        })

        .config(function($mdThemingProvider, $stateProvider, STATE, $qProvider) {

            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('light-blue');

            $stateProvider.state(STATE.HOME.name, {
                url:         STATE.HOME.path,
                templateUrl: STATE.HOME.templateUrl,
                controller:  STATE.HOME.controller
            });

            $stateProvider.state(STATE.BIOFEEDBACK.name, {
                url:         STATE.BIOFEEDBACK.path,
                templateUrl: STATE.BIOFEEDBACK.templateUrl,
                controller:  STATE.BIOFEEDBACK.controller
            });

            $stateProvider.state(STATE.OXYGEN.name, {
                url:         STATE.OXYGEN.path,
                templateUrl: STATE.OXYGEN.templateUrl,
                controller:  STATE.OXYGEN.controller
            });

            $stateProvider.state(STATE.PRICING.name, {
                url:         STATE.PRICING.path,
                templateUrl: STATE.PRICING.templateUrl,
                controller:  STATE.PRICING.controller
            });

            $stateProvider.state(STATE.CONTACT.name, {
                url:         STATE.CONTACT.path,
                templateUrl: STATE.CONTACT.templateUrl,
                controller:  STATE.CONTACT.controller
            });

            $qProvider.errorOnUnhandledRejections(false);
        })
        
        .run(function ($state, STATE) {
            $state.go(STATE.HOME.name);
        });
})();
