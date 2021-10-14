const router = require('express').Router();
const NewsController = require('./../controllers/news.controller');

router.get('/', NewsController.getNews);

module.exports = router;