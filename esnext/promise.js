// A promise é usada quando se quer ter algum tipo de processamento assincrono, e 
//normalmente se tem dois caminhos, ou a promessa foi cumprida ou ela foi rejeitada.
// Abaixo um modelo simples de promisses.


function falandoDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => { // esses são os dois parâmetros que uma 
        setTimeout(() => {                    // promisse recebe, resolve e reject.
            resolve(frase)
        }, segundos * 1000)
    })
}

falandoDepoisDe(3, 'Que legal!')
    .then(frase => console.log(frase));