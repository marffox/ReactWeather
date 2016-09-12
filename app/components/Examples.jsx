var React = require('react');

// var Examples = React.createClass({
// 	displayName: 'Examples',
// 	render: function() {
// 		return (
// 			<h3>Examples component</h3>
// 		);
// 	}
// });

var Examples = (props) => {
	return (
		<div>
			<h3>Examples component</h3>
			<p>Welcome to the example page</p>
		</div>
	);
};

module.exports = Examples;
