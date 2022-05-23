class DispositivoEletronico{
    #microcontrolador;
    #pinos;
    #leds;
    #botoes;
    #cor;
    #conexao;

    constructor( pino, led, botao, cor,conexao){

        this.#microcontrolador = true;
        this.#pinos = pino;
        this.#leds = led;
        this.#botoes = botao;
        this.#cor = cor;
        this.#conexao = conexao;
    }

    // GETTERS & SETTERS

    getPinos(){
        return this.#pinos;
    }

    getLeds(){
        return this.#leds;
    }

    getBotoes(){
        return this.#botoes;
    }
    getCor(){
        return this.#cor;
    }

    getConexao(){
        return this.#conexao;
    }

    setConexao(conexao){
        this.#conexao = conexao;
    }
}

module.exports = DispositivoEletronico;