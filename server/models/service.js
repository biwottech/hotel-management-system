"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Service.belongsToMany(models.Package, {
        through: "PackageInclusion",
        foreignKey: "serviceId",
        as: "packages",
      });

      Service.belongsTo(models.ServiceCategory, {
        foreignKey: "serviceCategoryId",
        as: "serviceCategory",
      });
    }
  }
  Service.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      serviceCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "ServiceCategories",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Service",
    }
  );
  return Service;
};
