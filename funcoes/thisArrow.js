// O "this" dentro de uma arrow function é um this fixo, ele não fica
//variando, essa é uma grande vantagem da arrow function

// usando o mesmo exemplo da aula anterior

function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        this.idade ++;
        console.log(this.idade);
    }, 1000)
}

new Pessoa;