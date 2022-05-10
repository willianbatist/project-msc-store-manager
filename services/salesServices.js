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

const insertSalesProduct = async (sales) => {
  const id = await salesModel.insertSales();
  const productSales = await salesModel.insertSalesProduct(id, sales);
  return productSales;
};

const updateSales = async (id, body) => {
  const upSales = await salesModel.updateSales(id, body);
  return upSales;
};

module.exports = {
  getAllServiceSales,
  getSalesId,
  insertSalesProduct,
  updateSales,
};