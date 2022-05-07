const salesServices = require('../services/salesServices');

const getAllControllerSales = async (req, res) => {
  const sales = await salesServices.getAllServiceSales();
  return res.status(200).json(sales);
};

module.exports = {
  getAllControllerSales,
};