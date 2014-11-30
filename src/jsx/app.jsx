require(["bus", "login"], function(Bus, Login) {
    var Router       = ReactRouter;
    var Route        = ReactRouter.Route;
    var RouteHandler = ReactRouter.RouteHandler;
    var DefaultRoute = ReactRouter.DefaultRoute;
    var Redirect     = ReactRouter.Redirect;
    var Link         = ReactRouter.Link;

    var App = React.createClass({
        render: function() {
            return (
                <div>
                    <div><Link to="login">login</Link></div>
                    <div><RouteHandler/></div>
                </div>
            );
        }
    });

    var routes = (
        <Route handler={App}>
            <Route name="login" handler={Login} />
            <Redirect from="/" to="login" />
        </Route>
    );

    ReactRouter.run(routes, Router.HistoryLocation, function (Handler) {
        React.render(<Handler/>, document.body);
    });
});
