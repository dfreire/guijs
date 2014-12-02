require(["bus", "notfound", "signin", "resetpassword"], function(Bus, NotFound, SignIn, ResetPassword) {
    var Router        = ReactRouter;
    var Route         = ReactRouter.Route;
    var RouteHandler  = ReactRouter.RouteHandler;
    var DefaultRoute  = ReactRouter.DefaultRoute;
    var NotFoundRoute = ReactRouter.NotFoundRoute;
    var Redirect      = ReactRouter.Redirect;
    var Link          = ReactRouter.Link;

    var App = React.createClass({
        render: function() {
            return (
                <div className="container">
                    <RouteHandler/>
                </div>
            );
        }
    });

    var routes = (
        <Route handler={App}>
            <Route name="sign-in" handler={SignIn} />
            <Route name="reset-password" handler={ResetPassword} />
            <Redirect from="/" to="sign-in" />
            <NotFoundRoute handler={NotFound}/>
        </Route>
    );

    ReactRouter.run(routes, Router.HistoryLocation, function (Handler) {
        React.render(<Handler/>, document.body);
    });
});
