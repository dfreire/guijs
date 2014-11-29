var flo = require('fb-flo'),
    fs = require('fs');

var server = flo('./public/', {
    port: 8888,
    glob: [ '**/*.html', '**/*.js', '**/*.css' ]
}, resolver);

server.once('ready', function() {
    console.log('Ready!');
});

function resolver(filepath, callback) {
    fpath = "public/" + filepath;
    console.log("reload", fpath);
    callback({
        resourceURL: filepath,
        contents: fs.readFileSync(fpath).toString()
    });
}
