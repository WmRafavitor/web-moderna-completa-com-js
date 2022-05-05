/*Middlewares são apenas funções que recebem os parâmetros requisição (req), 
resposta (res) e próximo (next), executam alguma lógica e chamam o próximo 
middleware chamando next. */

//middleware patten (chain of responsibility)

const passo1 = (ctx, next) => { // Adicionado o contexto e o next que é uma função
    ctx.valor1 = 'mid1';        //que irá para o próximo passo
    next();
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2';
    next();
}

const passo3 = ctx => ctx.valor3 = 'mid3'; // Em algumas situação você vai querer que
//o middleware não chame o próximo passo, então você não é obrigado a declarar os dois
//parâmetros que é a forma completa da função middleware.

// Abaixo a função que vai executar todos os middlewares e vai chama sempre o next
//quando a função for declarada.

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
        middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0);
} 

const ctx = {};
exec(ctx, passo1, passo2, passo3);
console.log(ctx);