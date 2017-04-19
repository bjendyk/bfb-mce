(function () {
    "use strict";

    var path = require('path');

    var outputDir         = 'build/';
    var scriptsDir        = 'scripts/';
    var cssDir            = 'css/';
    var templatesDir      = 'templates/';
    var firstPartyBaseDir = 'app/src/';
    var thirdPartyBaseDir = 'node_modules/';
    var assetsDir         = 'assets/';
    var contentDir        = 'content/';

    // specifies 3rd party javascript files used by the app and to be included in index.html
    var thirdPartyJsFiles = [];
    [
        'angular/angular.min.js',
        'angular-animate/angular-animate.min.js',
        'angular-aria/angular-aria.min.js',
        'angular-material/angular-material.min.js',
        'angular-ui-router/release/angular-ui-router.min.js',
        'angular-messages/angular-messages.min.js',
        'angular-bootstrap/ui-bootstrap-tpls.min.js',
        'angular-bootstrap/ui-bootstrap.min.js',
        'angular-cookies/angular-cookies.min.js',
        'angular-sanitize/angular-sanitize.min.js',
        'angular-scroll/angular-scroll.min.js',
        'ngmap/build/scripts/ng-map.min.js'
    ].forEach(function (file) {
        thirdPartyJsFiles.push(thirdPartyBaseDir + file);
    });

    // specifies 3rd party stylesheets used by the app and to be included in index.html
    var thirdPartyCssFiles = [];
    [
        'angular-material/angular-material.min.css'
    ].forEach(function (file) {
        thirdPartyCssFiles.push(thirdPartyBaseDir + file);
    });

    // specifies app's own javascript files to be included in index.html
    var firstPartyJsFiles = [];
    [
        'app.module.js',
        'main.controller.js',
        'sidenav.controller.js',
        'views/contact/contact.controller.js',
        'views/home/home.controller.js',
        'views/pricing/pricing.controller.js',
        'views/biofeedback/biofeedback.controller.js',
        'views/oxygen/oxygen.controller.js',
        'services/contact.service.js',
        'services/navItems.service.js',
        'services/textContent.service.js',
        'components/footer/footer.component.js',
        'components/smoothScroller/smoothScroller.component.js',
        'components/textContent/textContent.component.js'
    ].forEach(function (file) {
        firstPartyJsFiles.push(firstPartyBaseDir + file);
    });

    // specifies app's own stylesheets to be included in index.html
    var firstPartyCssFiles = [
        'app/src/app.scss'
    ];

    // specifies paths to HTML templates (they are copied to build/templates directory)
    var templateFiles = [
        'app/src/**/*.tpl.html',
    ];

    // specifies paths to HTML content stored in JSON files (they are copied to build/templates directory)
    var textContentFiles = [
        'app/src/views/**/textContent.json'
    ];

    /**
     * Extracts the base name of each file in the collection and prepends it with given prefix.
     * @param {Array} fileSet a collection of file paths
     * @param {string} destDirPrefix directory name to be prepended to each file
     * @param {boolean} asCss indicates whether the file extension should .css
     * @returns {Array} An array of processed file paths.
     */
    var getFiles = function (fileSet, destDirPrefix, asCss) {
        var results = [];

        fileSet.forEach(function (file) {
            if (asCss) {
                results.push(destDirPrefix + path.basename(file, '.scss') + '.css');
            }
            else {
                results.push(destDirPrefix + path.basename(file));
            }
        });

        return results;
    };

    module.exports = {
        outputDir: outputDir,
        assetsOutputDir: outputDir + assetsDir,
        scriptsOutputDir: outputDir + scriptsDir,
        scriptsLibOutputDir: outputDir + scriptsDir + 'lib/',
        cssOutputDir: outputDir + cssDir,
        conentOutputDir: outputDir + contentDir,
        templatesOutputDir: outputDir + templatesDir,
        thirdPartyJsFiles: thirdPartyJsFiles,
        thirdPartyCssFiles: thirdPartyCssFiles,
        firstPartyJsFiles: firstPartyJsFiles,
        firstPartyCssFiles: firstPartyCssFiles,
        templateFiles: templateFiles,
        textContentFiles: textContentFiles,

        getThirdPartyJsFiles: function () {
            return getFiles(thirdPartyJsFiles, scriptsDir + 'lib/');
        },

        getThirdPartyCssFiles: function () {
            return getFiles(thirdPartyCssFiles, cssDir);
        },

        getFirstPartyJsFiles: function (isMinified) {
            if (isMinified) {
                return [scriptsDir + 'app.min.js'];
            }
            return getFiles(firstPartyJsFiles, scriptsDir);
        },

        getFirstPartyCssFiles: function (isMinified, asCss) {
            if (isMinified) {
                return [cssDir + 'app.min.css'];
            }
            return getFiles(firstPartyCssFiles, cssDir, asCss);
        }
    };
})();
