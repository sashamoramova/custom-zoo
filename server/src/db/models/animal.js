"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    static associate({ Image }) {
      this.hasMany(Image, {
        foreignKey: "animal_id",
      });
    }
  }
  Animal.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Animal",
    }
  );
  return Animal;
};
