import { axiosInstance } from '../../Shared/lib/axiosInstance'

class PriceApi {
    static async getPrice() {
        try {
            const {data : {data : {price}}} = await axiosInstance.get('/price')
            return price
        } catch (error) {
            return error.response.data
        }
    }
    static async updatePrice() {

    }
}

export default PriceApi