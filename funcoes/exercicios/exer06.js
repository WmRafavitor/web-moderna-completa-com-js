/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e
tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob
o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de
juros compostos. */

function calculatesInterest (startingCapital, interestRate, applicationTime) {
    let simpleInterest = startingCapital * (interestRate / 100) * applicationTime;
    let compoundInterest = startingCapital * ((1 + interestRate / 100) ** applicationTime);

    console.log(`O valor do juros simples é ${startingCapital + simpleInterest}`);
    console.log(`O valor do juros composto é ${compoundInterest}`);
}

calculatesInterest(200, 5, 4);