const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    title: String,
    description: String,
    category: String,
    imageUrl: String
}, {
    timestamp: true
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article