const { PixabayAPI } = require('../apis');


class PixabayService {

    constructor() {
        this._pixabayAPI = new PixabayAPI();
    }

    getImages = async (param, imagesPerPage, actualPage) => {
        return await this._pixabayAPI.getImages(param, imagesPerPage, actualPage);
    }
}

module.exports = PixabayService;