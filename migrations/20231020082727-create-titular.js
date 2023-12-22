'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('titulars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Titular: {
        type: Sequelize.INTEGER
      },
      NombreTitular: {
        type: Sequelize.STRING
      },
      ApellidoMTitular: {
        type: Sequelize.STRING
      },
      ApellidoPTitular: {
        type: Sequelize.STRING
      },
      Direccion: {
        type: Sequelize.STRING
      },
      Colonia: {
        type: Sequelize.STRING
      },
      Municipio: {
        type: Sequelize.STRING
      },
      CP: {
        type: Sequelize.STRING
      },
      Telefono: {
        type: Sequelize.STRING
      },
      Celular: {
        type: Sequelize.STRING
      },
      Correo: {
        type: Sequelize.STRING
      },
      ID_Cuenta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cuenta',
          key: 'ID_Cuenta'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('titulars');
  }
};