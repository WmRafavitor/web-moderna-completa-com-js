// Closure é o escopo criado quando a função é declarada esse escopo permite
//a função acessar e manipular variáveis externas à função.

//Contexto Léxico em ação.

const x = 'Global'; //Variável declarada no escopo global

// Uma função ela tem ciência do local onde ela foi criada, por isso ela 
//sempre acessa o escopo esterna a ela e procura as variáveis e atributos que
//foram declarados próximo a ela.

function fora() {
    const x = 'Local' // váriavel declarada no escopo local
    function dentro() {
        return x;// Neste caso a função vai receber o "x" com o valor "local"
    }
    return dentro; // A função "fora" retorna a função "dentro" que por sua vez
    //retorna o valor de "x - local" ou seja, a função fora vai retornar "local"
}

const minhaFuncao = fora();
console.log(minhaFuncao());