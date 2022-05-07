const router = require('express').Router();
const products = require('./products');
const sales = require('./sales');

router.use('/products', products);
router.use('/sales', sales);

module.exports = router;