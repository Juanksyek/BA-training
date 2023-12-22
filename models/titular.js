'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class titular extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      titular.belongsTo(models.cuenta, {
        as: 'cuenta',
        foreignKey: 'ID_Cuenta',
      });
    
      titular.hasOne(models.datostrabajo, {
        as: 'datosTrabajo',
        foreignKey: 'ID_Titular',
      });
    }
  }
  titular.init({
    ID_Titular: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    NombreTitular: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ApellidoMTitular: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ApellidoPTitular: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Direccion: {
      type: DataTypes.STRING,
    },
    Colonia: {
      type: DataTypes.STRING,
    },
    Municipio: {
      type: DataTypes.STRING,
    },
    CP: {
      type: DataTypes.STRING,
    },
    Telefono: {
      type: DataTypes.STRING,
    },
    Celular: {
      type: DataTypes.STRING,
    },
    Correo: {
      type: DataTypes.STRING,
    },
    ID_Cuenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'titular',
  });
  return titular;
};