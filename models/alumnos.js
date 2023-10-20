'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class alumnos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  alumnos.init({
    ID_Alumno: DataTypes.INTEGER,
    Nombre: DataTypes.STRING,
    ApellidoP: DataTypes.STRING,
    ApellidoM: DataTypes.STRING,
    Matricula: DataTypes.INTEGER,
    Edad: DataTypes.INTEGER,
    Telefono: DataTypes.INTEGER,
    Ocupación: DataTypes.STRING,
    CorreoElectrónico: DataTypes.STRING,
    ID_Usuario: DataTypes.INTEGER,
    MatriculaCuenta: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'alumnos',
  });
  return alumnos;
};