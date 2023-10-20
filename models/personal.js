'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class personal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  personal.init({
    ID_Personal: DataTypes.INTEGER,
    Nombre: DataTypes.STRING,
    Teléfono: DataTypes.STRING,
    ID_Usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'personal',
  });
  return personal;
};