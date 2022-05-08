const productsServices = require('../services/productsServices');

const getAllControllerProducts = async (_req, res) => {
  const products = await productsServices.getAllServiceProducts();

  return res.status(200).json(products);
};

const getProductId = async (req, res) => {
  const { id } = req.params;
  const productId = await productsServices.getProductId(id);
  if (!productId) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(productId);
};

const createProduct = async (req, res) => {
  const products = await productsServices.getAllServiceProducts();
  const { name, quantity } = req.body;
  await productsServices.createProduct(name, quantity);
  return res.status(201).json({ id: products.length + 1, name, quantity });
};

const updateProducts = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  await productsServices.updateProducts(name, quantity, id);
  return res.status(200).json({ id, name, quantity });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await productsServices.deleteProduct(id);
  return res.status(204).end();
};

module.exports = {
  getAllControllerProducts,
  getProductId,
  createProduct,
  updateProducts,
  deleteProduct,
};