// Quando se trablaha com funções você pode nomear as funções, ou você pode criar uma
//função anônima, e passar ela para ser executada por outra função, ou pode armazenar
//uma função anônima dentre de uma variável.

// Uma função anônima é uma função sem nome

const soma = function(x, y) {
    return x + y;
}

const imprimirResultado = function(a, b, operacao = soma) {// Aqui neste função foi
    //passado um terceiro parâmetro que vai receber a função "soma" caso "a" e "b"
    console.log(operacao(a, b));//não tenha sido passado.
    // Esse terceiro parãmetro "operacao = soma" está dizendo mais ou menos assim:
    //"caso "a" e "b" não sejam passado a função soma com seus valores será
    // adicionada a ele" se for passado ele agirá como uma função e receberá
    //os valores de "a" e "b" como parâmetro, ele valor será jogado detro de
    //"soma()", e será somado os números.
}

imprimirResultado(3, 4);// será somado 3 + 4.
imprimirResultado(5, 6, soma);// será somado 5 + 6, e a função "soma" não fará
//nada
imprimirResultado(5, 3, function(x, y) {// será adicionado 5 e 3, na função que foi
    return x - y; // passada como terceiro parâmetro e essa função subitrairá 5 e 3
});

imprimirResultado(3, 4, (x, y) => x * y); // fazendo a mesma coisa que o exemplo de
//cima, mas desta vez com uma arrow function, e ele irá multiplicar.


// função anônima dentre de um objeto

const pessoa = {
    falar: function() {
        console.log("Olá.");
    }
}
pessoa.falar();// E para acessar a função faz dessa forma, colocando os parenteses
//apos a chave do objeto.