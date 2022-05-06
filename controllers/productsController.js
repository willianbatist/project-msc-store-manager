const productsServices = require('../services/productsServices');

const getAllControllerProducts = async (_req, res) => {
  const products = await productsServices.getAllServiceProducts();

  return res.status(200).json(products);
};

module.exports = {
  getAllControllerProducts,
};