let mensaje
mensaje = "Hola"
console.log(typeof(mensaje) + " " + mensaje)
mensaje = 3.7
console.log(typeof(mensaje) + " " + mensaje)
mensaje = 3
console.log(typeof(mensaje) + " " + mensaje)

let y = 5
if (y>2 && y === 5)
    console.log("Es verdadero")
else console.log("Es falso")


let variable
variable = 3
switch(variable){
    case 1:
        console.log("1")
        break
    case 2:
        console.log("2")
        break
    case 3:
        console.log("3")
        break
    default:
}


for (let i=0; i<10; i++){
    console.log(i)
}

const n = 4
var fact = 1

for (let i=1; i<=n; i++){
    fact *= i;
}
console.log("el factorial de 4 es " + fact)


let lista_personas = [  {"nombre" : "Carlos", "tipo" : "persona", "id" : 400},
                        {"nombre" : "David", "tipo" : "persona", "id" : 410},
                        {"nombre" : "Andres", "tipo" : "persona", "id" : 420}
]

for (let personas of lista_personas){
    for (let propiedad in personas){
        console.log(personas.id + " " + propiedad)
    }
}

for (let i=0; i<=lista_personas.length; i++){
    console.log(lista_personas[0])
}