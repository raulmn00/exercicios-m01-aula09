const prompt = require('prompt-sync')();
console.clear();

/* 
Faça um programa que, dado uma lista de N números 
(o usuário deve determinar a quantidade de números a serem entrados e entrar cada um deles), 
determine o menor valor, o maior valor e a soma dos valores.
*/

const listaNumeros = [];

let qtdNumeros = +prompt("Quantos números deseja em sua lista: ");

for (let i = 0; i < qtdNumeros; i++) {
    let itemArray = +prompt("Digite um número: ");
    listaNumeros.push(itemArray);
}

let soma = 0; 
let maiorValor = 0;
let menorValor = 0;
let ultimoIndex = listaNumeros.length - 1;

listaNumeros.sort((a,b) => a - b);

for(let num of listaNumeros){
    soma+=num;
}

menorValor = listaNumeros[0];
maiorValor = listaNumeros[ultimoIndex];

console.log(`Soma: ${soma}`);
console.log(`Menor valor: ${menorValor}`);
console.log(`Maior valor: ${maiorValor}`);