"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ServiceCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ServiceCategory.hasMany(models.Service, {
        foreignKey: "serviceCategoryId",
        as: "services",
      });
    }
  }
  ServiceCategory.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ServiceCategory",
    }
  );
  return ServiceCategory;
};
