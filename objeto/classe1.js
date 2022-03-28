class Lancamento {// esta classe será tranformada em uma função construtuora
    constructor(nome = 'Genérico', valor = 0) { //constructor é a função que é chamada
            this.nome = nome;                   //quando a classe é instanciada
            this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado =  0;
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor;
        })
        return valorConsolidado;
    }
}

const salario = new Lancamento('salario', 45000);
const contaDeLuz = new Lancamento('luz', -220);

const contas = new CicloFinanceiro(6, 2018);
contas.addLancamentos(salario, contaDeLuz);
console.log(contas.sumario());