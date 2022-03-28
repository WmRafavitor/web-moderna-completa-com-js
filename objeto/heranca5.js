// string, array e objet tem um atributo chamado ".prototype" porque toda função
//tem um atributo chamado ".prototype"
console.log(typeof string);
console.log(typeof array);
console.log(typeof Object);

// uma função para revertet string

String.prototype.reverse = function () {
    return this.split('').reverse().join('')// "split" separa todas as letra e coloca
    //dentro de um array, inclusive espaços em branco, "reverse" reverte toda essas
    //letras e "join" junta novamente todas essas letras.
}

console.log('Rafael Vitor da Silva'.reverse())