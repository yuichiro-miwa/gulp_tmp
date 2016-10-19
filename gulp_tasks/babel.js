'use strict';

let gulp = require('gulp'),
    babel = require('gulp-babel'),
    config = require('../config.json');

gulp.task('babel', () => {
  gulp.src(config.root.src + '/js_es6/*.js')
    .pipe(babel({presets: ["es2015"]}))
    .pipe(gulp.dest(config.root.dest + '/common/js/'))
});
