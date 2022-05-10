const validateProduct = (req, res, next) => {
  try {
    const productKey = req.body.some(({ productId }) => !productId);
    if (productKey) {
      return res.status(400).json({ message: '"productId" is required' });
    }
    return next();
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const validateQuantity = (req, res, next) => {
  try {
    const missingQuantity = req.body.some(({ quantity }) => !quantity);
    if (missingQuantity) {
      return res.status(400).json({ message: '"quantity" is required' });
    }
    const missingValue = req.body.some(({ quantity }) => quantity <= 0);
    if (missingValue) {
      return res.status(400).json({ message: '"quantity" is required' });
    }
    return next();
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  validateProduct,
  validateQuantity,
};