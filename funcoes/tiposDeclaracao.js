//function declaration
console.log(soma(3, 4));
// O interpretador javascript carrega primeiro todas as funções e depois executa
//o código, por isso qundo a função é declarada da forma abaixo não tem problema
//chamar a função antes do código pois ela já vai ser carregada antes da execução.
function soma(x, y) {
    return x + y;
}

//function expression
const sub = function(x, y) {
    return x - y;
}
console.log(sub(2, 3));
// quando a função é criada desta forma, uma função anônima e atribuida
//a uma variável ela precisa ser chamada depios do código para poder funcionar

// Named Function Expression
const mult = function mult(x, y) {
    return x * y;
}
console.log(mult(4, 5));
// Dessa mesma forma tambem, a função precisa ser chamada depois do código para que
//ela funcione. A vantagem desta função é que quando da um erro aparece o nome da 
//função que deu erro, diferente de uma função anônima.