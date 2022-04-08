const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop(); //remove o último índice do array

pilotos.push('Verstappen');//adiciona um elemento ao último índice
console.log(pilotos); 

pilotos.shift()//remove o primeiro elemento

pilotos.unshift('Hamilton');//Adiciona um elemento no primeiro índice
pilotos.splice(2, 0, 'Bottas', 'Massa'); //o splice serve tanto para adiconar ou remover
//aqui no caso foi adicionado a partir do índice 2, o '0' quer dizer que não removel
//ninguem, e foi adicionado o "Bottas" e o "Massa"
console.log(pilotos); 

// Método slice, ele retorna um novo array a partir do array base que vc indicoou

const algunsPilotos = pilotos.slice(2)// aqui pegara todos os elementos de "pilotos" 
//a partir do índice 2
console.log(algunsPilotos);
const algunsPilotos2 = pilotos.slice(1, 4); // você tambem pode definir até qual
//índice você quer pegar os valores, aqui vai pegar a partir do 1 até o 4
//sendo que o índice 4 não entra, apenas 1, 2, 3