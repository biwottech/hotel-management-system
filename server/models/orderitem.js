"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderItem.belongsTo(models.Order, {
        foreignKey: "orderId",
        as: "order",
      });

      OrderItem.belongsTo(models.MenuItem, {
        foreignKey: "menuItemId",
        as: "menuItem",
      });

      OrderItem.belongsToMany(models.Specification, {
        through: "OrderItemSpecification",
        foreignKey: "orderItemId",
        as: "specifications",
      });
    }
  }
  OrderItem.init(
    {
      orderId: DataTypes.INTEGER,
      menuItemId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "OrderItem",
    }
  );
  return OrderItem;
};
