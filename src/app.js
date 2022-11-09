import express from "express";
import morgan from "morgan";

// Routes
import productsRoutes from "./routes/products.router";
import categoryRoutes from "./routes/category.router";
import filterRoutes from "./routes/filter.router";

// Creamos una constante que sea igual a la ejecución de express
const app = express();

// Settings
app.set("port", 3000);

// Middlewares (Funciones intermedias entre una peticion y una respuesta)
// Usamos el modulo morgan en modo de desarrollo - Para tener un detalle de las peticiones que estoy haciendo
app.use(morgan("dev"));

// Para que pueda entender y procesar json
app.use(express.json());

// Use Routes -- La ruta que usa para la consulta de productos
app.use("/api/product", productsRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/filter", filterRoutes);

export default app;
