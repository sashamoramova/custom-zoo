
const router = require('express').Router()
const priceRoutes = require('./api.price.routes')
const animalsRouter = require('./animals.routes')
const imagesRouter = require('./images.routes')
const authRoutes = require('./auth.routes'); 
const formatResponse = require('../utils/formatResponse');
router.use('/auth', authRoutes);
router.use('/animals',animalsRouter)
router.use('/images',imagesRouter)
router.use('/price', priceRoutes)

router.use('*', (req, res) => {
  res
    .status(404)
    .json(formatResponse(404, 'Not found', null, 'Resource not found'));
});



module.exports = router;
