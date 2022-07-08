/*MÉTODOS -  Assim como contrutor eu posso criar quantos métodos eu quiser, abaixo criaremos
mais um método chamado info */

class Carro {
    //cor = 'Vermelho'
    constructor(brand, model, color) {
        this.marca = brand;
        this.modelo = model;
        this.cor = color;
        this.km = 0;
        this.comb = 10;
        this.ligado = false;
    }
    info(){
        console.log(`Marca..........: ${this.marca}`);
        console.log(`Modelo.........: ${this.modelo}`);
        console.log(`Cor............: ${this.cor}`);
        console.log(`Kilometragem...: ${this.km}`);
        console.log(`Combustível....: ${this.comb}%`);
        console.log(`Ligado.........: ${this.ligado ? 'Sim' : 'Não'}`);
        console.log('-------------------------------');
    }
    ligar(){
        this.ligado = true;
    }
    desligar(){
        this.ligado = false;
    }
}

let c1 = new Carro('Honda', 'HRV', 'Verde');
let c2 = new Carro('Honda', 'Civic', 'Prata');
let c3 = new Carro('GM', 'Camaro', 'Preto');

c1.ligar();

c1.info();
c2.info();
c3.info();