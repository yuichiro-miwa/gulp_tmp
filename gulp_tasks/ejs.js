'use strict';

let gulp = require('gulp'),
    ejs = require('gulp-ejs'),
    browser = require('browser-sync'),
    //jsonData = require('../dev/ejs/pages.json'),
    config = require('../config.json');

gulp.task('ejs', () => {
    gulp.src(
        [config.root.src + '/html_ejs/**/*.ejs','!' + config.root.src + '/html_ejs/**/_*.ejs']
    )
        //.pipe(ejs({jsonData: jsonData}, {ext: '.html'})) //v2.0.0以上の拡張子注意
        .pipe(ejs({}, {ext: '.html'})) //v2.0.0以上の拡張子注意
        .pipe(gulp.dest(config.root.dest)) //注2
        .pipe(browser.reload({stream: true}))
});
