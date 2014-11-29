require(["bus", "header"], function(Bus, Header) {
    console.log("new app", Bus.ping())
    React.render(<Header/>, document.getElementById('app'));
});
