'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detalleClases extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  detalleClases.init({
    ID_DClase: DataTypes.INTEGER,
    ID_Clase: DataTypes.INTEGER,
    ID_Alumno: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detalleClases',
  });
  return detalleClases;
};