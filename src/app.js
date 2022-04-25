const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')

const server = express()
//Definição da porta 
const port = 4001

server.use(json())
server.use(cors())

//Vetor: seu valor pode ser alterado
let usuarios = [];

//enviar dados pelo servidor 
server.get('/', (req, res) => {
    //get responde as coisas que está em usuarios 
    res.send(`${usuarios}\n`)
    res.status(200).send()
})

//solicitar a aceitação de dados (POST)
server.post('/', (req, res) => {
    //Trabalha com os dados mandados pelo nome ???
    const request = req.body
    //pucha a requizição de usuarios. Que no caso é o nome 
    usuarios.push(request.nome)
    //se der certo mostrar esse código de https 
    res.status(201).send()
})

// Apagar tudo que está dentro de usuarios
server.delete('/', (req,res)=>{
    usuarios = [];
                    //envia para o servidor
    res.status(200).send()
})

server.listen(port, (req, res) => {
    console.log(`server running on port ${port}`)
})