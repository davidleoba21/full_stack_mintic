//-----------------OBJ 1---------------- 
// const user = {
//     nombre: 'dario mendez',
//     id: 1234,
// }

// const user2 = {
//     correo: 'dario.mendez@gmail.com',
//     telefono: 3104567890,
// }

// let usercom  = {...user, ...user2, correo:"pedro.fer@gmail.com"};

// const usercom2 = Object.assign({},user,user2)

// console.log({usercom})
// console.log({usercom2})

//-------------OBJ 2--------------

const obj = {nombre: "manuel diaz", cedula: 102039202, correo:"manuel.diaz@gmail.com", telefono:102937292}
console.log(obj)
console.log(typeof(obj))

const texto = JSON.stringify(obj)
console.log(texto)
console.log(typeof(texto))

const obj1 = JSON.parse(texto)
console.log(obj1)
console.log(typeof(obj1))

const programacion = {
    tipo: "web, movil, escritorio",
    lenguaje: "python, java",
    cursos: ["c", "c++", "c#", "php"]
}

console.log(programacion)

const union = Object.assign({},obj, programacion)

console.log(union)