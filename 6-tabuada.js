const readline = require('readline-sync');

// 1. Pedir o número ao usuário e converter a entrada para um número inteiro.
let numero = parseInt(readline.question("Digite um número de 1 a 10 para ver a tabuada: "));

// 2. Verificar se a entrada é um número válido
if (isNaN(numero)) {
    console.log("Entrada invalida. Por favor, digite um numero.");
} else {
    console.log(`\n--- Tabuada do número ${numero} ---`);

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }

    console.log("-------------------------\n");
}