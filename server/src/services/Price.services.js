const {Price} = require('../db/models')

class PriceService {

    static async getMaxId() {
        const maxPrice = await Price.findOne({order: [['id', 'DESC']]});
        return maxPrice;
    }

    static async create(data) {
        const newPrice = await Price.create(data);
        return newPrice;
    }

    static async updatePrice(newPrice) {
        const price = await this.getMaxId();
        if (price) {
            price.price = newPrice;
            await price.save();
            return price;
        }
        return null;
    }

}

module.exports = PriceService