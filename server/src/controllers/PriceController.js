const formatResponse = require('../utils/formatResponse')
const PriceService = require('../services/Price.services')

class PriceController{
    static async getPriceById(req, res) {
        try {
            const price = await PriceService.getMaxId();
            if (price) {
                res.status(200).json(formatResponse(200, 'Find', price));
            } else {
                const newPrice = await PriceService.create({ price: 1000 });
                res.status(201).json(formatResponse(201, 'Created', newPrice));
            }
        } catch ({ message }) {
            console.error(message);
            res.status(500).json(formatResponse(500, 'Internal server error', null, message));
        }
    }

    static async updatePrice(req, res){
        try {
            const { price : newPrice } = req.body
            let price = await PriceService.getMaxId();
            if(!price){
                price = await PriceService.create({ price: 1000 });
            }
            const updatedPrice = await PriceService.updatePrice(newPrice);
            res.status(200).json(formatResponse(200, 'Updated', updatedPrice));
        } catch ({ message }) {
            console.error(message);
            res.status(500).json(formatResponse(500, 'Internal server error', null, message));
        }
    }
}

module.exports = PriceController