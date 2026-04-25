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
    // Remove a tarefa do array e atualiza o localStorage
    tarefas = tarefas.filter((t) => t.id !== valor.id);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    renderLista(); // Renderiza a lista atualizada
  });

  // Cria o elemento de texto para a tarefa
  const texto = document.createElement("span");
  texto.textContent = valor.texto;

  // Adiciona o texto e o botão de remoção ao item da lista
  item.appendChild(texto);
  item.appendChild(botaoRemover);

    return item;
}

// Renderiza as tarefas existentes na lista ao carregar a página
function renderLista() {
  lista.innerHTML = "";

  // Itera sobre as tarefas e adiciona cada uma à lista
  tarefas.forEach((tarefa) => {
    lista.appendChild(adicionarTarefa(tarefa));
  });
}
renderLista();

// Adiciona um evento de clique ao botão para adicionar uma nova tarefa
botao.addEventListener("click", function () {
  const valor = tarefa.value;

  // Verifica se o valor não está vazio ou apenas com espaços
  if (valor.trim() === "") {
    alert("Por favor, digite uma tarefa válida.");
    return;
  }

  // Cria um objeto para a nova tarefa com um ID único
  const novaTarefa = {
    id: Date.now(),
    texto: valor,
  };

  // Adiciona a nova tarefa ao array e atualiza o localStorage
  tarefas.push(novaTarefa);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));

  renderLista(); // Renderiza a lista atualizada

  // Limpa o campo de entrada após adicionar a tarefa
  tarefa.value = "";
});

// Adiciona um evento de teclado para permitir adicionar a tarefa pressionando Enter
tarefa.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    botao.click();
  }
});
