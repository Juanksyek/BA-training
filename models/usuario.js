'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      usuario.belongsTo(models.sedes, {
        as: 'sedes',
        foreignKey: 'ID_Sede',
      });
    
      usuario.hasMany(models.alumnos, {
        as: 'alumnos',
        foreignKey: 'ID_Usuario',
      });
    
      usuario.hasOne(models.personal, {
        as: 'personal',
        foreignKey: 'ID_Usuario',
      });
    
      usuario.hasOne(models.profesor, {
        as: 'profesor',
        foreignKey: 'ID_Usuario',
      });
    }
  }
  usuario.init({
    ID_Usuario: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    NombreUsuario: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    Contraseña: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TipoUsuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ID_Sede: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};