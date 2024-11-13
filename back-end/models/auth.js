const mongoose = require('mongoose')

const authSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
}, {timeStamps: true})

module.exports = mongoose.model('auth', authSchema); 