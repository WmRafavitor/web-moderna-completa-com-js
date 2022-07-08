/* STATIC - Quando eu defino algo como estático eu de memória fixo em todo o sistema,
em todas as classes e todos os objetos daquela classe eles vão acessar o mesmo elemento.*/

class Carro {
    static alerta = true;// Quando se define um alerta esse valor será igual
    //para todos os itens que utlizarem essa classe
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
        console.log(`Alerta.........: ${Carro.alerta ? 'Sim' : 'Não'}`);
        console.log('-------------------------------');
    }
    ligar(){
        this.ligado = true;
    }
    desligar(){
        this.ligado = false;
    }
    set setAlerta(t) { //definindo um set para o alerta
        Carro.alerta = t;
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
c2.setAlerta = false;  //Como alerta é esstático, se eu mudar esse atributo em
//um dos carros, ele será mudado em todos os outros pois ele acessa o mesmo
//endereço de memória.

//Carro.alerta = false;// a mesma mudança será feita em todos os carros

c1.info();
c2.info();
c3.info();