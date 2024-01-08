const mongoose = require('mongoose')
const TodoSchema = new mongoose.Schema({
    name: String,
    todo: String,
})

module.exports = mongoose.model('todo', TodoSchema)