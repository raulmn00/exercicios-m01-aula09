const prompt = require("prompt-sync")();
console.clear();

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
