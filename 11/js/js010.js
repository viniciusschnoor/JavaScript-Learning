var velocidadeDigitada = document.getElementById('txtvel')
var verificarVelocidade = document.querySelector('input#btnver')
var res = document.getElementById('result')

verificarVelocidade.addEventListener('click', verifySpeed)

function verifySpeed() {
    var vel = Number(velocidadeDigitada.value)
    res.innerHTML = `Sua velocidade é de <strong>${vel} km/h</strong>`
    res.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`
    if (vel > 60) {
        res.innerHTML += `Você está acima da velocidade e foi <strong>multado</strong>`
    }
}