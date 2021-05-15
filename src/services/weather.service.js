const { WeatherAPI } = require('../apis');

class WeatherService {

    constructor(){
        this._weatherAPI = new WeatherAPI();
    }

    getWeather = async (city) => {
        const response = await this._weatherAPI.getWeatherByCity(city);
        return this.buildWeatherResponse(response);
    }

    buildWeatherResponse = (response) => {
        return {
            city: response.name,
            weather_description: response.weather.description,
            temperature: response.main.temp,
            pressure: response.main.pressure,
            humidity: response.main.humidity,
            wind: {
                speed: this.getSpeed(response.wind.speed),
                direction: this.getWindDirection(response.wind.deg)
            }
        }
    }

    getSpeed(speed){
        return speed;
    }

    getWindDirection(deg){
        return "NE";
    }
}

module.exports = WeatherService;