// Formas de se chamar uma função

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1+ imposto)}`;
}

const produto = {
    nome: 'Notebook',
    preco: 4859,
    desc: 0.15,
    getPreco //Criando assim, ele cria um atributo com esse nome e associa
    //a função com o mesmo nome 
}

global.preco = 20;
global.desc = 0.1;
console.log(getPreco());// chamando assim foi definido o preço e o desconto
//na variáveis acima

console.log(produto.getPreco());// Aqui se chama direto o objeto com os valores
// que são passados imediatamente para a função

//chamando com call e apply

const carro = {preco: 49990, desc: 0.20}

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.17, '$'));//Quando se chama do tipo call, se passa
//nos parâmetros do call diretamente os parâmetros que serão passados para a função,
//o primeiro parâmetro é o contexto, depois foi passado o desconto e o simb da moeda

console.log(getPreco.apply(global, [0.17, '$'])); // No apply se passa os parâmetros
//diretamente dentro de um array, primeiro parâmetro é o objeto que será usado como
//contexto na função e depois dentro do array os valores.