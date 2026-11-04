/* 
cada pedido é um objeto { status, valor }

status pode ser "pendente", "enviado", "entregue" ou "cancelado"
valor pode vir como number, string numérica, ou um valor inválido 
(null ou texto que não é número).

escrever função processarPedidos(pedidos)

usar for pedido of pedidos
pedido com status === cancelado são pulados com "continue" => 
entram em um contador separado de cancelados

para pedidos não cancelados, usa switch para contar quantos são "pendente",
"enviado" e "entregue" => 3 contadores separados

converte "valor" explicitamente pra número. Se for inválido
(null, ou a conversão der NaN) conta como valor inválido 
contador separado, não soma no total

Soma todos op valores dos válidos (outro contador dos válidos = talvez)

retorna (template string):
"Total: R${total}. Pendente: {p}, Enviado: {e}, Entregue: {en}.
{quantidadeInvalidos} valor(es) inválido(s). {quantidadeCancelados}
cancelado(s)."

Exemplo:

processarPedidos([
  { status: "pendente", valor: 100 },
  { status: "cancelado", valor: 50 },
  { status: "enviado", valor: "200" },
  { status: "entregue", valor: null },
  { status: "pendente", valor: "abc" },
])

// "Total: R$300. Pendente: 2, Enviado: 1, Entregue: 1. 2 valor(es) inválido(s). 1 cancelado(s)."
*/