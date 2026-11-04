# Processador de Pedidos do Dia

Desafio integrador de lógica em JavaScript puro, parte de uma trilha de reforço de fundamentos (JS → React → Node → TypeScript). Combina condicionais (`switch`), loops (`for` com índice, `continue`), conversão explícita de tipos e validação de dados.

## O problema

Uma loja processa os pedidos do dia. Cada pedido tem um status (`"pendente"`, `"enviado"`, `"entregue"` ou `"cancelado"`) e um valor, vindos de dois arrays paralelos (mesma posição = mesmo pedido) — o valor pode chegar como número, string numérica, ou um valor inválido (`null` ou texto que não é número).

A função precisa, num loop só:

- Pular pedidos cancelados (`continue`), contando-os separadamente.
- Contar quantos pedidos de cada status existem, usando `switch`.
- Converter cada valor explicitamente para número, item a item.
- Descartar e contar separadamente valores inválidos, sem quebrar o código.
- Somar o total dos valores válidos.

## O que esse desafio testou

- Conversão de tipos item a item (não no array inteiro) — reaparece com frequência quando se trabalha com dados de origens diferentes.
- `switch` sem `break` "escorrendo" para o próximo `case` (fall-through) — bug clássico, encontrado e corrigido na prática.
- Diferença entre checar o valor original (`null`) e o valor já convertido (`NaN`) — a ordem importa.
- Um `if` sem `else` deixando uma soma rodar incondicionalmente, contaminando o total com `NaN`.
- `for` com índice continua sendo necessário quando se precisa sincronizar duas estruturas de dados pela mesma posição — nem sempre `for...of` resolve.
