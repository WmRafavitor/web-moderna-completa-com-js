const _ = require('lodash');
// Usando a biblioteca  lodash que tem várias funcionalidades, uma delas abaixo é 
//para sortear valores randomicos altomaticamente

setInterval(() => console.log(_.random(1,5)), 1000);

// Instalado nodemon, serve para atualizar e continuar executando o código
//e não preciso parar e executar novamente como no caso acima está selecinando
//um valor randomico entre 1 e 1000, caso eu mude enquando nodemon está rodando
//apenas preciso salvar