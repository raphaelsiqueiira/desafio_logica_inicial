function saldoHankeadas(quantVitorias, quantDerrotas) {
  let saldoVitoriaDerrota = quantVitorias - quantDerrotas;
  let classificacao = "";

  if (saldoVitoriaDerrota < 10) {
    classificacao = "Ferro";
  } else if (saldoVitoriaDerrota < 20) {
    classificacao = "Bronze";
  } else if (saldoVitoriaDerrota < 50) {
    classificacao = "Prata";
  } else if (saldoVitoriaDerrota < 80) {
    classificacao = "Ouro";
  } else if (saldoHankeadas < 90) {
    classificacao = "Diamante";
  } else if (saldoVitoriaDerrota < 100) {
    classificacao = "Lendário";
  } else {
    classificacao = "Imortal";
  }

  console.log("Seu Herói tem de saldo de " + saldoVitoriaDerrota +  " está no Hank de " + classificacao);
}

saldoHankeadas(10, 8)
