// Implementando um filter.
Array.prototype.filter2 = function(callback) {
    const newArray = [];
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}


const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 10.99, fragil: true},
    {nome: 'copo de plástico', preco: 8.99, fragil: false}
]

const selecionaPreco = maisCaro => maisCaro.preco >= 500;
const selecionaFragil = produtoFragil => produtoFragil.fragil;

console.log(produtos.filter2(selecionaPreco).filter2(selecionaFragil));