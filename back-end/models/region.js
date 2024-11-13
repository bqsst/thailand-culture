const mongoose = require('mongoose')

const regionSchema = mongoose.Schema({
    image: String,
    name: String,
    descibe: String
}, {timeStamps: true})

module.exports = mongoose.model('region', regionSchema)