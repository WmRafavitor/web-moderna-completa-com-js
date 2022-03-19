// um modelo de como fazer um "ou" exclusivo em javascript, em php é o "xor"
//em javascript segue o modelo abaixo.

// ex. você está aguardando dois trabalhamos de freelance na semana, se os
// dois trabalhos sairem, você vai no final semana comprar uma tv de 50
//polegadas e tomar um sorvete.
// Se apenas um sair, você vai comprar uma tv de 32 polegadas e tomar um
//sorvete. E se nem um trabalho sair você não fará nada, ficará em casa

function compras(trabalho1, trabalho2) {
    const tomarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
/* const comprarTv32 = !!(trabalho1 ^ trabalho2); -> esse é um modelo 
de como usar o "ou exclusivo" em java script fazendo bit a bit, operador bitwise xor*/
    const comprarTv32 = trabalho1 != trabalho2; //essa é a segunda forma de fazer 
                                                // o "ou exclusivo"
    const manterSaldavel = !tomarSorvete;

    return {tomarSorvete, comprarTv50, comprarTv32, manterSaldavel}
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));