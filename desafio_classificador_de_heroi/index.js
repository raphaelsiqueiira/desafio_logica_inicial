let nome = "Kratos";
let quantExperiencia = 3000;
let classificacao = "";

if (quantExperiencia < 1000) {
  classificacao = "Ferro";
} else if (quantExperiencia < 2000) {
  classificacao = "Bronze";
} else if (quantExperiencia < 5000) {
  classificacao = "Prata";
} else if (quantExperiencia < 7000) {
  classificacao = "Ouro";
} else if (quantExperiencia < 8000) {
  classificacao = "Platina Diamante";
} else if (quantExperiencia < 9000) {
  classificacao = "Ascendente";
} else if (quantExperiencia < 10000) {
  classificacao = "Imortal";
} else {
  classificacao = "Radiante";
}

console.log("O Herói de nome " + nome + " está no nível de " + classificacao)