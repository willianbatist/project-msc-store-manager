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

module.exports = {
  getAllSalesModel,
  getSalesId,
};