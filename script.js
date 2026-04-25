let tarefas = [];
const botao = document.getElementById('btn');
const tarefa = document.getElementById('tarefa');
const lista = document.getElementById('lista'); 
botao.addEventListener('click', function(){
 const valor = tarefa.value;
 tarefas.push(valor);
 const item = document.createElement('li');
 item.textContent = valor;
 lista.appendChild(item);
 localStorage.setItem('tarefas', JSON.stringify(tarefas));
 tarefa.value = '';
} )