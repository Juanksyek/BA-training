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
    ID_Cuenta: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    NumeroCuenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    Matricula: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    FechaMatricula: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Ciudad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Ejecutivo: {
      type: DataTypes.STRING
    },
    Precio: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PagoInicial: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    SaldoInicial: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    NumeroPagos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MontoMensualidad: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PrimerVencimiento: {
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'cuenta',
  });
  return cuenta;
};