const Joi = require('joi');

const PRODUCT = Joi.object({
  name: Joi.string().min(5).max(30).required(),
  quantity: Joi.number().min(1).required(),
});

const validateProduct = (req, res, next) => {
  try {
    const { name } = req.body;
    const { error } = PRODUCT.validate({ name });
  if (error) {
    return res.status(400).json({ message: '"name" is required' });
  }
  return next();
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

module.exports = {
  validateProduct,
};