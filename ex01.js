const prompt = require("prompt-sync")();
console.clear();

/* 
Faça um programa que peça 2 números 
e crie um array contando todos os números os números sequenciais 
do primeiro até o segundo, independente de ser maior ou menor.
*/

let num1 = +prompt("Digite o primeiro número: ");
let num2 = +prompt("Digite o segundo número: ");

const sequencia = [];

if (num1 < num2) {
  sequencia.push(num1);
  for (let i = num1; i < num2; i++) {
    num1++;
    sequencia.push(num1);
  }
} else {
  sequencia.push(num1);
  for (let i = num1; i > num2; i--) {
    num1--;
    sequencia.push(num1);
  }
}

console.log(sequencia);
