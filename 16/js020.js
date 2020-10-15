function fatorial(numero) {
    let fat = 1
    for ( let multiplicador = numero ; multiplicador > 1 ; multiplicador-- ) {
        fat *= multiplicador
    }
    return fat
}

console.log(fatorial(5))