const router = require('express').Router();
const salesController = require('../controllers/salesController');

router.get('/', salesController.getAllControllerSales);
router.get('/:id', salesController.getSalesId);

module.exports = router;