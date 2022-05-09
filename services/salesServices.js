const salesModel = require('../models/salesModel');

const getAllServiceSales = async () => {
  const sales = await salesModel.getAllSalesModel();
  return sales;
};

const getSalesId = async (id) => {
  const salesId = await salesModel.getSalesId(id);
  if (salesId.length === 0) return false;
  return salesId;
};

const insertSalesProduct = async (body) => {
  const id = await salesModel.insertSales();
  body.forEach(async ({ productId, quantity }) => salesModel
  .insertSalesProduct(id, productId, quantity));
  return { id, itemsSold: body }; 
};

module.exports = {
  getAllServiceSales,
  getSalesId,
  insertSalesProduct,
};