const { Schema, model, Types } = require('mongoose');

const articleSchema = new Schema({
    title: { type: String },
    description: { type: String },
    author: { type: String },
    imageUrl: { type: String },
});

const ArticleDB = model('Article', articleSchema);

module.exports = ArticleDB;