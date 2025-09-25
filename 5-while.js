let numero = 1;

console.log("Números pares entre 1 e 20:");
console.log("--------------------------");

while (numero <= 20) {
    // Um número é par se o resto da divisão por 2 for 0
    if (numero % 2 === 0) {
        console.log(numero);
    }
    
    numero++;
}