'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detalleClases extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      detalleClases.belongsTo(models.clases, {
        as: 'clases',
        foreignKey: 'ID_Clase',
      });
    
      detalleClases.belongsTo(models.alumnos, {
        as: 'alumnos',
        foreignKey: 'ID_Alumno',
      });
    }
  }
  detalleClases.init({
    ID_DClase: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    ID_Clase: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ID_Alumno: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'detalleClases',
  });
  return detalleClases;
};