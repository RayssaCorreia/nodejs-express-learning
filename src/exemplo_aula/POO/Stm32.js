const DispositivoEletronico = require("./DispositivoEletronico");

// CLASS (base p/)//
class Stm32 extends DispositivoEletronico{

        constructor(pino, led, botao, cor,conexao){
            super(pino, led, botao,cor, conexao)
        }
}

// OBJETO (projeto d/) // 
const stm32 = new Stm32(132, 3, 2, "Azul","I2C");
console.log(`Ele contem ${stm32.getPinos()} pinos`);
console.log(`Ele contem ${stm32.getLeds()} leds`);
console.log(`Ele contem ${stm32.getBotoes()} botões, sendo 1 programavel e outro para reset da placa`);
console.log(`Sua cor é ${stm32.getCor()}`);
console.log(`Ele está conectado no momento como ${stm32.getConexao()}`);