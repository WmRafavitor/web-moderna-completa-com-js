function Aula(nome, videoID) {
    this.nome = nome;
    this.videoID = videoID
}

// Quando você tem uma função construtora e usa o operador "new", não só o fato de
//criar um novo objeto é feito, mas tambem o fato de que o protótipo deste objeto
//criado aponta para a função "Aula.prototype" por exemplo.
const aula1 = new Aula('Bem Vindo', 123);
const aula2 = new Aula('Até logo', 456);
console.log(aula1, aula2);

//função que simula o operador new.

function novo(f, ...params) {//recebe como parametro a função construtora
                            // e um conjuto de parâmetros
    const obj = {}; //criando um objeto vazio

    obj.__proto__= f.prototype; // Depois fazer com que o protótipo do objeto criado
                                //aponte para função.prototype

    f.apply(obj, params);//depois chama a função.apply, e essa função vai receber como 
    //parâmetro o que seria o this, que no caso é o objeto, e o segundo parametro dessa
    //função apply vai ser um array que representa a lista de parâmetros que eu quero
    //aplicar na função "f"
    
    return obj;//por fim, retorna o objeto criado.
}                               

const aula3 = novo(Aula, 'Bem Vindo', 123);
const aula4 = novo(Aula, 'Até breve', 456);
console.log(aula3, aula4)