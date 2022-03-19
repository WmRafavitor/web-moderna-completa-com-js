let contador = 1; 

while(contador <= 10) { // um while com um limite de execução parecido com um
                        //for
    console.log(`contador = ${contador}`);
    contador++;
}

for(let i = 1; i <= 10; i++) { // O for executando da mesma forma que o while
    console.log(`i = ${i}`);
}

// Relembrando iteração em array
const notas = [10, 9.7, 5.5, 8.7, 7.5];

for (i = 0; i < notas.length; i++) {
    console.log(`notas = ${notas[i]}`);
}