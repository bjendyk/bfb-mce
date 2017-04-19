(function () {
    "use strict";
    
    angular.module('bfbApp').factory('contactService', function () {
        var bfbPhones = [
            {
                phone: '+48502772447',
                display: '+48 502 772 447'
            },
            {
                phone: '+48500150426',
                display: '+48 500 150 426'
            }
        ];

        var bfbEmail = 'biofeedback.myslowice@o2.pl';
        var oxygenEmail = 'terapia.tlenowa@o2.pl';

        var oxygenPhones = [
            {
                phone: '+48509744083',
                display: '+48 509 744 083'
            }
        ];

        var address = 'MYSŁOWICE, Wojska&nbsp;Polskiego&nbsp;7';

        var svc = {
            phones: {
                bfb: bfbPhones,
                oxygen: oxygenPhones
            },
            emails: {
                bfb: bfbEmail,
                oxygen: oxygenEmail
            },
            address: address
        };

        return svc;
    });
})();
