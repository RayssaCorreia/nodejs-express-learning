const express = require('express')
const mongoose = require('mongoose')
const {json} = require('body-parser')
const cors = require('cors')
const path = require('path');

const usuarios = require('./routes/usuarios')

const server = express()
const port = 4001

server.use(json())
server.use(cors())
server.use('/usuarios', usuarios)
server.use(express.static('public'))

server.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, "visualizar", "index.html"))
})

server.use((req,res) => res.status(404).sendFile(path.join(__dirname, "visualizar", "404.html")));


/// O QUE ESTÀ ACONTECENDO AQUI ?? /// Conexão com o banco de dados?
const main = async () => {
    await mongoose.connect(process.env.My_CONN);
}


main()
.then(() => {
    server.listen(port, () => {
        console.log(`server running on port ${port}`)
      })
})
.catch(err => console.log(err));