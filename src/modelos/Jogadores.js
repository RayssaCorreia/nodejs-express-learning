// Conexão com o banco de dados 
const mongoose = require('mongoose')

// Cria um modelo para o banco de dados
const JogadoresSchema= new mongoose.Schema(
    {
        ///// LEMBRAR DE ACRESCENTAR NA ROTA, PARA CRIAÇÃO DE NOVOS JOGADORES /////

        NumeroDoJogador: Number,
        altura: Number,
        peso: Number,
        idade: Number
    }
)

// liberando o acesso do esquema 
module.exports = mongoose.model("Jogadores", JogadoresSchema)
