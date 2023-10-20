'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class datosTrabajo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  datosTrabajo.init({
    ID_DTrabajo: DataTypes.INTEGER,
    TelefonoTrabajo: DataTypes.STRING,
    DireccionTrabajo: DataTypes.STRING,
    ColoniaTrabajo: DataTypes.STRING,
    MunicipioTrabajo: DataTypes.STRING,
    CPTrabajo: DataTypes.STRING,
    ID_Titular: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'datosTrabajo',
  });
  return datosTrabajo;
};