const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://AlainMK:alain243@alainmk.xgrbb.mongodb.net/BlogApp?retryWrites=true", {
    useUnifiedTopology: true,
    useNewUrlParser: true
})