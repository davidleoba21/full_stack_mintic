function imprimir (){
    console.log("esto es una funcion")
    console.log(20+10)
    return 80/2
}

function sumar(){
    let n1 = 25
    let n2 = 30
    return n1+n2
}

console.log(sumar())

const sum = function(){
    let n1 = 25
    let n2 = 30
    return n1+n2
}

console.log(sum())


let sumas = (a,b) => a+b

console.log(sumas(3,4))