
let aprovados = ["Bia", "Ana", "Carlos"]; //forma literal de se criar um array
let numbers = [7, 5, 3, 4, 2, 6, 1];
console.log(aprovados);

console.log(aprovados[1]);//forma de se capturar um elemento dentro do array

aprovados[2] = "Paulo" //forma correta de se substituir um valor do array
console.log(aprovados);

aprovados.push("Carlos");//para adicionar um valor no array
console.log(aprovados);
console.log(numbers);
aprovados.sort();// coloca em ordem os valores dentro do array
numbers.sort();
console.log(aprovados);
console.log(numbers);


delete aprovados[1]; // irá deletar o elemento que está no índice 1 do array

// splice serve para adicionar e remover ao mesmo tempo
aprovados.splice(1, 1, "Mateus", "Joana");//primeiro você colcoa o índice que quer
//trabalhar, depois quantos elementos você quer excluir a partir deste índice.
//e por último o que você quer adicionar.