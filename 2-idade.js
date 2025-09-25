const readline = require('readline-sync');

let idade = parseInt(readline.question("Qual a sua idade: "));

if (idade >= 18)
    console.log("Você é maior de idade")

else 
    console.log("Você é menor de idade")
