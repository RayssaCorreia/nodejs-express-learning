const DispositivoEletronico = require('./DispositivoEletronico')

class Esp32 extends DispositivoEletronico {

    constructor(pino, led, botao, cor, conexao) {
        super(pino, led, botao, cor, conexao)
    }
}

const Esp32 = new Esp32(38, 2, 2, "Preto","Wi-fi");
console.log(`Ele contem ${Esp32.getPino()} pinos`);
console.log(`Ele contem ${Esp32.getPino()} leds`);
console.log(`Ele contem ${Esp32.getPino()} botões, sendo 1 programavel e outro para reset da placa`);
console.log(`Sua cor ${Esp32.getPino()}`);
console.log(`Ele está conectado no momento como ${Esp32.getPino()}`);