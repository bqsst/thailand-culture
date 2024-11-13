const favorite = require('../models/favorite')

exports.read = async (req, res) => {
    try{
        //code
        const id = req.params.id
        const favorited = await favorite.findOne({_id: id}).exec();
        res.send(favorited)
    }catch(err){
        //error
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.list = async(req, res) =>{
    try{
        //code
        const favorited = await favorite.find({}).exec();
        res.send(favorited)
    }catch(err){
        //error
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.create = async(req, res) =>{
    try{
        //code
        console.log(req.body)
        const favorited = await favorite(req.body).save()
        res.send(favorited)
    }catch(err){
        //error
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.update = async(req, res) =>{
    try{
        //code
        const id = req.params.id
        const updated = await favorite.findOneAndUpdate({_id: id}, req.body, {new: true}).exec()
        res.send(updated)
    }catch(err){
        //error
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.deleted = async(req, res) =>{
    try{
        //code
        const id = req.params.id
        const removed = await favorite.findOneAndDelete({_id: id}).exec()
        res.send(removed)
    }catch(err){
        //error
        console.log(err)
        res.status(500).send('Server Error')
    }
}