// REVISÃO DO QUE JÁ FOI FALADO NO COMEÇO DO CURSO

// As duas palavras novas palavras reservadas para se criar váriaveis
//que são "let" e "const"
// Essas váriasveis são para ter escopo de bloco, o que o "var" não tinha

{
    var a = 2;
    let b = 5;
}
console.log(a); // este apresentara na tela normalmente.
//console.log(b); - este trecho dara erro, pois a variável "b" constara que não
//foi declarada

//-------------------------------------------------------------------------

// Template String

const produto = 'Ipad';
console.log(`${produto} é muito caro`);
//---------------------------------------------------------------------------

// Destructuring - é a forma de você tirar de dentro de uma estrutura algo
//seja de detro de um array, de um objeto, de uma string etc, você pode 
//desestruturar através do  operador destructuring.

const [l, e, ...tras] = 'Cod3r'; // desestruturando uma string
console.log(l, e, tras);

const [x, , y] = [1, 2, 3]; //desestruturando uma string
// o espaço vazio entre "x" e "y" é para ignorar o
//número 2
console.log(x, y);

const{idade: i, nome: n} = {nome: "Ana", idade: 12};
console.log(i, n);