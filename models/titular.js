'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class titular extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  titular.init({
    ID_Titular: DataTypes.INTEGER,
    NombreTitular: DataTypes.STRING,
    ApellidoMTitular: DataTypes.STRING,
    ApellidoPTitular: DataTypes.STRING,
    Direccion: DataTypes.STRING,
    Colonia: DataTypes.STRING,
    Municipio: DataTypes.STRING,
    CP: DataTypes.STRING,
    Telefono: DataTypes.STRING,
    Celular: DataTypes.STRING,
    Correo: DataTypes.STRING,
    ID_Cuenta: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'titular',
  });
  return titular;
};