const mongoose = require('mongoose')

const attractionSchema = mongoose.Schema({
    name: String,
    describe: String,
    image1: String,
    name1: String,
    describe1: String,
    image2: String,
    name2: String,
    describe2: String,
    image3: String,
    name3: String,
    describe3: String,
    image4: String,
    name4: String,
    describe4: String,
    image5: String,
    name5: String,
    describe5: String,
    image6: String,
    name6: String,
    describe6: String,
})  

module.exports = mongoose.model('attraction', attractionSchema)