// Metodo de prueba del controlador user

export const testUser = (req, res) => {
    return res.status(200).send({
        message: "Mensaje enviado desde el controlador de User"
    })
} 


// Metodo para registro de usuarios

export const register = (req, res) => {
    return res.status(200).send({
        message: "registro de usuarios"
    })
}