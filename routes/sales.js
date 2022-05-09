const router = require('express').Router();
const salesController = require('../controllers/salesController');
const validateSales = require('../middlewares/validateSales');

router.get('/', salesController.getAllControllerSales);
router.get('/:id', salesController.getSalesId);

router.post('/', validateSales.validateProduct,
validateSales.validateQuantity,
salesController.insertSalesProduct);

router.put('/:id', validateSales.validateProduct,
validateSales.validateQuantity,
salesController.updateSales);

module.exports = router;