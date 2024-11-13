const mongoose = require('mongoose')

const favoriteSchema = mongoose.Schema({
    image: String,
    name: String,
    describe: String
},{timestamps: true})

module.exports = mongoose.model('favorite', favoriteSchema)