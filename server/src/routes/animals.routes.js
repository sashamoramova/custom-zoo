const AnimalController = require('../controllers/Animal.controller')

const router = require('express').Router()

router.get('/',AnimalController.getAnimals)
.get('/:id',AnimalController.getAnimalById)
.post('/',AnimalController.createAnimal)
.put('/:id',AnimalController.updateAnimal)
.delete('/:id',AnimalController.deleteAnimal)


module.exports = router