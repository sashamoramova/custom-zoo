const { where } = require("sequelize");
const { Animal } = require("../db/models");
const { Image } = require("../db/models/");

class AnimalService {
  static async get() {
    return await Animal.findAll({ include: [{ model: Image }] });
  }
  static async getById(id) {
    return await Animal.findByPk(id,{ include: [{ model: Image }] });
  }
  static async create(data) {
    return await Animal.create(data);
    // return await newAnimal
  }
  static async update(id, data) {
    const updatedAnimal = await this.getById(id);
    // const updateImage = await Image.findByPk({where:{animal_id:id}})
    if (updatedAnimal) {
      (updatedAnimal.name = data.name),
        (updatedAnimal.type = data.type),
        (updatedAnimal.description = data.description),
        await updatedAnimal.save();
    }
    // if(updateImage){
    //   updateImage.
    // }
    return updatedAnimal;
  }
  static async delete(id){
    const deletedAnimal = await this.getById(id)
    
    if(deletedAnimal){
      await deletedAnimal.destroy()
    }
    return await deletedAnimal 
  }
}
module.exports = AnimalService;
