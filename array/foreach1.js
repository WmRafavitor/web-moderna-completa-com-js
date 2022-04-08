// Abaixo a lista de array
const aprovados = ['Maria', 'José', 'Paulo', 'Marcos', 'Mateus', 'Raquel']

// Criado um laço forEach que vai percorrer o array "aprovados"
aprovados.forEach(function(nome, indice) {// A função vai pegar primeiro o nome
//do array, e depois o índice, eu tambem poderia passar um terceiro parâmetro para a 
//função, que seria o próprio array, então o primeiro parâmetro é sempre o valor, o
//segundo é o índice, e o treceiro, caso pase é o próprio array.
    console.log(`${indice + 1}) ${nome}`);// O índice será somado + 1 a templatstring
    //é para mostrar cada número e depos o nome.
})


/////////////com arrow function ////////////////////////////

aprovados.forEach(nome => console.log(nome));// Aqui com a arrow function será mostrado
//apenas o nome.