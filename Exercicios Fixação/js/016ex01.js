let principal = document.querySelector('section#principal')
let formulario = document.querySelector('div#formulario')
let fnum = document.querySelector('input#fnum')
let flista = document.querySelector('select#flista')
let valores = []
let resultado = document.createElement('div')
let presultado = document.createElement('p')
resultado.setAttribute('id','resultado')
presultado.setAttribute('id','presultado')

function verNumer(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function verLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    //principal.appendChild(resultado)
    //resultado.appendChild(presultado)
    if ( verNumer(fnum.value) && !verLista(fnum.value, valores) ) {
        
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
}