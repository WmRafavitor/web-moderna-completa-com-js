// Usando os métodos map, retorne um array apenas com os preços

const carrinho = [
    '{ "nome": "borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 13.90 }',
    '{ "nome": "kit de lapis", "preco": 41.42 }',
    '{ "nome": "caneta", "preco": 7.50 }'
]

const converteParaObjeto = osNumeros => JSON.parse(osNumeros);

// ou poderia ter sido feito desta forma:

/*
function converteParaObjeto (osNumeros) {
    return JSON.parse(osNumeros);
}
*/
const apenasPreco = produto => produto.preco;

//ou assim:

/*
function apenasPreco (produto) {
    return produto.preco;
}
*/
const resultado = carrinho.map(converteParaObjeto).map(apenasPreco);
console.log(resultado);