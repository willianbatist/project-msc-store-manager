const connection = require('./connection');

const getAllModelProducts = async () => {
  const query = 'SELECT * FROM products';

  const [products] = await connection.execute(query);

  return products;
};

const getProductId = async (id) => {
  const query = 'SELECT * FROM products WHERE id = ?';

  const [products] = await connection.execute(query, [id]);

  return products;
};

module.exports = {
  getAllModelProducts,
  getProductId,
};