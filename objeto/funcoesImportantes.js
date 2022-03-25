// Funções importantes e interessantes que estão disponíveis dentro do Object

const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13    
}

console.log(Object.keys(pessoa)); // Aqui você pega todas as chaves do objeto
console.log(Object.values(pessoa));// Pega todos os valores
console.log(Object.entries(pessoa)); // Ele retorna um array com chave e valor, mas
//separado, um array para uma chave e um valor, outro array para outra chave e outro
//valor
// Tambem pode ser percorrer esse array de duas formas:
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`);
})

// E tambem pode ser usado o destructuring para desestruturar o objeto

Object.entries(pessoa).forEach(([chave, valor]) => {

    console.log(`${chave} e ${valor}`)
})

// defineProperty - para definir uma propriedade de um objeto a diferença é que você
//pode definir características de uma propriedade, se ela pode ou não ser alterada
//se ela ficará visível quando colocar Object.keys etc...
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //aqui está dizendo que ela pode ser listada
    writable: false, //se ela pode ser alterada
    value: '01/01/2022' // aqui o valor que se quer dar para a chave
})

// object.assign - você define um objeto de destino e ele concatena todos os atributos
//dos outros objetos dentro do objeto de destino:
const dest = {a: 1};
const o1 = {b: 2};
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2) // O primeiro objeto é o objeto de destino
//e os outros dois são objetos que serão concatenados ao objeto de destino, como o 
// "o2" tem uma chave com o mesmo valor do "dest" ela será sobrescrita
console.log(obj);

//Ojbect.freeze que já foi visto que ele congela o valor do objeto para que 
//não seja mais alterado

obj.a = 5;//aqui ainda consigo alterar
console.log(obj);
Object.freeze(obj);//depois de freeze. já não consigo mais
obj.a = 6; // O valor adicionado será ignorado  
console.log(obj);
