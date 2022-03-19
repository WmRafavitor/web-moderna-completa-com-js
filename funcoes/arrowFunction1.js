// como simplificar funções com arrow function

// abaixo uma função normal
function dobro(a) {
    return 2 * a;
}

// abaixo uma arrow function

dobro = (a) => { // caso você coloque as chaver
    return 2 * a;//obrigatóriamente terá que colocar o return
}

// arrow function mais reduzida ainda

dobro = a => 2 * a; // Neste caso o return é implícito
console.log(dobro(Math.PI));

// outro exemplo

let ola = function() {
    return 'Olá.';
}

ola = () => 'Olá.';

console.log(ola());