// Para retornar uma nova instância já que o node colcoa o cache é preciso usar
//uma função factory, que retorna um novo objeto
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}