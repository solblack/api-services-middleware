const express = require('express');
const router = express.Router();
const { BitlyController } = require('../controllers');
const bitlyController = new BitlyController();

router.post('/', bitlyController.createShortUrl);

module.exports = router;