var tn1 = document.getElementById('txtn1')
var tn2 = document.querySelector('input#txtn2')
var btn = document.getElementById('btnSomar')
var res = window.document.getElementById('res')

btn.addEventListener('mouseenter', mouseSobre)
btn.addEventListener('mouseout', mouseFora)
btn.addEventListener('click', somar)

function somar() {
    btn.style.backgroundColor = 'rgb(128,255,128)'
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = s
}

function mouseSobre() {
    btn.style.backgroundColor = 'rgb(192,255,192)'
}

function mouseFora() {
    btn.style.backgroundColor = 'white'
}