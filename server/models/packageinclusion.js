'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PackageInclusion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PackageInclusion.init({
    packageId: DataTypes.INTEGER,
    inclusion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PackageInclusion',
  });
  return PackageInclusion;
};