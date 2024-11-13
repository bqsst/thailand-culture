const list = require('../models/list')

exports.list = async(req, res) => {
    try{
        const lists = await list.find({}).exec()
        res.send(lists)
    }catch(err){
        console.log(err)
    }
}

exports.deleted = async(req, res) =>{
    try{
        const id = req.params.id
        const removed = await list.findOneAndDelete({_id: id}).exec()
        res.send(removed)
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.create = async(req, res) =>{
    try{
        console.log(req.body)
        const listed = await list(req.body).save()
        res.send(listed)
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}