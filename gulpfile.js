const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' );
const uglify = require( 'gulp-uglify' );
const imagemin = require( 'gulp-imagemin' );
const concat = require( 'gulp-concat' );
var browserSync = require('browser-sync').create();
const { dest } = require('gulp');

gulp.task('copyhtml', async () => {
    gulp.src('html/html/*.html')
        .pipe(gulp.dest('dist/html'))
        .pipe(browserSync.stream());
});

gulp.task('imageMin', async () => {
    gulp.src('html/assets/images/*')
        .pipe(imagemin())
            .pipe(gulp.dest('dist/assets/images'));
});

// gulp.task('minifycss', async () => {
//     gulp.src('dist/assets/css/*.css')
//         .pipe(uglify('main-style-min.css'))
//             .pipe(gulp.dest('dist/assets/css'));
// });

gulp.task('concat', async () => {
    gulp.src('html/assets/js/*.js')
        .pipe(concat('main.js'))
            .pipe(uglify())
                .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('sass', async () => {
    gulp.src('html/assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('dist/assets/css'))
                .pipe(browserSync.stream());
});


gulp.task('build', gulp.series('copyhtml', 'concat', 'imageMin', 'sass'));
gulp.task('server', function(){
    browserSync.init({server: './html'});
});

// Watch files for changes
gulp.task('watch', () => {
    gulp.watch('html/assets/sass/*.scss').on('change', browserSync.reload);
    gulp.watch('html/html/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('server', 'watch'));
