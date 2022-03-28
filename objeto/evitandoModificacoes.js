// Formas de evitar que os objetos sejam modificados.
//Object.preventExtensions - ele vai prevenir que ninguem adicione novos
//atributos neste objeto, você pode até excluir, mas não adicionar novos


//diferente do object.freeze que você não pode alterar nada, aqui você altera e
//deleta, apenas não acrescenta

const produto = Object.preventExtensions({
    nome: "mochila", preco: 199, tag: "promoção"
})

console.log('Extensível:', Object.isExtensible(produto)); // mostra que o 
//objeto não é extensível, ou seja, não pode ser adic. atributos

produto.nome = 'Borracha';//atribuindo novo valor a key
produto.preco = 1.99 //atribuindo novo valor a key
produto.descricao = 'Borracha escolar' //criando nova key e novo value, isso 
//não ocorrerá pois esse objeto não pode ser extendido.
delete produto.tag; //deletando a uma key do objeto
console.log(produto);


// Object.seal - você não exclui nem adiciona, apenas modifica
const pessoa = {nome: 'Juliana', idade: 35};
Object.seal(pessoa);
console.log('selado:', Object.isSealed(pessoa));//mostrando que o objeto está selado

pessoa.sobrenome = 'silva';//não pode ser adicionada nova key
delete pessoa.nome;//não pode ser deletado
pessoa.idade = 29;//pode ser modificado
console.log(pessoa);

// Object.freeze - selado + valores constantes, como já foi visto em aulas
//anteriores