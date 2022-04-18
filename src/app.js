const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')

const server = express()
const port = 4001

server.use(json())
server.use(cors())

//enviar dados pelo servidor 
server.get('/', (req, res) => {
    res.send("Hello World\n")
})

// server.post('/', function (req, res) {
//     res.send('Olá !!!!');
// });

server.post('/', (req, res) => {
    const request = req.body
    res.send(request.usuarios)
    res.status(201).send()
})

server.listen(port, (req, res) => {
    console.log(`server running on port ${port}`)
})