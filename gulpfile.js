var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    watch   = require('gulp-watch'),
    flo = require('fb-flo'),
    fs = require('fs');

gulp.task('serve', function () {
    var server = flo('./public/', {
        port: 8888,
        glob: [ '**/*.html', '**/*.js', '**/*.css' ]
    }, resolver);

    server.once('ready', function() {
        console.log('flo server ready!');
    });

    function resolver(filepath, callback) {
        fpath = "public/" + filepath;
        console.log("flo reload", fpath);
        callback({
            resourceURL: filepath,
            contents: fs.readFileSync(fpath).toString()
        });
    }

    connect.server({
        port: 3000,
        root: 'public'
    });
});

gulp.task('html', function () {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('public'));
});

gulp.task('watch', ['serve'], function () {
    gulp.watch("src/**/*.html", ['html']);
});

gulp.task('default', [ 'html' ]);
