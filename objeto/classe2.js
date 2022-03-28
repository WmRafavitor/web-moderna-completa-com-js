class Avo {
    constructor (sobrenome) {
        this.sobrenome = sobrenome;
    }
}
class Pai extends Avo { // Essa é a forma de definir que uma classe tem outra classe como
                        //protótipo
    constructor(sobrenome, profissao = 'professor') {
        super(sobrenome);// Essa é a forma de chamar uma heranca da super classe
                         //ou seja, a classe de quem ele herda o "sobrenome"
        this.profissao = profissao;
    }
}

class Filho extends Pai {
    constructor() {
        super('silva');
    }
}

const filho = new Filho;
console.log(filho);
const pai = new Pai;
console.log(pai);