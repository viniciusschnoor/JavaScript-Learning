function contar() {
    let finicio = document.getElementById('txti')
    let ffim = document.getElementById('txtf')
    let fintervalo = document.getElementById('txtinter')
    let fresultado = document.getElementById('resultado')

    if (finicio.value.length == 0 || ffim.value.length == 0 || fintervalo.value.length == 0) {
        alert('ERRO')
    } else {
        fresultado.innerHTML = "Contando... "
        let i = Number(finicio.value)
        let f = Number(ffim.value)
        let p = Number(fintervalo.value)

        for ( let c = i ; c <= f ; c += p ) {
            fresultado.innerHTML += `${c} \u{U1F44B}`
        }
    }
}