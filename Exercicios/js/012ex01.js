function carregar() {
    var corpoanimado = window.document.body
    var img = window.document.getElementById('img')
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora <12) {
        img.style.backgroundImage = "url('images/manha.jpg')"
        img.style.backgroundPosition = "center"
        img.style.backgroundSize = "cover"
        img.style.backgroundRepeat = "no-repeat"
        corpoanimado.style.backgroundColor = "#3D4E2A"
    } else if (hora >= 12 && hora < 18) {
        img.style.backgroundImage = "url('images/tarde.jpg')"
        img.style.backgroundPosition = "center"
        img.style.backgroundSize = "cover"
        img.style.backgroundRepeat = "no-repeat"
        corpoanimado.style.backgroundColor = "#7D7854"
    } else {
        img.style.backgroundImage = "url('images/noite.jpg')"
        img.style.backgroundPosition = "center"
        img.style.backgroundSize = "cover"
        img.style.backgroundRepeat = "no-repeat"
        corpoanimado.style.backgroundColor = "#024059"
    }
}