import { Router } from "express";
import {testPublication} from "../controller/publicationController.js"

const router = Router();

//Definir las rutas
router.get('/test-publication', testPublication);

//Exportar la ruta

export default router;