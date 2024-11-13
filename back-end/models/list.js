const mongoose = require('mongoose')

const listSchema = mongoose.Schema({
    name: String,
    describe: String,
    map: String
}, {timeStamps: true})

module.exports = mongoose.model('list', listSchema)