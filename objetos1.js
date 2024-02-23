// const vehiculo = {
//     marca: 'ferrari',
//     color: 'rojo',
//     modelo: 2019,

// }

class Vehiculo {
    constructor(id, marca, color, modelo, estado){
        this.id = id
        this.marca = marca
        this.color = color
        this.modelo = modelo
        this.estado = estado
    }
    arrancar(){
        console.log("El carro arranco")
    }
}

class Camioneta extends Vehiculo {
    constructor(id, marca, color, modelo, estado, cilindraje, peso , pasajeros, tipoC){
        super(id, marca, color, modelo, estado)
        this.cilindraje = cilindraje
        this.peso = peso
        this.pasajeros = pasajeros
        this.tipoC = tipoC
    }
    combustible(){
        if(this.tipoC){
            console.log("ACPM")
        } else {
            console.log("Gasolina")
        }

    }
}

const ferrari = new Vehiculo(1, 'Ferrari', 'Rojo', 2019, 'nuevo')

ferrari.arrancar()

let ford = new Camioneta (3, "Ford", "Verde", 2024, "Nuevo", 2450, 1900, '8',false)
let toyota = new Camioneta (2, "Toyota", "Blanco", 2020, "Usado", 2000, 1600, '5',true)

toyota.combustible()
ford.combustible()