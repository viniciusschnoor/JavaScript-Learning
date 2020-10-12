function verificar() {
    var dataatual = new Date()
    var anoatual = dataatual.getFullYear()
    var fano = document.querySelector('input#txtAno')
    var quadrores = document.querySelector('div#quadrores')
    var res = document.querySelector('p#res')
    if (fano.value.length == 0 || Number(fano.value) > anoatual) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radSex')
        var idade = anoatual - Number(fano.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gender = 'Masculino'
            if (idade >= 0 && idade < 12) {
                // CRIANÇA
                img.setAttribute('src', 'images/boy-baby.jpg')
            } else if (idade < 18) {
                // ADOLECENTE
                img.setAttribute('src', 'images/boy-teen.jpg')
            } else if (idade < 60) {
                // ADULTO
                img.setAttribute('src', 'images/man.jpg')
            } else {
                // IDOSO
                img.setAttribute('src', 'images/oldman.jpg')
            }
        } else if (fsex[1].checked) {
            gender = 'Feminino'
            if (idade >= 0 && idade < 12) {
                // CRIANÇA
                img.setAttribute('src', 'images/girl-baby.jpg')
            } else if (idade < 18) {
                // ADOLECENTE
                img.setAttribute('src', 'images/girl-teen.jpg')
            } else if (idade < 60) {
                // ADULTO
                img.setAttribute('src', 'images/woman.jpg')
            } else {
                // IDOSO
                img.setAttribute('src', 'images/oldwoman.jpg')
            }
        } else {
            alert('Erro')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${gender} com ${idade}`
        res.appendChild(img)
    }
}