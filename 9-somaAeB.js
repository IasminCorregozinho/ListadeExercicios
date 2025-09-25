// Crie uma função soma(a, b) que retorna a soma de dois números e teste-a com diferentes valores.

const readline = require('readline-sync');

console.log("Vamos somar? 🖩")

let A = parseInt(readline.question("Digite o primeiro valor: "));
let B = parseInt(readline.question("Digite o segundo valor: "));

const SOMA = A + B
resultado = SOMA

console.log(`O resultado da soma é: ${SOMA}`)

