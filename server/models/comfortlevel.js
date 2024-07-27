"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ComfortLevel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ComfortLevel.hasMany(models.Room, {
        as: "rooms",
        foreignKey: "comfortLevelId",
      });
    }
  }
  ComfortLevel.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ComfortLevel",
    }
  );
  return ComfortLevel;
};
