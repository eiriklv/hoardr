var browserify = require('browserify');
var streamify = require('gulp-streamify');
var NopStream = require('../util/no-op-stream');
var uglify = require('gulp-uglify');
var gulp = require('gulp');
var handleErrors = require('../util/handle-errors');
var source = require('vinyl-source-stream');

var production = process.env.NODE_ENV === 'production';

function createSingleBundle(options) {
    browserify({
        entries: options.input,
        extensions: options.extensions
    })
        .bundle({
            debug: !production
        })
        .on('error', handleErrors)
        .pipe(source(options.output))
        .pipe(production ? streamify(uglify()) : (new NopStream()))
        .pipe(gulp.dest(options.destination));
}

function createBundles(bundles) {
    bundles.forEach(function(bundle) {
        createSingleBundle({
            input: bundle.input,
            output: bundle.output,
            extensions: bundle.extensions,
            destination: bundle.destination
        });
    });
}

gulp.task('browserify', function() {
    createBundles([{
        input: ['./client/javascript/home.js'],
        output: 'home.js',
        extensions: ['.handlebars'],
        destination: './client/public/javascript/'
    }, {
        input: ['./client/javascript/article.js'],
        output: 'article.js',
        extensions: ['.handlebars'],
        destination: './client/public/javascript/'
    }, {
        input: ['./client/javascript/bookmarklet.js'],
        output: 'bookmarklet.js',
        extensions: ['.handlebars'],
        destination: './client/public/javascript/'
    }, {
        input: ['./client/javascript/profile.js'],
        output: 'profile.js',
        extensions: ['.handlebars'],
        destination: './client/public/javascript/'
    }, {
        input: ['./client/javascript/setnavigation.js'],
        output: 'setnavigation.js',
        extensions: ['.handlebars'],
        destination: './client/public/javascript/'
    }]);
});
