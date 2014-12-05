define([], function() {
    var Link = ReactRouter.Link;

    var ResetPassword = React.createClass({
        render: function() {
            return (
                <div className="my-screen-center">
                <div className="row">
                <div className="col-md-4 col-md-offset-4">

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Forgot Password</h3>
                    </div>
                    <div className="panel-body">
                        <form role="form">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" id="email" placeholder="" />
                            </div>
                            <div className="form-group">
                                <a href="/reset-password" className="btn btn-primary btn-block">Reset Password</a>
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
    return ResetPassword;
});

