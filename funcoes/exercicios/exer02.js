/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos 
os lados são diferentes. Crie uma função que recebe os comprimentos dos três lados 
de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. 
(Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

function triangleType (side1, side2, side3) {
    if (side1 + side2 > side3 &&
        side2 + side3 > side1 &&
        side3 + side1 > side2) {
            switch (true) {
                case side1 == side2 && side2 != side3 ||
                     side3 == side1 && side1 != side2 ||
                     side2 == side3 && side3 != side1:
                    console.log('Triângulo Isóceles');
                    break;
                case side1 == side2 && side2 == side3:
                    console.log('Triangulo Equilátero')
                    break;
                case side1 != side2 && side2 != side3
                     && side3 != side1:
                     console.log('Triângulo Escaleno')
                     break
            }
        } else {
            console.log('Um dos lados do Triângulo não corresponde ao tamanho correto');
        }
}

triangleType(7, 8, 9);
triangleType(7, 7, 7);
triangleType(7, 7, 10);
triangleType(4, 5, 10);