const gulp = require('gulp');

module.exports = function script(cb) {
    gulp.src('src/js/script.js').pipe(gulp.dest('build/js/'))
}