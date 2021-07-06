var num = document.querySelector("input#fnum")
var lista = document.querySelector("select#flista")
var res = document.querySelector("div#res")
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}

function adicionar() {

    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
    }
    else {
        alert("Valor inválido ou já encontrado na lista.")
    }
    num.value = ""
    num.focus()//deixa selecionado o componente num
}

function finalizar() {

    if (valores.length == 0) {
        window.alert("adicione valores antes de finalizar")
    }
    else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0

        for (let pos in valores) {
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
            soma += valores[pos]
        }

        let media = soma / tot
        res.innerHTML = ""
        res.innerHTML += `<p>O total de elementos cadastrados é ${tot}</p>`
        res.innerHTML += `<p>O maior valor informado é ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média é ${media}</p>`
        
    }

}