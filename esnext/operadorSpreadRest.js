// Operador ...rest(juntar)/spread(espalhar)
// usar rest com parâmetros de uma função.

// usar spread com objeto

const funcionario = { nome: "Maria", salario: 1988.99 }
const clone = { ativo: true, ...funcionario}
console.log(clone);

// Spread como array

const grupoA = ['João', 'Pedro', 'Glória'];
const grupoFinal = ['Maria', ...grupoA, 'Rafaely'];
console.log(grupoFinal);
