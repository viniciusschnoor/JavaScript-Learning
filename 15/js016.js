let valores = [ 8, 1, 7, 4, 2, 9 ]

//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/*
for ( let indice = 0 ; indice < valores.length ; indice++ ) {
    console.log(valores[indice])
}
*/

for ( let indice in valores ) {
    console.log(valores[indice])
}

let posicao = valores.indexOf(7)

console.log(`O valor está na posição ${posicao}`)

