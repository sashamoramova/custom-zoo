const router = require('express').Router()
const ImageController = require('../controllers/Image.controller');
const multerMiddleware = require('../middleware/multer')

router.post(`/upload/:id`,multerMiddleware.single('animalImg'),ImageController.uploadImg);

  //  const animal = Anima
  
//   try {
    

//     console.log(req.file);
    
    
//     if(req.file){
//       // req.file.path 
//       res.json(req.file)
//     }
//   } catch (error) {
//     console.log(error);
    
//   }
// })

module.exports = router