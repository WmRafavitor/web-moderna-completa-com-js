const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj));//passando um objeto para JSON, no caso se verá
// que será excluido a função porque o JSON é um formato de dados, não é algo que 
//será executado, são dados que estão trafegando de uma aplicação par aoutra, são
//dados que estão armazenados em um arquivo para um arquivo de configuração.

// Forma de se passar um JSON par aobjeto

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))//as keys devem estar entre 
//aspas duplas e o objeto entre aspas simples, ou se umar "/" para escape.

// Tambem se pode colocar em formato JSON; booleans, numeros flutuantes, arrays e
//outros objetos.

console.log(JSON.parse('{"a": 1.7, "b":"string", "c": true, "d": {}, "e": []}'));