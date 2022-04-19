// Para importar algo dentro do node se uma a palabra "require" da forma abaixo.


// Os itens importados são salvo como objetos
const moduloA = require('./moduloA');
const moduloB = require('./moduloB');

//e para acessá-los
console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
//abaixo mostrando objeto do modulo A
console.log(moduloA);

//acessando o modulo B
console.log(moduloB.bomDia);

