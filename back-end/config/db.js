const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        await mongoose.connect('mongodb://localhost:27017/basza')
        console.log('Database Connected')
    }catch(err){
        console.log(err+'Cannot connect to database')
    }
}

module.exports = connectDB