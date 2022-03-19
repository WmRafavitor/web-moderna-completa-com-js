const notas = [7.5, 6.5, 4.4, 9.8];

for (let i in notas) { // o for in retorna a posição do array
    console.log(i, notas[i]) // para acessar o valor tem que ser feito dessa forma
                            //notas[i]
}

// PERCORRENDO OBJETO

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let dados in pessoa) { // A variável retorna a chave do objeto
    console.log(`${dados}: ${pessoa[dados]}`); //desa forma se acessa o valor       
}