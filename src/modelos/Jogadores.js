const mongoose = require('mongoose')

const esquemadeJogadores= new mongoose.Schema(
    {
        nome: Number
    }
)

module.exports = mongoose.model("Jogadores", esquemadeJogadores)