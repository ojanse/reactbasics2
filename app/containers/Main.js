var React = require('react');

var HelloWorld = React.createClass({
	render: function() {
		return (
			<div>
				 <p>Main.js Header</p>
				 { this.props.children }
			 </div>
		);
	}
});

module.exports = HelloWorld;