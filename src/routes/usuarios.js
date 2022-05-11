const express = require('express')
const router = express.Router()
const Usuarios = require('../modelos/Usuarios')

const validador = require('express-validator')

//Não entendi muito bem essa parte, ele valida só números? Sim
// ACHAR UMA VALIDAÇÂO POR LETRAS 
const validar = [
    validador.check('usuarios').isLength({min: 1}).withMessage('Usuarios não podem ser nulos'),
                               //Talvez isso de certo!!
    validador.check('usuarios').isNumeric().withMessage('São aceitos somente letras, para nome de usuários')

]

//enviar dados pelo servidor 
router.get('/', (req, res) => {
    //get responde as coisas que está em usuarios
    Usuarios.find().then(usuarios => {
        res.status(200).send(usuarios);
    }).catch(error => {
        res.status(500).send(error)
    }) 
})

//indentificar o que esta em um id 
router.get('/:id', (req,res)=>{
    //aqui vai verificar no banco de dados 
  Usuarios.findById(req.params.id)
  .then(usuarios =>{

    res.status(200).send(usuarios)

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

    const uusuarios = new Usuarios ({
        usuarios: req.body.usuarios
    })

    usuarios.save()
    .then(result =>{
        res.status(201).send(result)
    })
})


// Apagar tudo que está dentro de usuarios
router.delete('/', (req,res)=>{
    
    Usuarios.deleteMany().then(result => {
        res.status(200).send()
    });   
})

//Apagar um id/nome especifico 
router.delete('/query',(req,res)=>{
    Usuarios.findByIdAndRemove(req.query.id)
    .then(result => {
        res.status(200).send(result)
    }).catch( error => {
        res.status(404).send()
    })
})

// NÃO SEI O QUE ESTA ACONTECENDO AQUI
router.put('/:value',(req,res)=>{
    const pathValue = req.params.value
   
    Usuarios.findById(req.query.id).then(usuarios => {
        usuarios.usuarios = pathValue
        usuarios.save().then(result => {
            res.status(200).send(result)
        })
    }).catch( error => {
        res.status(404).send()
    })
})

module.exports = router;