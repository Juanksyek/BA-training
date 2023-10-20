'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class personal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      personal.belongsTo(models.usuario, {
        as: 'usuario',
        foreignKey: 'ID_Usuario',
      });
    }
  }
  personal.init({
    ID_Personal: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Teléfono: {
      type: DataTypes.STRING,
    },
    ID_Usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'personal',
  });
  return personal;
};