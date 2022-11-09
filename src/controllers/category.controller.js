import { getConnection } from "./../database/database";

const getCategory = async (request, response) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM category");
    response.json(result);
  } catch (error) {
    response.status(500);
    response.send(error.message);
  }
};

export const methods = {
  getCategory,
};
