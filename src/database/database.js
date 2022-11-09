// Donde manejaremos la coneccion a la BD

// Para poder conectarme a la BD
import mysql from "promise-mysql";
import config from "./../config";

// Usamos el createPool
const connection = mysql.createPool({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password,
});

// Funcion para devolver connection
const getConnection = () => {
  return connection;
};

// Exportando getConnection
module.exports = {
  getConnection,
};
