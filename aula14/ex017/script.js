function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value == '') {
        window.alert('Informe um número')
    }
    else {
        let n = Number(num.value)
        let c = 1
        //alert(`o número é ${n}`)
        tab.innerHTML = ""
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = tab(c)
            tab.appendChild(item)
            c++
        }
    }
}
