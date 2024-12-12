document.querySelector('button').addEventListener('click', () => {
    document.querySelector('h2').textContent = 'Título Atualizado!';
  });
  document.querySelector('#adicionar-item').addEventListener('click', () => {
    const novoItem = document.createElement('li');
    novoItem.textContent = 'Novo Item';
    document.querySelector('ul').appendChild(novoItem);
  });
  document.querySelector('#toggle-paragrafo').addEventListener('click', () => {
    document.querySelector('p').classList.toggle('escondido');
  });