// A idéia do "map" é mapear um array para um outro array que tera o mesmo length
//mas o que ele fará é alterar os itens do array que está sendo mapeado, como somar,
//acrescentar algumas coisas, transformar objeto em número etc.]

// Ex.:

const nums = [1, 2, 3, 4, 5]; // tendo como base este array, eu quero dobrar
//o valor dos números que estão dentro deste array

// A função ".map()" pode receber três parâmetros; o próprio valor atual, o índice e o 
//array completo.

let resultado = nums.map(function(e) {// Foi passado para o "map" uma função que
    return e * 2;                     //retorna a multiplicação de todos os números
});                                   //do array.
console.log(resultado);

const soma = e => e + 10;// A arrow function já retorna o número mais 10
const triplo = e => e * 3;// retorna os números multiplicado por 3

// A função abaixo pega os números e tranforma em valor real, foi feito uma
//template string com o parseFloat que converte para um número flutuante, toFixed(2)
//adiciona duas casas depois da virgula e replace para pegar o "." e trocar por ","
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`;

// Abaixo dentro de resultado será salvo os três "maps", então ele 
//somara com 10, multiplicará por três e converterá para moeda, mas isso 
//poderia ser feito dentro de uma função tudo de uma vez ou tambem mostrado
//cada valor individual.
resultado = nums.map(soma).map(triplo).map(paraDinheiro);

console.log(resultado);