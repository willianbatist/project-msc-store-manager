const productsServices = require('../services/productsServices');

const getAllControllerProducts = async (_req, res) => {
  const products = await productsServices.getAllServiceProducts();

  return res.status(200).json(products);
};

const getProductId = async (req, res) => {
  const { id } = req.params;
  const productId = await productsServices.getProductId(id);
  return res.status(200).json(productId);
};

module.exports = {
  getAllControllerProducts,
  getProductId,
};