import { Router } from "express";
import { methods as productControllers } from "../controllers/products.controller";

// Creamos un Router que nos permite manejar las rutas del proyecto
const router = Router();

// Se puede abreviar request con req y response por res
router
  .get("/", productControllers.getProducts)
  .post("/", productControllers.getFilter);

export default router;
