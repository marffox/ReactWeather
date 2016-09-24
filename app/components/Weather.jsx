var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

	getInitialState: function () {
		return {
			isLoading: false,
			hasError: false
		}
	},
	handleSearch: function (location) {
		var that = this;

		this.setState({
			isLoading: true,
			errorMessage: undefined,
			location: undefined,
			temp: undefined
		});

		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false,
				hasError: false
			});
		}, function (e) {
			that.setState({
				isLoading: false,
				hasError: true,
				errorMessage: e.message
			});
		});
	},
	componentDidMount: function () {
		var location = this.props.location.query.location;

		if (location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash = '#/';//borra location de la barra de navegacion del browser
		}
	},
	//En React component puede cambiar los estados pero no puede cambiar las props, pero si puede cambiar las props de sus hijos
	componentWillReceiveProps: function (newProps) {
	  	var location = newProps.location.query.location;

		if (location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash = '#/';//borra location de la barra de navegacion del browser
		}
	},
	render: function () {
		var {hasError, isLoading, temp, location, errorMessage} = this.state;

		function renderMessage () {
			if (isLoading) {
				return <h3 className="text-center">Fetching weather...</h3>
			} else if (temp && location && !hasError) {
				return <WeatherMessage temp={temp} location={location}/>
			}
		}

		function renderError () {
			if (typeof errorMessage === 'string') {
				return (
					<ErrorModal message={errorMessage}/>
				)
			}
		}

		return (
			<div>
				<h1 className="text-center page-title">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		)
	}
});

module.exports = Weather;
