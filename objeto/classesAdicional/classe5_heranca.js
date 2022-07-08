/* HERANÇA - Como o próprio nome já diz ele herda atributos de outra classe*/

class Carro {
    constructor(tpCarro, tpComb) {
        this.tipo = tpCarro;
        this.qtdeComb = 100;
        this.ligado = false;
        this.tipoComb = tpComb;
    }
    info(){
        console.log(`Qtde Combus: ${this.qtdeComb}%`);
        console.log(`Ligado.....: ${this.ligado ? 'Sim' : 'Não'}`);
        if(this.tipoComb === 1) {
            console.log(`Tipo Combus: Gasolina`);
        }else if(this.tipoComb === 2) {
            console.log(`Tipo Combus: Diesel`);
        }else if( this.tipoComb === 3) {
            console.log(`Tipo Combus: Etanol`)
        }
        if(this.tipo === 1) {
            console.log(`Tipo Carro.: Passeio`);
        } else if (this.tipo === 2) {
            console.log(`Tipo Carro.: Transporte`);
        } else if (this.tipo === 3) {
            console.log(`Tipo Carro.: Combate`)
        } else {
            console.log(`Tipo Carro.: Carro não identificado`)
        }
        
    }
    set setLigado(t){
        this.ligado = t;
    }
    get getLigado() {
        return this.ligado;
    }
    set setComb(valueComb) {
        this.qtdeComb = valueComb;
    }
    get getComb(){
        return this.qtdeComb;
    }
}

class CarroCombate extends Carro { //herdando atributos da classe carro
    constructor() {
        super(3, 2)
        this.tiros = 1000;
        this.potTiro = 150;
        this.blindagem = 100;
        
    }
    info(){
        super.info();
        console.log(`Qtde tiro..: ${this.tiros}`);
        console.log(`Pot. tiro..: ${this.potTiro}`);
        console.log(`Blindagem..: ${this.blindagem}%`)
        console.log('-------------------------------');
    }
}

let c1 = new CarroCombate();


c1.info();