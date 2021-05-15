const express = require('express');
const router = express.Router();
const { NewsController } = require('../controllers');
const newsController = new NewsController();

router.get('/', newsController.getNews);

module.exports = router;