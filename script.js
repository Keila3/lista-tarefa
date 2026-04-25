// Recupera as tarefas do localStorage ou inicializa um array vazio
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

// Seleciona os elementos do DOM
const botao = document.getElementById("btn");
const tarefa = document.getElementById("tarefa");
const lista = document.getElementById("lista");

// Exibe as tarefas armazenadas no localStorage
tarefas.forEach(function (valor) {
  const item = document.createElement("li");

  // Cria um botão de remover para cada tarefa
  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "x";

  // Adiciona um evento de clique ao botão de remover
  botaoRemover.addEventListener("click", function () {
    item.remove();

    // Remove a tarefa do array e atualiza o localStorage
    tarefas = tarefas.filter((t) => t !== valor); // Remove a tarefa do array
    localStorage.setItem("tarefas", JSON.stringify(tarefas)); // Atualiza o localStorage
  });

  // Adiciona o texto da tarefa e o botão de remover ao item da lista
  const texto = document.createElement("span");
  texto.textContent = valor;

  item.appendChild(texto);
  item.appendChild(botaoRemover);

  item.appendChild(botaoRemover);
  lista.appendChild(item);
});

// Adiciona um evento de clique ao botão de adicionar tarefa
botao.addEventListener("click", function () {
  const valor = tarefa.value;

  // Verifica se o campo de entrada está vazio
  if (valor.trim() === "") {
    alert("Por favor, digite uma tarefa.");
    return;
  }

  tarefas.push(valor);

  // Cria um novo item da lista para a tarefa adicionada
  const item = document.createElement("li");

  // Cria um botão de remover para a nova tarefa
  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "x";

  // Adiciona um evento de clique ao botão de remover
  botaoRemover.addEventListener("click", function () {
    item.remove();

    // Remove a tarefa do array e atualiza o localStorage
    tarefas = tarefas.filter((t) => t !== valor);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  });

  // Adiciona o texto da tarefa e o botão de remover ao item da lista
  const texto = document.createElement("span");
  texto.textContent = valor;

  item.appendChild(texto);
  item.appendChild(botaoRemover);

  item.appendChild(botaoRemover);
  lista.appendChild(item);

  // Armazena as tarefas no localStorage
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  tarefa.value = ""; // Limpa o campo de entrada após adicionar a tarefa
});
