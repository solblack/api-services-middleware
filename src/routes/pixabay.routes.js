const express = require('express');
const router = express.Router();
const { PixabayController } = require('../controllers');
const pixabayController = new PixabayController();

router.get('/', pixabayController.getImages);

module.exports = router;