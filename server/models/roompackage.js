'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoomPackage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RoomPackage.init({
    roomId: DataTypes.INTEGER,
    packageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RoomPackage',
  });
  return RoomPackage;
};