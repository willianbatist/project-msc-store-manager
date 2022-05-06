const productsModel = require('../models/productsModel');

const getAllServiceProducts = async () => {
  const products = await productsModel.getAllModelProducts();

  return products;
};

module.exports = {
  getAllServiceProducts,
};