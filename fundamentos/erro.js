function handleError(error) {
    throw new Error('Ocorreu um erro de processamento')
    // Abaico outras formas de se usar "throw"
    //throw 10 - inteiro
    //throw true - bollean
    //throw 'mensagem' -string
    //throw {name: erro.name, msg: ero.message} - objeto

}


function printScreamedName(obj) {
    try { // try é um bloco de código que dentro dele você coloca um código que
         //você julga que pode gerar um tipo de erro
        console.log(obj.name.toUpperCase() + '!!!');
    } catch(e) { // E assossiado a ele você coloca um bloco tipo catch
                //assim que garar o erro no try ele cai dentro do catch
                //aqui vocẽ pode tratar o erro e garar uma mensagem par ao usuário 

        handleError(e) // Aqui foi adicionada um afunção para tratar o erro

    } finally { // Tambem pode ser usado para finalizar o bloco, independente
                //de ter erro ou não o "finally" vai ser chamado
        console.log('final')
    }
}

const obj = {nome: 'Roberto'} // Escrito o nome da key do bojeto errado propositalmente
printScreamedName(obj)        //para gerar um erro