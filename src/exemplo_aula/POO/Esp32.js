const DispositivoEletronico = require('./DispositivoEletronico')

class Esp32 extends DispositivoEletronico {

    constructor(pino, led, botao, cor, conexao) {
        super(pino, led, botao, cor, conexao)
    }
}

const esp32 = new Esp32(38, 2, 2, "Preto","Wi-fi");
console.log(`Ele contem ${esp32.getPinos()} pinos`);
console.log(`Ele contem ${esp32.getLeds()} leds`);
console.log(`Ele contem ${esp32.getBotoes()} botões, sendo 1 programavel e outro para reset da placa`);
console.log(`Sua cor é ${esp32.getCor()}`);
console.log(`Ele está conectado no momento como ${esp32.getConexao()}`);