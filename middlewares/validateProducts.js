// // Middleware
// const Joi = require('joi');
const erroMiddleware = require('./erroMiddleware');

// const ID = Joi.object({
//   id: Joi.required(),
// });

const validateProductNotFound = (product) => {
  if (product.length === 0) return erroMiddleware.erroHandler(404, 'Product not found');
  return false;
};

module.exports = {
  validateProductNotFound,
};