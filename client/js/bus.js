define([], function() {
    console.log("new bus");
    var api = {};

    api.ping = function() {
        return "pong";
    };

    return api;
});
