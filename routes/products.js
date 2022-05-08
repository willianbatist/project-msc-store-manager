const router = require('express').Router();
const validateProducts = require('../middlewares/validateProducts');
const productsController = require('../controllers/productsController');

router.get('/', productsController.getAllControllerProducts);
router.get('/:id', productsController.getProductId);

router.post('/', validateProducts.validateProduct,
validateProducts.productAvailable, productsController.createProduct);

router.put('/:id', validateProducts.idAvailable, productsController.updateProducts);

router.delete('/:id', productsController.deleteProduct);

module.exports = router;
