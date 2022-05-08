const productsModel = require('../models/productsModel');

const getAllServiceProducts = async () => {
  const products = await productsModel.getAllModelProducts();

  return products;
};

const getProductId = async (id) => {
  const productId = await productsModel.getProductId(id);
  if (!productId) return false;
  return productId;
};

const createProduct = async (nam, quantity) => {
  const create = await productsModel.createProduct(nam, quantity);
  return create;
};

module.exports = {
  getAllServiceProducts,
  getProductId,
  createProduct,
};