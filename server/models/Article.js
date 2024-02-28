const { Schema, model, Types } = require('mongoose');

const articleSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    imageUrl: { type: String, required: true }
});

const Article = model('Article', articleSchema);

module.exports = Article;