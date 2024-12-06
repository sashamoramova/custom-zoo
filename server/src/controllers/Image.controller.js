const ImageService = require("../services/Image.service");
const formatResponse = require("../utils/formatResponse");

class ImageController {
  static async uploadImg(req, res) {
    try {
      const { id } = req.params;
      const { filename } = req.file;
      console.log(id, filename, 44);
      const uploadingImages = await ImageService.addImage(id, filename);
      if (uploadingImages) {
        res
          .status(201)
          .json(formatResponse(201, "Success add image", uploadingImages));
      }
    } catch ({ message }) {
      return res
        .status(500)
        .json(formatResponse(500, "Server error", null, message));
    }
  }
}
module.exports = ImageController;
