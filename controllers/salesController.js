const salesServices = require('../services/salesServices');

const getAllControllerSales = async (_req, res) => {
  const sales = await salesServices.getAllServiceSales();
  return res.status(200).json(sales);
};

const getSalesId = async (req, res) => {
  const { id } = req.params;
  const salesId = await salesServices.getSalesId(id);
  if (!salesId) return res.status(404).json({ message: 'Sale not found' });
  return res.status(200).json(salesId);
};

const insertSalesProduct = async (req, res) => {
  const { id } = await salesServices.insertSales();
  req.body.forEach(async ({ productId, quantity }) => { 
    await salesServices.insertSalesProduct(id, productId, quantity);
  });
  const obj = {
    id,
    itemsSold: req.body,
  };
  return res.status(201).json(obj);
};

module.exports = {
  getAllControllerSales,
  getSalesId,
  insertSalesProduct,
};