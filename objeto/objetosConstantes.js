/* Porque você criou um objeto e atribuiu a uma constante e depois o código continuou
alterando os atributos deste objeto?? se era uma constante nãon havia motivo para ser
alterado. */

const pessoa = {nome: 'João'} // o que acontece quando se faz isso? essa variável
// com o identificador "pessoa" ele tem dentro dele um endereço de memória e esse
//endereço aponta para o objeto criado ex.: pessoa -> 123 -> {...}
// Quando se faz isso: "pessoa.nome = 'Pedro'" não foi mudado a referência da contante
//que realmente não se pode mudar, a constante continua apontando para "123", mas o 
//dado que é o objeto no qual "123" aponta, esse pode ser alterado.
console.log(pessoa.nome);
pessoa.nome = 'Pedro';
console.log(pessoa.nome);

//Se você fizer isso:
/*pessoa = {nome: 'Ana'}*/

// você está tentando fazer "pessoa -> 456 -> {...}" com que a constante pessoa aponte
//para um novo endereço consequentemente aponta para um novo objeto
//e isso vai gerar um erro.

// uma forma de prevenir o possivel erro é usar:
Object.freeze(pessoa);// isso vai fazer com que esse método congele o bojeto "pessoa"

// e caso se faça:
pessoa.nome = 'Maria'
console.log(pessoa.nome) // Ele vai retornar "Pedro", pois esse objeto foi congelado
//e não pode mais ser alterado, ele não da erro, mas ele ignora a tentativa de
//atribuir um novo valor para "pessoa.nome", tão pouco alterar ou deletar.

// para se criar um objeto constante deve ser feito:

const produto = Object.freeze({nome: 'Caneta'});