const readline = require('readline-sync');

const vogal = (readline.question("Qual palavra você deseja contar as VOGAIS: "));

function contarVogais(palavra) {
    const textoMinusculo = palavra.toLowerCase();
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contadorVogais = 0;

    for (let i = 0; i < textoMinusculo.length; i++) {
        const letra = textoMinusculo[i];

        if (vogais.includes(letra)) {
            contadorVogais++;
        }
    }
        
   return contadorVogais; 
}

const totalVogais = contarVogais(vogal);

console.log(`A palavra "${vogal}" tem ${totalVogais} vogais.`);
