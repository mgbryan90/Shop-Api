import { getConnection } from "./../database/database";

const getCategory = async (request, response) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM category");
    response.json(result);
  } catch (error) {
    response.status(500).send(error.message);
  }
};

// Peticion para conseguir los productos por Categoria
const getProductsByCategory = async (request, response) => {
  const { idCategory } = request.params;
  console.log(idCategory);
  try {
    const connection = await getConnection();
    const result = await connection.query(
      `SELECT * FROM product where category = ${idCategory}`
    );
    response.json(result);
  } catch (error) {
    response.status(500).send(error.message);
  }
};

export const methods = {
  getCategory,
  getProductsByCategory,
};
