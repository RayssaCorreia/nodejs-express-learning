function obterId (id){
    return new Promise(function(resolve, reject){
        etTimeout(function(){
            if(id == 1){
                resolve("ID Encontrado")
            }
            else{
                reject("ID Desconhecido")
            }
        }, 2000, id)
    })
}

function DadosDeJogadores(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve([{
                id: 1,
                nome: "Ary",
                sobreNome: "Sil",
                idade: "30",
                dataDeCadastramento: "03/03/2004"
            }, {
                id: 2,
                nome: "Mica",
                sobreNome: "Sant",
                idade: "55",
                dataDeCadastramento: "11/08/2005"
                
            }])
        }, 2000)
    })
}

async function pedido(id){
    const tempObject = await DadosDeJogadores()
    console.log(tempObject)

    return await obterId(id)

}
 pedido(1)
.then(data => console.log(data))
.catch(error => console.log(error))