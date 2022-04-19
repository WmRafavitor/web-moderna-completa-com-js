// O filter serve para friltrar um array, assim como o map com o objetivo de fazer algo
//com os itens que foram fitrados, a diferença é que no filter você seleciona apenas 
//aqueles elementos que forem selecionados por uma condição.
const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 10.99, fragil: true},
    {nome: 'copo de plástico', preco: 8.99, fragil: false}
]

const selecionaPreco = maisCaro => maisCaro.preco >= 500;
const selecionaFragil = produtoFragil => produtoFragil.fragil;

console.log(produtos.filter(selecionaPreco).filter(selecionaFragil));

