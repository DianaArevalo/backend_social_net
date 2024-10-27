import { connect } from "mongoose";
import dotenv from "dotenv";

// Configurar el dotenv para usar variables de entorno
dotenv.config();

const connection = async() => {
    try {
        await connect(process.env.MONGODB_URI);
        console.log("Conectado correctamente a DB_Social_Network");
        
    } catch (error) {
        console.log("Error al conectar la base de datos");
        throw new Error("¡No se ha pododio conectar a la base de datos!");

        
    }
};

export default connection;
