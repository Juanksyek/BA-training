'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class alumnos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      alumnos.belongsTo(models.usuario, {
        as: 'usuario',
        foreignKey: 'ID_Usuario',
      });
    
      alumnos.belongsTo(models.cuenta, {
        as: 'cuenta',
        foreignKey: 'Matricula',
      });
    
      alumnos.belongsToMany(models.clases, {
        through: 'detalleClases',
        as: 'clases',
        foreignKey: 'ID_Alumno',
      });
    }
  }
  alumnos.init({
    ID_Alumno: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ApellidoP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ApellidoM: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Matricula: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Edad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Telefono: {
      type: DataTypes.INTEGER
    },
    Ocupación: {
      type: DataTypes.STRING
    },
    CorreoElectrónico: {
      type: DataTypes.STRING
    },
    ID_Usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'alumnos',
  });
  return alumnos;
};