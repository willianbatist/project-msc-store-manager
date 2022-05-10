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

const insertSalesProduct = async (id, sales) => {
  sales.forEach(async ({ productId, quantity }) => {
    const query = `
  INSERT INTO 
    sales_products (sale_id, product_id, quantity) 
  VALUES
  (?, ?, ?)`;
    await connection.execute(query, [id, productId, quantity]);
  });

  return { id, itemsSold: sales };
};

const updateSales = async (id, body) => {
  body.forEach(async ({ quantity, productId }) => {
    const query = `
    UPDATE sales_products
    SET quantity = ?, product_id = ?
    WHERE sale_id = ?
    `;
    await connection.execute(query, [quantity, productId, id]);
  });

  return { saleId: id, itemUpdated: body };
};

module.exports = {
  getAllSalesModel,
  getSalesId,
  insertSales,
  insertSalesProduct,
  updateSales,
};