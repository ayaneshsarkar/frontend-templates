const gulp = require('gulp');
const sass = require('gulp-sass');

const runSass = () => {
  return gulp.src('./scss/*.scss')
          .pipe(sass())
          .pipe(gulp.dest('./css'));
}

const watch = () => {
  gulp.watch('./scss/*.scss', runSass);
}

exports.build = runSass;
exports.watch = watch;