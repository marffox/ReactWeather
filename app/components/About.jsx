var React = require('react');

// var About = React.createClass({
// 	displayName: 'About',
// 	render: function() {
// 		return (
// 			<h3>About component</h3>
// 		);
// 	}
// });

var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p className="text-center">This is a weather application build on React.</p>
			<p>Here are some of the tools I used:</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
				</li>
				<li>
					<a href="http://openweathermap.org">Open weather map</a> - I used Open Weather Map to search for weather data by city name.
				</li>
			</ul>
		</div>
	)
};

module.exports = About;
