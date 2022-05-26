// Com o objeto "process" disponível no node nós, nós podemos ler daddos do teclado do 
//usuário, e imprimir dados, tanto na entrada padrão quanto na saída padrão.

const anomino = process.argv.indexOf('joao') !== -1; // o process.argv procura uma flag, 
//aqui no caso "!== -1" estamos garantindo que ela será true
//console.log(anomino);

if(anomino) {// se anonimo for true, entrão ele vai imprimir no console
    process.stdout.write('Fala Anônimo!\n');//"Fala Anônimo" e dar uma quebra de linha
    process.exit();// Encerrando o processo
} else {// caso a flag não esteja presente pedimos para o usuário digita o nome
    process.stdout.write('Informe o seu nome:  ');
    process.stdin.on('data', data => {//O evento "on data" acontece quando você digita
    //alguma coisa  e aperta ENTER, ou seja, você entrou com um dado a partir do teclado
    // Depois é passado uma função que vai entrar com aquilo que você digitou mais
    //o ENTER dentro desta variável data
        const nome = data.toString().replace('\n', '');// pegando o que foi digitado
        //e substituindo a quebra de linha "\n" por uma string vazia

        process.stdout.write(`fala ${nome}!!\n`);//imprimindo na tela o texto mais o
        //nome digitado
        process.exit();//encerrando o processo
    })
}