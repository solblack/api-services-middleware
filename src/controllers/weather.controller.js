const { WeatherService } = require('../services');

class WeatherController {

    constructor() {
        this._weatherService = new WeatherService();
    }

    getWeather = async (req, res, next) => {
        try {
            // TODO take validation logic to middleware or service layer
            if(req.query.city == undefined || req.query.city == "") {
                let error = new Error("City query param is required");
                error.status = 400;
                throw error;
            }
            const weather = await this._weatherService.getWeather(req.query.city);
            res.send(weather)
        } catch (error) {
            next(error);
        }
    }
};

module.exports = WeatherController;