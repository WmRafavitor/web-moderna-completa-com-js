// A promise são criadas para que se possa resolver algo no futuro, sem ter a 
//necessidade de fazer um aninhamento de callbacks.
// Quando você faz:
       // let a = 1;  -- na linha seguinte você já tem a variável disponível para
      //  console.log(a);  -- ser chamada.


// Quando você cria uma promise:
// let p = new Promise() // você terá uma promessa de algo que vai ser executado
// no futuro e algo que vai ser devolvido no futuro.

/*
let p = new Promise(function(cumprirPromessa) {  -- A promisse recebe como paramtro uma 
    cumprirPromessa(3) --funcao que chama a propria funcao dentro.
})

--  Para que o valor da promisse seja chamada você deve usar o then()
p.then(function(valor) {
    console.log(valor); -- O valor "3" acima será gerado nessa chamada .then()
}) */


// Se por acaso eu quiser gera mais de um valor na promise


/*
let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa({  
        x:3,  --- neste caso será gerado um objeto
        y:4
    })
})

p.then(function(valor) {
    console.log(valor);
})
*/

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel']) // se quiser retornar
}) // um array

p.then(valor => console.log(valor)) // tambem pode ser usado uma arrow function
//para diminuir o código