// A diferença de um código usando callback e um que não foi usado
const notas = [7.7, 5.1, 2.7, 6.5, 6, 8.8, 9.4];

// Código sem callback

let notasBaixas1 = [];

for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i]);
    }
}
console.log(notasBaixas1);

//Código com callback

// filter é uma função que filtra os elementos de um array em cima de um determinado 
//critério, a função filter recebe como parâmetro uma outra função que recebe a 
//própria nota como parâmetro, não o índice mas a nota e retora "nota < 7", caso
//seja true, ele adiciona em notasBaixas2.
let notasBaixas2 = notas.filter(function(notas) {
    return notas < 7;
});

console.log(notasBaixas2)

// callback com arrow function

let notasBaixas3 = notas.filter(notas => notas < 7);
console.log(notasBaixas3);