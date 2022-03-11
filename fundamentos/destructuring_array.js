// no caso de array para se usar o destructuring é necessáriousar []

const [a] = [10];
console.log(a);

//pulando vários elementos

const [n1, ,n3, ,n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6);

// desestruturando array de array, ou matrizes

/* No caso abaixo foi criado um array de dois elementos, o primeiro naõ foi declarado
e o segundo é outro array, sendo que nesse outro array o primeito tambem foi ignorado
em seguida foi atribuido os valores do primeiro e do segundo, e o valor inserido em 
"nota" é o valor "6" */

const [, [, nota]] = [[,8,8], [9,6,8]];// estrutura apenas para modelo
console.log(nota);