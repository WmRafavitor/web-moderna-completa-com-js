function criaProduto(nome, preco) {
    return {
        produto: nome,
        valor: preco
    }
}

console.log(criaProduto('Azeite', 45));