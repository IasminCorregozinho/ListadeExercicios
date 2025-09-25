const readline = require('readline-sync');

console.log("Digite 3 números para verificar qual é o maior deles:");
const a = parseInt(readline.question("Primeiro número:"));
const b = parseInt(readline.question("Segundo número:"));
const c = parseInt(readline.question("Terceiro número:"));

function maiorNumero(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

const resultado = maiorNumero(a, b, c);

console.log(`O maior número é ${resultado}.`); 