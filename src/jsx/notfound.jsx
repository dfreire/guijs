define([], function() {
    var NotFound = React.createClass({
        render: function() {
            return (
                <div className="my-screen-center">
                <div className="row">
                <div className="col-md-4 col-md-offset-4">
                <div className="" role="">
                    <h1 className="text-center">Page Not Found!</h1>
                    <p className="text-center"><a href="/">Go to the home page.</a></p>
                </div>
                </div>
                </div>
                </div>
            );
        }
    });
    return NotFound;
});

