// function solicitudServidor (consulta, callback) {
//     setTimeout(() => {
//         let respuesta = consulta + "ejecutando"
//         callback(respuesta)
//     }, 5000);
// }

// function obtenerResultado(resultados){
//     console.log('Respuesta Servidor: ', resultados);
// }

// solicitudServidor("El servidor se esta ", obtenerResultado)


function modificar (array, callback){
    array.push("red")
    setTimeout(() => {
        callback()
    }, 3000);
}

const partes = ["conexion", "caidas", "servidor"]

modificar(partes, function(){
    console.log(`Se modifico el arreglo de ${partes.length} elementos y son:` + partes)
    console.log(partes)
})

const peliculasAccion = [
    {
        nombre:"Duro de Matar",
        año: 2000
    },
    {
        nombre:"Toy Story",
        año: 2001
    },
    {
        nombre:"El gato con botas",
        año:2003
    }
];

const vistaPelis = peliculasAccion.filter(value => value.año > 2000)
console.log(vistaPelis);
