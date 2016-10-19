'use strict';

let gulp = require('gulp'),
    browser = require('browser-sync'),
    config = require('../config.json');

gulp.task('server', () => {
    browser({
        server: {
            baseDir: config.root.dest
        }
    });
});
