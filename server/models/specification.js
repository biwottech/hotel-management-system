"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Specification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Specification.belongsToMany(models.MenuItem, {
        through: "MenuItemSpecification",
        foreignKey: "specificationId",
        as: "menuItems",
      });

      Specification.belongsToMany(models.OrderItem, {
        through: "OrderItemSpecification",
        foreignKey: "specificationId",
        as: "orderItems",
      });
    }
  }
  Specification.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Specification",
    }
  );
  return Specification;
};
