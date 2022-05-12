// Ambiente do node.js
const express = require('express')
// Gerenciador/manipulador de rotas do NodeJS
const router = express.Router()
// Biblioteca utilizada no Node. js para validação
const validador = require('express-validator')

//mongoose (modelo no banco de dados)
const Jogadores = require('../modelos/Jogadores')


// Vlidação utilizando a biblioteca
const validar = [
                                 // Assegurar que a descrição possua ao menos um caractere
    validador.check('jogadores').isLength({min: 1}).withMessage('Jogadores não podem ser nulos'),
                               // Assegurar que são números 
    validador.check('jogadores').isNumeric().withMessage('São aceitos somente numeros, para os jogadores')

]

//puxar dados pelo servidor 
router.get('/', (req, res) => {
    
    //get responde as coisas que está em jogadores
    Jogadores.find().then(jogadores => {
        res.status(200).send(jogadores);
        
    }).catch(error => {
        
        res.status(500).send(error)
    }) 
})

//indentificar o que esta em um id 
router.get('/:id', (req,res)=>{
    
    //aqui vai verificar no banco de dados 
  Jogadores.findById(req.params.id)
  .then(jogadores =>{
    res.status(200).send(jogadores)

  }).catch(error => {
      res.status(404);
  })
})

//solicitar a aceitação de dados (POST)
router.post('/', [validar], (req, res) => {

    const erros = validador.validationResult(req);
    if(!erros.isEmpty()){
        return res.status(422).send({erros: erros.array()})
    }
    // cria um novo número de jogador 
    const jogadores = new Jogadores ({
        numero: req.body.jogadores
    })
    
    // Salvar esse post
    jogadores.save()
    .then(result =>{
        res.status(201).send(result)
    })
})


// Apagar tudo que está dentro do banco de dados 
router.delete('/', (req,res)=>{
    
    Jogadores.deleteMany().then(result => {
        res.status(200).send()
    });   
})

// Apagar um id/nome especifico 
/*router.delete('/query',(req,res)=>{
    
    Jogadores.findByIdAndRemove(req.query.id)
    .then(result => {
        res.status(200).send(result)
        
    }).catch( error => {
        res.status(404).send()
    })
})*/

// NÃO SEI O QUE ESTA ACONTECENDO AQUI // 
router.put('/:value',(req,res)=>{
    const pathValue = req.params.value
    
   // Acho que aqui está salvando 
    Jogadores.findById(req.query.id).then(jogadores => {
        jogadores.jogadores = pathValue
        jogadores.save().then(result => {
            res.status(200).send(result)
        })
    }).catch( error => {
        res.status(404).send()
    })
})

// liberando o acesso para essa rota 
module.exports = router;
