"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MenuItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MenuItem.belongsTo(models.Department, {
        foreignKey: "departmentId",
        as: "department",
      });

      MenuItem.hasMany(models.OrderItem, {
        foreignKey: "menuItemId",
        as: "orderItems",
      });
      MenuItem.belongsToMany(models.Specification, {
        through: "MenuItemSpecification",
        foreignKey: "menuItemId",
        as: "specifications",
      });
    }
  }
  MenuItem.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.FLOAT,
      departmentId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "MenuItem",
    }
  );
  return MenuItem;
};
