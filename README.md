<h1 align="center">Processador de Pedidos do Dia</h1>

<p align="center">
  Desafio de lógica em JavaScript puro, combinando condicionais, loops e validação de dados para processar os pedidos de uma loja em um único passo pelo array.
</p>

<p align="center">
  <a href="#-about-the-project">Sobre o projeto</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-features">Funcionalidades</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-technologies">Tecnologias</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-project-structure">Estrutura</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#️-functional-rules">Regras</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-bugs-found-along-the-way">Bugs encontrados</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-getting-started">Como executar</a>
</p>

---

## 🏠 About the project

Esse desafio foi desenvolvido como parte de uma trilha de reforço de fundamentos de JavaScript (base sólida antes de seguir pra React, Node e TypeScript). A proposta: uma loja recebe uma lista de pedidos do dia, cada um com um status e um valor vindos de fontes diferentes, e precisa de um resumo processado num loop só, sem quebrar com dado inválido.

A ideia do exercício é unir várias ferramentas da linguagem que normalmente são praticadas separadas (condicional por `switch`, controle de fluxo com `continue`, conversão explícita de tipos) num cenário só, mais próximo do que aparece em código real.

---

## 🧰 Features

- Status do pedido contado por categoria (`pendente`, `enviado`, `entregue`)
- Pedidos cancelados pulados automaticamente, sem entrar em nenhum cálculo
- Valor do pedido aceito em `number` ou `string` numérica
- Valor inválido (`null` ou texto não numérico) detectado e contado separadamente, sem travar a execução
- Resumo final formatado em uma única string

---

## 💻 Technologies

- JavaScript (ES6+)
- `switch` / `case`
- `for` com índice sincronizando dois arrays
- `continue`
- Conversão explícita de tipos (`Number()`, `Number.isNaN()`)
- Template strings

---

## 👷 Project structure

- `script.js` → implementação da função `processarPedidos` e os testes
- `processador-pedidos-dia.md` → anotações de planejamento feitas durante a resolução

---

## ⚙️ Functional rules

A lógica principal funciona assim:

- os dados chegam em dois arrays paralelos (`status` e `valores`), onde a mesma posição em cada um representa o mesmo pedido
- o loop percorre os dois arrays pela mesma posição `i`
- se o status do pedido for `"cancelado"`, ele é pulado com `continue` e só entra no contador de cancelados
- para os demais, um `switch` no status incrementa o contador correspondente (`pendente`, `enviado` ou `entregue`)
- o valor do pedido é convertido explicitamente para número
- se o valor original for `null`, ou a conversão resultar em `NaN`, o pedido é contado como "inválido" e não entra na soma
- valores válidos são somados a um total geral
- a função retorna um resumo com o total somado e a contagem de cada categoria

---

## 🐛 Bugs found along the way

Documentando porque fazem parte do aprendizado, não só o resultado final:

- **Conversão do array inteiro em vez de item a item** — `Number(valores)` em vez de `Number(valores[i])`, fazendo o processamento de valor não funcionar em nenhuma posição.
- **`switch` sem `break`** — os três contadores de status incrementavam juntos para um único pedido, por causa do fall-through entre os `case`.
- **Checagem de `null` depois da conversão** — `Number(null)` vira `0`, não `null`, então a checagem precisa ser feita no valor original, antes de converter.
- **Soma sem `else`** — o total era incrementado para todo pedido, inclusive os inválidos, contaminando o resultado com `NaN` quando um valor não numérico aparecia.

---

## 🔰 Getting Started

### Prerequisites

Antes de começar, você vai precisar ter instalado:

- Node.js

### Clone the repository

```bash
git clone https://github.com/marcoviniciusmx/processador-pedidos-dia.git
```

### Run

```bash
node script.js
```
