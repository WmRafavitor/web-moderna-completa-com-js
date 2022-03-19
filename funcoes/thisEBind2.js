function Pessoa() {
    this.idade = 0;

    const self = this; // uma outra técnica para garantir que o this não vai
    //variar é salvar ele dentro de uma constante, normalmente com onome de "self"
    setInterval(function() {
        self.idade++;
        console.log(self.idade)
    }/*.bind(this)*/ , 1000)// ou tambem pode ser usado um bind no final da
    //função assim como está no trecho comentado
}

new Pessoa