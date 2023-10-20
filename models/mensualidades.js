'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mensualidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mensualidades.init({
    ID_Mensualidad: DataTypes.INTEGER,
    ID_Cuenta: DataTypes.INTEGER,
    Fecha: DataTypes.DATE,
    NumeroPago: DataTypes.INTEGER,
    Mes: DataTypes.STRING,
    Monto: DataTypes.FLOAT,
    Saldo: DataTypes.FLOAT,
    FechaPago: DataTypes.DATE,
    Recibo: DataTypes.STRING,
    Ejecutivo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mensualidades',
  });
  return mensualidades;
};