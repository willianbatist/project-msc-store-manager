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

const insertSalesProduct = async (productId, quantity) => {
  const { id } = await salesModel.insertSales();
  const insertAll = await salesModel.insertSalesProduct(id, productId, quantity);
  return insertAll; 
};

module.exports = {
  getAllServiceSales,
  getSalesId,
  insertSalesProduct,
};