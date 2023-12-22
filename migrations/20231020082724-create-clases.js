'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Clase: {
        type: Sequelize.INTEGER
      },
      Nivel: {
        type: Sequelize.STRING
      },
      Fecha: {
        type: Sequelize.DATE
      },
      Hora: {
        type: Sequelize.TIME
      },
      ID_Profesor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'profesor',
            key: 'ID_Profesor'
        },
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
    await queryInterface.dropTable('clases');
  }
};