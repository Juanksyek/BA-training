'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cuenta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here 
    }
  }
  cuenta.init({
    ID_Cuenta: DataTypes.INTEGER,
    NumeroCuenta: DataTypes.INTEGER,
    Matricula: DataTypes.INTEGER,
    FechaMatricula: DataTypes.DATE,
    Ciudad: DataTypes.STRING,
    Ejecutivo: DataTypes.STRING,
    Precio: DataTypes.FLOAT,
    PagoInicial: DataTypes.FLOAT,
    SaldoInicial: DataTypes.FLOAT,
    NumeroPagos: DataTypes.INTEGER,
    MontoMensualidad: DataTypes.FLOAT,
    PrimerVencimiento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'cuenta',
  });
  return cuenta;
};