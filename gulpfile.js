var gulp       = require('gulp'),
    livereload = require('gulp-livereload'),
    watch      = require('gulp-watch');

gulp.task('watch', function() {
  livereload.listen(4444);
  gulp.watch('build/**').on('change', livereload.changed);
});
