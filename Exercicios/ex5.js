const num = 0.3000000006

function retornaReal(n) {
    let index = n.toFixed(2).indexOf('.') + 2
    let real1 = ''
    var cont = 0
    for (let i = 0; i <= index; i++) {
        if (n.toFixed(2).charAt(cont) != '.') {
            real1 = real1 + n.toFixed(2).charAt(cont)
        } else {
            real1 = real1 + ','
        }
        cont++
    }
    return console.log('R$', real1)
}

retornaReal(num)
retornaReal(0.1 + 0.2)
retornaReal(1111111.3453463)
