var browserSync = require('browser-sync'),
    gulp        = require('gulp'),
    watch       = require('gulp-watch');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./public/"
        }
    });
});

gulp.task('html', function () {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('public'));
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("src/**/*.html", ['html', browserSync.reload]);
});

gulp.task('default', [ 'html' ]);
