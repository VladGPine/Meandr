const gulp = require('gulp'),
      less = require('gulp-less'),
      autoprefixer = require('gulp-autoprefixer'),
      rename = require('gulp-rename'),
      cleanCSS = require('gulp-clean-css'),
      browserSync = require('browser-sync').create(),
      concat = require('gulp-concat');

const styles = (done) => {
  gulp.src('./src/less/**/index.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 version', 'IE 11'],
      cascade: false
    }))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
    done();
}


const scripts = () => {

}


const watch = (done) => {
  browserSync.init({
    server: {
        baseDir: "./"
    }
  });
  gulp.watch('./src/less/**/*.less', gulp.parallel(styles));
  gulp.watch('./*.html', browserSync.reload);
  done();
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);

gulp.task('build', gulp.series(watch));