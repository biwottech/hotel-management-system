"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PackageInclusion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PackageInclusion.belongsTo(models.Package, {
        foreignKey: "packageId",
        as: "package",
      });

      PackageInclusion.belongsTo(models.Service, {
        foreignKey: "serviceId",
        as: "service",
      });
    }
  }
  PackageInclusion.init(
    {
      packageId: DataTypes.INTEGER,
      serviceId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PackageInclusion",
    }
  );
  return PackageInclusion;
};
