const router = require('express').Router();
const productsController = require('../controllers/productsController');
const salesController = require('../controllers/salesController');

router.get('/products', productsController.getAllControllerProducts);
router.get('/products/:id', productsController.getProductId);

router.get('/sales', salesController.getAllControllerSales);

module.exports = router;