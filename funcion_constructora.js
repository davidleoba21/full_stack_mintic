function Persona(nombre, edad){
    this.nombre = nombre
    this.edad = edad
}

Persona.prototype.caminar = function () {
    console.log("Debo caminar todos los dias")
}

const administrador = new Persona("Raul Perez", 25)
const mecanico = new Persona("Juan Sanchez", 30)

// console.log(administrador)
// console.log(mecanico)

function Ingeniero(nombre, edad, correo){
    this.super = Persona
    this.super(nombre,edad)
    this.correo = correo
}

Ingeniero.prototype = new Persona()
Ingeniero.prototype.constructor = Ingeniero

Ingeniero.prototype.caminar = function() {
    console.log("Me levanto a las 6am a caminar")
}

Ingeniero.prototype.trabajar = function(){
    console.log("Me levanto a las 6am a trabajar")
}

const hombre = new Ingeniero("Carlos Fuentes", 33, "carlos@gmaul.com")
const mujer = new Ingeniero("Camilo Cantor", 35, "camilo@gmail.com")
console.log(mujer)
console.log(hombre)
mujer.caminar()
hombre.caminar()
mujer.trabajar()
hombre.trabajar()
