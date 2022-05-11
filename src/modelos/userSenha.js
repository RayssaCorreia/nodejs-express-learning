const mongoose = require('mongoose')

const UsuariosSchema= new mongoose.Schema(
    {
        username: String,
        password: String,
        roles: String,
    }
)

module.exports = mongoose.model("Users", UsuariosSchema)