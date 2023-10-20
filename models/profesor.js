'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profesor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      profesor.belongsTo(models.usuario, {
        as: 'usuario',
        foreignKey: 'ID_Usuario',
      });
    
      profesor.hasMany(models.clases, {
        as: 'clases',
        foreignKey: 'ID_Profesor',
      });
    }
  }
  profesor.init({
    ID_Profesor: {
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
    Turno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ID_Usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'profesor',
  });
  return profesor;
};