const express = require('express');
const router = express.Router();
const main = require('../controller/MainController');

router.get('/', main.index);
router.get('/about', main.about);
router.get('/service', main.service);
router.get('/gallery', main.gallery);
router.get('/contact', main.contact);


module.exports = router; 