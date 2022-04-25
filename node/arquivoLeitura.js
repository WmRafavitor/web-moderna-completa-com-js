// como ler um arquivo de forma assincrona e sincrona, temos que tomar cuidado com isso
//pois se colocar de forma sincrona ele vai ler primeiro o arquivo para depois retornar 
//algo, e se for grande isso pode travar o sistema até ele terminar a leitura e atender
//a próxima requisição.
const fs = require('fs');

const caminho = __dirname + '/arquivo.json';

//sincrono
// Para readFileSync se passa como parâmetro o caminho e o tipo de encoding
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);

//assincrono
// Para o readFile como parâmetro se passa o caminho, tipo de encoding e como 
//terceiro parâmetro oum callback que vai ter como primeiro elemento um erro que
//pode ser tratado só executando o segunda parâmetro se esse erro estiver vazio,
//e o segundo parâmetro será o conteudo que foi lido do arquivo
fs.readFile(caminho, 'utf-8',  (err, conteudo) => {
    const config = JSON.parse(conteudo)//para transformar .json em objeto
    console.log(`${config.db.host}: ${config.db.port}`);
})
// Abaixo uma forma mais simples de ler um arquivo .json
const config = require('./arquivo.json');//neste caso precisa colocar '.json' no final
//o console abaixo agora irá imprimir um objeto
console.log(config.db);

// Exemplo da leitura de uma pasta usando "file system"
// o "__dirname" é uma constante que está presente em todos os arquivos/modulos do node
//que representa o diretório atual, ao vinves de usar o caminho absoluto você usa
// "__dirname + 'diretóriaAtual'" que ele irá achar o diretório
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da Pasta...');
    console.log(arquivos);
})