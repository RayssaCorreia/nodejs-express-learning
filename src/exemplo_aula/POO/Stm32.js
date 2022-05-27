const DispositivoEletronico = require("./DispositivoEletronico");

// CLASS (base p/)//
class Stm32 extends DispositivoEletronico{

        constructor(pino, led, botao, cor,conexao){
            super(pino, led, botao,cor, conexao)
        }
}

// OBJETO (projeto d/) // 
const Stm32 = new Stm32(132, 3, 2, "Azul","I2C");
console.log(`Ele contem ${Stm32.getPino()} pinos`);
console.log(`Ele contem ${Stm32.getPino()} leds`);
console.log(`Ele contem ${Stm32.getPino()} botões, sendo 1 programavel e outro para reset da placa`);
console.log(`Sua cor ${Stm32.getPino()}`);
console.log(`Ele está conectado no momento como ${Stm32.getPino()}`);