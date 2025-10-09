# 🚀 Coleção de Scripts de Lógica em JavaScript

![Linguagem](https://img.shields.io/badge/Linguagem-JavaScript-F7DF1E?style=for-the-badge&logo=javascript)
![Ambiente](https://img.shields.io/badge/Ambiente-Node.js-339933?style=for-the-badge&logo=nodedotjs)

## 📖 Sobre o Projeto

Este repositório é uma coleção de 13 scripts simples desenvolvidos em JavaScript, projetados para demonstrar conceitos fundamentais de lógica de programação. Cada script aborda um tópico específico, desde operações básicas e condicionais até laços de repetição e funções. É um excelente material de estudo para iniciantes.

---

## 🛠️ Pré-requisitos

Para executar os scripts que pedem interação do usuário, você precisará ter o [Node.js](https://nodejs.org/en/) instalado em sua máquina.

---

## ⚙️ Instalação

A maioria dos scripts interativos utiliza a biblioteca `readline-sync`. Para instalá-la, siga os passos:

1.  Clone este repositório ou baixe os arquivos.
2.  Abra seu terminal na pasta do projeto.
3.  Execute o comando abaixo para instalar a dependência:
    ```bash
    npm install readline-sync
    ```

---

## 💻 Os Scripts

Os scripts estão organizados por categoria. Para executar qualquer um deles, use o comando `node <nome-do-arquivo.js>` no seu terminal.

### 🎯 Fundamentos (Variáveis, Operadores e Condicionais)

<details>
<summary><strong>1. 🧮 Operações Aritméticas Básicas</strong></summary>

Este script demonstra as operações de soma, subtração, multiplicação, divisão e módulo com dois números pré-definidos.

**Como Executar:**
```bash
node 01_operacoes.js
```

**Código:**
```javascript
// Crie duas variáveis com números diferentes e mostre no console:
const numeroA = 18;
const numeroB = 5;

// Soma
console.log(`A soma de ${numeroA} e ${numeroB} é: ${numeroA + numeroB}`);
// Subtração
console.log(`A subtração de ${numeroA} e ${numeroB} é: ${numeroA - numeroB}`);
// Multiplicação
console.log(`A multiplicação de ${numeroA} por ${numeroB} é: ${numeroA * numeroB}`);
// Divisão
console.log(`A divisão de ${numeroA} por ${numeroB} é: ${numeroA / numeroB}`);
// Resto da divisão (Módulo)
console.log(`O resto da divisão de ${numeroA} por ${numeroB} é: ${numeroA % numeroB}`);
```
</details>

<details>
<summary><strong>2. 🔞 Verificador de Maioridade</strong></summary>

Pede a idade do usuário e informa se ele é maior ou menor de idade.

**Como Executar:**
```bash
node 02_maioridade.js
```

**Código:**
```javascript
const readline = require('readline-sync');

let idade = parseInt(readline.question("Qual a sua idade: "));

if (idade >= 18)
    console.log("Você é maior de idade");
else
    console.log("Você é menor de idade");
```
</details>

<details>
<summary><strong>3. 🚗 Verificador de Habilitação para Dirigir</strong></summary>

Verifica se o usuário pode dirigir com base na idade (maior que 18) e se possui CNH.

**Como Executar:**
```bash
node 03_pode_dirigir.js
```

**Código:**
```javascript
const readline = require('readline-sync');

let idade = parseInt(readline.question("Qual a sua idade? "));
let cnh = readline.question("Você possui CNH? (sim/nao): ").toLowerCase();

const maioridade = idade >= 18;
const possuiCNH = cnh === 'sim';

if (maioridade && possuiCNH) {
    console.log("Você pode dirigir!");
} else {
    console.log("-----------------------------------------");
    console.log("Você NÃO pode dirigir.");
}
```
</details>

<details>
<summary><strong>4. 📊 Calculadora de Média de Notas</strong></summary>

Solicita 5 notas ao usuário e calcula a média final.

**Como Executar:**
```bash
node 08_media_notas.js
```

**Código:**
```javascript
const readline = require('readline-sync');

console.log("-- Digite suas notas abaixo: -- ");

let nota1 = parseFloat(readline.question("Primeira nota: ").replace(',', '.'));
let nota2 = parseFloat(readline.question("Segunda nota: ").replace(',', '.'));
let nota3 = parseFloat(readline.question("Terceira nota: ").replace(',', '.'));
let nota4 = parseFloat(readline.question("Quarta nota: ").replace(',', '.'));
let nota5 = parseFloat(readline.question("Quinta nota: ").replace(',', '.'));

const media = nota1 + nota2 + nota3 + nota4 + nota5;
const mediaFinal = media / 5;

console.log(`Sua média é: ${mediaFinal.toFixed(2)}`);
```
</details>

### 🔄 Laços de Repetição (Loops)

<details>
<summary><strong>5. 🔢 Contador de 1 a 10 (com `for`)</strong></summary>

Um laço `for` simples que imprime os números de 1 a 10 no console.

**Como Executar:**
```bash
node 04_contador_for.js
```

**Código:**
```javascript
// Loop para contar de 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```
</details>

<details>
<summary><strong>6. 🔢 Números Pares de 1 a 20 (com `while`)</strong></summary>

Usa um laço `while` para encontrar e imprimir todos os números pares entre 1 e 20.

**Como Executar:**
```bash
node 05_numeros_pares.js
```

**Código:**
```javascript
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
```
</details>

<details>
<summary><strong>7. ✖️ Gerador de Tabuada</strong></summary>

Pede um número ao usuário e gera a tabuada de multiplicação completa (de 1 a 10).

**Como Executar:**
```bash
node 06_tabuada.js
```

**Código:**
```javascript
const readline = require('readline-sync');

let numero = parseInt(readline.question("Digite um número de 1 a 10 para ver a tabuada: "));

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
```
</details>

<details>
<summary><strong>8. ➕ Soma dos Números de 1 a 100</strong></summary>

Calcula a soma de todos os números inteiros de 1 até 100.

**Como Executar:**
```bash
node 07_soma_1_a_100.js
```

**Código:**
```javascript
let soma = 0;
for (let numero = 1; numero <= 100; numero++) {
    soma = soma + numero;
}

console.log("------------------------------------------");
console.log(`A soma de todos os números de 1 a 100 é: ${soma}`);
```
</details>

### 📦 Funções

<details>
<summary><strong>9. ➕ Função de Soma Simples</strong></summary>

Pede dois números ao usuário e usa uma lógica simples para retornar a soma entre eles.

**Como Executar:**
```bash
node 09_funcao_soma.js
```

**Código:**
```javascript
const readline = require('readline-sync');

console.log("Vamos somar? 🖩");

let A = parseInt(readline.question("Digite o primeiro valor: "));
let B = parseInt(readline.question("Digite o segundo valor: "));

const SOMA = A + B;
let resultado = SOMA; // A variável 'resultado' é opcional aqui

console.log(`O resultado da soma é: ${SOMA}`);
```
</details>

<details>
<summary><strong>10. 🌗 Função Par ou Ímpar</strong></summary>

Recebe um número e uma função determina se ele é PAR ou ÍMPAR.

**Como Executar:**
```bash
node 10_par_ou_impar.js
```

**Código:**
```javascript
const readline = require('readline-sync');

const numero = parseInt(readline.question("Digite um número para saber se ele é PAR ou IMPAR:"));

function parOuImpar(num) {
    if (num % 2 === 0) {
        return "PAR";
    } else {
        return "ÍMPAR";
    }
}

const resultado = parOuImpar(numero);
console.log(`O número ${numero} é ${resultado}.`);
```
</details>

<details>
<summary><strong>11. 🥇 Função para Encontrar o Maior Número</strong></summary>

Recebe três números e uma função retorna qual deles é o maior.

**Como Executar:**
```bash
node 11_maior_numero.js
```

**Código:**
```javascript
const readline = require('readline-sync');

console.log("Digite 3 números para verificar qual é o maior deles:");
const a = parseInt(readline.question("Primeiro número:"));
const b = parseInt(readline.question("Segundo número:"));
const c = parseInt(readline.question("Terceiro número:"));

function maiorNumero(n1, n2, n3) {
    if (n1 >= n2 && n1 >= n3) {
        return n1;
    } else if (n2 >= n1 && n2 >= n3) {
        return n2;
    } else {
        return n3;
    }
}

const resultado = maiorNumero(a, b, c);
console.log(`O maior número é ${resultado}.`);
```
</details>

<details>
<summary><strong>12. ❗ Função para Calcular Fatorial</strong></summary>

Pede um número e uma função calcula seu fatorial.

**Como Executar:**
```bash
node 12_fatorial.js
```

**Código:**
```javascript
const readline = require('readline-sync');

const fat = parseInt(readline.question("Digite um número para saber o fatorial dele:"));

function fatorial(n) {
    if (n < 0) return "Não existe fatorial de número negativo";
    if (n === 0 || n === 1) return 1;

    let resultado = 1;
    for (let i = n; i >= 2; i--) {
        resultado = resultado * i;
    }
    return resultado;
}

const resultadoFinal = fatorial(fat);
console.log(`O fatorial de ${fat} é ${resultadoFinal}`);
```
</details>

<details>
<summary><strong>13. 🅰️ Função para Contar Vogais</strong></summary>

Pede uma palavra e uma função conta quantas vogais ela possui.

**Como Executar:**
```bash
node 13_contador_vogais.js
```

**Código:**
```javascript
const readline = require('readline-sync');

const palavra = readline.question("Qual palavra você deseja contar as VOGAIS: ");

function contarVogais(texto) {
    const textoMinusculo = texto.toLowerCase();
    const vogais = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú', 'à', 'ã', 'õ', 'â', 'ê'];
    let contadorVogais = 0;

    for (let i = 0; i < textoMinusculo.length; i++) {
        const letra = textoMinusculo[i];
        if (vogais.includes(letra)) {
            contadorVogais++;
        }
    }
    return contadorVogais;
}

const totalVogais = contarVogais(palavra);
console.log(`A palavra "${palavra}" tem ${totalVogais} vogais.`);
```
</details>

---
