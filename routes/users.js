import { Router } from "express";
import { testUser } from "../controller/userController.js"

const router = Router();

//Definir las rutas
router.get('/test-user', testUser);

//Exportar la ruta
export default router; 