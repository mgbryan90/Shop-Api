import { getConnection } from "./../database/database";

// Para listar Productos
// Status 500 para ver si existe error del servidor en la consulta
const getProducts = async (request, response) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM product");
    response.json(result);
  } catch (error) {
    response.status(500);
    response.send(error.message);
  }
};

export const methods = {
  getProducts,
};
