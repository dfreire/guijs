define(["bus"], function(Bus) {
    var Link = ReactRouter.Link;

    var SignUp = React.createClass({
        onClickedSignUp: function(evt) {
            evt.preventDefault();
            var data = {
                username:  this.refs.username.getDOMNode().value.trim(),
                email:     this.refs.email.getDOMNode().value.trim(),
                password:  this.refs.password.getDOMNode().value.trim()
            };
            console.log("onClickedSignUp", data);
            $.post("/sign-up", data, function(data, textStatus, jqXHR) {
                console.log("response", data, textStatus, jqXHR);
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
                                <label>Pick a username</label>
                                <input type="text" className="form-control" ref="username" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label>Your email</label>
                                <input type="email" className="form-control" ref="email" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label>Create a password</label>
                                <input type="password" className="form-control" ref="password" placeholder="" />
                            </div>
                            <div className="form-group">
                                <p className="text-justify">By clicking on <b>Sign up</b> below, you are agreeing to our <a href="/terms-of-service">terms of service</a> and <a href="/privacy-policy">privacy policy</a>. We will send you related emails occasionally.</p>
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
