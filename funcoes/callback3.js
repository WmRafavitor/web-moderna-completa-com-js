// Fazendo uma chamada de click usando callback

// copiando e colando o evento no browser ele dispara uma função
//de click
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!');
}