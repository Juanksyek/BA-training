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
      mensualidades.belongsTo(models.cuenta, {
        as: 'cuenta',
        foreignKey: 'ID_Cuenta',
      });
    }
  }
  mensualidades.init({
    ID_Mensualidad: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    ID_Cuenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Fecha: {
      type: DataTypes.DATE,
    },
    NumeroPago: {
      type: DataTypes.INTEGER,
    },
    Mes: {
      type: DataTypes.STRING,
    },
    Monto: {
      type: DataTypes.FLOAT,
    },
    Saldo: {
      type: DataTypes.FLOAT,
    },
    FechaPago: {
      type: DataTypes.DATE,
    },
    Recibo: {
      type: DataTypes.STRING,
    },
    Ejecutivo: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'mensualidades',
  });
  return mensualidades;
};