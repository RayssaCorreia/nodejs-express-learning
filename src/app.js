const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')

const server = express()
const port = 4001

server.use(json())
server.use(cors())

//Vetor que o seu valor pode ser alterado
let usuarios = [];

//enviar dados pelo servidor 
server.get('/', (req, res) => {
    //get responde as coisas que está em usuarios 
    res.send(`${usuarios}\n`)
    res.status(200).send()
})

//solicitar a aceitação de dados (POST)
server.post('/', (req, res) => {
    //Não entendi essa parte// crio uma variavel que não pode ser mudada
    const request = req.body
    //pucha a requizição de usuarios. Que no caso é o nome 
    usuarios.push(request.nome)
    //se der certo mostrar esse código de https 
    res.status(201).send()
})

server.listen(port, (req, res) => {
    console.log(`server running on port ${port}`)
})