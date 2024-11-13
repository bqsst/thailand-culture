const attraction = require('../models/attraction')

exports.list = async(req, res) => {
    try{
        const attractions = await attraction.find({}).exec()
        res.send(attractions)
    }catch(err){
        console.log(err)
    }
}