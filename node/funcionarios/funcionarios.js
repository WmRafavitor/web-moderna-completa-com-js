const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');//O axios ele faz requisições remoto
// Obtenha a mulher chinesa com o menor salário


const funcionariosChineses = funcionarios => funcionarios.pais === 'China';
const mulheresChinesas = funcionarios => funcionarios.genero === 'F';
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual;
}

axios.get(url).then(response => {
    const funcionarios =  response.data;

    const func = funcionarios
    .filter(funcionariosChineses)
    .filter(mulheresChinesas)
    .reduce(menorSalario)

    console.log(func);
});

