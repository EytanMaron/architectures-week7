const express = require('express')
var router = express.Router()

const articles = require('../controllers/articles')

router.get('/:id', articles.getArticle);

router.get('/', articles.getAllArticles);

router.post('/', articles.createArticle);

router.patch('/:id', articles.updateArticle);

router.delete('/:id', articles.deleteArticle);

module.exports = router