const router = require('express').Router();
const validateProducts = require('../middlewares/validateProducts');
const productsController = require('../controllers/productsController');

router.get('/', productsController.getAllControllerProducts);
router.get('/:id', productsController.getProductId);
router.post('/', validateProducts.validateProduct);

module.exports = router;
