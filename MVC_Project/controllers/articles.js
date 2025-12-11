const articles = require('../models/articles');

const getArticle = (req, res) => {
    const id = req.params.id;
    const foundArticle = articles.getArticle(id);
    res.json(foundArticle);
} 

const getAllArticles = (req, res) => {
    const allArticles = articles.getAllArticles();
    res.json(allArticles);
}

const createArticle = (req, res) => {
    const { title, author, content } = req.body;
    const newId = articles.createArticle(title, author, content);
    res.status(201).json({ id: newId });
}
 const updateArticle = (req, res) => {
    const id = req.params.id;
    const newData = req.body;
    const updatedArticle = articles.updateArticle(id, newData);

    if (updatedArticle) {
        res.json(updatedArticle);
    } else {
        res.status(404).json({ error: 'Article not found' });
    }
}

const deleteArticle = (req, res) => {
    const id = req.params.id;
    const success = articles.deleteArticle(id);

    if (success) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Article not found' });
    }
}

module.exports = { getArticle, getAllArticles, createArticle, updateArticle, deleteArticle };