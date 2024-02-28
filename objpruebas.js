// function listar(a,b){
//     console.log("hola mundo")
//     console.log(a)
//     console.log(b)
//     console.log("fin",arguments)
//     console.log("tamaño",arguments.length)
//     console.log(arguments[2])
// }

// listar("limon", "pera", "mora", "fresa", "banano", "kiwi")


// function listar2(a,b,...z){
//     console.log("hola mundo")
//     console.log(a)
//     console.log(b)
//     console.log("fin",z)
//     console.log("tamaño",z.length)
//     console.log(z[2])
// }

// listar2("limon", "pera", "mora", "fresa", "banano", "kiwi")


// ARREGLO COPIA Y MODIFICAR ARRREGLO
// const operador = [1,2,3,4]
// let copoperador = [...operador]

// copoperador[0] = 0

// console.log(operador)
// console.log(copoperador)

//ARREGLO CONCATENAR
// const lisnum = [1,2,3,4,5]
// const lisnume = [6,7,8,9,0]
// console.log(lisnum.concat(lisnume))

// const numero = [1,2,3,4,5]
// const numero1 = [6,7,8,9,0]
// console.log([...numero, ...numero1])

//
const numero = [1,2,3,4,5]
const numero1 = [6,7,8,9,0]

const concat = [0,...numero,"Hola mundo",...numero1,19,20,21,22] 
console.log(concat)

