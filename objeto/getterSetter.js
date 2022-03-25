// Os getter and setter são funções que dentro dessas funções os valores são acessados
//a vantagem de você acessar os valores dentro dessas funções é que você pode fazer um 
//tipo de validação  e processamento antes de devovler o valor da variável

const sequencia = {
    _valor: 1,
    get valor() {return this._valor++ },// aqui ele pega o valor, retorna e 
    //passa o valor para a sequencia seguinte, um novo valor com um novo dado
    //gravado na memória.
    set valor(valor) {
        if(valor > this.valor) { // essa validação vai garantir que a seqência de
            this.valor = valor; //número sempre vá para frente, não retorne como por
        }                       //exemplo da data de aniversário.
    }
}
// Para acessar a partir do método get/set

console.log(sequencia.valor, sequencia.valor);//a segunda retorna sempre um número
//a mais que a primeira assim como foi declarado na linha 7
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);//retorna 1001, 1002