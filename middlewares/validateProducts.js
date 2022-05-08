const { getModelName, getProductId } = require('../models/productsModel');

const validateProduct = async (req, res, next) => {
  try {
    const { name } = req.body;
    // if (!name) {
    //   console.log('entrou no if !name');
    //   // return res.status(400).json({ message: '"name" is required' });
    //   return next({ status: 400, message: '"name" is required' });
    // }
    if (name.length < 5) {
      return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
    }
    return next();
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

const productAvailable = async (req, res, next) => {
  try {
    const { name } = req.body;
    const test = await getModelName(name);
    if (test[0]) {
      return res.status(409).json({ message: 'Product already exists' });
    }
    return next();
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

const idAvailable = async (req, res, next) => {
  try {
  const { id } = req.params;
  const getId = await getProductId(id);
  if (!getId) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return next();
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

module.exports = {
  validateProduct,
  idAvailable,
  productAvailable,
};