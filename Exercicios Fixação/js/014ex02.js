function tabuada() {
    let num = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltab')
    if (num.value.length == 0) {
        window.alert('Verificar todos os campos')
    } else {
        let n = Number(num.value)
        let c = 0
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
        tab.setAttribute('size',`${c}`)
    }
}