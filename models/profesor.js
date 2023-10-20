'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profesor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  profesor.init({
    ID_Profesor: DataTypes.INTEGER,
    Nombre: DataTypes.STRING,
    Teléfono: DataTypes.INTEGER,
    Turno: DataTypes.STRING,
    ID_Usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'profesor',
  });
  return profesor;
};