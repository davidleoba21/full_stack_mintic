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

class Perro extends Animal{
    constructor(id, nombre, color, sexo){
        super(id, nombre, color)
        this.sexo = sexo
        this.raza = null
    }
    atacar(){
        return `El Perro ${this.nombre} esta atacando`
    }

    get getRaza(){
        return this.raza
    }

    set setRaza(raza){
        this.raza = raza
    }
    static Cruce(){
        return "Esta es la prueba de static"
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

const perro = new Perro(1, 'Perro', 'negro')
const gato = new Animal(2, 'gato', 'gris')

console.log(perro.result())
console.log(gato.result())

const bengala = new Tigre(3, 'bengala', 'naranja', 'macho')

console.log(bengala.atacar())

perro.setRaza = "pastor aleman";
console.log(Perro.Cruce())