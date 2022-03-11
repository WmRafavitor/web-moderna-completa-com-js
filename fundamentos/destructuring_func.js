// Passando atributos para função com operador destructuring

function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

//console.log({max: 50, min: 40})

const obj = {max: 50, min: 40}; // outra forma é criar um objeto
console.log(rand(obj));// e aqui passar o objeto como parametro

console.log(rand({})); // e se passar um objeto vazio ele fica variando entre
                       // 0 e 1000