const salesServices = require('../services/salesServices');

const getAllControllerSales = async (_req, res) => {
  const sales = await salesServices.getAllServiceSales();
  return res.status(200).json(sales);
};

const getSalesId = async (req, res) => {
  const { id } = req.params;
  const salesId = await salesServices.getSalesId(id);
  if (!salesId) return res.status(400).json({ message: 'Sale not found' });
  return res.status(200).json(salesId);
};

module.exports = {
  getAllControllerSales,
  getSalesId,
};