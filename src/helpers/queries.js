//get, post, put, delete

const urlrecetas = import.meta.env.VITE_API_RECETAS

console.log(urlrecetas)

export const leerRecetas= async () => {
    try {
        const respuesta = await fetch(urlrecetas)
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

export const obtenerRecetaPorId = async (id) => {
    try {
        const respuesta = await fetch(urlrecetas+ `/${id}` )
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

export const crearReceta = async (recetaNueva) => {
    try {
        const respuesta = await fetch(urlrecetas, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recetaNueva)
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

export const editarReceta = async (recetaEditada, id) => {
    try {
        const respuesta = await fetch(urlrecetas+ `/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recetaEditada)
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

export const borrarRecetaPorId = async (id) => {
    try {
        const respuesta = await fetch(urlrecetas+ `/${id}`, {
            method: "DELETE",
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}