const region = require('../models/region')

exports.list = async(req, res) => {
    try{
        const regions = await region.find({}).exec()
        res.send(regions)
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}