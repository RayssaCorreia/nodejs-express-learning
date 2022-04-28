const express = require('express')
const {json} = require('body-parser')
const cors = require('cors')

const usuarios = require('./routes/usuarios')

const server = express()
const port = 4001

server.use(json())
server.use(cors())
server.use('/usuarios', usuarios)
server.use(express.static('public'))

server.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(_dirname, "visualizar", "index.html"))
})

server.use((req,res) => res.status(401).sendFile(path.join(_dirname, "visualizar", "404.html")));

server.listen(port, () =>{
    console.log(`server running on port ${port}`)
})