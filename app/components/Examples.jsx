var React = require('react');
var {Link} = require('react-router');

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
			<h1 className="text-center">Examples</h1>
			<p>Here are a few example location to try out:</p>
			<ol>
				<li>
					<Link to="/?location=Barcelona">Barcelona</Link>
				</li>
				<li>
					<Link to="/?location=Andujar">Andujar</Link>
				</li>
				<li>
					<Link to="/?location=New York">New York</Link>
				</li>
			</ol>
		</div>
	);
};

module.exports = Examples;
