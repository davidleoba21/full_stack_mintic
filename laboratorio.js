class Empleado{
    constructor(id, nombre, tDocumento, nDocumento, cargo, tContrato, salario){
        this.id = id
        this.nombre = nombre
        this.tDocumento = tDocumento
        this.nDocumento = nDocumento
        this.cargo = cargo  
        this.tContrato = tContrato
        this.salario = salario
    }
    
    get getId(){
        return this.id
    }

    set setId(id){
        this.id = id
    }

    get getNombre(){
        return this.nombre
    }

    set setNombre(nombre){
        this.nombre = nombre
    }

    get getTDocumento(){
        return this.tDocumento
    }

    set setTDocumento(tDocumento){
        this.tDocumento = tDocumento
    }

    get getNDocumento(){
        return this.nDocumento
    }

    set setNDocumento(nDocumento){
        this.nDocumento = nDocumento
    }

    get getCargo(){
        return this.cargo
    }

    set setCargo(cargo){
        this.cargo = cargo
    }

    get getTContrato(){
        return this.tContrato
    }

    set setTContrato(tContrato){
        this.tContrato = tContrato
    }

    get getSalario(){
        return this.salario
    }

    set setSalario(salario){
        this.salario = salario
    }

    get getInformacion(){
        return `${this.id} ${this.nombre} ${this.tDocumento} ${this.nDocumento} ${this.cargo} ${this.tContrato} ${this.salario}`
    }

    get getDato(){
        return `${this.cargo}`
    }

    Epolimorfismo(){
        return this.Epolimorfismo()
    }
}

class Supervisor extends Empleado {
    constructor(id, nombre, tDocumento, nDocumento, cargo, tContrato, salario, pCargo){
        super(id, nombre, tDocumento, nDocumento, cargo, tContrato, salario)
        this.pCargo = pCargo
    }
    get getPCargo(){
        return pCargo
    }
    set setPCargo(pCargo){
        this.pCargo = pCargo 
    }

    get getInformacion(){
        return `${super.getInformacion} ${this.pCargo}`
    }
}


let empleado1 = new Supervisor(1, "David", "CC", 676575, "Ingeniero de Sistemas", "Indefinido", 500, "Supervisor de Vigilancia")


console.log(empleado1.getInformacion)