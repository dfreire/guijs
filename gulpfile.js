var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    watch   = require('gulp-watch'),
    react   = require('gulp-react'),
    cached  = require('gulp-cached'),
    flo     = require('fb-flo'),
    fs      = require('fs');

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

gulp.task('jsx', function () {
    return gulp.src('src/jsx/**/*.jsx')
        .pipe(cached('scripts')) 
        .pipe(react({ harmony: true }))
        .pipe(gulp.dest('public/js'));
});

gulp.task('watch', ['serve'], function () {
    gulp.watch("src/**/*.html", ['html']);
    gulp.watch("src/**/*.jsx",  ['jsx']);
});

gulp.task('default', [ 'html', 'jsx' ]);
