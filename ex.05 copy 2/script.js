function digaOla(nome) {
  document.querySelector('p').textContent = Olá, ${nome}!;
}

const nome = prompt('Digite seu nome:');
digaOla(nome);

function somar(a, b) {
  return a + b;
}

const num1 = parseFloat(prompt('Digite o primeiro número:'));
const num2 = parseFloat(prompt('Digite o segundo número:'));
alert(A soma é: ${somar(num1, num2)});

function formatarTexto(texto) {
  return ${texto.toUpperCase()} (${texto.length} caracteres);
}

const entrada = prompt('Digite uma palavra ou frase:');
alert(formatarTexto(entrada));