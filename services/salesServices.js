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

module.exports = {
  getAllServiceSales,
  getSalesId,
};