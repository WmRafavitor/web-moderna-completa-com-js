// factory simples
// funcões factory são funções que retorna um objeto:

function criaPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
// Essa função tambem pode receber parâmetros para acrescentar mais pessoas no objeto.
console.log(criaPessoa());