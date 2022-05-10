const validateProduct = (req, res, next) => {
  try {
    const productKey = req.body.some(({ productId }) => !productId);
    if (productKey) {
      return res.status(400).json({ message: '"productId" is required' });
    }
    // const validate = (r) => {
      // if (r.productId === undefined) {
      //   return res.status(400).json({ message: '"productId" is required' });
      // }
    // };
    // req.body.map((r) => validate(r));
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
    // const validate = (r) => {
    //   if (r.quantity === undefined) {
    //     return res.status(400).json({ message: '"quantity" is required' });
    //   }
    //   if (r.quantity <= 0) {
    //     return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    //   }
    // };
    // req.body.map((r) => validate(r));
    return next();
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  validateProduct,
  validateQuantity,
};