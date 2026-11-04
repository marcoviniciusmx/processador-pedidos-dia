const status = ["pendente", "cancelado", "enviado", "entregue", "pendente"]
const valores = [100, 50, "200", null, "abc"]
const newStatus = ["cancelado", "cancelado", "cancelado", "cancelado", "cancelado"]

function processarPedidos(status, valores){
    let quantidadeCancelados = 0
    let p = 0
    let e = 0
    let en = 0
    let quantidadeInvalidos = 0
    let total = 0

    for (let i = 0; i < status.length && i < valores.length; i++) {
        if (status[i] === "cancelado") {
            quantidadeCancelados += 1
            continue
        }

        switch (status[i]) {
            case "pendente":
                p += 1
                break
            case "enviado":
                e += 1
                break
            case "entregue":
                en += 1
                break
        }

        const valueNumber = Number(valores[i])

        if (valores[i] === null || Number.isNaN(valueNumber)){
            quantidadeInvalidos += 1
        } else {
            total += valueNumber
        }
    }

    return `Total: R$${total}. Pendente: ${p}, Enviado: ${e}, Entregue: ${en}. ${quantidadeInvalidos} valor(es) inválido(s). ${quantidadeCancelados} cancelado(s).`
}

console.log(processarPedidos(status, valores))
console.log(processarPedidos(newStatus, valores))
