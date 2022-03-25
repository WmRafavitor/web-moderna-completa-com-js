// Usando a notação literal
const obj1 = {}
console.log(obj1);

// Object em js

console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2);


// funções construtoras

function Produto(nome, preco, desc) {
    this.nome = nome; // fazendo da variável "nome" um atributo público
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('Notebook', 2998.98, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());//se acessa a função
                                                                //como se acessa um
                                                                //objeto


// Função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase, 
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('Jão', 7980, 4);
const f2 = criarFuncionario('Maria', 11400, 1);
console.log(f1.getSalario(), f2.getSalario());

//object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

// Uma função famosa que retorana um objeto é com JSON...

const fromJSON = JSON.parse('{"info": "sou um JSON"}');
console.log(fromJSON.info);// Depois que ele converteu em um objeto você pode acessar
                           //ele como um bojeto normalmente