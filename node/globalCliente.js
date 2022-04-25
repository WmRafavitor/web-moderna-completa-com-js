require('./global'); // Carregando o "global" tudo que está dentro dele será carregado
//inclusive as aplicações que você criou.


//chamando a aplicação que eu criei.
console.log(MinhaApp.saudacao());

MinhaApp.nome = "mudar";// Como foi adicionado o freeze no sistema global
console.log(MinhaApp.nome)//o objeto não pode mais ser modificado.