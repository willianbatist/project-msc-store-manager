const salesModel = require('../models/salesModel');

const getAllServiceSales = async () => {
  const sales = await salesModel.getAllSalesModel();
  return sales;
};

module.exports = {
  getAllServiceSales,
};