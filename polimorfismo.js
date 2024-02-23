class Persona {
    constructor(nombres, apellidos, edad){
        this.nombres = nombres
        this.apellidos = apellidos
        this.edad = edad
    }

    datos(){
        return `Mi nombre es: ${this.nombres} ${this.apellidos} mi edad es: ${this.edad}` 
    }
    polimorfismo(){
        return this.datos()
    }
}

class Profesor extends Persona {
    constructor(nombres, apellidos, edad, materia){
        super(nombres, apellidos,edad)
        this.materia = materia
    }
    polimorfismo(){
        return `${super.datos()} dicta la materia ${this.materia}`
    }
}

class Estudiante extends Persona {
    constructor(nombres, apellidos, edad, grado){
        super(nombres, apellidos,edad)
        this.grado = grado
    }
    polimorfismo(){
        return `${super.datos()} esta en el grado ${this.grado}`
    }
}

const profesor1 = new Profesor("david","bautista",32,"Programación")
const estudidante1 = new Estudiante("Juan", "Diaz",20,"11º")

console.log(profesor1.polimorfismo())
console.log(estudidante1.polimorfismo())
console.log(profesor1.datos())