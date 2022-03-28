// O objetivo da herança é para evitar você de fazer o Ctrl+c e Ctrl+v, ou seja
//evitar copiar e colar uma coisa várias vezes em vários lugares é justamente
//criar mecanismos para que você reuse este código onde precisar.

//Exemplo de herança:

const ferrari = {
    modelo: 'F40',
    velMax: 324
}
const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__);//quando se usa "objeto.__proto__" atravéz disso se
//consegue acessar quem é o prototipo desse objeto, ou seja, quem é o objeto pai.
// Se executar o código desta forma vai mostra que o prototipo de ferrari é um 
//objeto vazio.
console.log(ferrari.__proto__ === Object.prototype);// Se fizer essa comparação
//ele vai retornar true, então ele representa o "Object.prototype" que é o 
//prototype de mais alto nível, depois dele não tem mais nada, então se uma
//herança não for achato nele que será o último nível de pesquisa, será retornado
//undefined