const express = require('express')
const {json} = require('body-parser')
const cors = require('cors')

const usuarios = require('./routes/usuarios')

const server = express()
const port = 4001

server.use(json())
server.use(cors())
server.use('/usuarios', usuarios)

server.listen(port, () =>{
    console.log(`server running on port ${port}`)
})