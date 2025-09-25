const readline = require('readline-sync');

let idade = parseInt(readline.question("Qual a sua idade? "));
let cnh = (readline.question("Você possui CNH? "));

const maioridade = idade >= 18;
const possuiCNH = cnh === 'sim';

if (maioridade && possuiCNH) {
    console.log("Você pode dirigir!");
} else {
    // Caso contrario (se uma OU ambas forem falsas)
    console.log("-----------------------------------------");
    console.log("Você NÃO pode dirigir.");
}