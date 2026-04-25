// Recupera as tarefas do localStorage ou inicializa um array vazio
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

// Seleciona os elementos do DOM
const botao = document.getElementById("btn");
const tarefa = document.getElementById("tarefa");
const lista = document.getElementById("lista");

// Função para adicionar uma tarefa à lista
function adicionarTarefa(valor) {
  const item = document.createElement("li");

  // Cria o botão de remoção
  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "x";

  // Adiciona a classe de estilo ao botão de remoção
  botaoRemover.classList.add("remover");

  botaoRemover.addEventListener("click", function () {
    item.remove();

    // Remove a tarefa do array e atualiza o localStorage
    tarefas = tarefas.filter((t) => t !== valor);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  });

  // Cria o elemento de texto para a tarefa
  const texto = document.createElement("span");
  texto.textContent = valor;

  // Adiciona o texto e o botão de remoção ao item da lista
  item.appendChild(texto);
  item.appendChild(botaoRemover);
  lista.appendChild(item);
}

tarefas.forEach(adicionarTarefa); // Adiciona as tarefas salvas ao carregar a página

// Adiciona um evento de clique ao botão para adicionar uma nova tarefa
botao.addEventListener("click", function () {
  const valor = tarefa.value;

  // Verifica se o valor não está vazio ou apenas com espaços
  if (valor.trim() === "") {
    alert("Por favor, digite uma tarefa válida.");
    return;
  }

  // Adiciona a nova tarefa ao array de tarefas
  tarefas.push({
    id: Date.now(),
    texto: valor,
  }); // Adiciona um objeto com id e texto para cada tarefa

  // Salva as tarefas no localStorage
  localStorage.setItem("tarefas", JSON.stringify(tarefas));

  adicionarTarefa(valor);

  tarefa.value = "";
});

// Adiciona um evento de teclado para permitir adicionar a tarefa pressionando Enter
tarefa.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    botao.click();
  }
});
