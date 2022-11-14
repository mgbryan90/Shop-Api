import express from "express";
import cors from "cors";

// Routes
import productsRoutes from "./routes/products.router.js";
import categoryRoutes from "./routes/category.router.js";

// Creamos una constante que sea igual a la ejecución de express
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares (Funciones intermedias entre una peticion y una respuesta)
app.use(cors());

// Para que pueda entender y procesar json
app.use(express.json());

// Use Routes -- La ruta que usa para la consulta de productos
app.use("/api/product", productsRoutes);
app.use("/api/category", categoryRoutes);
// app.use("/api/filter", filterRoutes);

export default app;
