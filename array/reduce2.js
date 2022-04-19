const alunos = [
    {nome: 'João', nota: 9.1, bolsista: true},
    {nome: 'Ana', nota: 8.9, bolsista: false},
    {nome: 'Marcos', nota: 7.5, bolsista: true},
    {nome: 'Flávio', nota: 5.5, bolsista: false}
]

// Desafio 1: todos os alunos são bolsistas?
const bolsista1 = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(bolsista1))
   
// Desafio 2: Algum Aluno é bolsista?

const bolsista2 = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(bolsista2));