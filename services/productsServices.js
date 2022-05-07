const productsModel = require('../models/productsModel');
// const { erroHandler } = require('../middlewares/erroMiddleware');

const getAllServiceProducts = async () => {
  const products = await productsModel.getAllModelProducts();

  return products;
};

const getProductId = async (id) => {
  const productId = await productsModel.getProductId(id);
  if (!productId) return false;
  return productId;
};

module.exports = {
  getAllServiceProducts,
  getProductId,
};