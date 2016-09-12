var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=08ec9e2f821013865d620abbd5b5101f&units=metric';

module.exports = {
	getTemp: function (location) {

		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		/*usando estas comillas `` podemos inyectar codigo javascript dentro del codigo de react
		usamos encodeURIComponent para para que el navegador entienda los caracteres como espacios (%20) u otros que pueda haber en la url*/

		return axios.get(requestUrl).then(function (res) { /*axios.get es una promise, aqui, en caso success*/
			debugger;
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function (res) {//aqui en caso error
			throw new Error(res.data.message);
		});
	}
}
