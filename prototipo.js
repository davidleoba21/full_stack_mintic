// const persona = {
//     nomrbre: "Andres",
//     edad: 25,

//     estudiar(){
//         console.log("Estoy Estudiando");
//     }
// }


// console.log(persona)


const prueba = [1,2,"true","bienvendido",["f","y",3]]
console.log(prueba)
console.log(prueba[3])
console.log(prueba[4][2])

const arreglo = Array.of("x","y","hola","dario",8,9,0)
console.log(arreglo)

const valor = Array(200).fill(true)
console.log(valor)

const frutasZ = ["lulo", "fresa", "manzana", "papaya", "melocoton", "mora", "piña", ["papaya", "piña"]]
const res = frutasZ.filter(value => value.length<5)
console.log(res)

function sumar (a,b,...z){
    let suma = a + b
    z.forEach(n => suma += n)
    return suma
}

console.log(sumar(2,3,4,5,6,7,8))