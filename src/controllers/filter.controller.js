import { getConnection } from "./../database/database";

// Para listar Productos
// Status 500 para ver si existe error del servidor en la consulta
const getFilter = async (request, response) => {
  const { mode } = request.body;
  try {
    const connection = await getConnection();
    const result = await connection.query(
      `SELECT * FROM product WHERE name LIKE '%${mode}%'`
    );
    response.json(result);
  } catch (error) {
    response.status(error?.status || 500);
    response.send(error.message);
  }
};

export const methods = {
  getFilter,
};
