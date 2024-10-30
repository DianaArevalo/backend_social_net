import { Router } from "express";
import { testFollow } from "../controller/followController.js"

const router = Router();

//Definir las rutas
router.get('/test-follow', testFollow);

//Exportar la ruta
export default router; 