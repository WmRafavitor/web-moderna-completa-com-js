/* destructuring é uma expressão JavaScript que nos permite extrair dados de arrays, 
objetos e mapas e defini-los em novas variáveis ​​distintas . A desestruturação nos 
permite extrair várias propriedades, ou itens, de uma matriz de cada vez.*/

// PARA EXTRAIR DE UM OBJETO

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua abc',
        numero: 1000
    }
}

const {nome, idade} = pessoa; //destructuring extraindo de pessoa nome e idade
console.log(nome, idade);


// Abaixo está um exemplo de como extrair dois valores  de um objeto e inserir
//dentro de variávis, por exemplo, "nome" está sendo extraido e adicionado na
//variável "n" e "idade" na variável "i"
const {nome: n, idade: i} = pessoa;
console.log(n, i);

// PARA ACESSAR ATRIBUTOS DENTRO DE OUTRO ATRIBUTO
// exemplo o atributo "endereço" tem mais atributos dentro, abaixo um
//modelo de como acessar

const {endereco: {logradouro, numero}} = pessoa; // ele criará apenas a variável
console.log(logradouro, numero);                 //'logradouro' e 'numero'