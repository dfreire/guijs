define([], function() {
    var Link = ReactRouter.Link;

    var ResetPassword = React.createClass({
        render: function() {
            return (
                <div className="my-screen-center">
                <div className="row">
                <div className="col-md-4 col-md-offset-4">

                    <h1 className="text-center">Reset Password</h1>
                    <p className="text-center"><Link to="sign-in">sign in</Link></p>

                </div>
                </div>
                </div>
            );
        }
    });
    return ResetPassword;
});

