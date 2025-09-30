let soma = 0;
for (let numero = 1; numero <= 100; numero++) {

    if (numero % 2 === 0) {
        soma = soma + numero; 
    }
}

console.log(`A soma de todos os números PARES de 1 a 100 é: ${soma}`); 
