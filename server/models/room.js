"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Room.belongsTo(models.RoomType, {
        as: "roomTypes",
        foreignKey: "roomTypeId",
      });

      Room.belongsTo(models.ComfortLevel, {
        as: "comfortLevels",
        foreignKey: "comfortLevelId",
      });
    }
  }
  Room.init(
    {
      number: DataTypes.STRING,
      roomTypeId: DataTypes.INTEGER,
      comfortLevelId: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Room",
    }
  );
  return Room;
};
