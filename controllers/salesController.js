const salesServices = require('../services/salesServices');

const getAllControllerSales = (req, res) => {
  const sales = salesServices.getAllServiceSales();
  return res.status(200).json(sales);
};

module.exports = {
  getAllControllerSales,
};