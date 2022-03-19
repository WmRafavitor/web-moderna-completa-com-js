// Usando this e bind em funções

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao);
    }
}
pessoa.falar();

// Armazenando a função falar em uma variável
const falar = pessoa.falar;
falar(); // isso faz com que o "this" aponte para um objeto diferente que não seja
//o objeto "pessoa", e esse outro objeto não tem "saudação" dentro dele que é a
//chave que a função procura com o valor "Bom dia".

//usando o BIND para resulver o problema
const falarDePessoa = pessoa.falar.bind(pessoa); // o "bind" é responsável por amarrar
falarDePessoa(); // o método sempre no mesmo objeto que foi passado para a função bind