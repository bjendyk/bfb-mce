(function () {
    "use strict";

    var gulp = require('gulp'),
        gutil = require('gulp-util'),
        htmlReplace = require('gulp-html-replace'),
        del = require('del'),
        http = require('http'),
        ecstatic = require('ecstatic'),
        jshint = require('gulp-jshint'),
        projectConfig = require('./projectConfig'),
        replace = require('gulp-replace'),
        ngAnnotate = require('gulp-ng-annotate'),
        uglify = require('gulp-uglify'),
        gIf = require('gulp-if'),
        concat = require('gulp-concat'),
        htmlMin = require('gulp-htmlmin'),
        sass = require('gulp-sass'),
        multiline = require('multiline'),
        run = require('gulp-run'),
        svgmin = require('gulp-svgmin');

    var defaultPort = 3210;
    var setApiKey = true;

    // load .env file
    require('dotenv').load({ silent: true });

    gulp.task('default', [], () => {
        var taskColor = gutil.colors.cyan;
        var bold = gutil.colors.bold;

        var usageInfo = multiline.stripIndent(function () {/*

        Displays this usage information. Available commands:

        _TASK_CLEAN_
        Cleans the project output _BUILD_DIR_ directory.

        _TASK_JSHINT_
        Runs jshint over source files.

        _TASK_BUILD_
        Builds the project and generates the output in _BUILD_DIR_ directory.
        Pass _FLAG_MINIFY_ flag to create a minified build.

        _TASK_TEST_
        Runs the unit tests.

        _TASK_SERVE_
        Serves the files from _BUILD_DIR_ on local http server using default port _DEFAULT_PORT_.
        Pass _FLAG_MINIFY_ flag to create a minified build.
        Use _FLAG_PORT_ to specify custom port number.

        _TASK_WATCH_
        Runs _TASK_BUILD_ every time a change is detected in .js, .css and .html files
        in the _SRC_DIR_ directory.

        _TASK_E2E_SERVER_
        Launches Selenium web driver server using default settings.

        _TASK_E2E_
        Runs end-to-end tests.

        */}).replace(/_TASK_CLEAN_/g, taskColor('gulp clean'))
            .replace(/_TASK_JSHINT_/g, taskColor('gulp jshint'))
            .replace(/_TASK_BUILD_/g, taskColor('gulp build'))
            .replace(/_TASK_TEST_/g, taskColor('gulp test'))
            .replace(/_TASK_SERVE_/g, taskColor('gulp serve'))
            .replace(/_TASK_WATCH_/g, taskColor('gulp watch'))
            .replace(/_TASK_E2E_SERVER_/g, taskColor('gulp e2e:server'))
            .replace(/_TASK_E2E_/g, taskColor('gulp e2e'))
            .replace(/_BUILD_DIR_/g, bold('build/'))
            .replace(/_SRC_DIR_/g, bold('app/src/'))
            .replace(/_FLAG_MINIFY_/g, bold('--minify'))
            .replace(/_FLAG_PORT_/g, bold('--port=<port number>'))
            .replace(/_DEFAULT_PORT_/g, bold(defaultPort));

        console.log(usageInfo);
    });

    gulp.task('usage', ['default']);

    gulp.task('_noApiKey', () => {
        setApiKey = false;
    });

    gulp.task('test', ['_noApiKey', 'build'], () => {
        // set verbosity to highest level for immediate output to sdout
        var cmd = new run.Command('karma start app/test/karmaConfig.js', { verbosity: 3 });
        cmd.exec();
    });

    gulp.task('build', ['clean', 'jshint'], () => {
        var isMinified = gutil.env.minify !== undefined;

        // process own scripts
        gulp.src(projectConfig.firstPartyJsFiles)
            .pipe(ngAnnotate())
            .pipe(replace('_GMAPS_API_KEY_', process.env.GMAPS_API_KEY))
            .pipe(gIf(isMinified, concat('app.min.js')))
            .pipe(gIf(isMinified, uglify()))
            .pipe(gulp.dest(projectConfig.scriptsOutputDir));

        // copy 3rd party JS files
        gulp.src(projectConfig.thirdPartyJsFiles)
            .pipe(gulp.dest(projectConfig.scriptsLibOutputDir));

        // copy 3rd party CSS files
        gulp.src(projectConfig.thirdPartyCssFiles)
            .pipe(gulp.dest(projectConfig.cssOutputDir));

        // process own stylesheets
        gulp.src(projectConfig.firstPartyCssFiles)
            .pipe(gIf(isMinified, sass.sync({ outputStyle: 'compressed' }), sass.sync()))
            .pipe(gIf(isMinified, concat('app.min.css')))
            .pipe(gulp.dest(projectConfig.cssOutputDir));

        // copy HTML templates
        gulp.src(projectConfig.templateFiles)
            .pipe(gIf(isMinified, htmlMin({
                collapseWhitespace: true,
                removeComments: true
            })))
            .pipe(gulp.dest(projectConfig.templatesOutputDir));

        // copy JSON view content
        gulp.src(projectConfig.textContentFiles)
            .pipe(gulp.dest(projectConfig.conentOutputDir));

        // copy and minimize SVGs
        gulp.src(['app/assets/**/*.svg'])
            .pipe(svgmin({
                plugins: [
                    {
                        removeDoctype: true
                    },
                    {
                        removeComments: true
                    },
                    {
                        cleanupNumericValues: {
                            floatPrecision: 2
                        }
                    },
                    {
                        convertColors: {
                            names2hex: true,
                            rgb2hex: true
                        }
                    }
                ]
            }))
            .pipe(gulp.dest(projectConfig.assetsOutputDir));

        // copy images
        gulp.src(['app/assets/**/*.jpg', 'app/assets/**/*.png', '!app/assets/src/*.*'])
            .pipe(gulp.dest(projectConfig.assetsOutputDir));

        // replace build tags in index.html
        gulp.src(['app/src/index.html'])
            .pipe(htmlReplace({
                metaDescription: {
                    src: process.env.SEO_DESCRIPTION,
                    tpl: '<meta name="description" content="%s">'
                },
                metaKeywords: {
                    src: process.env.SEO_KEYWORDS,
                    tpl: '<meta name="keywords" content="%s">'
                },
                thirdPartyJs: projectConfig.getThirdPartyJsFiles(),
                thirdPartyCss: projectConfig.getThirdPartyCssFiles(),
                firstPartyJs: projectConfig.getFirstPartyJsFiles(isMinified),
                firstPartyCss: projectConfig.getFirstPartyCssFiles(isMinified, true)
            }))
            .pipe(gIf(isMinified, htmlMin({
                collapseWhitespace: false,
                removeComments: true
            })))
            .pipe(gulp.dest(projectConfig.outputDir));

        // copy sitemap
        gulp.src('app/src/sitemap.xml')
            .pipe(gulp.dest(projectConfig.outputDir));
    });

    gulp.task('clean', [], () => {
        return del(['build/*', 'build', 'artifacts/*', 'artifacts']);
    });

    gulp.task('jshint', [], () => {
        var filesToLint = [
            'gulpfile.js',
            'projectConfig.js',
            'app/test/**/*.js',
            'app/src/**/*.js'
        ];

        gulp.src(filesToLint)
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'))
            .pipe(jshint.reporter('fail'));
    });

    gulp.task('serve', ['build'], () => {
        var portNum = gutil.env.port || defaultPort;

        http.createServer(ecstatic({ root: __dirname + '/' + projectConfig.outputDir }))
            .listen(portNum);

        console.log('\nRunning web server at localhost:%d\n', portNum);
    });

    gulp.task('watch', ['build'], () => {
        var filesToWatch = [
            'app/**/*.js',
            'app/**/*.scss',
            'app/**/*.html',
            'app/**/*.json',
            'gulpfile.js',
            'projectConfig.js'
        ];

        console.log('\nWatching for changes...\n');
        gulp.watch(filesToWatch, ['build']);
    });

    gulp.task('e2e:server', ['serve'], () => {
        var cmd = new run.Command('node node_modules/protractor/bin/webdriver-manager start', { verbosity: 3 });
        cmd.exec();    
    });

    gulp.task('e2e:update', () => {
        var cmd = new run.Command('node node_modules/protractor/bin/webdriver-manager update', { verbosity: 3 });
        cmd.exec();
    });

    gulp.task('e2e', () => {
        var cmd = new run.Command('node node_modules/protractor/bin/protractor app/test/protractorConfig.js',
            { verbosity: 3 });
        cmd.exec();
    });
})();
