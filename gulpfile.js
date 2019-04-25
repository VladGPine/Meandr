const gulp = require('gulp'),
      less = require('gulp-less'),
      autoprefixer = require('gulp-autoprefixer'),
      rename = require('gulp-rename'),
      browserSync = require('browser-sync').create(),
      concat = require('gulp-concat'),
      cssnano = require('gulp-cssnano');

const styles = (done) => {
  gulp.src('./src/less/**/index.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 version', 'IE 11'],
      cascade: false
    }))
    .pipe(rename('styles.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
  done();
}


const scripts = (done) => {
  gulp.src('./src/js/**/*.js')
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream());
  done();
}


const watch = (done) => {
  browserSync.init({
    server: {
        baseDir: "./"
    }
  });
  gulp.watch('./src/less/**/*.less', gulp.parallel(styles));
  gulp.watch('./src/js/**/*.js', gulp.parallel(scripts));
  gulp.watch("./*.html").on('change', browserSync.reload);
  done();
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);

gulp.task('build', gulp.series(watch));