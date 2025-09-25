const readline = require('readline-sync');

const fat = parseInt(readline.question("Digite um número para saber o fatorial dele:"));

function fatorial(n) {
        if (n === 0 || n === 1) {
        return 1;
    }
    let resultado = 1;

    for (let i = n; i >= 2; i--) {
        resultado = resultado * i;
    }

    return resultado;
}

const resultadoFinal = fatorial(fat);
console.log(`O fatorial de ${fat} é ${resultadoFinal}`)