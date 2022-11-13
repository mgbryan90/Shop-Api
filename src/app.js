import express from "express";
import morgan from "morgan";
import cors from "cors";

// Routes
import productsRoutes from "./routes/products.router.js";
import categoryRoutes from "./routes/category.router.js";

// Creamos una constante que sea igual a la ejecución de express
const app = express();

// Settings
app.set("port", process.env.PORT);

// Middlewares (Funciones intermedias entre una peticion y una respuesta)
// Usamos el modulo morgan en modo de desarrollo - Para tener un detalle de las peticiones que estoy haciendo
app.use(morgan("dev"));
app.use(cors());

// Para que pueda entender y procesar json
app.use(express.json());

// Use Routes -- La ruta que usa para la consulta de productos
app.use("/api/product", productsRoutes);
app.use("/api/category", categoryRoutes);
// app.use("/api/filter", filterRoutes);

export default app;
