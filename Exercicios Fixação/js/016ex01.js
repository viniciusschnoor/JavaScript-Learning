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
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            media = soma/totalelementos
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        presultado.innerHTML += `<p>Foram incluídos ${totalelementos} números</p>`
        presultado.innerHTML += `<p>Maior valor: ${maior}</p>`
        presultado.innerHTML += `<p>Menor valor: ${menor}</p>`
        presultado.innerHTML += `<p>Soma: ${soma}</p>`
        presultado.innerHTML += `<p>Média: ${media}</p>`
    }
}