/* A classe nada mais é do que o esqueleto, o projeto do objeto e eu posso atravéz
desta classe instanciar novos objetos, os objetos são as classes vivas 
ex.: Caracteristicas, atributos, comportamento, isso tudo se cria dentro de uma classe.

 Ou seja, as classes são os esqueletos, os projetos do objeto, e o objeto são as instâncias
reais das classes que nós podemos utilizar*/

class Carro {
    //cor = 'Vermelho'
    constructor(c) {
        this.cor = c;
        console.log(`Olá, sou um novo carro ${this.cor}`)
    }
}

let c1 = new Carro('Verde');
let c2 = new Carro('Amarelo');
let c3 = new Carro('Azul');