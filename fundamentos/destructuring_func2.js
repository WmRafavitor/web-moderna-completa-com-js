// Dessa vez será usado um operador destructuring com array
function rand([min = 0, max = 1000]) {
    if(min > max) [min, max] = [max, min]; //invertendo valores com destructuring
    const valor = Math.random() * (max -min) + min;
    return Math.floor(valor);
}
console.log(rand([50, 40])); // Passando os dois valores
console.log(rand([950])); // Passando apenas o primeiro valor
console.log(rand([,10])); // Passando apenas o segundo valor
console.log(rand([])); // Passando um array vazio, isso siginifica que ele 
                       //assume os valores padrão já estipulados na função