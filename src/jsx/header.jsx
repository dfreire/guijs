define(function(require) {
    console.log("new header", require("bus").ping())
    var Header = React.createClass({
        render: function() {
            return (
                <p>Header 7</p>
            );
        }
    });
    return Header;
});
