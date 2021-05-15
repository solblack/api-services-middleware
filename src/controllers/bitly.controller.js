const { BitlyService } = require('../services');

class BitlyController {

    constructor() {
        this._bitlyService = new BitlyService;
    }

    createShortUrl = async (req, res, next) => {
        try {
            const shortUrl = await this._bitlyService.createShortUrl(req.body.long_url);
            res.send(shortUrl);
        } catch (error) {
            next(error); 
        }
        
    }

};

module.exports = BitlyController;