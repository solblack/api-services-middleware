const { BitlyAPI } = require('../apis');


class BitlyService {

    constructor() {
        this._bitlyAPI = new BitlyAPI();
    }
    
    createShortUrl = async (longUrl) => {
        return await this._bitlyAPI.createShortUrl(longUrl);
    }

};

module.exports = BitlyService;