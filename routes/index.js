const router = require('express').Router();
const productsController = require('../controllers/productsController');

router.get('/products', productsController.getAllControllerProducts);
router.get('/products/:id', productsController.getProductId);

module.exports = router;