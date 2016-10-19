"use strict";

let gulp = require("gulp"),
    jpegtran = require('imagemin-jpegtran'),
    optipng = require('imagemin-optipng'),
    browser = require('browser-sync'),
    config = require('../config.json');

gulp.task('imagemin', function(){
    gulp.src(config.root.src + '/images/*.jpg')
        .pipe(jpegtran()())
        .pipe(gulp.dest(config.root.dest + '/common/images/'))
        .pipe(browser.reload({stream: true}));
    gulp.src(config.root.src + 'images/*.png')
        .pipe(optipng()())
        .pipe(gulp.dest(config.root.dest + '/common/images/'))
        .pipe(browser.reload({stream: true}));
});
