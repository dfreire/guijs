define(["bus"], function(Bus) {
    var Link = ReactRouter.Link;

    var SignIn = React.createClass({

        getInitialState: function() {
            return { email: "", password: "" };
        },

        onSignIn: function(e) {
            e.preventDefault();
            console.warn("state:", this.state);
        },

        setEmail: function(e) {
            this.setState({email: e.target.value});
        },

        setPassword: function(e) {
            this.setState({password: e.target.value});
        },

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
                        <form role="form" onSubmit={this.onSignIn}>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" value={this.state.email} onChange={this.setEmail} />
                            </div>
                            <div className="form-group">
                                <label>Password <Link to="reset-password">(forgot password)</Link></label>
                                <input type="password" className="form-control" value={this.state.password} onChange={this.setPassword} />
                            </div>
                            <div className="form-group">
                                <button href="/sign-in" className="btn btn-primary btn-block">Sign In</button>
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
