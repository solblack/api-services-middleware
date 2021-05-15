const axios = require('axios');
const config = require('../config');

class NewsAPI {

    getNews = async (country, category) => {
        try {
            const URL = config.NEWS_BASE_URL + country + '&category=' + category + '&apiKey=' + config.NEWS_API_KEY;
            let response = await axios.get(URL);
            return response.data;
        } catch (error) {
            console.error(error.message);
            throw new Error('Problem connecting with News API');
        }    
    }
}

module.exports = NewsAPI;