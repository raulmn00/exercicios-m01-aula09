const prompt = require("prompt-sync")();
console.clear();

/* 
Leia um valor inteiro X. Em seguida mostre os ímpares de 1 até X, 
um valor por linha, inclusive o X, se for o caso. Use o laço FOR.
*/

let numero = +prompt("Digite um número: ");

const arrayImpares = [];
for (let i = 0; i <= numero; i++) {
  if (i % 2 != 0) {
    arrayImpares.push(i);
  }
}

console.log(arrayImpares);
