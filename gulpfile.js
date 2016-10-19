'use strict';

let gulp = require('gulp'),
    browser = require('browser-sync'),
    requireDir = require('require-dir');

//{rescure: true}はサブフォルダを読み込ませるために必要
requireDir('./gulp_tasks', { recurse: true });

//以下watchタスク
gulp.task('default', ['server'], () => {
    gulp.watch('dev/html_ejs/**/*.ejs', ['ejs']);
    gulp.watch('dev/css_scss/**/*.scss', ['scss']);
    gulp.watch('dev/js_es6/**', ['babel']);
    gulp.watch('dev/images/**', ['imagemin']);
})
