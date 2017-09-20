var dobroDoValor = function(numero) {
    return numero * 2   
}

var dobroDoValor2 = (numero) => {
    return numero * 2   
}

var dobroDoValor3 = numero => {
    return numero * 2   
}

var dobroDoValor4 = (numero, numero2) => {
    return numero * numero2   
}

var dobroDoValor5 = () => {
    return 15 * 2
}

var dobroDoValor6 = () => 10 * 2

var dobroDoValor7 = () => {
    let resultado = 8 * 2
    return resultado
}

console.log(dobroDoValor(3))
console.log(dobroDoValor2(7))
console.log(dobroDoValor3(10))
console.log(dobroDoValor4(5,2))
console.log(dobroDoValor5())
console.log(dobroDoValor6())
console.log(dobroDoValor7())