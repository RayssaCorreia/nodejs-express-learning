const express = require('express')
const router = express.Router()

//mongoose
const Users = require('../modelos/userSenha')

const check = [(req, res, next) => {

    Users.findOne({username: req.header('username')}).then( result => {
        const user = result.username; 
        const pass = result.password;
        
        if (req.header('password') != pass) {
            console.log("Incorrect password")
            return res.status(403).send()
        }else {
            console.log("Correct password");
            next()
        }
        
    }).catch(err => {
        return res.status(403).send("Incorrect username");
    })
}]

router.get('/', check, (req, res) => {

    Users.find().then(user => {
        res.status(200).send(user);

    }).catch(error => {
        res.status(500).send(error)
    }) 
})

router.post('/', (req,res) => {
    const user = new Users( {

        username: req.body.username,
        password: req.body.password,
        roles: req.body.roles
    })


    user.save().then(() => {
        res.status(200).send()
    })
})


module.exports = router;