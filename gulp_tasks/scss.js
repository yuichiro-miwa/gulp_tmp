'use strict';

let gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csscomb = require('gulp-csscomb'),
    browser = require('browser-sync'),
    plumber = require('gulp-plumber'),
    config = require('../config.json');

gulp.task('scss', () => {
    gulp.src(config.root.src + '/css_scss/**/*.scss')
      .pipe(plumber({
              errorHandler: (err) =>  {
                console.log(err.messageFormatted);
                this.emit('end');
              }
            }))
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(csscomb())
      .pipe(gulp.dest(config.root.dest + '/common/css/'))
      .pipe(browser.reload({stream: true}))
});
