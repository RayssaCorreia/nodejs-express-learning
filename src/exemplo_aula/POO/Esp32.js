const DispositivoEletronico = require('./DispositivoEletronico')

class Esp32 extends DispositivoEletronico {

    constructor(pino, led, botao, cor, conexao) {
        super(pino, led, botao, cor, conexao)
    }
}

const Esp32 = new Esp32(38, 2, 2, "Preto","Wi-fi");