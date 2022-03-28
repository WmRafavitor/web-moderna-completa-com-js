function MeuObjeto() {}
console.log(MeuObjeto.prototype);


//quando se isntancia objeto a partir de uma função surge algumas perguntas, será que
//o prototype(__proto__) desse objeto vai apontar para objetct.prototype ou vai apantar
//para "MeuObjeto.prototype"?

const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;

console.log(obj1.__proto__ === obj2.__proto__);//quando se cria dois objetos diferentes
//a partir de uma mesma função construtora os protótipos desses objetos por padrão
//aprontam para o mesmo objeto.


console.log(MeuObjeto.prototype === obj1.__proto__); // Quando se cria um objeto a
//partir de uma função construtora usando "new" o protótipo desse objeto aponta para
//"aFuncaoQueVoceCriou.prototype" no caso aqui; o protótipo de "obj1" aponta para
//"MeuObjeto.prototype"

MeuObjeto.prototype.nome = 'Anônimo'; // o que significa que qualquer objeto que foi 
//cirato a partir desta função construtora vai ter como herança o atributo "nome"
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia, meu nome é ${this.nome}`);//todo objeto criado a partir da 
}//função tera acesso tanto a nome, quando a função falar.

obj1.falar();//obj1 não sobrescreveu o nome pq não havia valor nele
obj2.nome = 'Rafael';
obj2.falar();

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype; // Aque está sendo mudado a referência do prototipo
//de 'obj3' para sair de 'object.prototype' e ir para 'MeuObjeto.prototype'

// Da mesma forma se tem acesso tanto ao nome quanto a função falar:
obj3.nome = 'obj3';
obj3.falar();

//resumo