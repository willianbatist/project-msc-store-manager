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

const createProduct = async (name, quantity) => {
  const query = 'INSERT INTO products (name, quantity) VALUES (?, ?)';

  const [create] = await connection.execute(query, [name, quantity]);

  return create.insertId;
};

const getModelName = async (name) => {
  const query = 'SELECT name FROM products WHERE name = ?';
  const [getName] = await connection.execute(query, [name]);

  return getName;
};

const updateProducts = async (name, quantity, id) => {
  const query = `
  UPDATE StoreManager.products
  SET name = ?, quantity = ?
  WHERE id = ?
  `;

  const [update] = await connection.execute(query, [name, quantity, id]);

  return update;
};

const deleteProduct = async (id) => {
  const query = 'DELETE FROM products WHERE id = ?';
  const [delProduct] = await connection.execute(query, [id]);
  return delProduct;
};

module.exports = {
  getAllModelProducts,
  getProductId,
  createProduct,
  getModelName,
  updateProducts,
  deleteProduct,
};