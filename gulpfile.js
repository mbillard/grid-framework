var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('default', ['sass'], function() { });

gulp.task('sass', function () {
  gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('compile', ['sass'], function() {
  gulp.src('./css/*.css')
    .pipe(minify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('examples', function () {
  gulp.src('./examples/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./examples'));
});
