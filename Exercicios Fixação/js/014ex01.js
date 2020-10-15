function contar() {
    let finicio = document.getElementById('txti')
    let ffim = document.getElementById('txtf')
    let fintervalo = document.getElementById('txtinter')
    let fresultado = document.getElementById('resultado')

    if (finicio.value.length == 0 || ffim.value.length == 0 || fintervalo.value.length == 0) {
        fresultado.innerHTML = 'Impossível Contar'
        //alert('ERRO')
    } else {
        fresultado.innerHTML = "Contando...<br>"
        let i = Number(finicio.value)
        let f = Number(ffim.value)
        let p = Number(fintervalo.value)
        if (p <= 0) {
            fresultado.innerHTML = 'O intervalo deve ser um número inteiro maior que zero, considerarei intervalo igual a um<br><br>Contando...<br>'
            p = 1
        }
        if (i < f) {
            // Contagem Progressiva
            for ( let c = i ; c <= f ; c += p ) {
                fresultado.innerHTML += `\u{1F449} ${c} `
            }
        } else {
            // Contagem Regressiva
            for ( let c = i ; c >= f ; c -= p ) {
                fresultado.innerHTML += `\u{1F449} ${c} `
            }
        }
        fresultado.innerHTML += ` \u{1F3C1}`
    }
}