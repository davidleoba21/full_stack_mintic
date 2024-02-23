const sumar = (a,b, callback) => {
    let resultado = a + b
    callback(`sumar ${a} + ${b} es: `+resultado)
}

const restar = (a,b, callback) => {
    let resultado = a - b
    callback(`restar ${a} - ${b} es: `+resultado)
}

const multiplicar = (a,b, callback) => {
    let resultado = a * b
    callback(`multiplicar ${a} * ${b} es: `+resultado)
}

const dividir = (a,b, callback) => {
    let resultado = a / b
    callback(`dividir ${a} / ${b} es: `+resultado)
}

const modulo = (a,b, callback) => {
    let resultado = a % b
    callback(`modulo ${a} % ${b} es: `+resultado)
}

function imprimir(x){
    console.log("El resultado de "+x)
}

export{sumar}
export{restar}
export{multiplicar}
export{dividir}
export{modulo}
export{imprimir}