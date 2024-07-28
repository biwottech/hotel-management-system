"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Department.hasMany(models.Department, {
        as: "sections",
        foreignKey: "parent",
      });

      Department.belongsTo(models.Department, {
        as: "parentDepartment",
        foreignKey: "parent",
      });

      Department.hasMany(models.MenuItem, {
        foreignKey: "departmentId",
        as: "menuItems",
      });
    }
  }
  Department.init(
    {
      parent: DataTypes.INTEGER,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Department",
    }
  );
  return Department;
};
