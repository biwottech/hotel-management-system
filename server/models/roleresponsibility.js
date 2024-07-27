"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RoleResponsibility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RoleResponsibility.belongsTo(models.Role, {
        foreignKey: "roleId",
        as: "role",
      });
    }
  }
  RoleResponsibility.init(
    {
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Roles",
          key: "id",
        },
      },
      responsibility: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "RoleResponsibility",
    }
  );
  return RoleResponsibility;
};
