const router = require('express').Router();
const validateProducts = require('../middlewares/validateProducts');
const productsController = require('../controllers/productsController');

router.get('/', productsController.getAllControllerProducts);
router.get('/:id', productsController.getProductId);

router.post('/', 
  validateProducts.validateName,
  validateProducts.validateQuantity,
  validateProducts.productAvailable,
  productsController.createProduct);

router.put('/:id',
  validateProducts.validateName,
  validateProducts.validateQuantity,
  validateProducts.idAvailable,
  productsController.updateProducts);

router.delete('/:id', validateProducts.idAvailable, productsController.deleteProduct);

module.exports = router;
