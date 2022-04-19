// O reduce serve para modificar o array, ele vai iterando e soma o valor atual recebido
//com o valor seguinte, pode mudar os elementos, transformar array em um único valor etc.

const alunos = [
    {nome: 'João', nota: 9.1, bolsista: true},
    {nome: 'Ana', nota: 8.9, bolsista: false},
    {nome: 'Marcos', nota: 7.5, bolsista: true},
    {nome: 'Flávio', nota: 5.5, bolsista: false}
]

console.log(alunos.map(a => a.nota));
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(`${acumulador} + ${atual}`);
    return acumulador + atual;
})
console.log(resultado);