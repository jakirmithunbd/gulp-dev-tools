var gulp = require('gulp'),
    uglify = require('gulp-uglify');
concat = require('gulp-concat'),
    argv = require('yargs').argv,
    cssminify = require('gulp-minify-css'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

//Watch task
gulp.task('watch:sass', function () {
    var path = "./assets/";
    console.log(path);
    gulp.watch(path + 'scss/**/*.scss', gulp.series('build-sourcemap-css'));
});

gulp.task('build-sourcemap-css', function () {
    var path = "./assets/";
    var mainSassFile = path + "css";
    return gulp.src(path + 'scss/**/*.scss')
        .pipe(sourcemaps.init()) // Process the original sources
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write()) // Add the map to modified source.
        .pipe(gulp.dest(mainSassFile));
});


gulp.task('minify-css', () => {
    return gulp.src(`./assets/css/main.css`)
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(concat('style.min.css')) // this is what was missing
        .pipe(gulp.dest(`./assets/css`));
});

gulp.task('minify-js', function () {
    const mapping = {
        'jsmin': {
            'path': './assets/js/',
            'dest': 'global-min.js',
            'src': [
                './assets/js/src/global.js',
                './assets/js/src/slick.min.js',
                './assets/js/src/aos.min.js',
                './assets/js/src/fancy-video.js'
            ]
        }
    };

    let data;
    data = mapping.jsmin;

    return gulp.src(data.src, {
            allowEmpty: true
        })
        .pipe(concat(data.dest))
        .pipe(gulp.dest(data.path))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./html/"
        }
    });
});


gulp.task('build', gulp.series('build-sourcemap-css', 'minify-js', 'minify-css'));