const articles = [
    {
        id: 1,
        title: 'My cake',
        author: 'John Doe',
        published: 'February 11, 2024',
        content: 'Lorem ipsum'
    },
    {
        id: 2,
        title: 'Not my cake',
        author: 'Not John Doe',
        published: 'Not February 11, 2024',
        content: 'Not Lorem ipsum'
    }
];

const getArticle = (id) => {
    return articles.find((article) => article.id == id);
}

const getAllArticles = () => {
    return articles;
}

const createArticle = (title, author, content) => {
    const newId = articles.length + 1;

    const newArticle = {
        id: newId,
        title: title,
        author: author,
        published: new Date().toLocaleDateString(),
        content: content
    };

    articles.push(newArticle);
    return newId;
}

const updateArticle = (id, newData) => {
    const article = articles.find((article) => article.id == id);

    if (article) {
        if (newData.title) article.title = newData.title;
        if (newData.author) article.author = newData.author;
        if (newData.content) article.content = newData.content;
        return article;
    }
    return null;
}


const deleteArticle = (id) => {
    const index = articles.findIndex((article) => article.id == id);
    if (index !== -1) {
        articles.splice(index, 1);
        return true;
    }
    return false;
}

module.exports = { getArticle, getAllArticles, createArticle, updateArticle, deleteArticle };