// 1º Define a Varíavel
var a = window.document.getElementById('area')

//Adiciona os listeners de acordo comos eventos possíveis no código
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

//Chama os eventos e define as ações
function clicar() {
   a.innerHTML = 'Clicou!'
   a.style.backgroundColor = 'red'
}
function entrar() {
    a.innerHTML = 'Entrou!'
    a.style.backgroundColor = 'green'
}

function sair() {
    a.innerHTML = 'Saiu!'
    a.style.backgroundColor = 'black'
}


