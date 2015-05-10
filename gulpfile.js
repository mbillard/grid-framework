var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['sass'], function() { });

gulp.task('sass', function () {
  gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
