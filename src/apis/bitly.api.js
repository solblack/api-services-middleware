const axios = require('axios');
const config = require('../config');

class BitlyAPI {
    
    createShortUrl = async (longUrl) => {
        try {
            let response = await axios.post(config.BITLY_CREATE_SHORT_URL, 
                                {
                                    long_url: longUrl
                                }, 
                                {
                                    headers: {
                                        'Authorization': `Bearer ${config.BITLY_TOKEN}` ,
                                        "Content-Type": "application/json"
                                    }
                                }
                            );
            return response.data;
            
        } catch (error) {
            console.error(error.message);
            console.log(error)
            throw new Error('Problem connecting with bitly API');
        }
    }
}

module.exports = BitlyAPI;