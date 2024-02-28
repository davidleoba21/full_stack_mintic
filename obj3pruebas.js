const arreglo = [
    {
        id:1,
        lenguaje: "Java y C#",
        programacion: "Web y Escritorio",
    },
    {
        id:2,
        lenguaje: "php y html",
        programacion: "Web",
    },
    {
        id:3,
        lenguaje: "visual y phyton",
        programacion: "Web y Escritorio",
    },
    {
        id:4,
        lenguaje: "Java y C#",
        programacion: "movil",
    },
]

//find Me trae el objeto con nombre, id

const result = arreglo.find(post => post.lenguaje == "Java y C#")
console.log(result)

const resulta = arreglo.find(post => post.id == 2)
console.log(resulta)

//some nos devuelve true o false y nos sirve para comprobar

const result2 = arreglo.some(post => post.id == 2)
console.log(result2)

const resulta2 = arreglo.some(post => post.lenguaje.includes('C#'))
console.log(resulta2)

const resulta3 = arreglo.every(post => post.lenguaje.includes('Java y C#'))
console.log(resulta3)