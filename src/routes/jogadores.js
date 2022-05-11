const express = require('express')
const router = express.Router()
const validador = require('express-validator')

//mongoose
const Jogadores = require('../modelos/Jogadores')

//Não entendi muito bem essa parte, ele valida só números? Sim
// ACHAR UMA VALIDAÇÂO POR LETRAS 
const validar = [
    validador.check('jogadores').isLength({min: 1}).withMessage('Jogadores não podem ser nulos'),
                               //Rever aqui
    validador.check('jogadores').isNumeric().withMessage('São aceitos somente letras, para nome de jogadores')

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

    const jogadores = new Jogadores ({
        numero: req.body.jogadores
    })

    jogadores.save()
    .then(result =>{
        res.status(201).send(result)
    })
})


// Apagar tudo que está dentro de uogadores
router.delete('/', (req,res)=>{
    
    Jogadores.deleteMany().then(result => {
        res.status(200).send()
    });   
})

//Apagar um id/nome especifico 
router.delete('/query',(req,res)=>{
    Jogadores.findByIdAndRemove(req.query.id)
    .then(result => {
        res.status(200).send(result)
    }).catch( error => {
        res.status(404).send()
    })
})

// NÃO SEI O QUE ESTA ACONTECENDO AQUI
router.put('/:value',(req,res)=>{
    const pathValue = req.params.value
   
    Jogadores.findById(req.query.id).then(jogadores => {
        jogadores.uogadores = pathValue
        jogadores.save().then(result => {
            res.status(200).send(result)
        })
    }).catch( error => {
        res.status(404).send()
    })
})

module.exports = router;