"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Employee.belongsTo(models.Department, {
        foreignKey: "departmentId",
        as: "department",
      });

      Employee.belongsTo(models.Department, {
        foreignKey: "sectionId",
        as: "section",
      });

      Employee.belongsTo(models.Role, {
        foreignKey: "roleId",
        as: "role",
      });

      Employee.hasOne(models.User, { foreignKey: "employeeId", as: "user" });
    }
  }

  Employee.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      departmentId: DataTypes.INTEGER,
      sectionId: DataTypes.INTEGER,
      roleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Employee",
    }
  );
  return Employee;
};
