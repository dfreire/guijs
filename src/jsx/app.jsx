require(["bus", "signin"], function(Bus, SignIn) {
    var Router       = ReactRouter;
    var Route        = ReactRouter.Route;
    var RouteHandler = ReactRouter.RouteHandler;
    var DefaultRoute = ReactRouter.DefaultRoute;
    var Redirect     = ReactRouter.Redirect;
    var Link         = ReactRouter.Link;

    var App = React.createClass({
        render: function() {
            return (
                <div class="container">
                    <RouteHandler/>
                </div>
            );
        }
    });

    var routes = (
        <Route handler={App}>
            <Route name="signin" handler={SignIn} />
            <Redirect from="/" to="signin" />
        </Route>
    );

    ReactRouter.run(routes, Router.HistoryLocation, function (Handler) {
        React.render(<Handler/>, document.body);
    });
});
