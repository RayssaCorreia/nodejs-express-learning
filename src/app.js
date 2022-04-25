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
let contador = 0;

//enviar dados pelo servidor 
server.get('/', (req, res) => {
    //get responde as coisas que está em usuarios 
    console.log(usuarios)
    res.status(200).send({usuarios})
})

//solicitar a aceitação de dados (POST)
server.post('/', (req, res) => {
    const request = req.body
    // uma variavel
    const usuariosnome ={
        //que em um contador: maior igual a 1 
        id: contador += 1,
        //Apos a contagem, ele pedi o que esta em nome
        nome: request.nome
    }
    // usuarios pucha o que esta no usuarios nome, junto com o id 
    usuarios.push(usuariosnome)
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