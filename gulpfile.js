var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    watch   = require('gulp-watch');

gulp.task('serve', function () {
    connect.server({
        port: 3000,
        root: 'public'
    });
});

gulp.task('html', function () {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('public'));
});

gulp.task('watch', function () {
    gulp.watch("src/**/*.html", ['html']);
});

gulp.task('default', [ 'html' ]);
