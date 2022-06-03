const prompt = require("prompt-sync")();
console.clear();

/* 
Numa eleição existem três candidatos. 
Faça um programa que peça o número total de eleitores. Peça para cada eleitor votar 
e ao final mostrar o número de votos de cada candidato.
*/
const candidatos = ["Thiago", "Laura", "Gabriel"];
console.log(`ELEIÇÕES! PARA VOTAR NO SEU CANDIDATO, TECLE SEU NÚMERO E CONFIRME!
${candidatos[0]} - [0]
${candidatos[1]} - [1]
${candidatos[2]}- [2]`);

let numEleitores = +prompt("Digite o número de eleitores da cidade: ");
let votosCandidato1 = 0;
let votosCandidato2 = 0;
let votosCandidato3 = 0;

for (let i = 0; i < numEleitores; i++) {
  let votoUnico = +prompt(`Eleitor ${i + 1}, digite o seu voto: `);
  if (votoUnico == 0) {
    console.log(
      `Eleitor ${i + 1}, você votou em ${candidatos[0]} com sucesso!`
    );
    console.log();
    votosCandidato1++;
  } else if (votoUnico == 1) {
    console.log(
      `Eleitor ${i + 1}, você votou em ${candidatos[1]} com sucesso!`
    );
    console.log();
    votosCandidato2++;
  } else if (votoUnico == 2) {
    console.log(
      `Eleitor ${i + 1}, você votou em ${candidatos[2]} com sucesso!`
    );
    console.log();
    votosCandidato3++;
  } else {
    console.log("VOTO NULO!");
    console.log();
  }
}

console.log("E AQUI ESTÃO OS RESULTADOS: ");
console.log(`${candidatos[0]} OBTEVE: ${votosCandidato1} votos.`);
console.log(`${candidatos[1]} OBTEVE: ${votosCandidato2} votos.`);
console.log(`${candidatos[2]} OBTEVE: ${votosCandidato3} votos.`);
console.log();

if (votosCandidato1 == votosCandidato2 && votosCandidato2 == votosCandidato3) {
  console.log(
    `${candidatos[0]} e ${candidatos[1]} e ${candidatos[2]} empataram!`
  );
} else if (
  votosCandidato1 > votosCandidato2 &&
  votosCandidato1 > votosCandidato3
) {
  console.log(`${candidatos[0]} venceu a eleição!`);
} else if (
  votosCandidato2 > votosCandidato1 &&
  votosCandidato2 > votosCandidato3
) {
  console.log(`${candidatos[1]} venceu a eleição!`);
} else if (
  votosCandidato3 > votosCandidato1 &&
  votosCandidato3 > votosCandidato2
) {
  console.log(`${candidatos[2]} venceu a eleição!`);
} else if (votosCandidato1 == votosCandidato2) {
  console.log(`${candidatos[0]} e ${candidatos[1]} empataram!`);
} else if (votosCandidato2 == votosCandidato3) {
  console.log(`${candidatos[1]} e ${candidatos[2]} empataram!`);
} else if (votosCandidato1 == votosCandidato3) {
  console.log(`${candidatos[0]} e ${candidatos[2]} empataram!`);
}
