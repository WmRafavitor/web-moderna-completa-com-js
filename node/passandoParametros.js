// Um exemplo de como passar parâmtros para um módulo.
// Se um módulo retorna um função você pode invocar esta função passando 
//parâmetros e o que estiver dentro será executado.

module.exports = function(...nomes) {
    return nomes.map(nome => `Boa semana ${nome}!`);
}