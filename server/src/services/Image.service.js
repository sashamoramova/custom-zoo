const {Image} = require('../db/models')

class ImageService {
static async addImage(id,img){
return await Image.create({animal_id:id,img1:img})
}
}
module.exports = ImageService