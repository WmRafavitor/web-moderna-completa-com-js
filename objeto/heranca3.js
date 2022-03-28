const pai = {nome: 'Pedro', corCabelo: 'Preto'}

const filha = Object.create(pai)    ;// Aqui foi criado um objeto no tendo como protótipo
//o objeto pai
filha.nome = 'Ana'
console.log(filha.corCabelo);

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true} //writable - para definir   
})                                                  //se pode seralterado ou não
//enumerable - para definir se ele pode ser acessado ou não

console.log(filha2.nome);

// fazendo um texte

for(let key in filha2) {//percorrendo as propriedades de filha2
    filha2.hasOwnProperty(key) ?//hasOwnProperty mostra se essa propriedade encontrada
    //pertence a ela, em seguida foi feito uma condição com operador ternário
    //"?" ou "if" se esse atributo pertencer a "filha2" mostre o atributo
    //":" ou "else" se não, imprima no console "`Por herança ${key}`" e isso
    //mostrará o atributo que foi herdado
    console.log(key): console.log(`Por herança: ${key}`);
}