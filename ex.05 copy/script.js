function exibirAlerta() {
  alert('Você clicou no botão!');
}

document.querySelector('button').addEventListener('click', exibirAlerta);
function calcularQuadrado(numero) {
  return numero * numero;
}

const resultado = calcularQuadrado(prompt('Digite um número:'));
alert(O quadrado do número é: ${resultado});

function converterDolarParaReal(valorEmDolares) {
  const taxa = 5.65;
  return valorEmDolares * taxa;
}

const valorDolar = parseFloat(prompt('Digite o valor em dólares:'));
const valorReal = converterDolarParaReal(valorDolar);
document.querySelector('p').textContent = O valor em reais é ; R$ ${valorReal.toFixed(2)};