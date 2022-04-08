Array.prototype.forEach2 = function(callback) { // aqui eu salvo essa nova função
    //"forEach2" dentro do prototype do Array
    for (let i = 0; i < this.length; i++) {//  Depois usa-se um "for" para perccorrer
        //o array e os índices
        callback(this[i], i, this);// Depois eu passo para a função "callback" o 
        //tamanho do array, o índice e o próprio array
    }
}

const aprovados = ["Pedro", "Tiago", "João"];

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`);
})