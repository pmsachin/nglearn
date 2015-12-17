var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('serve', function() {
  gulp.src('.')
    .pipe(webserver({
        port: process.env.PORT || 8080,
        host: process.env.IP || "localhost",
        livereload: true,
        open: true,
        fallback: 'index.html'
    }));
});
