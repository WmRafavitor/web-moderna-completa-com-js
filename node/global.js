// Assim como no browser você tem um objeto global que é o "winidow", no node você
//tambem tem um objeto global que é o "global"

//se colocar o "global" dentro de um cosole.log aparece tudo que há no global
//console.log(global);

// Abaixo um exemplo de como criar um objeto seu global para que se possa usar
//em algum projeto.


// Um objeto global pode ser modificado em qualquer lugar, então uma alternativa
//que se tem para isso é congelar o objeto com um freeze como no exemplo abaixo

global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares';
    },
    nome: 'nome do sistema'
});