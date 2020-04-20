const mongoose = require('mongoose')

const MessageScheme = new mongoose.Schema({
    name: String,
    message: String
})

mongoose.model('Messages', MessageScheme)