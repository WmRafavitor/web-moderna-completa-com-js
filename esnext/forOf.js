// Usando laço for of a vantagem é que você percorre em cima dos valores, ao invés
// do for in ou o laço for simples que percorre em cima do índice.

for(let letra of 'Rafael') {
    console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promise']
for(let i in assuntosEcma) {
    console.log(i) // Dessa forma ele imprime os valores do índice
    console.log(assuntosEcma[i]); // Assim se imprime o valor
}

for(assunto of assuntosEcma) {
    console.log(assunto); // Dessa forma se imprime direto os valores
}

// Também se pode percorrer chave e valor com o for of no caso de um "Map" ou "Set" com por 
//exemplo for(let chaves of nomeDoObjeto.keys()) {} se quiser pegar as chaves ou
//for(let valor of nomeDoObjeto.value()) {} se quiser pegar os valores