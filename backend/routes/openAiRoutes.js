const { generateImage } = require('../controllers/openAiController');

var router = require('express').Router();

router.post("/generateimage", generateImage)

module.exports = router;
