class Animal{
    // # privatização 
    #peso;
    #cor;

    constructor(cor,peso){
        // cor class// parametro da instenciação
        this.#cor = cor;
        this.#peso = peso;
    }

    emitirSom(){
        console.log("Implementar o polimorfismo")
    }

    // GETTERS & SETTERS - Encapsulamento
    getPeso(){
        return this.#peso;
    }

    getCor(){
        return this.#cor;
    }

    setPeso(peso){
        this.#peso = peso;
    }

    //não faz nada 
    setCor(){}
}

// const animal001 = new Animal("Violeta", 2);
// const animal002 = new Animal("Rosa", 900);

// console.log(animal001.getPeso() + " " + animal001.cor)
// console.log(animal002.getPeso() + " " + animal002.cor)

// animal001.setPeso(2000);
// console.log(animal001.getPeso())

class Cachorro extends Animal{

    constructor(cor,peso){
        super(cor,peso)
    }

    emitirSom(){
        console.log("AUAU")
    }

}

class Gato extends Animal{

    #numeroDeVidas;

    constructor(cor,peso){
        super(cor,peso)
        this.#numeroDeVidas = 7;
    }

    getNumeroDeVidas(){
        return this.#numeroDeVidas;
    }

    emitirSom(){
        console.log("MINHAU")
    }

}

const cachorro001 = new Cachorro("rosa", 78);
console.log(`A cor é: ${cachorro001.getCor()}`)

const gato001 = new Gato("preto", 20);
console.log (`A cor é: ${gato001.getCor()} e o numero de vidas é ${gato001.getNumeroDeVidas}`)

cachorro001.emitirSom();
gato001.emitirSom();