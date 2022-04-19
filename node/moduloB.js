// Nesse segundo exemplo está a forma mais comum de se exportar algo para fora do node
//que é atribuir um objeto a module.exports e esse objeto estará disponível para fora do
//module.

module.exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa Noite';
    }
}