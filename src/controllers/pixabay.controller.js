const { PixabayService } = require('../services');


class PixabayController {

    constructor() {
        this._pixabayService = new PixabayService();
    }

    getImages = async (req, res, next) => {
        try {
            const image = await this._pixabayService.getImages(req.query.q, req.query.images_per_page, req.query.page);
            res.send(image);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = PixabayController;