const detail = require('../models/detail')

exports.list = async(req, res) => {
    try{
        const details = await detail.find({}).exec()
        res.send(details)
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}