# Gerenciador de Tarefas

Projeto web para gerenciamento de tarefas, com adição, remoção e persistência de dados no navegador por meio do `localStorage`.

## Preview

![Interface do Gerenciador de Tarefas em execução](assets/print-app.png)

## Funcionalidades

- Adicionar novas tarefas
- Remover tarefas individualmente
- Salvar tarefas automaticamente com `localStorage`
- Carregar a lista automaticamente ao abrir a página
- Adicionar tarefas ao pressionar `Enter`

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- localStorage (Web Storage API)

## Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/Keila3/lista-tarefa.git
```

2. Entre na pasta do projeto:

```bash
cd lista-tarefa
```

3. Abra o arquivo `index.html` no navegador.

## Estrutura de Arquivos

```text
lista-tarefa/
├── assets/
│   ├── preview.png
│   └── print-app.png
├── index.html
├── style.css
├── script.js
└── README.md
```

## Links

- Deploy: https://keila3.github.io/lista-tarefa/
- Repositório: https://github.com/Keila3/lista-tarefa

## Observações

- As tarefas são salvas no `localStorage` do navegador.
- Ao recarregar a página, os dados salvos são carregados automaticamente.
- Se o `localStorage` for limpo, as tarefas cadastradas serão removidas.
