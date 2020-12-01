const gulp = require('gulp');
const server = require('browser-sync').create();

const pug2html = require('./gulp/pug2html');
const styles = require('./gulp/styles');
const scriptBuild = require('./gulp/scripts');

module.exports.watch = function serve(cb) {
    server.init({
        server: 'dist',
        notify: false,
        open: true,
        cors: true
    });

    gulp.watch('src/scss/**/*.scss', gulp.series(styles));
    gulp.watch('build/**/*.css').on('change', server.reload);

    gulp.watch('src/js/**/*.js', gulp.series(scriptBuild));
    gulp.watch('build/**/*.js').on('change', server.reload);

    gulp.watch('src/pug/**/*.pug', gulp.series(pug2html));
    gulp.watch('build/**/*.html').on('change', server.reload);
};
