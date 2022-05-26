// Arrow function - A função Arrow lhe dá dois grandes beneficios, uma é uma 
//sintaxe mais reduzida, e você pode faze-la em uma única linha.

// Funções Arrow são funções anônimas, não tem como vc atribuir um nome a ela
//o que você fara é cria-la e atribuí-la a uma variável.
const soma = (a, b) => a + b; // quando você não tem o corpo da função automaticamente
//o return pe chamado implícito.
console.log(soma(2, 3));

//Arrow function (this)
// O "this" de uma função arrow é o this que está associado ao local que a função
//foi escrita, então se essa função foi escrita dentro de um arquivo do node, o 
//this sempre aponta para exports.
// Em uma função tradicional o this aponta para global.
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// Parametros Default - É a capacidade de encima dos atributos de uma função você 
//definir um valor padrão para eles.
function log(texto = 'Node') { // o parametro passado seja undefined o valor padrão
    console.log(texto); //será impresso.
}

log();// valor padrão
log(undefined); //valor padrão
log('Casa') // aqui será impresso o parâmetro que foi passado "casa"
log(null);// no caso de null, eme imprimira null

//-------------------------------------------------------------------------

//Operador rest - pega uma quantidade de números e agrupa eles
function total(...numeros) { //recebe uma sequencia de números
    let total = 0;
    numeros.forEach(n => total += n);// iterando sobre os números e somando todos
    return total;// mostrando o total
}

console.log(total(1, 2, 3, 4));