// Doten nos ayuda a manejar variables de entorno
import { config } from "dotenv";

// Funcion que pone a nuestra dispocision las variables de entorno que hayamos configurado en nuestro .env
// Nos permite utilizar los valores dentro de .env y los ubica en el objeto process.env (para ocultar los valores sin necesidad de exponerlos)
config();

// Valores necesarios para poder conectarse a la BD y todos extraidos del archivo .env
export default {
  host: process.env.HOST || "",
  database: process.env.DATABASE || "",
  user: process.env.USERNAME || "",
  password: process.env.PASSWORD || "",
};
