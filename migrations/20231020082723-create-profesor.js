'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('profesor', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Profesor: {
        type: Sequelize.INTEGER
      },
      Nombre: {
        type: Sequelize.STRING
      },
      Teléfono: {
        type: Sequelize.INTEGER
      },
      Turno: {
        type: Sequelize.STRING
      },
      ID_Usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'usuario',
            key: 'ID_Usuario'
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
    await queryInterface.dropTable('profesor');
  }
};