const router = require ('express').Router();
const PriceController = require ('../controllers/PriceController')

router
    .get('/', PriceController.getPriceById)
    .post('/', PriceController.updatePrice)

module.exports = router