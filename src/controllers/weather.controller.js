const { WeatherService } = require('../services');

class WeatherController {

    constructor() {
        this._weatherService = new WeatherService();
    }

    getWeather = async (req, res, next) => {
        try {
            const weather = await this._weatherService.getWeather(req.query.city);
            res.send(weather)
        } catch (error) {
            next(error);
        }
    }
};

module.exports = WeatherController;