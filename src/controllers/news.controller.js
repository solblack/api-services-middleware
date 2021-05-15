const { NewsService } = require('../services');

class NewsController {

    constructor() {
        this._newsService = new NewsService;
    }

    getNews = async (req, res, next) => {
       try {
           const news = await this._newsService.getNews(req.query.country, req.query.category);
           res.send(news)
       } catch (error) {
         next(error);  
       }
    }
};

module.exports = NewsController;