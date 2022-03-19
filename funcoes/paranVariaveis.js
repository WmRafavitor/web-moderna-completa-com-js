// Forma de fazer uma função sem parâmetros, mas podendo passar parâtros para ela 
//futuramente.

function soma() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma;
}

console.log(soma(1, 3, 5, 7));
console.log(soma());
console.log(soma(2.3, 5.7, 3.1));