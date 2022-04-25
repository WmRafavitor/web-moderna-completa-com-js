const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

//contador "C" e "D" retornam uma função, então essa referencia de função tera que ser
//chamada depois da instanciaNova
const contadorC = require('./instanciaNova')()//e a função retorna um objeto;
const contadorD = require('./instanciaNova')();

contadorA.inc();
contadorA.inc();
console.log(contadorB.valor);

contadorC.inc();
contadorC.inc();
console.log(contadorD.valor, contadorC.valor);