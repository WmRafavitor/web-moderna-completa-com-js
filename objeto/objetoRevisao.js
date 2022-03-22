// Ojeto é uma coleção dinâmica de pares chave/valor
const produto = new Object // uma forma de criar um objeto a partir do operador new
//formas de adicionar chaves e valores em um objeto.
produto.nome = "Cadeira";
produto['marca do produto'] = 'Generico';// Não é recomendado fazer dessa forma
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto['marca do produto'];// pois depois você só acessa assim
console.log(produto);


// Criando um objeto.
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    contudores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calularValorSeguro() {
        //...
    }
}

// Adicionando mais valores.
carro.proprietario.endereco.logradouro.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante'
console.log(carro);

// Deletando itens
delete carro.contudores;
delete carro.proprietario.endereco;
delete carro.calularValorSeguro;
console.log(carro);