function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamete')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //s
                img.setAttribute('src', 'bebe-masculino.png')
            }
            else if (idade <= 21) {
                //jovem
                img.setAttribute('src', 'jovem-homem.png')
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-homem.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'idoso-homem.png')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-feminino.png')
            }
            else if (idade <= 21) {
                //jovem
                img.setAttribute('src', 'jovem-mulher.png')
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-mulher.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'idoso-mulher.png')
            }


        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos`
        res.appendChild(img)

    }
}