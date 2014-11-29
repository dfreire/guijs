var gulp        = require('gulp'),
    watch       = require('gulp-watch');

gulp.task('html', function () {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('public'));
});

gulp.task('watch', function () {
    gulp.watch("src/**/*.html", ['html']);
});

gulp.task('default', [ 'html' ]);
