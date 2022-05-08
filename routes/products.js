const router = require('express').Router();
const validateProducts = require('../middlewares/validateProducts');
const productsController = require('../controllers/productsController');

router.get('/', productsController.getAllControllerProducts);
router.get('/:id', productsController.getProductId);

router.post('/', validateProducts.validateProduct, productsController.createProduct);

router.put('/:id', validateProducts.idAvailable, productsController.updateProducts);

module.exports = router;
