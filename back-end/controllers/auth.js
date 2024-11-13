const User = require('../models/auth')
const bcrypt = require('bcrypt')

exports.login = async (req, res) => {

    const {username, password} = req.body

    try{
        const users = await User.findOne({username})
        if(users){
            const isMatch = await bcrypt.compare(password, users.password)
            if(isMatch){
                res.status(200).send('Login succesfull')
            }else{
                res.status(401).send('Invalid password')
            }
        }else{
            res.status(404).send('User is not found')
        }
    }catch(err){
        console.error(err.stack);
        res.status(500).send('Server error')
    }   
}

exports.register = async(req, res) => {

    const {username, password, email} = req.body

    try{
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({username, password:hashedPassword, email})
        await newUser.save()
        res.status(201).send('Register succesfull')
    }catch(err){
        console.error(err.stack);
        res.status(500).send('Server error')
    }
}