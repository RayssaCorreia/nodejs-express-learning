// Conexão com o banco de dados 
const mongoose = require('mongoose')

// Cria um modelo para o banco de dados
const UsuariosSchema= new mongoose.Schema(
    {
        username: String,
        password: String,
        roles: String,
    }
)

// liberando o acesso do esquema 
module.exports = mongoose.model("Users", UsuariosSchema)
