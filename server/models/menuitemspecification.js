'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MenuItemSpecification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MenuItemSpecification.init({
    menuItemId: DataTypes.INTEGER,
    specificationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MenuItemSpecification',
  });
  return MenuItemSpecification;
};