import { Router } from "express";
import { methods as filterControllers } from "../controllers/filter.controller";

// Creamos un Router que nos permite manejar las rutas del proyecto
const router = Router();

// Se puede abreviar request con req y response por res
router.get("/", filterControllers.getFilter);

export default router;
