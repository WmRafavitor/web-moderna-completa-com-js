// As funções construtoras em javascript é como se utilizasse classes em lagumas 
//linguagens

function Carro(velocidadeMaxima = 200, delta = 5) {
    let  velocidadeAtual = 0; //atributo privado, apenas dentro da função

    this.acelerar = function() { // Método público criado a partir de this
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }
    
    //Outro método público
    this.getVelocidadeAtual = function () { // Aqui foi criado essa função como um
        return velocidadeAtual; //método público para que possa ser chamado
        //a "velocidadeAtual" que é um atributo privado e só pode ser visto dentro
        //da função
    }
}

const uno = new Carro; // Aqui foi passado sem parenteses pois já está sendo
                       //usado os parâmetros que já foram definidos, mas pode 
                       //ser usado "Carro()" dessa forma tambem.
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);// Aqui já foi adicionado novos valores para 
                                   //os parâmetros
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());