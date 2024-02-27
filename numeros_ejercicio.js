// let esImpar = (numero) => { return numero % 2 == 1 }
// const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
// const res = numeros.filter(esImpar)
// console.log(res)


const Empleados = [
    {
        nombre: "Andres Duran",
        correo: "andres.duran@gmail.com",
        cedula: 1023132342,
        salario: 3200000
    },

    {
        nombre: "Pedro Perez",
        correo: "pedro.perez@gmail.com",
        cedula: 10221481920,
        salario: 2200000
    },

    {
        nombre: "Camilo Ariza",
        correo: "camilo.ariza@gmail.com",
        cedula: 1023132424,
        salario: 4500000
    },

    {
        nombre: "Juan Duran",
        correo: "juan.duran@gmail.com",
        cedula: 1023133233,
        salario: 1500000
    },

    {
        nombre: "Maria Duran",
        correo: "maria.duran@gmail.com",
        cedula: 148332342,
        salario: 2900000
    }
]

//const res = Empleados.filter(esImpar)
const may = Empleados.filter(value => value.salario > 3000000)
console.log(may)