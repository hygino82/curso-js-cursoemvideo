
function gerar() {
    var res = document.querySelector("div#saida")

    var txtInicio = document.querySelector("input#inicio")
    var txtFim = document.querySelector("input#fim")
    var txtPasso = document.querySelector("input#passo")
    //if(txtInicio.value.lenght==0||txtFim.value.lenght==0||txtPasso.value.lenght==0)

    res.innerHTML = `<p>Inicio = ${txtInicio.value}</p>`
    res.innerHTML += `<p>Fim = ${txtFim.value}</p>`
    res.innerHTML += `<p>Passo = ${txtPasso.value}</p>`

    var passo = Number.parseInt(txtPasso.value)
    if ((txtPasso.value == "") || (txtInicio.value == "") || (txtFim.value == "")) {
        res.innerHTML='<p>Impossível contar</p>'
        //alert("{Erro} faltam dados")
    }//até aqui funcionou
    else {
        // res.innerHTML += `<p>O valor do passo é ${passo}</p>`
        if (passo <= 0) {
            res.innerHTML += `<p>Erro passo dever ser maior ou igual a 1`
        }
        else {
            var inicio = Number.parseInt(txtInicio.value)
            var fim = Number.parseInt(txtFim.value)
            // res.innerHTML += `<p>O valor do início é ${inicio}</p>`
            // res.innerHTML += `<p>O valor do fim é ${fim}</p>`
            res.innerHTML += "<h1>Contando</h1>"

            if (inicio < fim) {//contagem crescente
                for (var i = inicio; i <= fim; i += passo) {
                    res.innerHTML += `${i}`
                    res.innerHTML += '\u{1F449} ' //🐱 &#x1F431 🤙 &#x1F919  🏁 &#x1F3C1` &#x1F525 &#x1F603 
                }
            }
            else {//contagem regressiva
                for (var i = inicio; i >= fim; i -= passo) {
                    res.innerHTML += `${i}`
                    res.innerHTML += '\u{1F449} ' //🐱 &#x1F431 🤙 &#x1F919  🏁 &#x1F3C1` &#x1F525 &#x1F603 
                }
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}