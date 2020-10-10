var agora = new Date()
var horaAtual = agora.getHours()
var minutoAtual = agora.getMinutes()
console.log(`Agora são ${horaAtual} horas`)
if (horaAtual >= 6 && horaAtual < 12) {
    console.log('Bom dia!')
} else if (horaAtual >= 12 && horaAtual < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
console.log(`Horário: ${horaAtual}:${minutoAtual}`)