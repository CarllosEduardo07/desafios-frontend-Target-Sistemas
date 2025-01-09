const faturamentoMensal = [
  { dia: 1, valor: 200 },
  { dia: 2, valor: 0 },
  { dia: 3, valor: 300 },
  { dia: 4, valor: 150 },
];

function calcularFaturamento(faturamento) {
  const valoresValidos = faturamento.filter(d => d.valor > 0).map(d => d.valor);
  const menor = Math.min(...valoresValidos);
  const maior = Math.max(...valoresValidos);
  const media =
    valoresValidos.reduce((acc, val) => acc + val, 0) / valoresValidos.length;
  const diasAcimaMedia = valoresValidos.filter(v => v > media).length;

  return {
    menor,
    maior,
    diasAcimaMedia,
  };
}

const resultados = calcularFaturamento(faturamentoMensal);
console.log(resultados);
