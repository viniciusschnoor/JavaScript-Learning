//FUNÇÃO PRINCIPAL
let principal = document.querySelector('section#principal')
let formulario = document.querySelector('div#formulario')
let fnum = document.querySelector('input#fnum')
let flista = document.querySelector('select#flista')
let valores = []
let resultado = document.createElement('div')
let presultado = document.createElement('p')
resultado.setAttribute('id','resultado')
presultado.setAttribute('id','presultado')

function adicionar() {
    if ( verNumer(fnum.value) && !verLista(fnum.value, valores) ) {
        valores.push(Number(fnum.value))
        let item = document.createElement('option')
        item.text = `Valor ${fnum.value} adicionado.`
        flista.appendChild(item)
        let itenssalvos = valores.length
        flista.setAttribute('size',itenssalvos)
        presultado.innerHTML = ''
        principal.removeChild(resultado)
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    fnum.value = ''
    fnum.focus()
}

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

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        principal.appendChild(resultado)
        resultado.appendChild(presultado)
        presultado.innerHTML = `<strong>Resultado:</strong><br>`
        let totalelementos = valores.length
        presultado.innerHTML += `<ul><li>Foram incluídos ${totalelementos} números</li></ul>`
    }
}