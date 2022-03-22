// O callback serve para ser chamado de volta caso algum evento aconteça, o
//objetivo dele não é parar a página ou o processo esperando que o evento aconteça
//mas fazer com que se siga o fluxo e assim que o evento acontecer ele retorna uma
//resposta avisando que deu certo ou que deu errado.

const fabricantes = ["Mercedes", "Audi", "BMW"]; // O array que vai ser percorrido

function imprimir(nome, indice) { // A função que recebe dois parâmetros
    console.log(`${indice + 1}. ${nome}`); // A cada iteração, é somado +1 no índice e
    //mostrado o nome que está dentro do array
}

fabricantes.forEach(imprimir);//forEach é uma função de fabricantes, e fabricantes é
//um array, o forEach percorre esse array e dentro do forEach é passado a função
//imprimir que tem dois parâmetros, por default o primeiro parâmetro recebe o nome
//do array, e o segundo a própria função atribui +1

//OUTRO EXEMPLO
fabricantes.forEach(function(a) {
    console.log(a)
});