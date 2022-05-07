const salesModel = require('../models/salesModel');
const { erroHandler } = require('../middlewares/erroMiddleware');

const getAllServiceSales = async () => {
  const sales = await salesModel.getAllSalesModel();
  return sales;
};

const getSalesId = async (id) => {
  const salesId = await salesModel.getSalesId(id);
  if (salesId.length === 0) return erroHandler(404, 'Sale not found');
  return salesId;
};

module.exports = {
  getAllServiceSales,
  getSalesId,
};