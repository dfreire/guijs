define(["bus"], function(Bus) {
    var SignIn = React.createClass({
        render: function() {
            return (
                <div className="my-screen-center">
                <div className="row">
                <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Sign In</h3>
                    </div>
                    <div className="panel-body">
                        <form role="form">
                            <div className="form-group">
                                <label for="usernameOrEmail">Username or Email</label>
                                <input type="email" className="form-control" id="usernameOrEmail" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label for="password">Password <a href="/reset-password">(forgot password)</a></label>
                                <input type="password" className="form-control" id="password" placeholder="" />
                            </div>
                            <a href="/dashboard" className="btn btn-primary"><i className="fa fa-sign-in">&nbsp;</i> Sign In</a>
                        </form>
                    </div>
                </div>
                </div>
                </div>
                </div>
            );
        }
    });
    return SignIn;
});
