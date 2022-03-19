// Função em JS é First-Class Object (Citizens)
// Higer Order Function

// Criando uma função de forma literal
function fun1 () {}


// Armazenando uma função em uma variável
const fun2 = function () {}

// Armazenando função em array
const array = [function (a, b) { return a + b}, fun1, fun2];
console.log(array[0](2,3));

// Armazenando em um objeto

const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar());

// Passando função como parâmetro
function run(fun) {
    fun();
}

run(function () {console.log('Executando...')});

// Retornando uma função como parâmetro
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

soma(3, 4)(5); // Essa é a forma de se chamar e passar os parâmetros para as funções    