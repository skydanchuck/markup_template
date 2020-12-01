const gulp = require('gulp');
const pug = require('gulp-pug');
const pugLinter = require('gulp-pug-linter');
const w3cValidator = require('gulp-w3c-html-validator');

module.exports = function pug2html(cb) {
    return gulp.src('src/pug/*.pug')
        // .pipe(pugLinter({reporter:'default'}))
        .pipe(pug({
            pretty: true
        }))
        .pipe(w3cValidator())
        .pipe(gulp.dest('build'));
}