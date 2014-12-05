define(["bus"], function(Bus) {
    var Link = ReactRouter.Link;

    var SignUp = React.createClass({
        render: function() {
            return (
                <div className="my-screen-center">
                <div className="row">
                <div className="col-md-4 col-md-offset-4">

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Sign Up</h3>
                    </div>
                    <div className="panel-body">
                        <form role="form">
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" id="username" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" id="email" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="password" placeholder="" />
                            </div>
                            <div className="form-group">
                                <input type="checkbox" /> I agree to <a href="/terms">Terms</a>
                            </div>
                            <div className="form-group">
                                <a href="/sign-in" className="btn btn-primary btn-block">Sign Up</a>
                            </div>
                            <div className="form-group">
                                <p className="text-center">or</p>
                            </div>
                            <div className="form-group">
                                <Link to="sign-in" className="btn btn-default btn-block">Sign In</Link>
                            </div>
                        </form>
                    </div>
                </div>

                </div>
                </div>
                </div>
            );
        }
    });
    return SignUp;
});
