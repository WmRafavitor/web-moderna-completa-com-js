/* GETTERS AND SETTERS - SETTERS = São métodos especiais que se utiliza para alterar
valores dos atributos. ex.: vamos criar um método setter para o combustível   
- GETTERS = São os métodos que vamos usar para obter o valor de um atributo.*/

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
        console.log(`Combustível....: ${this.getComb}%`);//usando o métod get
        console.log(`Ligado.........: ${this.ligado ? 'Sim' : 'Não'}`);
        console.log('-------------------------------');
    }
    ligar(){
        this.ligado = true;
    }
    desligar(){
        this.ligado = false;
    }
    set setComb(valueComb) {
        this.comb = valueComb;
    }
    get getComb(){ // posso usar o getComb no lugar do comb, pois ele retorna
        return this.comb;//a informação sobre aquele atributo.
    }
}

let c1 = new Carro('Honda', 'HRV', 'Verde');
let c2 = new Carro('Honda', 'Civic', 'Prata');
let c3 = new Carro('GM', 'Camaro', 'Preto');

c1.ligar();
c2.setComb = 95;// A diferença de um método set é que eu posso atribuir direto
                //o valor como se ele fosse uma variável.
c3.setComb = 45;
c1.info();
c2.info();
c3.info();