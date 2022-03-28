// Cadeia de protótipos (prototype chain
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'} //para ser referenciar que o "pai" tem como
//protótipo o avo, deve ser feito assim "__proto__:avo"
const filho = {__proto__: pai, attr3: 'C'}

//Neste caso o "filho" tem como protótipo o "pai", o "pai" tem como protótipo o "avo"
//e o "avo" tem como protótipo o "Object.prototype"
console.log(filho.attr1, filho.attr2, filho.attr3);//mesmo ele não tendo os atributos
//attr1, attr2, ele vai procurar se o "pai" tem, se não ele vai procurar no "avo"
//se não ele vai procurar no Ojbect.prototype para depois responder undefined.
// Aqui no caso como ele achou no "pai" e no "avo" ele retorna os valores

// Outro exemplo:

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`;
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 340 //shadowing, no caso esse valor de velMax sera pego do objeto ferrai
    //e não do objeto pai, pois ele procura primeiro no seu local de origem
}

const volvo = {
    modelo: 'V40',
    status () {
        return `${this.modelo}: ${super.status()}`;//aqui como se quer que use o método
        //do protótipo se chama o "super", se usasse o "this" ele chamaria o mesmo 
        //médoto "status" que está dentro de "volvo"
    }
}

Object.setPrototypeOf(ferrari, carro); //Aqui é outra forma de estabelecer
//relação de prototipo, primeiro se coloca o nome do objeto e depois o nome do 
//protótipo que se quer herdar as informações
Object.setPrototypeOf(volvo, carro);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());