var gulp  = require('gulp'),
    watch = require('gulp-watch');

gulp.task('html', function () {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('public'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.html', ['html']).on('change', function(event) {
        console.log(event.path);
    });
});

gulp.task('default', ['html']);
