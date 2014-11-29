define(["bus"], function(Bus) {
    console.log("new header", Bus.ping())
    var Header = React.createClass({
        render: function() {
            return (
                <p>Header 0</p>
            );
        }
    });
    return Header;
});
