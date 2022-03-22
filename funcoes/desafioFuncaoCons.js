class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    falar () {
        console.log(`Meu nome é ${this.nome}`);
    }
}
const p1 = new Pessoa('João');
p1.falar();

// Fazendo o mesmo da classe na função construtura

function People(nome) {
    this.nome = nome
    this.falar = function() {
        console.log(`Meu nome é ${nome}`);
    }
}

const p2 = new People('Claudio');
p2.falar();