const readline = require('readline-sync');

const numero = parseInt(readline.question("Digite um número para saber se ele é PAR ou IMPAR:"));

function parOuImpar(numero) {
    // Usamos o módulo (%). Se o resto da divisão por 2 for 0, é PAR.
    if (numero % 2 === 0) {
        return "PAR";
    } else {
        return "ÍMPAR";
    }
}

const resultado = parOuImpar(numero);

console.log(`O número ${numero} é ${resultado}.`);