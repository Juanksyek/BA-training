'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Usuario: {
        type: Sequelize.INTEGER
      },
      NombreUsuario: {
        type: Sequelize.STRING
      },
      Contraseña: {
        type: Sequelize.STRING
      },
      TipoUsuario: {
        type: Sequelize.STRING
      },
      Estado: {
        type: Sequelize.STRING
      },
      ID_Sede: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'sedes',
            key: 'ID_Sede'
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
    await queryInterface.dropTable('usuarios');
  }
};