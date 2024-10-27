//IMPORTAR DEPENDENCIAS (CONFIGURAR EN PACKAGE.JSON)

import dotenv from "dotenv";
import connection from "./database/connection.js";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import UserRoutes from "./routes/users.js"
import PublicationRoutes from "./routes/publication.js"
import FollowRoutes from "./routes/follows.js"

//Configurar dotenv para usar las variables de entorno
dotenv.config();

//Mensaje de eejcucion de aPi de Node
console.log("API EJECUCION");

//CONEXION A LA BASE DE DATOS
connection();

// CREAR EL SERVIDOR DE NODE
const app = express();
const puerto = process.env.PORT || 4000;

// CONFIGURAR CORS PARA QUE ACEPTE PETICIONES DEL FRONTEND

app.use(cors({
   origin: '*',
   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
   preflightContinue: false,
   optionsSuccessStatus: 204 
}));

// body parser ayuda a codificar los datos desde los formularios para convertirlos en objertos de javascript

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


// configurar las rutas del aplicatico (modulos)

app.use('/api/user', UserRoutes);
app.use('/api/publication', PublicationRoutes);
app.use('/api/follow', FollowRoutes);


// Configurar servidor de Node
app.listen(puerto, ()=> {
    console.log("Servidor en el puerto", puerto);    
});

export default app;
