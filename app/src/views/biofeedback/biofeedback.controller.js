(function () {
    "use strict";

    angular.module('bfbApp').controller('BiofeedbackCtrl', function (textContentService) {
        var ctrl = this;

        ctrl.bfbTiming = [
            {
                icon: 'timer',
                title: 'Sesja treningowa',
                text: '40 - 50 minut',
                subtext: 'sam trening trwa 30 minut (10 rund x 3 min.)'
            },
            {
                icon: 'calendar',
                title: 'Częstotliwość',
                text: 'min. 2 razy w tygodniu',
                subtext: 'w uzasadnionych przypadkach odpowiednio częściej'
            }
        ];

        ctrl.bfbTarget = [
            {
                icon: 'toys',
                text: 'dla dzieci i młodzieży w wieku szkolnym (od lat 4, a dla dzieci z zaburzeniami rozwoju mowy ' +
                '- od lat 2)'
            },
            {
                icon: 'business_center',
                text: 'dla osób dorosłych dbających o rozwój osobisty'
            },
            {
                icon: 'school',
                text: 'dla ludzi intenywnie uczących się i tworzących nową jakość (tzw. mental fitness)'
            },
            {
                icon: 'done',
                text: 'wszędzie tam, gdzie ważne jest skupienie i szybka prawidłowa decyzja'
            }
        ];

        ctrl.bfbApplications = [
            {
                title: 'Problemy psychologiczne',
                text: 'ADHD, ADD, nadpobudliwość psychoruchowa, zaburzenia koncentracji uwagi, zaburzenia procesu ' +
                'uczenia się (dysleksja, dysgrafia, dysortografia, dyskalkulia), zaburzenia pamięci, ' +
                'zaburzenia snu, zaniżona samoocena'
            },
            {
                title: 'Zaburzenia psychiatryczne',
                text: 'wahania nastroju, stany depresyjne, stany lęku i paniki, chroniczny zespół zmęczenia, ' +
                'nerwice zaburzenia procesu odżywiania się (anoreksja, bulimia), pobudzenie psychoruchowe, ' +
                'agresja, PTSD, uzależnienia (od leków, nikotyny, alkoholu, narkotyków, gier komputerowych), ' +
                'zespół obsesyjno-kompulsyjny, autyzm, zespół Aspergera'
            },
            {
                title: 'Zaburzenia neurologiczne',
                text: "migrena, mózgowe porażenie dziecięce, padaczka, stany po urazie czaszki, po udarze mózgu, " +
                "po operacjach neurochirurgicznych, choroby układu pozapiramidowego (tiki, zespół Tourette'a, " +
                "choroba Parkinsona), afazja, zaburzenia rozwoju mowy"
            },
            {
                title: 'Zespół napięcia przedmiesiączkowego i menopauza'
            }
        ];

        textContentService.getBiofeedbackContent().then(function (content) {
            ctrl.sections = content;
        });
    });
})();