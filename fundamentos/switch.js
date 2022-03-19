// SWITCH - Ele é feito para múltiplas seleções, a expressão do switch não retorna
//verdadeiro ou falso como no if e eslse if, ele recebe um valor, e quando o switch
//recebe esse valor ele vai para o case, para cada case você pode fazer um bloco de
//código

// Modelo parecido com o exercício anterior, imprimir o resultado da nota com switch

const imprimeResultado = function (nota) {

    switch (Math.floor(nota)) { //Math.floor para arredondar para baixo o valor
        case 10: // Usando dois case antes do resultado, caso esse não seja true
        case 9: //ele automáticamente checa este
            console.log('Quadro de honra');
            break
        case 8:
        case 7:
            console.log('Aprovado');
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperação');
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('reprovado');
            break
        default:
            console.log('Nota inválida');
    }
}
imprimeResultado(10);
imprimeResultado(8);
imprimeResultado(6);
imprimeResultado(3);