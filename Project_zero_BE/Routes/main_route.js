const express = require('express');

const router = express.Router();

const mainController = require('../Controllers/main_controller')

router.get('/', mainController.main)

module.exports = router;
