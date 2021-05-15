const config = {
    PORT: process.env.PORT || 3000,
    APP_NAME: process.env.APP_NAME,   
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    WEATHER_BASE_URL: process.env.WEATHER_BASE_URL,    
    NEWS_API_KEY: process.env.NEWS_API_KEY,
    NEWS_BASE_URL: process.env.NEWS_BASE_URL,
    BITLY_TOKEN: process.env.BITLY_TOKEN,
    BITLY_CREATE_SHORT_URL: process.env.BITLY_CREATE_SHORT_URL,
    PIXABAY_API_KEY: process.env.PIXABAY_API_KEY,
    PIXABAY_BASE_URL: process.env.PIXABAY_BASE_URL,
    CORS_ORIGIN: JSON.parse(process.env.CORS_ORIGIN),
};

for (const key in config) {
    if (config[key] == undefined) {
        throw new Error(`You need to set ${key} environment variable`);
    }
}

module.exports = config;