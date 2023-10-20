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
      datosTrabajo.belongsTo(models.Titular, {
        as: 'titular',
        foreignKey: 'ID_Titular',
      });
    }
  }
  datosTrabajo.init({
    ID_DTrabajo: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    TelefonoTrabajo: {
      type: DataTypes.STRING,
    },
    DireccionTrabajo: {
      type: DataTypes.STRING,
    },
    ColoniaTrabajo: {
      type: DataTypes.STRING,
    },
    MunicipioTrabajo: {
      type: DataTypes.STRING,
    },
    CPTrabajo: {
      type: DataTypes.STRING,
    },
    ID_Titular: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'datosTrabajo',
  });
  return datosTrabajo;
};