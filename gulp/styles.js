const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const shorthand = require('gulp-shorthand');
const minify = require('gulp-minify-css');

module.exports = function styles() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(shorthand())
        .pipe(prefix())
        .pipe(minify())
        .pipe(gulp.dest('build/css/'));
}