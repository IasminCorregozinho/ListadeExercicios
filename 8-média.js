const readline = require('readline-sync');

console.log("-- Digite suas notas abaixo: -- ")

let nota1 = parseFloat(readline.question("Primeira nota: ").replace(',', '.'));
let nota2 = parseFloat(readline.question("Segunda nota: ").replace(',', '.'));
let nota3 = parseFloat(readline.question("Terceira nota: ").replace(',', '.'));
let nota4 = parseFloat(readline.question("Quarta nota: ").replace(',', '.'));
let nota5 = parseFloat(readline.question("Quinta nota: ").replace(',', '.'));

const media = nota1+nota2+nota3+nota4+nota5
const mediaFinal = media/5
console.log(`Sua média é: ${mediaFinal.toFixed(2)}`)