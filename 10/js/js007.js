var tn1 = document.getElementById('txtn1')
var tn2 = document.querySelector('input#txtn2')
var btn = document.getElementById('btnSomar')
var res = window.document.getElementById('res')

btn.addEventListener('click', somar)

function somar() {
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = s
}