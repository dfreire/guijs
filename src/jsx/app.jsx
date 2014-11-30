require(["bus", "login"], function(Bus, Login) {
    var Router       = ReactRouter;
    var Route        = ReactRouter.Route;
    var RouteHandler = ReactRouter.RouteHandler;
    var DefaultRoute = ReactRouter.DefaultRoute;

    var App = React.createClass({
        render: function() {
            return (<RouteHandler/>);
        }
    });

    var routes = (
        <Route handler={App} path="/">
            <Route name="login" handler={Login} />
            <DefaultRoute handler={Login} />
        </Route>
    );

    ReactRouter.run(routes/*, Router.HistoryLocation*/, function (Handler) {
        React.render(<Handler/>, document.body);
    });
});
