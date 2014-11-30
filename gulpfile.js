var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    watch   = require('gulp-watch'),
    react   = require('gulp-react'),
    cached  = require('gulp-cached'),
    sass    = require('gulp-sass'),
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
        root: 'public',
        fallback: 'public/index.html'
    });
});

gulp.task('html', function () {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('public'));
});

gulp.task('scss', function () {
    return gulp.src('src/scss/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css'));
});

gulp.task('js', function () {
    return gulp.src('src/**/*.js')
        .pipe(gulp.dest('public'));
});

gulp.task('jsx', function () {
    return gulp.src('src/jsx/**/*.jsx')
        .pipe(cached('scripts')) 
        .pipe(react({ harmony: true }))
        .pipe(gulp.dest('public/js'));
});

gulp.task('watch', ['html', 'scss', 'js', 'jsx', 'serve'], function () {
    gulp.watch("src/**/*.html", ['html']);
    gulp.watch("src/**/*.js",   ['js']);
    gulp.watch("src/**/*.scss", ['scss']);
    gulp.watch("src/**/*.jsx",  ['jsx']);
});
