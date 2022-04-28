const express = require('express')
const router = express.Router()

//Vetor: seu valor pode ser alterado
let usuarios = [];
let contador = 0;

//enviar dados pelo servidor 
router.get('/', (req, res) => {
    //get responde as coisas que está em usuarios 
    res.status(200).send({usuarios})
})

//indentificar o que esta em um id 
router.get('/:id', (req,res)=>{
  const caminhoId = req.params.id
  //o nome e igual o nome/id
  const usuariosnome = usuarios.filter(nome => nome.id == caminhoId)
  res.status(200).send(usuariosnome)
})

//solicitar a aceitação de dados (POST)
router.post('/', (req, res) => {
    const request = req.body
    // uma variavel
    const usuariosnome ={
        //que em um contador: maior igual a 1 
        id: contador += 1,
        //ele pedi o que esta em nome
        nome: request.nome
    }
    // usuarios pucha o que esta no usuarios nome, junto com o id 
    usuarios.push(usuariosnome)
    res.status(201).send()
})


// Apagar tudo que está dentro de usuarios
router.delete('/', (req,res)=>{
    usuarios = [];
    //contador = 0;
                    //envia para o servidor
    res.status(200).send()
})

//Apagar um id/nome especifico 
router.delete('/query',(req,res)=>{
    const queryId = req.query.id
    //vai filtrar e tirar o id igual a query
    filtraLista = usuarios.filter(nome => nome.id != queryId)
    //atualiza o usuarios como filtralista
    usuarios = filtraLista
    res.status(200).send()
})

// NÃO SEI O QUE ESTA ACONTECENDO AQUI
router.put('/:value',(req,res)=>{
    const pathValue = req.params.value
    const queryId = req.query.id
    console.log(`QUERY É ${queryId} E PARAMETRO É ${pathValue}`)

    usuarios.map(nome =>{
    if(nome.id == queryId){
        console.log(`ID ENCONTRADO ${queryId} ALTERANDO O VALOR DO OBJETO`)
        nome.nome = pathValue
    }
});

res.status(200).send()
})

module.exports = router;