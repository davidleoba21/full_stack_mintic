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

const getPeliculas = () => {
    return new Promise((resolve, reject) => {
        if(peliculasAccion == 0){
            reject(new Error ('No se encuentran Datos'))
        }
        setTimeout(() => {
            resolve(peliculasAccion)
        }, 2000);
    })
}

// getPeliculas()
// .then((peliculasAccion) => console.log(peliculasAccion))
// .catch((err) => console.log(err.message))

const mostrarPeliculas = async() => {
    try {
        const pelicula = await getPeliculas()
        console.log(pelicula)
    } catch (error) {
        console.log(error)    
    }    
}

mostrarPeliculas()