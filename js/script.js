const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  // previni a entrada de valores nulos
  event.preventDefault();
  // pega os valores username e password e coloca em variaveis
  const username = document.querySelector('#usuario').value;
  const password = document.querySelector('#senha').value;
  // verifica se o campo está vazio
  if (username === '' || password === '') {
    alert('Por favor entre com senha e usuário.');
  } else {
    if (username === 'igor' && password === 'igor123'){
      window.location.href="menu.html";
    } else{
      alert('Usuário ou senha incorretos!');
    }   
  }
});