var a = window.document.getElementById('area')
function clicar() {
    /*
        1º OnClick na HTML
        2º Criado a Função no JS
    */
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


