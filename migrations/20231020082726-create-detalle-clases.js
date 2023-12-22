'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detalleClases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_DClase: {
        type: Sequelize.INTEGER
      },
      ID_Clase: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'clases',
            key: 'ID_Clase'
        },
      },
      ID_Alumno: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'alumnos',
            key: 'ID_Alumno'
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
    await queryInterface.dropTable('detalleClases');
  }
};