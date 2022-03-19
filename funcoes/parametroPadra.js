// Formas de se gerar valor padrão em funcões para garantir que ela tenha
//um valor mesmo que o usuário não passe valor nem um

// Estratégia 1

function soma1 (a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;

    return a + b + c;
}

console.log(soma1(), soma1(2,2), soma1(2, 2, 3), soma1(0, 0, 0));
// No ultimo resultado da função "soma1()" onde foi atribuido zeros vai gerar um
//bug e apresentar o resultado "3", isso porque foi atribuido 1 caso não ouvesse
//valor, e esta não é a forma mais segura de se gerar valor padrão.

// Estratégia 2, 3 e 4 na mesma função para gerar valor padrão

function soma2(a, b, c) {
    a = a != undefined ? a : 1;// 2 - fazendo a comparação com operador ternário
    b = 1 in arguments ? b : 1;// 3 - usando arguments
    c = isNaN(c) ? 1 : c;// 4 - testando se o parâmetro é NaN, de todas as 
    //estratégias esta última é a mais segura.
    return a + b + c;
}
console.log(soma2(), soma2(2), soma2(2, 3, 4), soma2(0, 0, 0));// neste caso o "0"
//é acrescentado e somado

// Valor padrão es2015.
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
} // Esta é a forma mais adequada e mais enxuta de se escrever.

console.log(soma3(), soma3(3), soma3(2, 3, 4), soma3(0, 0, 0));