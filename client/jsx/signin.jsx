define(["bus"], function(Bus) {
    var Link = ReactRouter.Link;

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
                                <label>Email</label>
                                <input type="email" className="form-control" ref="email" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label>Password <Link to="reset-password">(forgot password)</Link></label>
                                <input type="password" className="form-control" ref="password" placeholder="" />
                            </div>
                            <div className="form-group">
                                <a href="/sign-in" className="btn btn-primary btn-block">Sign In</a>
                            </div>
                            <div className="form-group">
                                <p className="text-center">or</p>
                            </div>
                            <div className="form-group">
                                <Link to="sign-up"className="btn btn-default btn-block">Sign Up</Link>
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
    return SignIn;
});
