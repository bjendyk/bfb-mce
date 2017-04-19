(function () {
    "use strict";
    
    angular.module('bfbApp').controller('ContactCtrl', function (contactService, GMAPS_API_KEY) {
        var ctrl = this;

        ctrl.bfbPhone1   = contactService.phones.bfb[0];
        ctrl.bfbPhone2   = contactService.phones.bfb[1];
        ctrl.oxygenPhone = contactService.phones.oxygen[0];
        ctrl.address     = contactService.address;
        ctrl.bfbEmail    = contactService.emails.bfb;
        ctrl.oxygenEmail = contactService.emails.oxygen;

        ctrl.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=' + GMAPS_API_KEY;

        ctrl.mapOptions = {
            lat: 50.24034409999999,
            lng: 19.135748299999932,
            zoom: 16
        };
    });
})();
