const responseOk = {
    city: "Paris",
    weather_description: "broken clouds",
    temperature: 12.19,
    pressure: 1004,
    humidity: 87,
    wind: {
        speed: 20,
        direction: "OSO"
    }
};

const responseError = {
    status: 500,
    message: "Problem connecting with Weather API"
}

const responseErrorNotFound = {
    "cod": "404",
    "message": "city not found"
};

module.exports = {
    responseOk,
    responseError,
    responseErrorNotFound
}