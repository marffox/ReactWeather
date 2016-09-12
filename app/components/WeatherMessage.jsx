var React = require('react');

// var WeatherMessage = React.createClass({
// 	displayName: 'WeatherMessage',
// 	render: function () {
// 		var {temp, location} = this.props;

// 		return (
// 			<h3>It is {temp} in {location}.</h3>
// 		)
// 	}
// });

// var WeatherMessage = (props) => {   <__________
// 	var {temp, location} = props;      <

// 	return (
// 		<h3>It is {temp} in {location}.</h3>
// 	)
// };

// mejor aun, podemos poner las properties directamente como parametros

var WeatherMessage = ({temp, location}) => {

	return (
		<h3>It is {temp} in {location}.</h3>
	)
};

module.exports = WeatherMessage;
