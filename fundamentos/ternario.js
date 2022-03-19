//operador condicional (ternário) é o único operador JavaScript que recebe
// três operandos: uma condição seguida por um ponto de interrogação ( ?), uma 
// expressão a ser executada se a condição for verdadeira seguida por dois pontos
// ( :) e, finalmente, a expressão a ser executada se a condição é falsa . Este
// operador é frequentemente usado como alternativa a uma if...else instrução.

const resultado = nota => nota >= 7 ? 'Aprovado': 'Reprovado';

console.log(resultado(7.1));
console.log(resultado(6.9));