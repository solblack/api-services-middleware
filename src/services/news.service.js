const { NewsAPI } = require('../apis');

class NewsService {

    constructor(){
        this._newsAPI = new NewsAPI();
    }

    getNews = async (country, category) => {
        return await this._newsAPI.getNews(country, category);
    }
}

module.exports = NewsService;