function saldoHankeadas(quantVitorias, quantDerrotas) {
  let saldoVitoriaDerrota = quantVitorias - quantDerrotas;
  let classificacao = "";

  if (saldoVitoriaDerrota < 10) {
    classificacao = "Ferro";
  } else if (saldoHankeadas < 20) {
    classificacao = "Bronze";
  } else if (saldoHankeadas < 50) {
    classificacao = "Prata";
  } else if (saldoHankeadas < 80) {
    classificacao = "Ouro";
  } else if (saldoHankeadas < 90) {
    classificacao = "Diamante";
  } else if (saldoHankeadas < 10) {
    classificacao = "Lendário";
  } else {
    classificacao = "Imortal";
  }

  console.log("Seu rank é " + classificacao);
}

saldoHankeadas(10, 8)
