'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clases extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      clases.belongsTo(models.profesor, {
        as: 'profesor',
        foreignKey: 'ID_Profesor',
      });
    
      clases.belongsTo(models.sedes, {
        as: 'sede',
        foreignKey: 'ID_Sede',
      });
    
      clases.belongsToMany(models.alumnos, {
        through: 'DetalleClases',
        as: 'alumnos',
        foreignKey: 'ID_Clase',
      });
    }
  }
  clases.init({
    ID_Clase: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Nivel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Hora: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    ID_Profesor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ID_Sede: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'clases',
  });
  return clases;
};