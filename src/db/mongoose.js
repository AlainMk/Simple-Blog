const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/BlogApp', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})