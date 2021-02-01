const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const runSass = () => {
  return gulp.src('./scss/*.scss')
          .pipe(sass({ outputStyle: 'compressed' }))
          .pipe(autoprefixer({ cascade: false }))
          .pipe(gulp.dest('./css'));
}

const watch = () => {
  gulp.watch('./scss/*.scss', runSass);
}

exports.build = runSass;
exports.watch = watch;