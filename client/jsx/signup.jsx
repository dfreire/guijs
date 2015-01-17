define(["bus"], function(Bus) {
    var Link = ReactRouter.Link;

    var SignUp = React.createClass({
        onClickedSignUp: function(evt) {
            evt.preventDefault();
            var data = {
                email:     this.refs.email.getDOMNode().value.trim(),
                password:  this.refs.password.getDOMNode().value.trim()
            };
            console.log("onClickedSignUp", data);
            $.post("/sign-up", JSON.stringify(data), function(data, textStatus, jqXHR) {
                console.log("response", data, textStatus, jqXHR.status);
            });
        },
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
                                <label>Email</label>
                                <input type="email" className="form-control" ref="email" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" ref="password" placeholder="" />
                            </div>
                            <div className="form-group">
                                <p className="text-justify">By signing up you are agreeing to our <a href="/terms-of-service">terms of service</a> and <a href="/privacy-policy">privacy policy</a>.</p>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" onClick={this.onClickedSignUp}>Sign Up</button>
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
