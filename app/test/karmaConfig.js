(function () {
    "use strict";

    module.exports = function(config) {
        config.set({

            // base path that will be used to resolve all patterns (eg. files, exclude)
            basePath: '../..',

            // frameworks to use
            // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
            frameworks: ['jasmine'],

            // list of files / patterns to load in the browser
            files: [
                './node_modules/angular/angular.js',
                './node_modules/angular-animate/angular-animate.js',
                './node_modules/angular-aria/angular-aria.js',
                './node_modules/angular-material/angular-material.js',
                './node_modules/angular-ui-router/release/angular-ui-router.js',
                './node_modules/angular-mocks/angular-mocks.js',
                './node_modules/angular-sanitize/angular-sanitize.js',
                './node_modules/angular-cookies/angular-cookies.js',
                './node_modules/angular-scroll/angular-scroll.js',
                './node_modules/ngmap/build/scripts/ng-map.js',
                './build/scripts/**/*.js',
                './build/templates/**/*.html',
                './app/src/**/*.spec.js'
            ],

            // list of files to exclude
            exclude: [
                './build/scripts/**/*.min.js'
            ],

            // preprocess matching files before serving them to the browser
            // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
            preprocessors: {
                './build/scripts/**/*.js': ['coverage'],
                './build/templates/**/*.html': ['ng-html2js']
            },

            ngHtml2JsPreprocessor: {
                stripPrefix: 'build/',
                moduleName: 'bfbApp.templates'
            },

            // test results reporter to use
            // possible values: 'dots', 'progress'
            // available reporters: https://npmjs.org/browse/keyword/karma-reporter
            reporters: ['spec', 'coverage'],

            // web server port
            port: 9876,

            // enable / disable colors in the output (reporters and logs)
            colors: true,

            // level of logging
            // possible values: config.LOG_DISABLE, config.LOG_ERROR, config.LOG_WARN, config.LOG_INFO, config.LOG_DEBUG
            logLevel: config.LOG_INFO,

            // enable / disable watching file and executing tests whenever any file changes
            autoWatch: false,

            // start these browsers
            // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
            browsers: ['PhantomJS'],

            // Continuous Integration mode
            // if true, Karma captures browsers, runs the tests and exits
            singleRun: true,

            // Concurrency level
            // how many browser should be started simultaneous
            concurrency: Infinity,
            
            // Coverage reporter
            coverageReporter: {
                type: 'html',
                dir: 'artifacts/coverage/'
            }
        });
    };
})();