const mongoose = require('mongoose')

const esquemadeJogadores= new mongoose.Schema(
    {
        numero: Number
    }
)

module.exports = mongoose.model("Jogadores", esquemadeJogadores)