// Função auto invocada(IIFE - Immediately Invoked Function Expression)

// A função auto invocada precisa ser definica entre parênteses

(function() {
    console.log('Será executado na hora!');
    console.log('Foge do escopo mais abrangente');
})()

// E no final colocar parênteses novamente para ela ser chamada na hora
// Tudo que for criado dentro desta função será apenas do escopo local