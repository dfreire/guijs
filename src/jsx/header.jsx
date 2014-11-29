define(["bus"], function(Bus) {
    console.log("new header", require("bus").ping())
    var Header = React.createClass({
        render: function() {
            return (
                <p>Header 8</p>
            );
        }
    });
    return Header;
});
