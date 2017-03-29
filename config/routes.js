const express     = require('express');
const controllers = require('../src/controllers');
const router = express.Router();

router.get('/', controllers.homepage.index);

exports.router = router;
