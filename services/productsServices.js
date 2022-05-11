const productsModel = require('../models/productsModel');

const getAllServiceProducts = async () => {
  const products = await productsModel.getAllModelProducts();

  return products;
};

const getProductId = async (id) => {
  const [productId] = await productsModel.getProductId(id);

  if (!productId) return false;
  return productId;
};

const createProduct = async (name, quantity) => {
  const id = await productsModel.createProduct(name, quantity);
  return { id };
};
const updateProducts = async (name, quantity, id) => {
  const update = await productsModel.updateProducts(name, quantity, id);
  return update;
};

const deleteProduct = async (id) => {
  const delProduct = await productsModel.deleteProduct(id);
  return delProduct;
};

module.exports = {
  getAllServiceProducts,
  getProductId,
  createProduct,
  updateProducts,
  deleteProduct,
};