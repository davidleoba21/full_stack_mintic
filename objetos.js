class Animal {
    constructor(id, nombre, color){
        this.id = id
        this.nombre = nombre
        this.color = color
    }
    result(){
        return `${this.nombre} el color es ${this.color}`
    }
}

class Tigre extends Animal {
    constructor(id, nombre, color, sexo){
        super(id, nombre, color)
        this.sexo = sexo
    }
    atacar(){
        return `El tigre ${this.nombre} esta atacando`
    }
}

const perro = new Animal(1, 'Perro', 'negro')
const gato = new Animal(2, 'gato', 'gris')

console.log(perro.result())
console.log(gato.result())

const bengala = new Tigre(3, 'bengala', 'naranja', 'macho')

console.log(bengala.atacar())