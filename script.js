
const botao = document.getElementById('btn');
const tarefa = document.getElementById('tarefa');
const lista = document.getElementById('lista'); 
botao.addEventListener('click', function(){ 
 const valor = tarefa.value;
 const item = document.createElement('li');
 item.textContent = valor;
 lista.appendChild(item);
 tarefa.value = '';
} )