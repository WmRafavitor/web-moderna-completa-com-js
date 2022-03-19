function getInteiroAleatorioEntre (min, max) { // Definido dois parametros
    //onde será definido entre mínimo e máximo
    const valor = Math.random() * (max - min) + min; // random gera um valor
    //aleatório entre 0 e 1, esse valor é pego e multiplicado pelo resultado
    // do máximo menos(-) o mínimo mais(+) o mínimo
    return Math.floor(valor); // Math.floor arredonda para baixo
}
let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`A opção escolhida foi ${opcao}`);
}

console.log('Até a próxima')