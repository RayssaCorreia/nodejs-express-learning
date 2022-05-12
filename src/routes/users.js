// Ambiente do node.js
const express = require('express')
// Gerenciador/manipulador de rotas do NodeJS
const router = express.Router()

// Mongoose (modelo no banco de dados)
const Users = require('../modelos/userSenha')

// Validador de senha e usuario
const check = [(req, res, next) => {

    // Verifica se o usuario, pedido é igual ao do banco de dados 
    Users.findOne({username: req.header('username')}).then( result => {
        // User recebe o username do banco de dados
        const user = result.username; 
        // Pass recebe o password do banco de dados
        const pass = result.password;
        
        // Se o password(pesquisado) for diferente que pass
        if (req.header('password') != pass) {
            // Printa no terminal:
            console.log("Senha incorreta")
            return res.status(403).send()
        // Se não 
        }else {
            // Printa no terminal:
            console.log("Senha correta");
            next()
        }
        
    }).catch(err => {
        // se o nome estiver errado 
        return res.status(403).send("Incorrect username");
    })
}]

// Aqui é o lugar onde de fato puxa/pesquisa no banco de dados 
router.get('/', check, (req, res) => {
               // verificação
    
    Users.find().then(user => {
        res.status(200).send(user);

    }).catch(error => {
        res.status(500).send(error)
    }) 
})

// Cria um usuario novo - Seguindo o modelo do banco de dados 
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
