const axios = require('axios');
const config = require('../config');


class PixabayAPI {

    getImages = async (param, imagesPerPage, actualPage) => {
        try {
            const URL = config.PIXABAY_BASE_URL + config.PIXABAY_API_KEY + '&q=' + param + 
                        '&per_page=' + imagesPerPage + '&page=' + actualPage;
            let response = await axios.get(URL);
            return response.data;
        } catch (error) {
            console.error(error);
            throw new Error('Problem connecting with pixabay API');
        }
    }
}

module.exports = PixabayAPI;