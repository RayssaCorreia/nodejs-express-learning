const mongoose = require('mongoose')

const esquemadeUsuarios = new mongoose.Schema(
    {
        temperature: Number
    }
)

module.exports = mongoose.model("Usuarios", esquemadeUsuarios)