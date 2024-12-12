
document.querySelector('button').addEventListener('click', () => {
  document.querySelector('p').innerHTML = '<b><i>Texto com estilo</i></b>';
});
document.querySelector('#adicionar').addEventListener('click', () => {
  const tarefa = document.querySelector('input').value;
  const novoItem = document.createElement('li');
  novoItem.textContent = tarefa;
  document.querySelector('ul').appendChild(novoItem);
});
const frase = 'Programar é divertido!';
console.log(frase);

var numero = 10;
numero = 20;
console.log(numero);

document.querySelector('button').addEventListener('click', () => {
  document.querySelector('p').classList.toggle('ativo');
});