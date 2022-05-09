const connection = require('./connection');

const getAllSalesModel = async () => {
  const query = `
  SELECT 
    sp.sale_id AS saleId, s.date AS date,
    sp.product_id AS productId, sp.quantity AS quantity
  FROM StoreManager.sales_products AS sp
  INNER JOIN StoreManager.sales AS s
    ON s.id = sp.sale_id
  `;

  const [sales] = await connection.execute(query);

  return sales;
};

const getSalesId = async (id) => {
  const query = `
  SELECT 
    s.date AS date, sp.product_id AS productId, sp.quantity AS quantity
  FROM StoreManager.sales_products AS sp
  INNER JOIN StoreManager.sales AS s
    ON s.id = sp.sale_id
    WHERE s.id = ?
  `;

  const [salesId] = await connection.execute(query, [id]);

  return salesId;
};

// const getSalesAllId = () => {
//   const query =
// };

const insertSales = async () => {
  const query = `
  INSERT INTO StoreManager.sales (date) VALUES (NOW());
  `;
  const [insert] = await connection.execute(query);
  
  return insert.insertId;
};

const insertSalesProduct = async (saleId, productId, quantity) => {
  const query = `
  INSERT INTO 
    sales_products (sale_id, product_id, quantity) 
  VALUES
  (?, ?, ?)`;

  const [insert] = await connection.execute(query, [saleId, productId, quantity]);

  return insert;
};

const updateSales = async (quantity, saleId, productId) => {
  const query = `
  UPDATE StoreManager.sales_products
  SET quantity = ?
  WHERE sale_id = ? AND product_id = ?
  `;
  const [update] = await connection.execute(query, [quantity, saleId, productId]);

  return update;
};

module.exports = {
  getAllSalesModel,
  getSalesId,
  insertSales,
  insertSalesProduct,
  updateSales,
};