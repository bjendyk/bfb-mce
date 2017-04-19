(function () {
    "use strict";

    angular.module('bfbApp').controller('OxygenCtrl', function (textContentService) {
        var ctrl = this;

        ctrl.oxygenApplication = [
            'chroni przed zawałem',
            'dotlenia mięsień sercowy',
            'poprawia układ krążenia',
            'wzmacnia system odpornościowy',
            'detoksykuje organizm (np. po chemioterapii, w trakcie diet odchudzających)',
            'przyspiesza przemianę materii',
            'działa wspomagająco w stwardnieniu rozsianym (SM)',
            'łagodzi dolegliwości menopauzy i andropauzy',
            'niweluje szkodliwe skutki palenia papierosów',
            'ogranicza uboczne skutki działania leków',
            'pomaga odzyskać energię i urodę',
            'podnosi wydolność organizmu i odporność na stres',
            'pomaga w leczeniu astmy, POCHP, mukowiscydozy, alergii, niedokrwienia, zapalenia wątroby, migreny, ' +
            'chorób układu krążenia',
            'poprawia pamięć, koncentrację, wspomaga procesy uczenia się',
            'prowadzi do rzeczywistej regeneracji organizmu'
        ];

        textContentService.getOxygenContent().then(function (content) {
            ctrl.sections = content;
        });
    });
})();