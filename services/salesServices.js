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

const insertSales = async () => {
  const { id } = await salesModel.insertSales();
  return id;
};

const insertSalesProduct = async (id, productId, quantity) => {
  const insertAll = await salesModel.insertSalesProduct(id, productId, quantity);
  return insertAll; 
};

module.exports = {
  getAllServiceSales,
  getSalesId,
  insertSalesProduct,
  insertSales,
};