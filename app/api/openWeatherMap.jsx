var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5bb0b4375a69e27f8b202d4bba4c215c&units=metric';


module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function (res) {
			debugger;
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else{
				return res.data.main.temp;
			}
		}, function(res) {
				throw new Error(res.data.message);
		});

	}
}