// novas funçoes do ES8: object.values e object.entries
const obj = {a: 1, b: 2, c: 3};
console.log(Object.values(obj));//retorna apenas os valores do objeto
console.log(Object.keys(obj)); // retorna apenas as chaves
console.log(Object.entries(obj)); //retorna uma matriz com chave e valor.

// Melhorias na notação literal - com ES 2015 você consegue criar um objeto a 
//partir de uma constante que já exista no seu código, pode-se acessar o
//valor desta variável ou constante "ex1", e tambem a forma de adicionar função
//mudoou, você pode adicionar a função direto ao inves de fazer
// nomeFuncao: function () {} "ex2"

const nome = 'Carla'
const pessoa = {
    nome, 
    ola () {
        return "Olá gente"
    }
}
console.log(pessoa.nome, pessoa.ola());

// CLASS

class Animal {};
class Cachorro extends Animal {
    falar () {
        return 'Au au'
    }
}

console.log(new Cachorro().falar())