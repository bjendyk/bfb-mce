(function () {
    "use strict";

    angular.module('bfbApp').controller('PricingCtrl', function () {
        var ctrl = this;
        
        ctrl.bfbPricing = [
            {
                icon: 'assessment',
                title: 'Analiza przypadku i diagnoza biofeedback',
                price: 100
            },
            {
                icon: 'fitness_center',
                title: 'Sesja treningowa',
                price: 60
            }
        ];

        ctrl.oxygenPricing = [
            {
                icon: 'accessibility',
                title: 'Badanie wstępne',
                price: 0
            },
            {
                icon: 'offer',
                title: 'Maseczka tlenowa',
                price: 20
            },
            {
                icon: 'offer',
                title: 'Kaniula donosowa',
                price: 10
            },
            {
                icon: 'seat',
                title: '40 min. sesja',
                price: 20
            }
        ];
    });
})();
