import { Router } from "express";
import { methods as categoryControllers } from "../controllers/category.controller";

// Creamos un Router que nos permite manejar las rutas del proyecto
const router = Router();

// Se puede abreviar request con req y response por res
router.get("/", categoryControllers.getCategory);
router.get("/:idCategory/products", categoryControllers.getProductsByCategory);

export default router;
