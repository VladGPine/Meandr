const gulp = require('gulp'),
      less = require('gulp-less'),
      autoprefixer = require('gulp-autoprefixer'),
      rename = require('gulp-rename'),
      browserSync = require('browser-sync').create(),
      concat = require('gulp-concat'),
      cssnano = require('gulp-cssnano'),
      babel = require('gulp-babel'),
      strip = require('gulp-strip-comments');

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
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('index.js'))
    .pipe(strip())
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
  gulp.watch('./src/less/**/*.less', gulp.series(styles));
  gulp.watch('./src/js/**/*.js', gulp.series(scripts));
  gulp.watch("./*.html").on('change', browserSync.reload);
  done();
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);

gulp.task('default', gulp.series(
  gulp.series('styles', 'scripts'),
  gulp.parallel('watch')
));